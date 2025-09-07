import SmartLink from '@/components/SmartLink'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'

/**
 * 菜单链接
 * @param {*} param0
 * @returns
 */
export const MenuItem = ({ link }) => {
  const hasSubMenu = link?.subMenus?.length > 0
  const router = useRouter()

  // 管理子菜单的展开状态
  const [isSubMenuOpen, setIsSubMenuOpen] = useState(false)
  const menuRef = useRef(null)

  const toggleSubMenu = (e) => {
    e.stopPropagation() // 阻止事件冒泡
    setIsSubMenuOpen(prev => !prev)
  }

  // 关闭子菜单
  const closeSubMenu = () => {
    setIsSubMenuOpen(false)
  }

  // 点击子菜单外部区域时关闭子菜单
  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      closeSubMenu()
    }
  }

  // 添加全局点击事件监听器
  useEffect(() => {
    if (isSubMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
  }, [isSubMenuOpen])

  // 在路由变化时关闭子菜单
  useEffect(() => {
    closeSubMenu()
  }, [router])

  // 处理子菜单项点击
  const handleSubMenuClick = () => {
    closeSubMenu()
  }

  return (
    <li className="menu-item relative" ref={menuRef}>
      {!hasSubMenu ? (
        <SmartLink
          href={link?.href}
          target={link?.target}
          className={`ud-menu-scroll mx-8 flex py-2 text-sm font-medium text-dark group-hover:text-primary dark:text-white lg:mr-0 lg:inline-flex lg:px-0 lg:py-6 ${
            router.route === '/'
              ? 'lg:text-white lg:group-hover:text-white'
              : ''
          } lg:group-hover:opacity-70`}
          onClick={closeSubMenu}
        >
          {link?.icon && <i className={link.icon + ' mr-2 my-auto'} />}
          {link?.name}
        </SmartLink>
      ) : (
        <>
          <button
            onClick={toggleSubMenu}
            className={`cursor-pointer relative px-8 flex items-center justify-between py-2 text-sm font-medium text-dark group-hover:text-primary dark:text-white lg:ml-8 lg:mr-0 lg:inline-flex lg:py-6 lg:pl-0 lg:pr-4 ${
              router.route === '/'
                ? 'lg:text-white lg:group-hover:text-white'
                : ''
            } lg:group-hover:opacity-70 xl:ml-10`}
            aria-expanded={isSubMenuOpen}
            aria-label={isSubMenuOpen ? '关闭子菜单' : '打开子菜单'}
          >
            <span>
              {link?.icon && <i className={link.icon + ' mr-2 my-auto'} />}
              {link?.name}
            </span>
            <svg
              className={`ml-2 fill-current transition-transform duration-200 ${isSubMenuOpen ? 'rotate-180' : ''}`}
              width='16'
              height='20'
              viewBox='0 0 16 20'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'>
              <path d='M7.99999 14.9C7.84999 14.9 7.72499 14.85 7.59999 14.75L1.84999 9.10005C1.62499 8.87505 1.62499 8.52505 1.84999 8.30005C2.07499 8.07505 2.42499 8.07505 2.64999 8.30005L7.99999 13.525L13.35 8.25005C13.575 8.02505 13.925 8.02505 14.15 8.25005C14.375 8.47505 14.375 8.82505 14.15 9.05005L8.39999 14.7C8.27499 14.825 8.14999 14.9 7.99999 14.9Z' />
            </svg>
          </button>

          <div
            className={`submenu absolute left-0 top-full mt-3 w-[280px] rounded-xl bg-gray-800/90 backdrop-blur-xl border border-gray-600/30 shadow-2xl overflow-hidden z-50 transition-all duration-300 ease-out ${
              isSubMenuOpen ? 'opacity-100 translate-y-0 visible' : 'opacity-0 -translate-y-2 invisible'
            } dark:bg-gray-900/95 dark:border-gray-700/40 dark:shadow-black/30`}>
            <div className="p-2">
              {link.subMenus.map((sLink, index) => (
                <div key={index}>
                  <SmartLink
                    href={sLink.href}
                    target={link?.target}
                    className='group flex items-center rounded-lg px-4 py-3 text-sm font-medium text-gray-200 hover:text-white hover:bg-white/10 transition-all duration-200'
                    onClick={handleSubMenuClick}
                  >
                    {sLink.icon && (
                      <i className={`${sLink.icon} mr-3 text-base transition-transform duration-200 group-hover:scale-110 ${index === 0 ? 'text-blue-400' : 'text-gray-400'}`} />
                    )}
                    <span className='whitespace-nowrap flex-1'>
                      {sLink.title}
                    </span>
                    <div className="ml-auto opacity-0 transition-all duration-200 group-hover:opacity-100 group-hover:translate-x-1">
                      <svg className="w-4 h-4 text-gray-500 group-hover:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </SmartLink>
                  {index < link.subMenus.length - 1 && (
                    <div className="h-px bg-gray-700/30 mx-4 my-1"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </>
      )}
    </li>
  )
}
