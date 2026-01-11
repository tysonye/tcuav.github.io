import { skillsData } from '../lib/mockData'

const Skills = () => {
  return (
    <section id="skills" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block relative">
            核心技术
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-blue-600 dark:bg-blue-400 w-24 rounded-full"></div>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            我们掌握多项无人机核心技术，为各行业提供专业解决方案
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="h-80 md:h-96">
            <div className="w-full h-full bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-xl flex items-center justify-center shadow-lg">
              <svg width="80%" height="80%" viewBox="0 0 400 400" className="max-w-full h-auto">
                <circle cx="200" cy="200" r="150" fill="none" stroke="#e2e8f0" strokeWidth="2" />
                <circle cx="200" cy="200" r="100" fill="none" stroke="#e2e8f0" strokeWidth="2" />
                <circle cx="200" cy="200" r="50" fill="none" stroke="#e2e8f0" strokeWidth="2" />
                
                {/* 无人机设计 */}
                <line x1="200" y1="50" x2="200" y2="30" stroke="#3b82f6" strokeWidth="3" />
                <text x="200" y="20" textAnchor="middle" fill="#3b82f6" fontSize="14" fontWeight="bold">无人机设计</text>
                
                {/* 飞控系统 */}
                <line x1="336.6" y1="100" x2="356.6" y2="90" stroke="#10b981" strokeWidth="3" />
                <text x="370" y="85" textAnchor="middle" fill="#10b981" fontSize="14" fontWeight="bold">飞控系统</text>
                
                {/* 自动驾驶 */}
                <line x1="336.6" y1="300" x2="356.6" y2="310" stroke="#f59e0b" strokeWidth="3" />
                <text x="370" y="315" textAnchor="middle" fill="#f59e0b" fontSize="14" fontWeight="bold">自动驾驶</text>
                
                {/* 传感器技术 */}
                <line x1="200" y1="350" x2="200" y2="370" stroke="#8b5cf6" strokeWidth="3" />
                <text x="200" y="380" textAnchor="middle" fill="#8b5cf6" fontSize="14" fontWeight="bold">传感器技术</text>
                
                {/* 图像处理 */}
                <line x1="63.4" y1="300" x2="43.4" y2="310" stroke="#ec4899" strokeWidth="3" />
                <text x="30" y="315" textAnchor="middle" fill="#ec4899" fontSize="14" fontWeight="bold">图像处理</text>
                
                {/* 数据传输 */}
                <line x1="63.4" y1="100" x2="43.4" y2="90" stroke="#34d399" strokeWidth="3" />
                <text x="30" y="85" textAnchor="middle" fill="#34d399" fontSize="14" fontWeight="bold">数据传输</text>
                
                {/* 雷达图填充 */}
                <polygon 
                  points="200,50 336.6,100 336.6,300 200,350 63.4,300 63.4,100" 
                  fill="url(#radarGradient)" 
                  fillOpacity="0.4" 
                  stroke="#3b82f6" 
                  strokeWidth="2" 
                />
                <defs>
                  <linearGradient id="radarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 0.5 }} />
                    <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 0.3 }} />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          <div className="space-y-6">
            {skillsData.map((skill, index) => (
              <div key={index} className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow">
                <div className="flex justify-between items-center mb-2">
                  <div className="flex items-center">
                    <svg className="w-5 h-5 mr-2 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                    </svg>
                    <span className="font-semibold text-gray-700 dark:text-gray-300">{skill.name}</span>
                  </div>
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">{skill.level}%</span>
                </div>
                <div className="h-2.5 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full transition-all duration-1000 ease-out"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { name: '无人机设计', desc: '自主研发多型号无人机，满足不同行业需求', icon: 'M12 19l9 2-9-18-9 18 9-2zm0 0v-8' },
            { name: '飞控系统', desc: '高精度飞行控制系统，支持多种飞行模式', icon: 'M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2' },
            { name: '卫星遥感融合', desc: '无人机低空数据与卫星高空数据融合应用', icon: 'M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9' },
            { name: 'AI智能识别', desc: '水域场景AI智能识别，钓鱼行为识别准确率达90%+', icon: 'M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z' },
            { name: '图像处理', desc: '实时图像处理和分析，支持AI识别功能', icon: 'M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z' },
            { name: '数据传输', desc: '5G+WiFi6双链路数据传输，低延迟高带宽', icon: 'M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071c3.904-3.905 10.236-3.905 14.141 0M1.394 9.393c5.857-5.857 15.355-5.857 21.213 0' },
            { name: 'CAAC培训', desc: '持有安徽省CAAC培训资质，多机型培训能力', icon: 'M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253' },
            { name: '空天地一体化', desc: '构建"空-天-地"一体化监测预警系统', icon: 'M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064' }
          ].map((tech, index) => (
            <div 
              key={index}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-lg text-center flex flex-col items-center justify-center h-auto hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-gray-100 dark:border-gray-700"
            >
              <div className="w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={tech.icon} />
                </svg>
              </div>
              <h3 className="font-semibold text-lg mb-2 text-gray-800 dark:text-white">{tech.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">{tech.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Skills