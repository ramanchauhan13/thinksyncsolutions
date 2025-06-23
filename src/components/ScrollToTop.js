import { ArrowUp } from 'lucide-react';

const ScrollToTop = ({ scrollY }) => {
  return (
    <>
      {scrollY > 100 && (
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          className="fixed bottom-8 right-8 w-12 h-12 bg-gradient-to-r from-cyan-600 to-purple-600 rounded-full flex items-center justify-center text-white hover:from-cyan-500 hover:to-purple-500 transition-all duration-300 hover:shadow-2xl hover:shadow-purple-500/25 z-30"
        >
          <ArrowUp size={20} />
        </button>
      )}
    </>
  );
};

export default ScrollToTop;