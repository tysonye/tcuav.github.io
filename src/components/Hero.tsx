import HeroBackground from './HeroBackground';

const Hero = () => {
  return (
    <section className="min-h-screen relative flex flex-col items-center justify-center py-20 px-4 overflow-hidden">
      {/* 视频背景 */}
      <HeroBackground />
      
      <div className="container mx-auto max-w-6xl relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-2/3 text-center md:text-left mb-10 md:mb-0">
            {/* 标题行 - 增加装饰 */}
            <div className="flex items-center justify-center md:justify-start mb-2">
              <div className="w-12 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full mr-3"></div>
              <span className="text-sm font-semibold text-blue-600 dark:text-blue-400 uppercase tracking-wider">专业无人机解决方案</span>
            </div>
            
            <h1 className="font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
              <span className="text-[clamp(1.5rem,4vw,3rem)] leading-tight">安徽通程智能科技有限公司</span>
            </h1>
            
            <p className="text-xl md:text-2xl font-semibold text-gray-800 dark:text-white mb-6 max-w-2xl mx-auto md:mx-0">
              专业无人机技术与解决方案提供商
            </p>
            
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-10 max-w-lg mx-auto md:mx-0 leading-relaxed">
              我们专注于无人机技术研发、CAAC培训、系统集成和行业应用，拥有"无人机+AI"融合应用体系，为客户提供从设计到部署的全流程解决方案，助力各行业数字化转型与智能化升级。
            </p>
            
            {/* 核心优势 - 改进布局 */}
            <div className="grid grid-cols-2 gap-4 mb-10 text-left max-w-lg mx-auto md:mx-0">
              {[
                { icon: "✈️", text: "CAAC培训资质" },
                { icon: "🌍", text: "空天地一体化服务" },
                { icon: "🤖", text: "AI智能识别技术" },
                { icon: "🔄", text: "全流程解决方案" }
              ].map((item, index) => (
                <div key={index} className="flex items-center bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm p-3 rounded-lg hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300">
                  <span className="text-xl mr-3">{item.icon}</span>
                  <span className="font-medium text-gray-700 dark:text-gray-300">{item.text}</span>
                </div>
              ))}
            </div>
            
            {/* CTA按钮 - 增强设计 */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6 justify-center md:justify-start">
              <a 
                href="#skills" 
                className="px-10 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-semibold rounded-full shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center group"
              >
                <svg className="w-5 h-5 mr-2 group-hover:rotate-90 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                </svg>
                查看核心技术
              </a>
              <a 
                href="#contact" 
                className="px-10 py-4 border-2 border-gradient-to-r from-blue-600 to-indigo-600 bg-white/90 dark:bg-gray-800/90 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-gray-800 font-semibold rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 flex items-center justify-center group"
              >
                <svg className="w-5 h-5 mr-2 group-hover:scale-110 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                联系我们
              </a>
            </div>
          </div>
          
          {/* 无人机图片 - 增强效果 */}
          <div className="md:w-1/2 flex justify-center">
            <div className="relative w-64 h-64 md:w-96 md:h-96">
              {/* 增强的光晕效果 - 动态变色 */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-br from-blue-500 via-indigo-500 to-purple-500 blur-3xl opacity-40 animate-pulse-slow"></div>
              
              {/* 装饰环 - 增强版 */}
              <div className="absolute inset-0 rounded-full border-4 border-blue-200 dark:border-blue-800/30 animate-spin-slow"></div>
              <div className="absolute inset-4 rounded-full border-2 border-indigo-200 dark:border-indigo-800/30 animate-spin-slow animation-direction-reverse animation-delay-1000"></div>
              <div className="absolute inset-8 rounded-full border-1 border-purple-200 dark:border-purple-800/30 animate-spin-slow animation-duration-2000"></div>
              
              {/* 3D悬浮效果 */}
              <div className="absolute inset-6 rounded-full bg-white dark:bg-gray-900 shadow-2xl overflow-hidden animate-float-slow">
                <img 
                  src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=Modern%20drone%20technology%20with%20advanced%20aerial%20system%2C%20professional%20photography%20equipment&sign=4ca9c74d09940bb3c2d4eb9f6a165adc" 
                  alt="无人机技术" 
                  className="w-full h-full object-cover transition-all duration-1000 hover:scale-110 hover:rotate-5"
                />
                
                {/* 图片叠加光效 */}
                <div className="absolute inset-0 bg-gradient-to-t from-transparent via-transparent to-white/10 dark:to-gray-900/20"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* 滚动指示器 - 优化设计 - 放置在内容容器内部 */}
        <div className="mt-16 flex flex-col items-center justify-center animate-bounce">
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400 mb-2">向下滚动了解更多</span>
          <div className="w-8 h-12 rounded-full border-2 border-gray-400 dark:border-gray-500 flex items-start justify-center pt-2">
            <div className="w-1.5 h-3 rounded-full bg-gray-600 dark:bg-gray-400 animate-scroll-down"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero