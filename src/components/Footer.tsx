const Footer = ({ onLegalClick }: { onLegalClick: () => void }) => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          <div>
            <div className="text-xl font-bold flex items-center mb-4">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              <span>通程智能</span>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              安徽通程智能科技有限公司是一家专注于无人机技术研发、系统集成和行业应用的国家级高新技术企业，致力于为客户提供从设计到部署的全流程无人机解决方案。
            </p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5 text-blue-400">快速链接</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors flex items-center"><svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>首页</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors flex items-center"><svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>关于我们</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors flex items-center"><svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>核心技术</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors flex items-center"><svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>无人机方案</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors flex items-center"><svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>联系我们</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5 text-blue-400">服务领域</h3>
            <ul className="space-y-3">
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors flex items-center"><svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>工业巡检</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors flex items-center"><svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>农业植保</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors flex items-center"><svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>安防监控</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors flex items-center"><svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>测绘航拍</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors flex items-center"><svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>物流配送</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors flex items-center"><svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>消防救援</a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-5 text-blue-400">联系我们</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <svg className="w-5 h-5 mt-1 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div>
                  <p className="text-gray-400">+86 133 9715 5725</p>
                  <p className="text-gray-500 text-sm">+86 138 0013 8000</p>
                </div>
              </li>

              <li className="flex items-start">
                <svg className="w-5 h-5 mt-1 mr-3 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div>
                  <p className="text-gray-400">安徽省桐城市盛唐北路100号(通程无人机培训基地)</p>
                  <p className="text-gray-500 text-sm">安徽省桐城市文昌街道和平路和平尚城6#209室(办公室)</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-center md:text-left mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} 安徽通程智能科技有限公司. 保留所有权利.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">隐私政策</a>
              <a href="#" className="text-gray-500 hover:text-white transition-colors text-sm">服务条款</a>
              <a 
                href="javascript:void(0)" 
                className="text-gray-500 hover:text-white transition-colors text-sm"
                onClick={onLegalClick}
              >
                法律声明
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer