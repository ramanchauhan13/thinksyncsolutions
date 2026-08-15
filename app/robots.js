// app/robots.js

export default function robots() {
  const baseUrl = "https://thinksync.in";

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: [
          "/api/",       // Protect backend API route handlers from crawler budget waste
          "/private/",   // Block internal/private routes
          "/admin/",     // Block admin dashboards if present
        ],
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}