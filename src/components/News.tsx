import { useState, useEffect } from 'react'
import { fetchNewsFromIssues } from '../utils/githubApi'

interface NewsItem {
  id: number
  title: string
  content: string
  date: string
  imageUrl: string
  category: string
  details: {
    fullContent: string[]
    tags: string[]
    author: string
    source: string
  }
}

const News = () => {
  const [activeCategory, setActiveCategory] = useState('all')
  const [selectedNews, setSelectedNews] = useState<NewsItem | null>(null)
  const [newsData, setNewsData] = useState<NewsItem[]>([])
  const [isLoading, setIsLoading] = useState(true)
  
  // 从GitHub Issues获取新闻数据
  useEffect(() => {
    const loadNews = async () => {
      setIsLoading(true)
      const news = await fetchNewsFromIssues()
      setNewsData(news)
      setIsLoading(false)
    }
    
    loadNews()
  }, [])
  
  // 获取所有分类（包括动态生成的分类）
  const categories = ['all', ...Array.from(new Set(newsData.map(news => news.category)))]
  
  const filteredNews = activeCategory === 'all' 
    ? newsData 
    : newsData.filter(news => news.category === activeCategory)
  
  return (
    <section id="news" className="py-20 px-4 bg-gray-50 dark:bg-gray-800/50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block relative">
            新闻动态
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-blue-600 dark:bg-blue-400 w-24 rounded-full"></div>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            了解通程智能科技的最新动态和行业资讯
          </p>
        </div>
        
        {/* 新闻分类筛选 */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map(category => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 transform hover:scale-105 ${activeCategory === category 
                ? 'bg-blue-600 text-white shadow-lg' 
                : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-50 dark:hover:bg-gray-700'}`}
            >
              {category === 'all' ? '全部' : category}
            </button>
          ))}
        </div>
        
        {/* 加载状态 */}
        {isLoading ? (
          <div className="flex justify-center items-center py-20">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 border-4 border-blue-200 border-t-blue-600 rounded-full animate-spin"></div>
              <p className="mt-4 text-gray-600 dark:text-gray-300">正在加载新闻...</p>
            </div>
          </div>
        ) : filteredNews.length === 0 ? (
          <div className="text-center py-20">
            <svg className="w-16 h-16 mx-auto text-gray-300 dark:text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
            <p className="mt-4 text-gray-600 dark:text-gray-300">暂无新闻内容</p>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-2">
              新闻内容通过GitHub Issues管理，添加标签"news"和分类标签即可发布新闻
            </p>
          </div>
        ) : (
          /* 新闻列表 */
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredNews.map(news => (
              <div
                key={news.id}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
                onClick={() => setSelectedNews(news)}
              >
                <div className="relative h-52 overflow-hidden">
                  <img
                    src={news.imageUrl}
                    alt={news.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 px-3 py-1 bg-blue-600 text-white text-xs font-medium rounded-full">
                    {news.category}
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-sm text-gray-500 dark:text-gray-400 mb-2">
                    {news.date}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-800 dark:text-white line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 line-clamp-3 mb-4">
                    {news.content}
                  </p>
                  <button className="text-blue-600 dark:text-blue-400 font-medium flex items-center hover:underline">
                    阅读更多
                    <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
        
        {/* 新闻详情模态框 */}
        {selectedNews && (
          <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
            <div className="bg-white dark:bg-gray-800 rounded-xl max-w-3xl w-full max-h-[90vh] overflow-y-auto">
              <div className="relative h-80">
                <img
                  src={selectedNews.imageUrl}
                  alt={selectedNews.title}
                  className="w-full h-full object-cover"
                />
                <button
                  onClick={() => setSelectedNews(null)}
                  className="absolute top-4 right-4 p-2 bg-white/90 dark:bg-gray-800/90 rounded-full text-gray-800 dark:text-white hover:bg-white dark:hover:bg-gray-700 transition-colors"
                >
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 text-sm font-medium rounded-full">
                    {selectedNews.category}
                  </span>
                  <span className="text-sm text-gray-500 dark:text-gray-400">
                    {selectedNews.date}
                  </span>
                </div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-800 dark:text-white">
                  {selectedNews.title}
                </h2>
                <div className="text-gray-600 dark:text-gray-300 leading-relaxed space-y-4">
                  {selectedNews.details.fullContent.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                </div>
                <div className="mt-8 flex flex-wrap gap-2">
                  {selectedNews.details.tags.map((tag, index) => (
                    <span key={index} className="px-3 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 text-sm font-medium rounded-full">
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="mt-6 text-sm text-gray-500 dark:text-gray-400">
                  <p>作者: {selectedNews.details.author}</p>
                  <p>来源: {selectedNews.details.source}</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  )
}

export default News
