'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const ThankYouPage = () => {
  const router = useRouter();

  useEffect(() => {
    const timer = setTimeout(() => {
      router.push('/');
    }, 3000); // 2-second redirect

    return () => clearTimeout(timer); // Cleanup on unmount
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-950 text-white px-4">
      <div className="max-w-md text-center">
        <h1 className="text-4xl font-bold mb-4 text-green-400">Thank you!</h1>
        <p className="text-lg text-gray-300">
          Your message has been successfully submitted. We’ll be in touch shortly.
        </p>
      </div>
    </div>
  );
};

export default ThankYouPage;
