import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import Script from "next/script";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://thinksync.solutions"),
  title: {
    default: "ThinkSync Solutions | Best Web Development Company in Moradabad",
    template: "%s | ThinkSync Solutions",
  },
  description:
    "ThinkSync Solutions is the top-rated IT company in Moradabad. We specialize in custom ERP portals, MERN stack web development, and digital transformation.",
  keywords: [
    "Web Development Moradabad",
    "ERP Software India",
    "ThinkSync Solutions",
    "Best IT Company Moradabad",
    "Software Development Company Uttar Pradesh",
  ],
  verification: {
    google: "YOUR_GOOGLE_CONSOLE_CODE", // Replace this with your actual code from Search Console
  },
  openGraph: {
    title: "ThinkSync Solutions | Innovative Tech Partner",
    description: "Driving business growth through synchronized technology solutions in Moradabad.",
    url: "https://thinksync.solutions",
    siteName: "ThinkSync Solutions",
    images: [{ url: "/og-image.png", width: 1200, height: 630 }],
    locale: "en_IN",
    type: "website",
  },
};

const GA_MEASUREMENT_ID = "G-D08JKVQK80";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* LOCAL BUSINESS SCHEMA */}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "ProfessionalService",
              "name": "ThinkSync Solutions",
              "image": "https://thinksync.solutions/logo.png",
              "url": "https://thinksync.solutions",
              "telephone": ["+91-8979937257", "+91-9759862839"],
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Himgiri Colony, Near Basera",
                "addressLocality": "Moradabad",
                "addressRegion": "UP",
                "postalCode": "244001",
                "addressCountry": "IN"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": 28.8678,
                "longitude": 78.7392
              },
              "openingHoursSpecification": {
                "@type": "OpeningHoursSpecification",
                "dayOfWeek": [
                  "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"
                ],
                "opens": "00:00",
                "closes": "23:59"
              },
              "sameAs": [
                "https://www.linkedin.com/company/thinksync-solutions",
                "https://www.instagram.com/thinksync.solutions"
              ]
            }),
          }}
        />

        {/* Google Analytics Script */}
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}');
          `}
        </Script>
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}