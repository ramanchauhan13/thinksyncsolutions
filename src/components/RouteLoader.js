'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';

NProgress.configure({ showSpinner: false, trickleSpeed: 200 });

export default function RouteLoader() {
  const pathname = usePathname();

  useEffect(() => {
    const handleClick = (e) => {
      const link = e.target.closest('a[href]');
      if (link && link.origin === window.location.origin) {
        // Internal link clicked
        NProgress.start();
      }
    };

    window.addEventListener('click', handleClick);

    return () => {
      window.removeEventListener('click', handleClick);
    };
  }, []);

  useEffect(() => {
    // stop loader once route has changed
    NProgress.done();
  }, [pathname]);

  return null;
}
