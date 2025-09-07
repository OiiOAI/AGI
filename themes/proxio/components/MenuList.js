import BLOG from '@/blog.config'
import { siteConfig } from '@/lib/config'
import { useGlobal } from '@/lib/global'
import { useRouter } from 'next/router'
import { useEffect, useRef, useState } from 'react'
import { MenuItem } from './MenuItem'

/**
 * 响应式 折叠菜单
 */
export const MenuList = props => {
  const { customNav, customMenu } = props
  const { locale } = useGlobal()

  const [showMenu, setShowMenu] = useState(false) // 控制菜单展开/收起状态
  const menuRef = useRef(null)
  const router = useRouter()

  let links = [
    {
      icon: 'fas fa-archive',
      name: locale.NAV.ARCHIVE,
      href: '/archive',
      show: siteConfig('HEO_MENU_ARCHIVE')
    },
    {
      icon: 'fas fa-search',
      name: locale.NAV.SEARCH,
      href: '/search',
      show: siteConfig('HEO_MENU_SEARCH')
    },
    {
      icon: 'fas fa-folder',
      name: locale.COMMON.CATEGORY,
      href: '/category',
      show: siteConfig('HEO_MENU_CATEGORY')
    },
    {
      icon: 'fas fa-tag',
      name: locale.COMMON.TAGS,
      href: '/tag',
      show: siteConfig('HEO_MENU_TAG')
    }
  ]

  if (customNav) {
    links = customNav.concat(links)
  }

  // 如果 开启自定义菜单，则覆盖Page生成的菜单
  if (siteConfig('CUSTOM_MENU', BLOG.CUSTOM_MENU)) {
    links = customMenu
  }

  const toggleMenu = () => {
    setShowMenu(prev => !prev) // 切换菜单状态
  }

  const closeMenu = () => {
    setShowMenu(false)
  }

  // 点击菜单外部区域时关闭菜单
  const handleClickOutside = (e) => {
    if (menuRef.current && !menuRef.current.contains(e.target)) {
      closeMenu()
    }
  }

  // 添加全局点击事件监听器
  useEffect(() => {
    if (showMenu) {
      document.addEventListener('mousedown', handleClickOutside)
      return () => {
        document.removeEventListener('mousedown', handleClickOutside)
      }
    }
  }, [showMenu])

  // 在路由变化时关闭菜单
  useEffect(() => {
    closeMenu()
  }, [router])

  // 处理菜单项点击
  const handleMenuItemClick = () => {
    closeMenu()
  }

  if (!links || links.length === 0) {
    return null
  }

  return (
    <>
      {/* 移动端菜单切换按钮 */}
      <button
        onClick={toggleMenu}
        className="navbarOpen absolute right-4 top-1/2 z-50 flex h-10 w-10 -translate-y-1/2 flex-col items-center justify-center space-y-1.5 rounded-full bg-primary lg:hidden"
        aria-label={showMenu ? '关闭菜单' : '打开菜单'}
        aria-expanded={showMenu}
      >
        <span
          className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
            showMenu ? 'translate-y-1.5 rotate-45' : ''
          }`}></span>
        <span
          className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
            showMenu ? 'opacity-0' : ''
          }`}></span>
        <span
          className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
            showMenu ? '-translate-y-1.5 -rotate-45' : ''
          }`}></span>
      </button>

      {/* 导航菜单 */}
      <div
          ref={menuRef}
          className={`menu-container transition-all duration-300 ease-in-out ${
            showMenu
              ? 'opacity-100 visible top-full max-h-screen'
              : 'invisible top-[120%] opacity-0 max-h-0'
          } absolute right-4 top-full z-40 w-[250px] rounded-md bg-white p-5 shadow-lg dark:bg-dark lg:visible lg:static lg:max-h-full lg:w-full lg:bg-transparent lg:p-0 lg:opacity-100 lg:shadow-none lg:dark:bg-transparent`}
        >
        <nav>
          <ul className="block lg:flex lg:space-x-12">
            {links.map((link, index) => (
              <MenuItem key={index} link={link} />
            ))}
          </ul>
        </nav>
      </div>
    </>
  )
}
