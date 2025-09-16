/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.ucea-convention.org/', // ✅ 改成你的正式網址
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: 'weekly',
  priority: 0.7,
};
