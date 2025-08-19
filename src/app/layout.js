import './globals.css';
import Script from 'next/script';

export const metadata = {
   metadataBase: new URL("https://thinksync.solutions"),
  title: 'Thinksync Solutions | Best Web Development Company in Moradabad',
  description:
    'Thinksync Solutions is a top web development company in Moradabad. We build custom ERP portals, modern websites, and software solutions for businesses.',
  keywords: [
    'ThinkSync Solutions',
    'Web Development Moradabad',
    'Best Web Development Company in Moradabad',
    'Website Designing Company in Moradabad',
    'ERP Portal Development',
    'Software Development Company',
    'IT Solutions Provider in India',
    'Business Website Development',
    'React Development Company',
    'Next.js Website Development',
    'Mobile App Development Moradabad',
    'Ecommerce Website Moradabad',
    'Next.js Development',
    'React Development',
    'Custom ERP Software',
    'SEO Services in Moradabad',
    'Top IT Company Moradabad',
    'Web App Development Company',
    'Startup Website Development',
    'Professional UI UX Design India'
  ].join(', '),
  icons: {
    icon: '/logo.png',
  },
  openGraph: {
    title: 'Thinksync Solutions | Web Development & ERP Company',
    description:
      'Thinksync Solutions is a trusted IT company in Moradabad offering web development, ERP software, and business IT solutions across India.',
    images:[
      {
        url: "/logo.png",
        width: 1200,
        height:630,
        alt: "ThinkSync Solutions"
      }
    ],
    url: 'https://thinksync.solutions',
    siteName: 'Thinksync Solutions',
    type: 'website',
    locale: 'en_IN',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
  <head>
    <meta name="keywords" content={metadata.keywords} />
    <meta name="keywords" content={metadata.keywords} />
  <meta property="og:title" content="Thinksync Solutions | Web Development & ERP Company" />
  <meta property="og:description" content="Thinksync Solutions is a trusted IT company in Moradabad offering web development, ERP software, and business IT solutions across India." />
  <meta property="og:image" content="https://thinksync.solutions/logo.png" />
  <meta property="og:url" content="https://thinksync.solutions" />
  <meta property="og:type" content="website" />
  <meta property="og:site_name" content="Thinksync Solutions" />
  <meta property="og:locale" content="en_IN" />
  
    <Script
      id="local-business-schema"
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'LocalBusiness',
          name: 'Thinksync Solutions',
          image: 'https://thinksync.solutions/logo.png',
          url: 'https://thinksync.solutions',
          telephone: '+91-8979937257',
          email: 'team.thinksync.solutions@gmail.com',
          address: {
            '@type': 'PostalAddress',
            streetAddress: 'Himgiri Colony, Near Basera',
            addressLocality: 'Moradabad',
            addressRegion: 'Uttar Pradesh',
            postalCode: '244001',
            addressCountry: 'IN',
          },
          description:
            'Thinksync Solutions is the best web development and IT solutions company in Moradabad. We specialize in ERP portals, business websites, and modern software solutions.',
          areaServed: 'Moradabad',
          priceRange: '$$',
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
