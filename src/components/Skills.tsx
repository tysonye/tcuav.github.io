import { useState, useEffect, useRef } from 'react'
import { skillsData as mockSkillsData } from '../lib/mockData'

interface Skill {
  name: string
  level: number
  description: string
  details: {
    title: string
    imageUrl: string
    content: string[]
    applications: string[]
    advantages: string[]
    courses?: string[]
  }
}

const Skills = () => {
  const [selectedSkill, setSelectedSkill] = useState<Skill | null>(null)
  const [skillsData, setSkillsData] = useState<Skill[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [counts, setCounts] = useState<Record<string, number>>({})
  const skillsRef = useRef<HTMLDivElement>(null)
  
  // 使用本地mock数据
  useEffect(() => {
    setIsLoading(true)
    // 模拟加载延迟，展示加载状态
    setTimeout(() => {
      setSkillsData(mockSkillsData)
      // 初始化计数为0
      const initialCounts: Record<string, number> = {}
      mockSkillsData.forEach(skill => {
        initialCounts[skill.name] = 0
      })
      setCounts(initialCounts)
      setIsLoading(false)
    }, 500)
  }, [])
  
  // 数字计数动画效果
  useEffect(() => {
    if (skillsData.length === 0) return
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 触发计数动画
            skillsData.forEach(skill => {
              let start = 0
              const end = skill.level
              const duration = 2000 // 动画持续时间
              const increment = end / (duration / 16) // 每16ms增加一次
              
              const timer = setInterval(() => {
                start += increment
                if (start >= end) {
                  setCounts(prev => ({ ...prev, [skill.name]: end }))
                  clearInterval(timer)
                } else {
                  setCounts(prev => ({ ...prev, [skill.name]: Math.floor(start) }))
                }
              }, 16)
            })
            
            observer.unobserve(entry.target)
          }
        })
      },
      { threshold: 0.2 }
    )
    
    if (skillsRef.current) {
      observer.observe(skillsRef.current)
    }
    
    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current)
      }
    }
  }, [skillsData, skillsRef])
  
  // Scroll animation effect for title
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
    const titleSection = document.querySelector('.text-center.mb-16');
    if (titleSection) {
      observer.observe(titleSection);
    }

    return () => {
      if (titleSection) {
        observer.unobserve(titleSection);
      }
    };
  }, []);
  
  return (
    <section id="skills" className="py-20 px-4 bg-gradient-to-b from-gray-50 to-white dark:from-gray-800/50 dark:to-gray-900/80">
      <div className="container mx-auto max-w-6xl">
        {/* 标题部分 - 优化设计 */}
        <div className="text-center mb-16 opacity-0 transform translate-y-8 transition-all duration-700 ease-out">
          <div className="inline-block relative mb-4">
            <div className="absolute -top-6 -left-6 w-16 h-16 bg-blue-100 dark:bg-blue-900/30 rounded-full blur-md"></div>
            <div className="absolute -bottom-6 -right-6 w-20 h-20 bg-purple-100 dark:bg-purple-900/30 rounded-full blur-md"></div>
            <h2 className="text-3xl md:text-4xl font-bold relative z-10 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400">
              核心技术
            </h2>
          </div>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 rounded-full mx-auto mb-6"></div>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            我们掌握多项无人机核心技术，为各行业提供专业解决方案
          </p>
        </div>

        {/* 雷达图与技术指标 - 改进布局 */}
        <div ref={skillsRef} className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          {/* 雷达图 - 优化设计 */}
          <div className="h-80 md:h-96 relative group animate-slide-up">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500 transform group-hover:scale-[1.02]"></div>
            <div className="absolute inset-4 bg-white dark:bg-gray-800/80 backdrop-blur-sm rounded-xl shadow-md flex items-center justify-center">
              <svg width="85%" height="85%" viewBox="0 0 400 400" className="max-w-full h-auto">
                {/* 雷达图网格 */}
                <circle cx="200" cy="200" r="150" fill="none" stroke="#e2e8f0" strokeWidth="2" className="opacity-70" />
                <circle cx="200" cy="200" r="100" fill="none" stroke="#e2e8f0" strokeWidth="2" className="opacity-70" />
                <circle cx="200" cy="200" r="50" fill="none" stroke="#e2e8f0" strokeWidth="2" className="opacity-70" />
                
                {/* 轴线 */}
                <line x1="200" y1="50" x2="200" y2="350" stroke="#e2e8f0" strokeWidth="1.5" className="opacity-50" />
                <line x1="63.4" y1="100" x2="336.6" y2="300" stroke="#e2e8f0" strokeWidth="1.5" className="opacity-50" />
                <line x1="63.4" y1="300" x2="336.6" y2="100" stroke="#e2e8f0" strokeWidth="1.5" className="opacity-50" />
                
                {/* 技术领域标签 */}
                <g className="text-sm font-semibold">
                  <text x="200" y="40" textAnchor="middle" fill="#3b82f6" fontWeight="bold">无人机设计</text>
                  <text x="370" y="110" textAnchor="middle" fill="#10b981" fontWeight="bold">飞控系统</text>
                  <text x="370" y="310" textAnchor="middle" fill="#f59e0b" fontWeight="bold">自动驾驶</text>
                  <text x="200" y="380" textAnchor="middle" fill="#8b5cf6" fontWeight="bold">传感器技术</text>
                  <text x="30" y="310" textAnchor="middle" fill="#ec4899" fontWeight="bold">图像处理</text>
                  <text x="30" y="110" textAnchor="middle" fill="#34d399" fontWeight="bold">数据传输</text>
                </g>
                
                {/* 雷达图填充 - 优化渐变 */}
                <polygon 
                  points="200,50 336.6,100 336.6,300 200,350 63.4,300 63.4,100" 
                  fill="url(#radarGradient)" 
                  fillOpacity="0.5" 
                  stroke="#3b82f6" 
                  strokeWidth="2" 
                  className="transition-all duration-1000 ease-out group-hover:fill-opacity-0.6"
                />
                <defs>
                  <linearGradient id="radarGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#3b82f6', stopOpacity: 0.6 }} />
                    <stop offset="50%" style={{ stopColor: '#8b5cf6', stopOpacity: 0.4 }} />
                    <stop offset="100%" style={{ stopColor: '#ec4899', stopOpacity: 0.3 }} />
                  </linearGradient>
                </defs>
                
                {/* 动态点 - 增强视觉效果 */}
                {[
                  { x: 200, y: 50, color: '#3b82f6' },
                  { x: 336.6, y: 100, color: '#10b981' },
                  { x: 336.6, y: 300, color: '#f59e0b' },
                  { x: 200, y: 350, color: '#8b5cf6' },
                  { x: 63.4, y: 300, color: '#ec4899' },
                  { x: 63.4, y: 100, color: '#34d399' }
                ].map((point, index) => (
                  <circle 
                    key={index} 
                    cx={point.x} 
                    cy={point.y} 
                    r="6" 
                    fill={point.color} 
                    opacity="0.8"
                    className="animate-pulse"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  />
                ))}
              </svg>
            </div>
          </div>

          {/* 技术指标 - 优化设计 */}
          {isLoading ? (
            <div className="flex justify-center items-center py-20 animate-pulse">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 border-4 border-blue-200 border-t-transparent rounded-full animate-spin"></div>
                <p className="mt-4 text-gray-600 dark:text-gray-300">正在加载核心技术...</p>
              </div>
            </div>
          ) : (
            <div className="space-y-6 animate-slide-up animation-delay-300">
              {skillsData.map((skill, index) => (
                <div 
                  key={index} 
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-x-2 overflow-hidden group cursor-pointer"
                  onClick={() => setSelectedSkill(skill)}
                >
                  {/* 左侧装饰条 */}
                  <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-blue-500 to-purple-500"></div>
                  
                  <div className="p-5 ml-1">
                    <div className="flex justify-between items-center mb-3">
                        <div className="flex items-center">
                          <div className="w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-4 group-hover:bg-blue-200 dark:group-hover:bg-blue-800/50 transition-colors">
                            <svg className="w-5 h-5 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                            </svg>
                          </div>
                          <div>
                            <h3 className="font-semibold text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{skill.name}</h3>
                            <p className="text-sm text-gray-500 dark:text-gray-400">{skill.description}</p>
                          </div>
                        </div>
                        <span className="text-sm font-bold text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform">{counts[skill.name] || 0}%</span>
                      </div>
                      
                      {/* 进度条 - 优化设计 */}
                      <div className="h-2 bg-gray-100 dark:bg-gray-700 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-2000 ease-out group-hover:from-blue-600 group-hover:to-purple-600"
                          style={{ width: `${counts[skill.name] || 0}%` }}
                        ></div>
                      </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* 技术详情模态框 - 优化设计 */}
        {selectedSkill && (
          <div 
            className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50 p-4 animate-fade-in"
            onClick={(e) => {
              // 点击外部区域关闭模态框
              if (e.target === e.currentTarget) {
                setSelectedSkill(null);
              }
            }}
          >
            <div className="bg-white dark:bg-gray-800 rounded-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto animate-slide-up">
              <div className="relative">
                {/* 模态框顶部图片 */}
                <div className="h-60 bg-gradient-to-r from-blue-500 to-purple-500 relative overflow-hidden">
                  <img 
                    src={selectedSkill.details.imageUrl} 
                    alt={selectedSkill.details.title} 
                    className="w-full h-full object-cover opacity-30"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                    <div className="p-8">
                      <h2 className="text-3xl font-bold text-white">{selectedSkill.details.title}</h2>
                    </div>
                  </div>
                </div>
                
                {/* 关闭按钮 - 优化设计 */}
                <button
                  onClick={() => setSelectedSkill(null)}
                  className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm flex items-center justify-center text-gray-800 dark:text-white shadow-lg hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-110"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              <div className="p-8">
                <div className="text-gray-600 dark:text-gray-300 leading-relaxed space-y-8">
                  {/* 技术概述 */}
                  <div className="animate-fade-in">
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white flex items-center">
                      <span className="w-8 h-8 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                      </span>
                      技术概述
                    </h3>
                    {selectedSkill.details.content.map((paragraph, index) => (
                      <p key={index} className="mb-4 leading-relaxed">{paragraph}</p>
                    ))}
                  </div>
                  
                  {/* 应用领域 */}
                  <div className="animate-fade-in" style={{ animationDelay: '0.1s' }}>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white flex items-center">
                      <span className="w-8 h-8 rounded-full bg-indigo-100 dark:bg-indigo-900/30 flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-indigo-600 dark:text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                        </svg>
                      </span>
                      应用领域
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedSkill.details.applications.map((app, index) => (
                        <div key={index} className="flex items-center bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                          <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{app}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* 培训课程（如果有） */}
                  {selectedSkill.details.courses && (
                    <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
                      <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white flex items-center">
                        <span className="w-8 h-8 rounded-full bg-purple-100 dark:bg-purple-900/30 flex items-center justify-center mr-3">
                          <svg className="w-4 h-4 text-purple-600 dark:text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                          </svg>
                        </span>
                        培训课程
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {selectedSkill.details.courses.map((course, index) => (
                          <div key={index} className="flex items-center bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                            <svg className="w-5 h-5 text-purple-600 dark:text-purple-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                            </svg>
                            <span>{course}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                  
                  {/* 技术优势 */}
                  <div className="animate-fade-in" style={{ animationDelay: '0.3s' }}>
                    <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white flex items-center">
                      <span className="w-8 h-8 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mr-3">
                        <svg className="w-4 h-4 text-green-600 dark:text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                        </svg>
                      </span>
                      技术优势
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {selectedSkill.details.advantages.map((advantage, index) => (
                        <div key={index} className="flex items-center bg-gray-50 dark:bg-gray-700/50 p-3 rounded-lg">
                          <svg className="w-5 h-5 text-green-600 dark:text-green-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                          </svg>
                          <span>{advantage}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default Skills
