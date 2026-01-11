import { useState, useEffect } from 'react'

export const useTheme = () => {
  // 默认使用浅色模式，确保在任何情况下都能正常显示内容
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    try {
      // 检查本地存储或系统偏好
      const savedTheme = localStorage.getItem('theme')
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
      
      if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
        document.documentElement.classList.add('dark')
        setIsDarkMode(true)
      } else {
        // 确保默认是浅色模式，避免在加载失败时出现样式问题
        document.documentElement.classList.remove('dark')
        setIsDarkMode(false)
      }
    } catch (error) {
      console.warn('主题设置加载失败，使用默认浅色模式', error)
      // 即使出错也确保应用能继续运行
      document.documentElement.classList.remove('dark')
      setIsDarkMode(false)
    }
  }, [])

  // 切换主题
  const toggleTheme = () => {
    try {
      if (isDarkMode) {
        document.documentElement.classList.remove('dark')
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem('theme', 'light')
        }
      } else {
        document.documentElement.classList.add('dark')
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem('theme', 'dark')
        }
      }
      setIsDarkMode(!isDarkMode)
    } catch (error) {
      console.warn('主题切换失败', error)
      // 即使出错也尝试更新状态
      setIsDarkMode(prev => !prev)
    }
  }

  return { isDarkMode, toggleTheme }
}