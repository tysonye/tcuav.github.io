import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper/modules'
import { useRef, useEffect } from 'react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/effect-coverflow'

const Clients = () => {
  // Refs for scroll animations
  const titleRef = useRef<HTMLDivElement>(null)
  const caseCardsRef = useRef<HTMLDivElement>(null)
  const partnersRef = useRef<HTMLDivElement>(null)
  const partnerCardsRef = useRef<HTMLDivElement>(null)
  // 客户案例数据
  const caseStudies = [
    {
      id: 1,
      title: "电力巡检无人机系统",
      industry: "电力行业",
      description: "为某电力公司提供的无人机巡检系统，实现了输电线路的自动化巡检，大幅提高了巡检效率，降低了人工成本和安全风险。",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape&prompt=Professional%20drone%20inspecting%20power%20lines%2C%20modern%20technology%2C%20high%20resolution&sign=2cea00d74201af472d3f6f8be5724d9b",
      videoUrl: "", // 预留视频URL位置
      results: [
        "巡检效率提升80%",
        "人工成本降低60%",
        "发现隐患准确率99%",
        "年维护成本降低50%"
      ]
    },
    {
      id: 2,
      title: "农业植保无人机解决方案",
      industry: "农业领域",
      description: "为农业合作社提供的无人机植保解决方案，实现了精准喷洒、病虫害监测和作物生长分析，提高了农作物产量和质量。",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape&prompt=Agricultural%20drone%20spraying%20crops%2C%20precision%20agriculture%2C%20green%20fields&sign=2cea00d74201af472d3f6f8be5724d9b",
      videoUrl: "", // 预留视频URL位置
      results: [
        "农药使用量减少30%",
        "作物产量提升15%",
        "作业效率提高10倍",
        "水资源节约40%"
      ]
    },
    {
      id: 3,
      title: "城市安防监控系统",
      industry: "安防领域",
      description: "为城市管理部门提供的无人机安防监控系统，实现了城市重点区域的实时监控、应急响应和事件处理，提升了城市管理水平。",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape&prompt=Drone%20monitoring%20city%20skyline%2C%20urban%20security%2C%20modern%20city&sign=2cea00d74201af472d3f6f8be5724d9b",
      videoUrl: "", // 预留视频URL位置
      results: [
        "应急响应时间缩短50%",
        "监控覆盖范围扩大3倍",
        "事件处理效率提升60%",
        "人力投入减少40%"
      ]
    },
    {
      id: 4,
      title: "森林防火监测系统",
      industry: "林业领域",
      description: "为林业部门提供的无人机森林防火监测系统，实现了大面积森林的实时监测、火情预警和应急响应，有效保护了森林资源。",
      imageUrl: "https://space.coze.cn/api/coze_space/gen_image?image_size=landscape&prompt=Drone%20monitoring%20forest%20fire%20prevention%2C%20green%20forest%2C%20aerial%20view&sign=2cea00d74201af472d3f6f8be5724d9b",
      videoUrl: "", // 预留视频URL位置
      results: [
        "火情监测响应时间缩短80%",
        "监测范围扩大5倍",
        "灭火效率提升40%",
        "森林损失减少60%"
      ]
    }
  ];

  // 合作伙伴数据
  const partners = [
    { id: 1, name: "国家电网", logo: "🏢" },
    { id: 2, name: "中国农业科学院", logo: "🔬" },
    { id: 3, name: "公安部第一研究所", logo: "🛡️" },
    { id: 4, name: "中国科学院", logo: "⚗️" },
    { id: 5, name: "清华大学", logo: "🎓" },
    { id: 6, name: "安徽省科技厅", logo: "🏛️" }
  ];

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

    // Observe case cards with staggered animation
    if (caseCardsRef.current) {
      const cards = caseCardsRef.current.querySelectorAll('div');
      cards.forEach((card, index) => {
        card.classList.add(`animation-delay-${index * 100}`);
        observer.observe(card);
      });
    }

    // Observe partners section
    if (partnersRef.current) {
      observer.observe(partnersRef.current);
    }

    // Observe partner cards with staggered animation
    if (partnerCardsRef.current) {
      const cards = partnerCardsRef.current.querySelectorAll('div');
      cards.forEach((card, index) => {
        card.classList.add(`animation-delay-${index * 100}`);
        observer.observe(card);
      });
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section id="clients" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        {/* 标题部分 */}
        <div ref={titleRef} className="text-center mb-16 opacity-0 transform translate-y-8 transition-all duration-700 ease-out">
          <h2 className="section-title">
            客户案例
          </h2>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 rounded-full mx-auto mb-6"></div>
          <p className="section-subtitle">
            我们的无人机解决方案已在多个行业得到成功应用，为客户创造了显著价值
          </p>
        </div>

        {/* 案例演示轮播图 - 增强版 */}
        <div className="mb-24">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 6000, disableOnInteraction: false }}
            effect="coverflow"
            coverflowEffect={{
              rotate: 50,
              stretch: 0,
              depth: 100,
              modifier: 1,
              slideShadows: true
            }}
            speed={1000}
            loop
            slidesPerView={1}
            className="h-[600px] md:h-[700px]"
          >
            {caseStudies.map((caseStudy) => (
              <SwiperSlide key={caseStudy.id} className="relative">
                {/* 背景图片 */}
                <div className="absolute inset-0 bg-black/40 z-10"></div>
                <img 
                  src={caseStudy.imageUrl} 
                  alt={caseStudy.title} 
                  className="w-full h-full object-cover"
                />
                
                {/* 案例信息覆盖层 */}
                <div className="absolute inset-0 z-20 flex flex-col justify-end p-10">
                  <div className="max-w-4xl mx-auto">
                    {/* 行业标签 */}
                    <span className="inline-block px-4 py-1 bg-blue-600 text-white text-sm font-medium rounded-full mb-4 animate-slide-up">
                      {caseStudy.industry}
                    </span>
                    
                    {/* 标题 */}
                    <h3 className="text-3xl md:text-4xl font-bold mb-4 text-white animate-slide-up" style={{ animationDelay: '0.2s' }}>
                      {caseStudy.title}
                    </h3>
                    
                    {/* 描述 */}
                    <p className="text-gray-200 mb-8 text-lg leading-relaxed max-w-3xl animate-slide-up" style={{ animationDelay: '0.4s' }}>
                      {caseStudy.description}
                    </p>
                    
                    {/* 项目成果 */}
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 animate-slide-up" style={{ animationDelay: '0.6s' }}>
                      {caseStudy.results.map((result, index) => (
                        <div key={index} className="bg-white/10 backdrop-blur-md rounded-xl p-4">
                          <div className="flex items-center">
                            <svg className="w-5 h-5 text-blue-400 mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                            </svg>
                            <span className="text-white font-medium">{result}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* 查看详情按钮 */}
                    <div className="mt-8 animate-slide-up" style={{ animationDelay: '0.8s' }}>
                      <button className="px-8 py-3 bg-white text-blue-600 font-semibold rounded-full hover:bg-gray-100 transition-colors transform hover:scale-105">
                        查看详细案例
                      </button>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
        
        {/* 客户案例卡片 - 作为轮播图的补充 */}
        <div ref={caseCardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
          {caseStudies.map((caseStudy) => (
            <div 
              key={caseStudy.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100 dark:border-gray-700 overflow-hidden group cursor-pointer opacity-0 transform translate-y-8 transition-all duration-700 ease-out"
            >
              {/* 案例图片 */}
              <div className="h-32 overflow-hidden relative">
                <img 
                  src={caseStudy.imageUrl} 
                  alt={caseStudy.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <p className="text-sm font-medium">查看案例</p>
                  </div>
                </div>
                
                {/* 行业标签 */}
                <span className="absolute top-3 left-3 px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                  {caseStudy.industry}
                </span>
              </div>
              
              {/* 案例内容 */}
              <div className="p-4">
                <h3 className="text-lg font-bold mb-2 text-gray-800 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {caseStudy.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400 line-clamp-2">
                  {caseStudy.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* 合作伙伴部分 */}
        <div ref={partnersRef} className="opacity-0 transform translate-y-8 transition-all duration-700 ease-out">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400">
              合作伙伴
            </h3>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-purple-500 dark:from-blue-400 dark:to-purple-400 rounded-full mx-auto mb-6"></div>
            <p className="text-gray-600 dark:text-gray-300">
              与行业领先企业和研究机构建立了长期战略合作关系
            </p>
          </div>
          
          {/* 合作伙伴网格 */}
          <div ref={partnerCardsRef} className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {partners.map((partner) => (
              <div 
                key={partner.id}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 flex flex-col items-center justify-center p-6 border border-gray-100 dark:border-gray-700 opacity-0 transform translate-y-8 transition-all duration-700 ease-out"
              >
                <div className="text-4xl mb-3">{partner.logo}</div>
                <h4 className="text-gray-800 dark:text-white font-semibold text-center">{partner.name}</h4>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Clients