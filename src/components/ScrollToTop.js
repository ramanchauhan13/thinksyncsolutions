import { ArrowUp } from 'lucide-react';

const ScrollToTop = ({ scrollY }) => {
  return (
    <>
      {scrollY > 100 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-blue-600 via-blue-800 to-gray-400 rounded-full flex items-center justify-center text-white hover:from-blue-700 hover:via-blue-900 hover:to-gray-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 z-30"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;