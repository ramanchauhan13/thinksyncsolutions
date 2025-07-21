import "./globals.css";
export const metadata = {
  title: 'THINKSYNC SOLUTIONS',
  description: 'We build custom software, ERP Portals, and modern web apps to accelerate your digital growth.',
  icons: {
    icon: '/favicon.ico',
  },
}


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen bg-black text-white relative ">
        {children}
      </body>
    </html>
  );
}