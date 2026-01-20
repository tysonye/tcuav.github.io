import { useEffect } from 'react'

export const useTheme = () => {
  // 强制使用深色模式
  const isDarkMode = true

  useEffect(() => {
    try {
      // 始终添加深色模式类
      document.documentElement.classList.add('dark')
      // 保存深色模式到本地存储
      if (typeof localStorage !== 'undefined') {
        localStorage.setItem('theme', 'dark')
      }
    } catch (error) {
      console.warn('主题设置加载失败，使用深色模式', error)
      // 即使出错也确保添加深色模式类
      document.documentElement.classList.add('dark')
    }
  }, [])

  // 空函数，保持API兼容
  const toggleTheme = () => {}

  return { isDarkMode, toggleTheme }
}