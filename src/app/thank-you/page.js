'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const ThankYouPage = () => {
  const router = useRouter();

useEffect(() => {
    const timer = setTimeout(() => {
      // Redirect to home
      router.push('/');

      // Force reload after short delay to allow navigation
      setTimeout(() => {
        window.location.href = '/'; // hard reload to reset layout/responsiveness
      }, 100);
    }, 3000); // 3-second wait before redirect

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white px-4">
      <div className="max-w-md text-center">
        <h1 className="text-6xl font-bold mb-4 text-green-400">Thank you!</h1>
        <p className="text-2xl text-gray-300">
          Your message has been successfully submitted. We’ll be in touch shortly.
        </p>
      </div>
    </div>
  );
};

export default ThankYouPage;
