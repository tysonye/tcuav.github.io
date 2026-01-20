import { useState, useEffect, useRef } from 'react'
import { fetchProjectsFromIssues } from '../utils/githubApi'
import { projectCategories } from '../lib/mockData'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules'
// 导入Swiper必要的CSS样式
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-fade'

interface Project {
  id: number
  title: string
  description: string
  imageUrl: string
  technologies: string[]
  link: string
  client: string
  year: string
  category: string
  details: {
    overview: string
    features: string[]
    benefits: string[]
    implementation: string[]
  }
}

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedProject, setSelectedProject] = useState<Project | null>(null)
  const [projectsData, setProjectsData] = useState<Project[]>([])
  const [isLoading, setIsLoading] = useState(true)
  
  // Refs for scroll animations
  const titleRef = useRef<HTMLDivElement>(null)
  const categoryFilterRef = useRef<HTMLDivElement>(null)
  const projectCardsRef = useRef<HTMLDivElement>(null)
  
  // 从GitHub Issues获取项目数据
  // 从URL查询参数获取分类
  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.hash.split('?')[1])
    const categoryFromUrl = urlParams.get('category')
    if (categoryFromUrl && projectCategories.some(cat => cat.id === categoryFromUrl)) {
      setActiveCategory(categoryFromUrl)
    }
  }, [])
  
  // 从GitHub Issues获取项目数据
  useEffect(() => {
    const loadProjects = async () => {
      setIsLoading(true)
      const projects = await fetchProjectsFromIssues()
      setProjectsData(projects)
      setIsLoading(false)
    }
    
    loadProjects()
  }, [])
  
  const filteredProjects = activeCategory === 'all' 
    ? projectsData 
    : projectsData.filter(project => project.category === activeCategory)
  
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

    // Observe category filter
    if (categoryFilterRef.current) {
      observer.observe(categoryFilterRef.current);
    }

    // Observe project cards with staggered animation
    if (projectCardsRef.current) {
      const cards = projectCardsRef.current.querySelectorAll('div');
      cards.forEach((card, index) => {
        card.classList.add(`animation-delay-${index * 100}`);
        observer.observe(card);
      });
    }

    return () => {
      observer.disconnect();
    };
  }, [filteredProjects]);
  
  return (
    <section id="projects" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div ref={titleRef} className="text-center mb-16 opacity-0 transform translate-y-8 transition-all duration-700 ease-out">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block relative">
            无人机方案
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-blue-600 dark:bg-blue-400 w-24 rounded-full"></div>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            浏览我们为各行业提供的专业无人机解决方案
          </p>
        </div>

        {/* 项目分类筛选 */}
        <div ref={categoryFilterRef} className="flex flex-wrap justify-center gap-3 mb-12 opacity-0 transform translate-y-8 transition-all duration-700 ease-out">
          <button
            onClick={() => setActiveCategory('all')}
            className={`px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${activeCategory === 'all' 
              ? 'bg-blue-600 text-white shadow-lg' 
              : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700'}`}
          >
            全部
          </button>
          {projectCategories.map(category => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${activeCategory === category.id 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700'}`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* 加载状态 */}
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
              <p className="mt-4 text-gray-600 dark:text-gray-300">正在加载项目...</p>
            </div>
          </div>
        ) : filteredProjects.length === 0 ? (
          <div className="text-center py-20">
            <svg className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="mt-4 text-gray-600 dark:text-gray-300">暂无项目内容</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              项目内容通过GitHub Issues管理，添加标签"project"和分类标签即可发布项目
            </p>
          </div>
        ) : (
          <>
            {/* 轮播图 */}
            <div className="mb-12 overflow-hidden">
              <Swiper
                modules={[Navigation, Pagination, Autoplay, EffectFade]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 5000, disableOnInteraction: false }}
                effect="fade"
                speed={1000}
                loop
                slidesPerView={1}
                className="h-[500px] md:h-[600px] max-h-[80vh]"
              >
                {filteredProjects.map((project) => (
                  <SwiperSlide key={project.id} className="relative">
                    <div className="absolute inset-0 bg-black/50 z-10"></div>
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 z-20 flex flex-col justify-center items-center text-center p-8">
                      <div className="max-w-3xl mx-auto">
                        <span className="inline-block px-4 py-1 bg-blue-600 text-white text-sm font-medium rounded-full mb-4">
                          {projectCategories.find(cat => cat.id === project.category)?.name || project.category}
                        </span>
                        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">{project.title}</h3>
                        <p className="text-gray-200 mb-6 text-lg leading-relaxed">{project.description}</p>
                        <div className="flex flex-wrap gap-2 justify-center mb-8">
                          {project.technologies.map((tech, techIndex) => (
                            <span 
                              key={techIndex} 
                              className="px-3 py-1 text-xs bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                        <button 
                          className="inline-flex items-center px-6 py-3 bg-white text-blue-600 font-medium rounded-full hover:bg-gray-100 transition-colors"
                          onClick={() => setSelectedProject(project)}
                        >
                          查看详情
                          <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            
            {/* 项目卡片网格 - 保留原有布局，作为轮播图的补充 */}
            <div ref={projectCardsRef} className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <div 
                  key={project.id}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col h-full group cursor-pointer opacity-0 transform translate-y-8 transition-all duration-700 ease-out"
                  onClick={() => setSelectedProject(project)}
                >
                  <div className="relative h-60 overflow-hidden">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4 flex gap-2">
                      <span className="px-3 py-1 bg-blue-600 text-white text-sm font-medium rounded-full">
                        {projectCategories.find(cat => cat.id === project.category)?.name || project.category}
                      </span>
                      <span className="px-3 py-1 bg-gray-800/80 text-white text-sm font-medium rounded-full">
                        {project.year}
                      </span>
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                      <div className="p-6 text-white">
                        <p className="text-sm opacity-90">点击查看详情</p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col flex-grow">
                    <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow leading-relaxed">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mt-4">
                      {project.technologies.map((tech, techIndex) => (
                        <span 
                          key={techIndex} 
                          className="px-3 py-1 text-xs bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </>
        )}

        <div className="text-center mt-12">
          <button 
            className="inline-flex items-center px-6 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 hover:bg-blue-50 dark:hover:bg-blue-900/20 font-semibold rounded-full transition-all duration-300"
            onClick={() => setActiveCategory('all')}
          >
            查看全部方案 
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* 项目详情模态框 */}
        {selectedProject && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative h-96">
                <img
                  src={selectedProject.imageUrl}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-gray-800/90 rounded-full text-gray-800 dark:text-white hover:bg-white dark:hover:bg-gray-700 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-3 mb-6">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium rounded-full">
                    {projectCategories.find(cat => cat.id === selectedProject.category)?.name || selectedProject.category}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm font-medium rounded-full">
                    {selectedProject.client}
                  </span>
                  <span className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm font-medium rounded-full">
                    {selectedProject.year}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 dark:text-white">
                  {selectedProject.title}
                </h2>
                <div className="text-gray-600 dark:text-gray-300 leading-relaxed space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">项目概述</h3>
                    <p>{selectedProject.details.overview}</p>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">核心功能</h3>
                    <ul className="space-y-2">
                      {selectedProject.details.features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">项目收益</h3>
                    <ul className="space-y-2">
                      {selectedProject.details.benefits.map((benefit, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span>{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">技术实现</h3>
                    <ul className="space-y-2">
                      {selectedProject.details.implementation.map((step, index) => (
                        <li key={index} className="flex items-start">
                          <svg className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-1 mr-2 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
                          </svg>
                          <span>{step}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800 dark:text-white">技术栈</h3>
                    <div className="flex flex-wrap gap-2">
                      {selectedProject.technologies.map((tech, index) => (
                        <span key={index} className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 rounded-full text-blue-600 dark:text-blue-400 text-sm font-medium">
                          {tech}
                        </span>
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

export default Projects
