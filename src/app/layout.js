export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/logo.png" />

        {/* Google Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "THINKSYNC SOLUTIONS",
              "url": "https://thinksync.solutions",
              "logo": "https://thinksync.solutions/logo.png"
            }),
          }}
        />
      </head>
      <body className="min-h-screen bg-black text-white relative">
        {children}
      </body>
    </html>
  );
}
