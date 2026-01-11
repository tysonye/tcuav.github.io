import { useState } from 'react'

const AdminGuide = () => {
  const [activeTab, setActiveTab] = useState('create')
  
  return (
    <section id="admin" className="py-20 px-4 bg-white dark:bg-gray-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 inline-block relative">
            新闻管理指南
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 h-1 bg-blue-600 dark:bg-blue-400 w-24 rounded-full"></div>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            通过GitHub Issues管理您的新闻内容
          </p>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden">
          {/* 标签页导航 */}
          <div className="flex flex-wrap border-b border-gray-200 dark:border-gray-700">
            <button
              className={`px-6 py-4 font-medium transition-colors duration-300 ${activeTab === 'create' 
                ? 'border-b-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400' 
                : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'}`}
              onClick={() => setActiveTab('create')}
            >
              创建新闻
            </button>
            <button
              className={`px-6 py-4 font-medium transition-colors duration-300 ${activeTab === 'edit' 
                ? 'border-b-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400' 
                : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'}`}
              onClick={() => setActiveTab('edit')}
            >
              编辑新闻
            </button>
            <button
              className={`px-6 py-4 font-medium transition-colors duration-300 ${activeTab === 'delete' 
                ? 'border-b-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400' 
                : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'}`}
              onClick={() => setActiveTab('delete')}
            >
              删除新闻
            </button>
            <button
              className={`px-6 py-4 font-medium transition-colors duration-300 ${activeTab === 'categories' 
                ? 'border-b-2 border-blue-600 text-blue-600 dark:border-blue-400 dark:text-blue-400' 
                : 'text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400'}`}
              onClick={() => setActiveTab('categories')}
            >
              分类管理
            </button>
          </div>
          
          {/* 标签页内容 */}
          <div className="p-8">
            {activeTab === 'create' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">创建新闻步骤</h3>
                <ol className="space-y-4">
                  <li className="flex">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold mr-4">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">登录GitHub</h4>
                      <p className="text-gray-600 dark:text-gray-300">确保您已登录到GitHub账户，并且是本仓库的所有者或合作者。</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold mr-4">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">打开Issues页面</h4>
                      <p className="text-gray-600 dark:text-gray-300">访问仓库的Issues页面：<a href="https://github.com/tysonye/tcuav.github.io/issues" target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">https://github.com/tysonye/tcuav.github.io/issues</a></p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold mr-4">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">创建新Issue</h4>
                      <p className="text-gray-600 dark:text-gray-300">点击"New issue"按钮，进入创建Issue页面。</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold mr-4">4</div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">填写新闻内容</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        <strong>标题：</strong>填写新闻标题<br />
                        <strong>内容：</strong>填写新闻正文，可以使用Markdown格式<br />
                        <strong>标签：</strong>添加标签"news"，以及一个分类标签（如"公司动态"、"技术研发"等）<br />
                        <strong>指派：</strong>可选，指派给特定用户
                      </p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold mr-4">5</div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">发布新闻</h4>
                      <p className="text-gray-600 dark:text-gray-300">点击"Submit new issue"按钮，新闻将自动发布到网站上。</p>
                    </div>
                  </li>
                </ol>
              </div>
            )}
            
            {activeTab === 'edit' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">编辑新闻步骤</h3>
                <ol className="space-y-4">
                  <li className="flex">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold mr-4">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">打开Issues页面</h4>
                      <p className="text-gray-600 dark:text-gray-300">访问仓库的Issues页面，找到要编辑的新闻Issue。</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold mr-4">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">编辑Issue</h4>
                      <p className="text-gray-600 dark:text-gray-300">点击Issue标题进入详情页面，然后点击"Edit"按钮编辑内容。</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold mr-4">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">保存修改</h4>
                      <p className="text-gray-600 dark:text-gray-300">修改完成后，点击"Update comment"按钮保存修改。</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold mr-4">4</div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">查看更新</h4>
                      <p className="text-gray-600 dark:text-gray-300">修改后的新闻将自动更新到网站上，刷新页面即可查看。</p>
                    </div>
                  </li>
                </ol>
              </div>
            )}
            
            {activeTab === 'delete' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">删除新闻步骤</h3>
                <ol className="space-y-4">
                  <li className="flex">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold mr-4">1</div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">打开Issues页面</h4>
                      <p className="text-gray-600 dark:text-gray-300">访问仓库的Issues页面，找到要删除的新闻Issue。</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold mr-4">2</div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">关闭Issue</h4>
                      <p className="text-gray-600 dark:text-gray-300">在Issue详情页面，点击"Close issue"按钮关闭Issue。</p>
                    </div>
                  </li>
                  <li className="flex">
                    <div className="flex-shrink-0 w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold mr-4">3</div>
                    <div>
                      <h4 className="font-semibold text-gray-800 dark:text-white">确认删除</h4>
                      <p className="text-gray-600 dark:text-gray-300">关闭的Issue将不再显示在网站上，相当于删除了新闻。</p>
                    </div>
                  </li>
                </ol>
              </div>
            )}
            
            {activeTab === 'categories' && (
              <div className="space-y-6">
                <h3 className="text-2xl font-bold text-gray-800 dark:text-white">分类管理</h3>
                <div className="space-y-4">
                  <p className="text-gray-600 dark:text-gray-300">
                    新闻分类通过GitHub Issue的标签进行管理。每个新闻可以添加一个分类标签，网站会自动生成分类列表。
                  </p>
                  <h4 className="font-semibold text-gray-800 dark:text-white">创建新分类</h4>
                  <ol className="space-y-3">
                    <li className="flex">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold mr-3">1</div>
                      <p className="text-gray-600 dark:text-gray-300">在创建或编辑Issue时，点击"Labels"按钮</p>
                    </li>
                    <li className="flex">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold mr-3">2</div>
                      <p className="text-gray-600 dark:text-gray-300">在搜索框中输入新分类名称，然后点击"Create new label"</p>
                    </li>
                    <li className="flex">
                      <div className="flex-shrink-0 w-6 h-6 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-600 dark:text-blue-400 font-bold mr-3">3</div>
                      <p className="text-gray-600 dark:text-gray-300">设置标签颜色，然后点击"Create label"</p>
                    </li>
                  </ol>
                  <h4 className="font-semibold text-gray-800 dark:text-white mt-6">常用分类建议</h4>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {['公司动态', '技术研发', '合作新闻', '资质荣誉', '行业资讯', '产品发布'].map(category => (
                      <div key={category} className="px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg">
                        {category}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}

export default AdminGuide