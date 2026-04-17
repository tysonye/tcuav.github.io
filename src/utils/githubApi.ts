// GitHub API 配置
const GITHUB_API_URL = 'https://api.github.com'
const OWNER = 'tysonye'
const REPO = 'tcuav.github.io'

// 通用的Issue获取函数
const fetchIssuesByLabel = async (label: string) => {
  try {
    const response = await fetch(`${GITHUB_API_URL}/repos/${OWNER}/${REPO}/issues?state=open&labels=${label}&sort=created&direction=desc`)
    
    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.status}`)
    }
    
    return await response.json()
  } catch (error) {
    console.error(`Failed to fetch ${label} from GitHub Issues:`, error)
    return []
  }
}

// 解析Issue正文中的JSON数据
const parseIssueContent = (issue: any) => {
  try {
    // 只有当内容看起来是JSON格式时才尝试解析
    if (issue.body && (issue.body.trim().startsWith('{') || issue.body.trim().startsWith('['))) {
      return JSON.parse(issue.body)
    }
    // 如果不是JSON格式，直接返回基本信息
    return {
      title: issue.title,
      content: issue.body,
      id: issue.number,
      date: new Date(issue.created_at).toISOString().split('T')[0],
      imageUrl: issue.user.avatar_url
    }
  } catch (error) {
    console.error('Failed to parse issue content:', error)
    // 如果解析失败，返回基本信息
    return {
      title: issue.title,
      content: issue.body,
      id: issue.number,
      date: new Date(issue.created_at).toISOString().split('T')[0],
      imageUrl: issue.user.avatar_url
    }
  }
}

// 获取GitHub Issues作为新闻内容
export const fetchNewsFromIssues = async () => {
  const issues = await fetchIssuesByLabel('news')
  
  return issues.map((issue: any) => {
    const parsedContent = parseIssueContent(issue)
    const category = issue.labels.map((label: any) => label.name).filter((name: string) => name !== 'news')[0] || '公司动态'
    
    return {
      id: issue.number,
      title: parsedContent.title || issue.title,
      content: parsedContent.content || issue.body,
      date: parsedContent.date || new Date(issue.created_at).toISOString().split('T')[0],
      imageUrl: parsedContent.imageUrl || issue.user.avatar_url,
      category: parsedContent.category || category,
      details: parsedContent.details || {
        fullContent: [parsedContent.content || issue.body],
        tags: [],
        author: '通程智能',
        source: '公司新闻'
      }
    }
  })
}

// 获取GitHub Issues作为项目内容
export const fetchProjectsFromIssues = async () => {
  const issues = await fetchIssuesByLabel('project')
  
  return issues.map((issue: any) => {
    const parsedContent = parseIssueContent(issue)
    const category = issue.labels.map((label: any) => label.name).filter((name: string) => name !== 'project')[0] || '其他'
    
    return {
      id: issue.number,
      title: parsedContent.title || issue.title,
      description: parsedContent.description || issue.body.substring(0, 200) + '...',
      imageUrl: parsedContent.imageUrl || issue.user.avatar_url,
      technologies: parsedContent.technologies || [],
      link: parsedContent.link || '#',
      client: parsedContent.client || '',
      year: parsedContent.year || new Date(issue.created_at).getFullYear().toString(),
      category: parsedContent.category || category,
      details: parsedContent.details || {
        overview: parsedContent.description || issue.body,
        features: [],
        benefits: [],
        implementation: []
      }
    }
  })
}