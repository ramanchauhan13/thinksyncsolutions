export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '*',
      disallow: '/private/',
    },
    sitemap: 'https://thinksync.solutions/sitemap.xml',
  }
}