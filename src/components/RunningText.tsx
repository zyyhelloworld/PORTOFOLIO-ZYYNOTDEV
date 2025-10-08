function RunningText() {
  return (
    <div className="fixed top-0 left-0 right-0 z-50 bg-dark-secondary py-3 overflow-hidden border-b border-neon-blue">
      <div className="animate-marquee whitespace-nowrap inline-block">
        <span className="text-neon-blue font-bold text-lg mx-8">REZZY4YOU MODE SOLO</span>
        <span className="text-neon-blue font-bold text-lg mx-8">REZZY4YOU MODE SOLO</span>
        <span className="text-neon-blue font-bold text-lg mx-8">REZZY4YOU MODE SOLO</span>
        <span className="text-neon-blue font-bold text-lg mx-8">REZZY4YOU MODE SOLO</span>
        <span className="text-neon-blue font-bold text-lg mx-8">REZZY4YOU MODE SOLO</span>
      </div>
      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          animation: marquee 15s linear infinite;
        }
      `}</style>
    </div>
  );
}

export default RunningText;
