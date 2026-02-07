import { useState, useEffect, useRef } from 'react'

const Contact = () => {
  const [showWechatQR, setShowWechatQR] = useState(false)
  const [showWechatVideoQR, setShowWechatVideoQR] = useState(false)
  const [showDouyinQR, setShowDouyinQR] = useState(false)
  const [showTwitterQR, setShowTwitterQR] = useState(false)
  const [showXiaohongshuQR, setShowXiaohongshuQR] = useState(false)
  const [showKuaishouQR, setShowKuaishouQR] = useState(false)

  // Refs for scroll animations
  const titleRef = useRef<HTMLDivElement>(null)
  const contactCardRef = useRef<HTMLDivElement>(null)
  const socialCardRef = useRef<HTMLDivElement>(null)
  const socialContainerRef = useRef<HTMLDivElement>(null)

  const socialLinks = [
    { name: '微信公众号', url: '#', icon: 'M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z' },
    { name: '微信视频号', url: '#', icon: 'M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm4.28 10.28a.75.75 0 000-1.06l-3-3a.75.75 0 10-1.06 1.06l1.72 1.72H8.25a.75.75 0 000 1.5h5.69l-1.72 1.72a.75.75 0 101.06 1.06l3-3z' },
    { name: '抖音', url: '#', icon: 'M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z' },
    { name: '小红书', url: '#', icon: 'M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z' },
    { name: '快手', url: '#', icon: 'M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5' },
    { name: '桐城市无人机协会', url: '#', icon: 'M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84' }
  ]

  // Scroll animation effect
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-slide-up');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe title section
    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    // Observe contact card
    if (contactCardRef.current) {
      observer.observe(contactCardRef.current);
    }

    // Observe social card
    if (socialCardRef.current) {
      observer.observe(socialCardRef.current);
    }

    // Observe social media buttons with staggered animation
    if (socialContainerRef.current) {
      const socialButtons = socialContainerRef.current.querySelectorAll('div');
      socialButtons.forEach((button, index) => {
        button.classList.add(`animation-delay-${index * 100}`);
        observer.observe(button);
      });
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="contact" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto max-w-6xl">
        <div ref={titleRef} className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block relative">
            联系我们
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-blue-600 dark:bg-blue-400 w-24 rounded-full"></div>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            有任何问题或合作意向？请随时联系我们
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          <div ref={contactCardRef} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">联系方式</h3>
            <div className="space-y-6">

              <div className="flex items-start">
                <div className="mt-1 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-gray-800 dark:text-white">电话</h4>
                  <p className="text-gray-600 dark:text-gray-300">+86 133 9715 5725</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mt-1 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-gray-800 dark:text-white">地址</h4>
                  <p className="text-gray-600 dark:text-gray-300">安徽省桐城市盛唐北路100号(通程无人机培训基地)</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">安徽省桐城市文昌街道和平路和平尚城6#209室(办公室)</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="mt-1 p-3 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div className="ml-4">
                  <h4 className="font-medium text-gray-800 dark:text-white">工作时间</h4>
                  <p className="text-gray-600 dark:text-gray-300">周一至周日: 8:00 - 18:00</p>
                </div>
              </div>
            </div>
          </div>

          <div ref={socialCardRef} className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg">
            <h3 className="text-2xl font-bold mb-6 text-gray-800 dark:text-white">关注我们</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">关注我们的社交媒体，获取最新的无人机技术和行业动态</p>
            <div className="relative">
              <div ref={socialContainerRef} className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {socialLinks.map((link, index) => (
                  <div
                    key={index}
                    className="w-full py-3 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 flex items-center justify-center rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 relative cursor-pointer"
                    onMouseEnter={() => {
                      if (link.name === '微信公众号') setShowWechatQR(true)
                      if (link.name === '微信视频号') setShowWechatVideoQR(true)
                      if (link.name === '抖音') setShowDouyinQR(true)
                      if (link.name === '小红书') setShowXiaohongshuQR(true)
                      if (link.name === '快手') setShowKuaishouQR(true)
                      if (link.name === '桐城市无人机协会') setShowTwitterQR(true)
                    }}
                    onMouseLeave={() => {
                      if (link.name === '微信公众号') setShowWechatQR(false)
                      if (link.name === '微信视频号') setShowWechatVideoQR(false)
                      if (link.name === '抖音') setShowDouyinQR(false)
                      if (link.name === '小红书') setShowXiaohongshuQR(false)
                      if (link.name === '快手') setShowKuaishouQR(false)
                      if (link.name === '桐城市无人机协会') setShowTwitterQR(false)
                    }}
                  >
                    {link.name !== '桐城市无人机协会' && (
                      <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={link.icon} />
                      </svg>
                    )}
                    {link.name}
                  </div>
                ))}
              </div>
              
              {/* 微信二维码弹窗 */}
              {showWechatQR && (
                <div className="absolute -top-96 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl z-50 border-2 border-blue-600 w-full max-w-sm">
                  <div className="grid grid-cols-2 gap-4">
                    {/* 第一个二维码 */}
                    <div className="flex flex-col items-center">
                      <div className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-md">
                        <img 
                          src="/image/wechatservices.jpg" 
                          alt="微信服务号二维码" 
                          className="w-36 h-36 object-contain"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <p className="text-center text-sm font-medium text-gray-700 dark:text-gray-300 mt-3">微信服务号</p>
                    </div>
                    {/* 第二个二维码 */}
                    <div className="flex flex-col items-center">
                      <div className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-md">
                        <img 
                          src="/image/wechat.jpg" 
                          alt="微信二维码" 
                          className="w-36 h-36 object-contain"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <p className="text-center text-sm font-medium text-gray-700 dark:text-gray-300 mt-3">微信公众号</p>
                    </div>
                  </div>
                  {/* 指向按钮的箭头 */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-2">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              )}
              
              {/* 微信视频号二维码弹窗 */}
              {showWechatVideoQR && (
                <div className="absolute -top-96 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl z-50 border-2 border-blue-600 w-full max-w-sm">
                  <div className="grid grid-cols-2 gap-4">
                    {/* 第一个二维码 */}
                    <div className="flex flex-col items-center">
                      <div className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-md">
                        <img 
                          src="/image/wechatsph.jpg" 
                          alt="微信视频号二维码" 
                          className="w-36 h-36 object-contain"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <p className="text-center text-sm font-medium text-gray-700 dark:text-gray-300 mt-3">通程无人机</p>
                    </div>
                    {/* 第二个二维码 */}
                    <div className="flex flex-col items-center">
                      <div className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-md">
                        <img 
                          src="/image/wechatsph1.jpg" 
                          alt="微信视频号二维码" 
                          className="w-36 h-36 object-contain"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <p className="text-center text-sm font-medium text-gray-700 dark:text-gray-300 mt-3">通程无人机基地</p>
                    </div>
                  </div>
                  {/* 指向按钮的箭头 */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-2">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              )}
              
              {/* 抖音二维码弹窗 */}
              {showDouyinQR && (
                <div className="absolute -top-96 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl z-50 border-2 border-blue-600 w-full max-w-sm">
                  <div className="grid grid-cols-2 gap-4">
                    {/* 第一个二维码 */}
                    <div className="flex flex-col items-center">
                      <div className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-md">
                        <img 
                          src="/image/dy1.jpg" 
                          alt="抖音二维码" 
                          className="w-36 h-36 object-contain"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <p className="text-center text-sm font-medium text-gray-700 dark:text-gray-300 mt-3">安徽桐城科技无人机</p>
                    </div>
                    {/* 第二个二维码 */}
                    <div className="flex flex-col items-center">
                      <div className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-md">
                        <img 
                          src="/image/dy2.jpg" 
                          alt="抖音二维码" 
                          className="w-36 h-36 object-contain"
                          loading="lazy"
                          decoding="async"
                        />
                      </div>
                      <p className="text-center text-sm font-medium text-gray-700 dark:text-gray-300 mt-3">通程智飞无人机</p>
                    </div>
                  </div>
                  {/* 指向按钮的箭头 */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-2">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              )}
              
              {/* 小红书二维码弹窗 */}
              {showXiaohongshuQR && (
                <div className="absolute -top-80 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl z-50 border-2 border-blue-600">
                  <div className="flex flex-col items-center">
                    <div className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-md">
                      <img 
                        src="/image/xhs.jpg" 
                        alt="小红书二维码" 
                        className="w-48 h-48 object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <p className="text-center text-sm font-medium text-gray-700 dark:text-gray-300 mt-3">通程无人机</p>
                  </div>
                  {/* 指向按钮的箭头 */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-2">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              )}
              
              {/* 快手二维码弹窗 */}
              {showKuaishouQR && (
                <div className="absolute -top-80 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl z-50 border-2 border-blue-600">
                  <div className="flex flex-col items-center">
                    <div className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-md">
                      <img 
                        src="/image/ks.jpg" 
                        alt="快手二维码" 
                        className="w-48 h-48 object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <p className="text-center text-sm font-medium text-gray-700 dark:text-gray-300 mt-3">快手</p>
                  </div>
                  {/* 指向按钮的箭头 */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-2">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              )}
              
              {/* 桐城市无人机协会二维码弹窗 */}
              {showTwitterQR && (
                <div className="absolute -top-80 left-1/2 transform -translate-x-1/2 bg-white dark:bg-gray-800 p-8 rounded-2xl shadow-2xl z-50 border-2 border-blue-600">
                  <div className="flex flex-col items-center">
                    <div className="bg-white dark:bg-gray-800 p-2 rounded-lg shadow-md">
                      <img 
                        src="/image/wrjxh.jpg" 
                        alt="桐城市无人机协会二维码" 
                        className="w-48 h-48 object-contain"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                    <p className="text-center text-sm font-medium text-gray-700 dark:text-gray-300 mt-3">桐城市无人机协会</p>
                  </div>
                  {/* 指向按钮的箭头 */}
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 -mt-2">
                    <svg className="w-6 h-6 text-blue-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact