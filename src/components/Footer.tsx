const Footer = ({ onLegalClick, onTermsClick, onPrivacyClick }: { onLegalClick: () => void; onTermsClick: () => void; onPrivacyClick: () => void }) => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-16 pb-8 px-4">
      <div className="container mx-auto max-w-6xl">
        {/* 顶部装饰线 */}
        <div className="w-full h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 rounded-full mb-12"></div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* 品牌标识与简短说明 */}
          <div className="flex flex-col items-center text-center">
            <div className="text-2xl font-bold flex items-center mb-5">
              <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-500 flex items-center justify-center mr-3">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
              </div>
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">通程智能</span>
            </div>
            <p className="text-gray-400 text-sm mb-6 max-w-xs leading-relaxed">
              专注于无人机技术研发与行业应用的国家级高新技术企业，为客户提供从设计到部署的全流程解决方案
            </p>
            
            {/* 社交媒体图标 - 增强设计 */}
            <div className="flex space-x-6">
              <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-125" title="微信">
                <div className="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center group-hover:bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                  </svg>
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-125" title="微博">
                <div className="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center group-hover:bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm6.602 9.293c-.158-.041-.321-.062-.485-.062-.28 0-.556.085-.792.246-.303.202-.537.487-.661.831-.123.344-.123.71-.038 1.065.085.356.254.674.487.931.234.257.512.457.824.585.312.128.655.192.1.192.246 0 .48-.038.689-.113.209-.075.403-.187.562-.335.16-.148.287-.317.367-.502.08-.187.12-.386.12-.597 0-.246-.049-.472-.148-.679-.099-.206-.234-.381-.404-.512-.17-.131-.356-.223-.556-.274-.2-.05-.417-.076-.655-.076-.209 0-.41-.038-.602-.113-.192-.076-.37-.187-.52-.335-.149-.149-.263-.321-.335-.502-.076-.18-.113-.37-.113-.569 0-.219.038-.431.113-.623.075-.193.193-.365.345-.512.151-.148.335-.262.544-.335.21-.076.427-.113.655-.113.272 0 .529.049.762.148.233.099.438.234.603.399.165.165.287.356.367.563.08.207.12.427.12.655 0 .22-.04.436-.12.639-.08.203-.207.387-.37.536-.164.15-.355.263-.563.335-.21.076-.427.113-.655.113-.219 0-.426-.032-.623-.097-.197-.065-.373-.164-.52-.295-.147-.131-.256-.287-.317-.465-.061-.178-.092-.36-.092-.544 0-.178.031-.356.092-.529.061-.174.165-.336.3-.475.135-.139.295-.247.475-.317.178-.07.36-.106.544-.106.18 0 .36.031.529.092.173.061.33.16.475.3.145.14.254.302.325.48.07.178.106.367.106.562 0 .195-.035.387-.106.569-.071.182-.18.348-.317.486-.138.139-.302.248-.487.319-.185.07-.376.106-.572.106-.195 0-.386-.035-.563-.106-.177-.071-.335-.18-.465-.325-.13-.144-.223-.31-.274-.495-.051-.187-.076-.386-.076-.597 0-.21.025-.412.076-.602.051-.19.143-.365.274-.512.131-.147.302-.262.495-.335.193-.073.402-.11.623-.11.203 0 .403.031.59.094.187.063.356.165.5.302.143.137.252.307.319.502.067.195.101.405.101.624 0 .219-.034.43-.101.63-.067.199-.176.375-.319.518-.143.143-.313.252-.502.319-.19.067-.399.101-.624.101z" />
                  </svg>
                </div>
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-all duration-300 transform hover:scale-125" title="LinkedIn">
                <div className="w-10 h-10 rounded-full bg-gray-800/50 flex items-center justify-center group-hover:bg-gradient-to-r from-blue-500 to-purple-500 transition-all duration-300">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </div>
              </a>
            </div>
          </div>

          {/* 核心导航链接 */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">快速导航</h3>
            <ul className="space-y-4">
              <li className="text-center"><a href="#" className="text-gray-400 hover:text-white transition-all duration-300">首页</a></li>
              <li className="text-center"><a href="#about" className="text-gray-400 hover:text-white transition-all duration-300">关于我们</a></li>
              <li className="text-center"><a href="#skills" className="text-gray-400 hover:text-white transition-all duration-300">核心技术</a></li>
              <li className="text-center"><a href="#projects" className="text-gray-400 hover:text-white transition-all duration-300">解决方案</a></li>
              <li className="text-center"><a href="#contact" className="text-gray-400 hover:text-white transition-all duration-300">联系我们</a></li>
            </ul>
          </div>

          {/* 法律与支持 */}
          <div>
            <h3 className="text-lg font-semibold mb-6 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">法律与支持</h3>
            <ul className="space-y-4">
              <li className="text-center">
                <button 
                  className="text-gray-400 hover:text-white transition-all duration-300 bg-transparent border-none cursor-pointer w-full"
                  onClick={onPrivacyClick}
                >
                  隐私政策
                </button>
              </li>
              <li className="text-center">
                <button 
                  className="text-gray-400 hover:text-white transition-all duration-300 bg-transparent border-none cursor-pointer w-full"
                  onClick={onTermsClick}
                >
                  服务条款
                </button>
              </li>
              <li className="text-center">
                <button 
                  className="text-gray-400 hover:text-white transition-all duration-300 bg-transparent border-none cursor-pointer w-full"
                  onClick={onLegalClick}
                >
                  法律声明
                </button>
              </li>
              <li className="text-center"><a href="#" className="text-gray-400 hover:text-white transition-all duration-300">常见问题</a></li>
              <li className="text-center"><a href="#contact" className="text-gray-400 hover:text-white transition-all duration-300">技术支持</a></li>
            </ul>
          </div>
        </div>

        {/* 版权信息 - 增强设计 */}
        <div className="mt-16 pt-8 border-t border-gray-800 text-center">
          <div className="flex flex-col md:flex-row justify-center items-center space-y-4 md:space-y-0 md:space-x-6">
            <p className="text-gray-500 text-sm">
              &copy; {new Date().getFullYear()} 安徽通程智能科技有限公司. 保留所有权利.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">网站地图</a>
              <span className="text-gray-700">|</span>
              <a href="#" className="text-gray-500 hover:text-gray-300 text-sm transition-colors">网站建设</a>
            </div>
          </div>

        </div>
      </div>
    </footer>
  )
}

export default Footer