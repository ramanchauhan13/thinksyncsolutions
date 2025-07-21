import "./globals.css";
import Head from 'next/head';
export const metadata = {
  title: 'THINKSYNC SOLUTIONS',
  description: 'Cutting-edge digital experiences',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
        <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className="min-h-screen bg-black text-white relative ">
        {children}
      </body>
    </html>
  );
}