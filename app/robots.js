// app/robots.js

export default function robots() {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: '/private/', // Block any private folders if you have them
    },
    sitemap: 'https://thinksync.solutions/sitemap.xml',
  };
}