// 平滑滚动功能
export const smoothScrollTo = (target: string) => {
  const element = target === '#' ? document.body : document.querySelector(target)
  if (element) {
    const offsetTop = target === '#' ? 0 : element.getBoundingClientRect().top + window.pageYOffset
    const startPosition = window.pageYOffset
    const distance = offsetTop - startPosition
    const duration = 800
    let startTime: number | null = null

    const animation = (currentTime: number) => {
      if (startTime === null) startTime = currentTime
      const timeElapsed = currentTime - startTime
      const run = ease(timeElapsed, startPosition, distance, duration)
      window.scrollTo(0, run)
      if (timeElapsed < duration) requestAnimationFrame(animation)
    }

    // 缓动函数
    const ease = (t: number, b: number, c: number, d: number) => {
      t /= d / 2
      if (t < 1) return c / 2 * t * t + b
      t--
      return -c / 2 * (t * (t - 2) - 1) + b
    }

    requestAnimationFrame(animation)
  }
}

// 为所有锚点链接添加平滑滚动
export const initSmoothScroll = () => {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      e.preventDefault()
      const href = anchor.getAttribute('href') || '#'
      smoothScrollTo(href)
    })
  })
}