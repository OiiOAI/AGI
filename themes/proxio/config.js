/**
 * 另一个落地页主题
 */
const CONFIG = {
  PROXIO_WELCOME_COVER_ENABLE: false, //是否显示页面进入的欢迎文字
  PROXIO_WELCOME_TEXT: '来都来了，交个朋友', // 欢迎文字，留空则不启用

  // 英雄区块导航
  PROXIO_HERO_ENABLE: true, // 开启英雄区
  PROXIO_HERO_TITLE_1: 'AGI盗火者：路漫漫其修远兮，吾将上下而求索。', // 英雄区文字
  PROXIO_HERO_TITLE_2: '将最前沿的 AGI 技术科普与行业落地案例带到你的指尖，推动智能在每个场景里“思考&行动”。', // 英雄区文字
  // 英雄区两个按钮，如果TEXT留空则隐藏按钮
  PROXIO_HERO_BUTTON_1_TEXT: '查看最新案例', // 英雄区按钮
  PROXIO_HERO_BUTTON_1_URL:
    'https://oomol.com/', // 英雄区按钮
  PROXIO_HERO_BUTTON_2_TEXT: '在Github上查看', // 英雄区按钮
  PROXIO_HERO_BUTTON_2_URL: 'https://github.com/OiiOAI?tab=repositories', // 英雄区按钮
  PROXIO_HERO_BUTTON_2_ICON: '', // 英雄区按钮2的图标，不需要则留空

  // 英雄区配图，如需隐藏，改为空值即可 ''
  PROXIO_HERO_BANNER_IMAGE: 'https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAL5Hmi3Jqq65R_UD-VjWTgcMtWATdckAAK8GgACamO4Vcr2GK_hjCMZNgQ.png', // hero区背景，默认是获取Notion背景，如需另外配置图片可以填写在这里
  PROXIO_HERO_BANNER_IFRAME_URL: '', // hero背景区内嵌背景网页 ，可以配置一个网页地址，例如动画网页https://my.spline.design/untitled-b0c6e886227646c34afc82cdc6de4ca2/

  // 文章区块
  PROXIO_BLOG_ENABLE: true, // 首页博文区块开关
  PROXIO_BLOG_TITLE: '我的作品',
  PROXIO_BLOG_COUNT: 4, // 首页博文区块展示前4篇文章
  PROXIO_BLOG_TEXT_1: '好玩有用的Tools',

  // 区块默认内容显示文章的summary文本，但也支持用自定义图片或logo德国替换掉占位显示内容
  PROXIO_BLOG_PLACEHOLDER_IMG_URL_1: 'https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAL0-Wi2q_lPTEfURJM9gw-Hl9ltJzP-AAJhFQACamO4VdU0AWqPhZlTNgQ.png', // 填写要替换成的图片，支持图床或直接上传到项目中，示例  /images/feature-1.webp
  PROXIO_BLOG_PLACEHOLDER_IMG_URL_2: 'https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAL0-2i2q_kd7B0fI75CJZP5XGs5m8jIAAJjFQACamO4VU8JMkDGGQRCNgQ.png',
  PROXIO_BLOG_PLACEHOLDER_IMG_URL_3: 'https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAL0-Gi2q_lyHV_bi00vkjwntPmDfQQtAAJgFQACamO4VRQRav6Bpai_NgQ.png',
  PROXIO_BLOG_PLACEHOLDER_IMG_URL_4: 'https://img.remit.ee/api/file/BQACAgUAAyEGAASHRsPbAAL0-mi2q_mBcBhYPi94gSVbJLGr7NFTAAJiFQACamO4VQltistBFuAeNgQ.png',

  PROXIO_ANNOUNCEMENT_ENABLE: false, //公告文字区块

  // 特性区块
  PROXIO_FEATURE_ENABLE: true, // 特性区块开关
  PROXIO_FEATURE_TITLE: '为什么选我合作',
  PROXIO_FEATURE_TEXT_1: '我能让您的项目焕发光彩',
  PROXIO_FEATURE_TEXT_2: '丰富的案例经验，专业的技术服务，优质的沟通效率',

  // 特性1
  PROXIO_FEATURE_1_ICON_CLASS: 'fa-solid fa-stopwatch', // fas图标
  PROXIO_FEATURE_1_ICON_IMG_URL: '', // 图片图标选填，默认是fas图标，如果需要图片图标可以填写图片地址，示例/avatar.png
  PROXIO_FEATURE_1_TITLE_1: '高效工作流程',
  PROXIO_FEATURE_1_TEXT_1:
    '精简的设计流程确保快速交付，在紧迫的工期下仍能保证品质与细节不打折扣。',

  PROXIO_FEATURE_2_ICON_CLASS: 'fa-solid fa-comments',
  PROXIO_FEATURE_2_ICON_IMG_URL: '',
  PROXIO_FEATURE_2_TITLE_1: '协作式流程',
  PROXIO_FEATURE_2_TEXT_1: '与你紧密合作，融合反馈意见，打造超越预期的设计',

  PROXIO_FEATURE_3_ICON_CLASS: 'fa-solid fa-search',
  PROXIO_FEATURE_3_ICON_IMG_URL: '',
  PROXIO_FEATURE_3_TITLE_1: '细节把控',
  PROXIO_FEATURE_3_TEXT_1:
    '精益求精雕琢每个元素，确保成品精致统一，令人过目难忘',

  PROXIO_FEATURE_BUTTON_TEXT: '了解更多', // 按钮文字
  PROXIO_FEATURE_BUTTON_URL: 'https://github.com/OiiOAI?tab=repositories', // 按钮跳转

  // 首页生涯区块
  PROXIO_CAREER_ENABLE: true, // 区块开关
  PROXIO_CAREER_TITLE: '我的技能',
  PROXIO_CAREER_TEXT: '核心能力｜接资讯',

  // 生涯内容卡牌 ，title是标题 ，bio是备注，text是详情
  PROXIO_CAREERS: [
    {
      title: '增长营销与策略设计​',
      bio: 'AI驱动营销策略 | 用户分层运营 | 大促玩法创新',
      text: '在​​阿里巴巴主导AI智能发券系统，基于RFM用户分层模型重构全链路发券策略，显著提升商家券核销效率与平台订单增长；创新设计“5折天”S级大促店外店内全链路玩法，实现会场流量与转化突破，沉淀原子化营销能力；推动“AI托管券”系统落地，通过实时定价与预算托管平衡体验与效率，构建规模化增长引擎。'
    },
    {
      title: '供给侧效率革命',
      bio: 'B端工具重构 | 体验优化 | 质量体系搭建',
      text: '于​​阿里巴巴-饿了么​​重构连锁商家发品工具链，优化菜单模板与API同步机制，实现发品效率跨越式提升并100%对齐行业头部标准；建立增量实时诊断+存量任务触达体系，系统性提升商品优质率；升级搭售场景商品模型与推荐策略，有效扩大高价值供给商户覆盖。'
    },
    {
      title: '用户增长与内容生态​',
      bio: '内容导购 | 心智建设 | 创新商业模式',
      text: '在​​阿里巴巴-饿了么​​构建UGC图文+智能投放内容场域，强化用户消费心智与进店转化效率；在PP视频​​期间，首创“免费看”商业模式整合内容转免与看赚玩法，显著激活下沉市场用户规模，并优化影视播放动线驱动长视频播放量增长，同步提升短视频渗透率。'
    },
    {
      title: 'AI技术产品化​',
      bio: '算法落地 | 数据驱动 | 智能系统设计',
      text: '为​​阿里巴巴-饿了么​​自研动态定价算法引擎，融合用户行为与库存预测实现智能券策略规模化落地；在​​乐视​​主导智能相册系统，应用无监督学习聚类技术处理亿级图片自动分类，提升云服务活跃度与商业变现能力。'
    },
    {
      title: '复杂系统架构​',
      bio: '全链路设计 | 中台化能力',
      text: '在​​阿里巴巴-饿了么​​整合营销中台能力，统一券资产在公域流量、私域阵地及交易链路的表达逻辑，支撑多场景协同营销；于​​InWatch​​设计IoT云服务平台，通过OTA管理、蓝牙连接及健康服务封装，为开发者提供一站式接入解决方案。'
    },
    {
      title: '0→1创业与商业验证​',
      bio: '商业模式设计 | 全栈运营',
      text: '创立订阅制电商平台​​一点生活​​，从0到1搭建O2O业务模型，完成高复购率商业闭环验证并推进早期融资，实现资金流平衡与模式规模化验证。'
    }
    
  ],

  // 首页用户测评区块
  PROXIO_TESTIMONIALS_ENABLE: true, // 测评区块开关
  PROXIO_TESTIMONIALS_TITLE: '用户反馈',
  PROXIO_TESTIMONIALS_TEXT_1: '我的朋友怎么说',
  PROXIO_TESTIMONIALS_TEXT_2:
    '擅用第一性原理拆解复杂业务，以AI+数据驱动实现商业价值倍增',

  // 用户测评处的跳转按钮
  PROXIO_TESTIMONIALS_BUTTON_URL: '/about',
  PROXIO_TESTIMONIALS_BUTTON_TEXT: '联系我',

  // 这里不支持CONFIG和环境变量，需要一一修改此处代码。
  PROXIO_TESTIMONIALS_ITEMS: [
    {
      PROXIO_TESTIMONIALS_ITEM_TEXT:
        '与他在阿里巴巴共事期间，我深深钦佩他​​将复杂业务抽象为清晰架构​​的能力。无论是设计营销中台还是重构商家工具，他总能​​精准定义问题本质​​，并用技术化、产品化的方式落地。他打造的AI营销系统不仅提升了效率，更重要是​​为业务建立了长期增长引擎​​——这种兼顾‘眼前指标’与‘长期价值’的思维，在产品经理中非常罕见 ',
      PROXIO_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F22de3fcb-d90d-4271-bc01-f815f476122b%2F4FE0A0C0-E487-4C74-BF8E-6F01A27461B8-14186-000008094BC289A6.jpg?table=collection&id=a320a2cc-6ebe-4a8d-95cc-ea94e63bced9&width=200',
      PROXIO_TESTIMONIALS_ITEM_NICKNAME: '苗老板',
      PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '横向同事',
      PROXIO_TESTIMONIALS_ITEM_URL: ''
    },
    {
      PROXIO_TESTIMONIALS_ITEM_TEXT:
        '他是我合作过​​最靠谱的‘扛压者’​​。在多次大促中，他总能在一片混沌中​​快速理清链路、锁定关键体验短板​​。我记得有一次为优化券核销率，他亲自深度访谈了20多个商家，最终从‘表达-决策-履约’全环节中找到突破点——这种​​对细节的执着和对用户真实的敬畏心​​，是他驱动项目成功的核心。他不仅是规划者，更是挽起袖子深耕细节的执行者。',
      PROXIO_TESTIMONIALS_ITEM_AVATAR:
        'https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0d33d169-f932-41ff-ac6b-88a923c08e02%2F%25E5%25A4%25B4%25E5%2583%258F.jfif?table=collection&id=7787658d-d5c0-4f34-8e32-60c523dfaba3&width=400',
      PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'Asenkits',
      PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '业务甲方爸爸',
      PROXIO_TESTIMONIALS_ITEM_URL: ''
    },
    {
      PROXIO_TESTIMONIALS_ITEM_TEXT:
        '他从不是‘只在自家田里耕地的产品经理’。​​擅长跨界融合​​，他总能把不同领域的逻辑打通，​​用新思维破解老问题​​。同时，他提倡‘透明化协作’，所有文档、决策逻辑对盟友全程开放，这种开放性极大提升了跨团队协作的信心和效率。 ',
      PROXIO_TESTIMONIALS_ITEM_AVATAR: '/avatar.png',
      PROXIO_TESTIMONIALS_ITEM_NICKNAME: 'DWIND',
      PROXIO_TESTIMONIALS_ITEM_DESCRIPTION: '王老板',
      PROXIO_TESTIMONIALS_ITEM_URL: ''
    }
  ],

  //   FAQ 常见问题模块
  PROXIO_FAQ_ENABLE: false, // 常见问题模块开关
  PROXIO_FAQ_TITLE: '常见问题解答',
  PROXIO_FAQ_TEXT_1: '有任何问题吗？请看这里',
  PROXIO_FAQ_TEXT_2: '我们收集了常见的用户疑问',
  PROXIO_FAQS: [
    {
      q: 'NotionNext有帮助文档吗？',
      a: 'NotionNext提供了<a href="https://docs.tangly1024.com/about" className="underline">帮助文档</a>，操作<a href="https://www.bilibili.com/video/BV1fM4y1L7Qi/" className="underline">演示视频</a>，以及<a href="https://docs.tangly1024.com/article/chat-community" className="underline">交流社群</a>来协助您完成网站的搭建部署'
    },
    {
      q: '部署后要如何编写文章？',
      a: '您可以在Notion中之间添加或修改类型为Post的页面，内容将被实时同步在站点中，详情参考<a className="underline" href="https://docs.tangly1024.com/article/start-to-write">《帮助文档》</a>'
    },
    {
      q: '站点部署失败，更新失败？',
      a: '通常是配置修改错误导致，请检查配置或者重试操作步骤，或者通过Vercel后台的Deployments中找到错误日志，并向网友求助'
    },
    {
      q: '文章没有实时同步？',
      a: '先检查Notion_Page_ID是否正确配置，其次由于博客的每个页面都有独立缓存，刷新网页后即可解决'
    }
  ],

  // 关于作者区块
  PROXIO_ABOUT_ENABLE: false, // 关于作者区块区块开关
  PROXIO_ABOUT_TITLE: '关于作者',
  PROXIO_ABOUT_TEXT_1: 'I am an Architect Turned Into a Product Designer',
  PROXIO_ABOUT_TEXT_2:
    'With a background in architecture, I now apply my expertise to product design, blending aesthetics, functionality, and innovation. My goal is to create modern, user-focused designs that bring your vision to life.',
  PROXIO_ABOUT_PHOTO_URL: '/avatar.png',
  PROXIO_ABOUT_KEY_1: '经验年限',
  PROXIO_ABOUT_VAL_1: '10年+',
  PROXIO_ABOUT_KEY_2: '客户',
  PROXIO_ABOUT_VAL_2: '1000+',
  PROXIO_ABOUT_KEY_3: '交付项目',
  PROXIO_ABOUT_VAL_3: '5000+',
  PROXIO_ABOUT_KEY_4: '累积创作时长（小时）',
  PROXIO_ABOUT_VAL_4: '10000+',

  PROXIO_ABOUT_BUTTON_URL: '/about',
  PROXIO_ABOUT_BUTTON_TEXT: '关于我',

  // 横向滚动文字
  PROXIO_BRANDS_ENABLE: true, // 滚动文字
  PROXIO_BRANDS: [
    '增长黑客',
    'AI营销',
    '客户管理',
    '商业思维',
    '产品经理',
    '创业者'
  ],

  PROXIO_FOOTER_SLOGAN: '我们通过技术为品牌和公司创造数字体验。',

  // 页脚三列菜单组
  // 页脚菜单
  PROXIO_FOOTER_LINKS: [
    {
      name: '友情链接',
      menus: [
        {
          title: 'OOMOL Studio',
          href: 'https://oomol.com/zh-CN/'
        },
        {
          title: 'NotionNext',
          href: 'https://www.tangly1024.com'
        },
        {
          title: 'WaytoAgi',
          href: 'https://www.waytoagi.com/zh'
        },
        {
          title: 'aiwith.me',
          href: 'https://aiwith.me/'
        },
        {
          title: 'producthunt',
          href: 'https://www.producthunt.com/?bc=1'
        }
      ]
    },
    {
      name: '开源项目',
      menus: [
        { title: 'Github', href: 'https://github.com/tangly1024/NotionNext' },
        {
          title: '开发帮助',
          href: 'https://docs.tangly1024.com/article/how-to-develop-with-notion-next'
        },
        {
          title: '功能反馈',
          href: 'https://github.com/tangly1024/NotionNext/issues/new/choose'
        },
        {
          title: '技术讨论',
          href: 'https://github.com/tangly1024/NotionNext/discussions'
        },
        {
          title: '关于作者',
          href: 'https://blog.tangly1024.com/about'
        }
      ]
    }
  ],

  PROXIO_FOOTER_BLOG_LATEST_TITLE: '最新文章',

  PROXIO_FOOTER_PRIVACY_POLICY_TEXT: '隐私政策',
  PROXIO_FOOTER_PRIVACY_POLICY_URL: '/privacy-policy',

  PROXIO_FOOTER_PRIVACY_LEGAL_NOTICE_TEXT: '法律声明',
  PROXIO_FOOTER_PRIVACY_LEGAL_NOTICE_URL: '/legacy-notice',

  PROXIO_FOOTER_PRIVACY_TERMS_OF_SERVICE_TEXT: '服务协议',
  PROXIO_FOOTER_PRIVACY_TERMS_OF_SERVICE_URL: '/terms-of-use',

  // 404页面的提示语
  PROXIO_404_TITLE: '我们似乎找不到您要找的页面。',
  PROXIO_404_TEXT: '抱歉！您要查找的页面不存在。可能已经移动或删除。',
  PROXIO_404_BACK: '回到主页',

  // 页面底部的行动呼吁模块
  PROXIO_CTA_ENABLE: false,
  PROXIO_CTA_TITLE: '与我建立联系',
  PROXIO_CTA_TITLE_2: '让我们立刻启动您的项目',
  PROXIO_CTA_DESCRIPTION:
    '访问NotionNext的操作文档，我们提供了详细的教程，帮助你即刻搭建站点',
  PROXIO_CTA_BUTTON: true, // 是否显示按钮
  PROXIO_CTA_BUTTON_URL: '/about',
  PROXIO_CTA_BUTTON_TEXT: '联系我',

  PROXIO_POST_REDIRECT_ENABLE: true, // 默認開啟重定向
  PROXIO_POST_REDIRECT_URL: 'https://agitorch.fun', // 重定向域名
  PROXIO_NEWSLETTER: process.env.NEXT_PUBLIC_THEME_PROXIO_NEWSLETTER || false // 是否开启邮件订阅 请先配置mailchimp功能 https://docs.tangly1024.com/article/notion-next-mailchimp
}
export default CONFIG
