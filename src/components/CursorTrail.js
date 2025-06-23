const CursorTrail = ({ mousePosition }) => {
  return (
    <div 
      className="fixed w-6 h-6 pointer-events-none z-50 mix-blend-difference"
      style={{
        left: mousePosition.x - 12,
        top: mousePosition.y - 12,
        transition: 'all 0.1s ease-out'
      }}
    >
      <div className="w-full h-full bg-white rounded-full opacity-80"></div>
    </div>
  );
};

export default CursorTrail;