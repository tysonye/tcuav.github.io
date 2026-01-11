// GitHub API 配置
const GITHUB_API_URL = 'https://api.github.com'
const OWNER = 'tysonye'
const REPO = 'tcuav.github.io'

// 获取GitHub Issues作为新闻内容
export const fetchNewsFromIssues = async () => {
  try {
    const response = await fetch(`${GITHUB_API_URL}/repos/${OWNER}/${REPO}/issues?state=open&labels=news&sort=created&direction=desc`)
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`)
    }
    
    const issues = await response.json()
    
    // 转换为我们需要的新闻格式
    return issues.map((issue: any) => ({
      id: issue.number,
      title: issue.title,
      content: issue.body,
      date: new Date(issue.created_at).toISOString().split('T')[0],
      imageUrl: issue.user.avatar_url, // 使用用户头像作为默认图片
      category: issue.labels.map((label: any) => label.name).filter((name: string) => name !== 'news')[0] || '公司动态'
    }))
  } catch (error) {
    console.error('Failed to fetch news from GitHub Issues:', error)
    // 返回默认数据，避免页面崩溃
    return []
  }
}

// 获取GitHub Repository Files作为内容
export const fetchContentFromFiles = async (path: string) => {
  try {
    const response = await fetch(`${GITHUB_API_URL}/repos/${OWNER}/${REPO}/contents/${path}?ref=main`)
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`)
    }
    
    const content = await response.json()
    
    // 解码base64内容
    const decodedContent = atob(content.content)
    return decodedContent
  } catch (error) {
    console.error('Failed to fetch content from GitHub Files:', error)
    return null
  }
}

// 获取GitHub Gist作为内容
export const fetchContentFromGist = async (gistId: string, filename: string) => {
  try {
    const response = await fetch(`${GITHUB_API_URL}/gists/${gistId}`)
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`)
    }
    
    const gist = await response.json()
    return gist.files[filename]?.content || null
  } catch (error) {
    console.error('Failed to fetch content from GitHub Gist:', error)
    return null
  }
}