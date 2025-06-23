import "./globals.css";

export const metadata = {
  title: 'THINKSYNC SOLUTIONS',
  description: 'Cutting-edge digital experiences',
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
