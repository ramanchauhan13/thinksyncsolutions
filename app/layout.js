import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/component/Navbar";
import Footer from "@/component/Footer";
import Script from "next/script";
import LiveLocationTracker from "@/component/LiveLocationTracker";

const geistSans = Geist({ variable: "--font-geist-sans", subsets: ["latin"] });
const geistMono = Geist_Mono({ variable: "--font-geist-mono", subsets: ["latin"] });

export const metadata = {
  metadataBase: new URL("https://thinksync.solutions"),
  title: {
    default: "ThinkSync Solutions | Enterprise Custom Software & Web Development",
    template: "%s | ThinkSync Solutions",
  },
  description:
    "ThinkSync Solutions is a premier custom software and full-stack web development agency. Specializing in high-performance MERN applications, custom ERP systems, SaaS platforms, and digital transformation.",
  keywords: [
    "Full Stack Web Development",
    "Custom ERP Software Solutions",
    "MERN Stack Developers",
    "SaaS Development Agency",
    "Custom Software India",
    "Enterprise App Development",
    "ThinkSync Solutions",
    "Software Development Company Uttar Pradesh",
  ],
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "YOUR_GOOGLE_CONSOLE_CODE", // Replace with your actual Search Console string
  },
  icons: {
    icon: "/logo1.png",
    apple: "/logo1.png",
  },
  openGraph: {
    title: "ThinkSync Solutions | Innovative Full-Stack & ERP Development",
    description: "Architecting scalable web applications, custom ERP portals, and SaaS solutions for modern businesses.",
    url: "https://thinksync.solutions",
    siteName: "ThinkSync Solutions",
    images: [
      {
        url: "/logo1.png",
        width: 1200,
        height: 630,
        alt: "ThinkSync Solutions Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "ThinkSync Solutions | Enterprise Custom Software & Web Development",
    description: "Building scalable web platforms, SaaS apps, and tailored ERP solutions.",
    images: ["/logo1.png"],
  },
};

const GA_MEASUREMENT_ID = "G-D08JKVQK80";

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication", // Switched primary schema type to focus on software services nationwide
    "name": "ThinkSync Solutions",
    "image": "https://thinksync.solutions/logo1.png",
    "url": "https://thinksync.solutions",
    "telephone": ["+91-8979937257", "+91-9759862839"],
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "All",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "provider": {
      "@type": "Organization",
      "name": "ThinkSync Solutions",
      "url": "https://thinksync.solutions",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Himgiri Colony, Near Basera",
        "addressLocality": "Moradabad",
        "addressRegion": "UP",
        "postalCode": "244001",
        "addressCountry": "IN"
      },
      "sameAs": [
        "https://www.linkedin.com/company/thinksync-solutions",
        "https://www.instagram.com/thinksync.solutions"
      ]
    }
  };

  return (
    <html lang="en">
      <head>
        {/* ORGANIZATION / SOFTWARE SCHEMA */}
        <Script
          id="structured-data"
          type="application/ld+json"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
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
        <LiveLocationTracker />
        <Navbar />
        <main className="py-6">{children}</main>
        <Footer />
      </body>
    </html>
  );
}