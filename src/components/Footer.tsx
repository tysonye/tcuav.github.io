const Footer = ({ onLegalClick, onTermsClick, onPrivacyClick }: { onLegalClick: () => void; onTermsClick: () => void; onPrivacyClick: () => void }) => {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* 品牌标识与简短说明 */}
          <div className="flex flex-col items-start md:items-center text-center md:text-left">
            <div className="text-xl font-bold flex items-center mb-4">
              <svg className="w-6 h-6 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
              </svg>
              <span>通程智能</span>
            </div>
            <p className="text-gray-400 text-sm mb-4 max-w-xs">
              专注于无人机技术研发与行业应用的国家级高新技术企业
            </p>
            {/* 添加社交媒体图标 */}
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
                </svg>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
            </div>
          </div>

          {/* 核心导航链接 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400 text-center">快速导航</h3>
            <ul className="space-y-3 text-center">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">首页</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">关于我们</a></li>
              <li><a href="#skills" className="text-gray-400 hover:text-white transition-colors">核心技术</a></li>
              <li><a href="#projects" className="text-gray-400 hover:text-white transition-colors">解决方案</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">联系我们</a></li>
            </ul>
          </div>

          {/* 法律与支持 */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-blue-400 text-center">法律与支持</h3>
            <ul className="space-y-3 text-center">
              <li>
                <a 
                  href="javascript:void(0)" 
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={onPrivacyClick}
                >
                  隐私政策
                </a>
              </li>
              <li>
                <a 
                  href="javascript:void(0)" 
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={onTermsClick}
                >
                  服务条款
                </a>
              </li>
              <li>
                <a 
                  href="javascript:void(0)" 
                  className="text-gray-400 hover:text-white transition-colors"
                  onClick={onLegalClick}
                >
                  法律声明
                </a>
              </li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">常见问题</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">技术支持</a></li>
            </ul>
          </div>
        </div>

        {/* 版权信息 */}
        <div className="border-t border-gray-800 mt-10 pt-6 text-center">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} 安徽通程智能科技有限公司. 保留所有权利.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer