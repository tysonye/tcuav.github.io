// 备用空组件，确保在极端情况下显示基本内容
const Empty = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50 flex flex-col items-center justify-center p-4">
      <h1 className="text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-indigo-600 text-center">
        UAV 无人机技术
      </h1>
      <p className="text-xl text-gray-600 max-w-2xl mx-auto text-center mb-10">
        专业无人机技术与解决方案提供商
      </p>
      <div className="mt-16 text-center">
        <a href="mailto:contact@example.com" className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-full shadow-lg transition-all duration-300">
          联系我们
        </a>
      </div>
    </div>
  )
}

export default Empty