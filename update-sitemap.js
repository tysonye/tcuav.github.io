import fs from 'fs';

// 读取sitemap.xml文件
const sitemapPath = './sitemap.xml';
let sitemapContent = fs.readFileSync(sitemapPath, 'utf8');

// 获取当前日期（YYYY-MM-DD格式）
const currentDate = new Date().toISOString().split('T')[0];

// 替换所有lastmod日期
const updatedContent = sitemapContent.replace(/<lastmod>\d{4}-\d{2}-\d{2}<\/lastmod>/g, `<lastmod>${currentDate}</lastmod>`);

// 写入更新后的sitemap.xml文件
fs.writeFileSync(sitemapPath, updatedContent, 'utf8');

console.log('Sitemap.xml lastmod dates updated to:', currentDate);
