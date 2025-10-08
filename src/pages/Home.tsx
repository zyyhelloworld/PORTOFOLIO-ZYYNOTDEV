function Home() {
  return (
    <div className="min-h-[calc(100vh-120px)] flex flex-col items-center justify-center animate-fade-in">
      <div className="text-center space-y-8 max-w-4xl mx-auto px-4">
        <div className="relative">
          <img
            src="https://files.catbox.moe/es04cd.jpg"
            alt="Rezzy4You Logo"
            className="w-64 h-64 mx-auto rounded-full shadow-glow-lg border-4 border-neon-blue object-cover hover:scale-105 transition-transform duration-500"
          />
          <div className="absolute inset-0 rounded-full bg-neon-blue opacity-20 blur-3xl"></div>
        </div>

        <div className="space-y-4">
          <h1 className="text-6xl md:text-7xl font-bold text-neon-blue animate-pulse">
            Rezzy4You
          </h1>
          <h2 className="text-3xl md:text-4xl font-semibold text-white">
            Welcome to Rezzy4You Portfolio
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Explore my journey as a solo developer, discover free resources, source codes, creative content, and more.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-dark-secondary p-6 rounded-2xl shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-105">
            <div className="text-neon-blue text-4xl font-bold mb-2">6+</div>
            <p className="text-gray-300">Skills Mastered</p>
          </div>
          <div className="bg-dark-secondary p-6 rounded-2xl shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-105">
            <div className="text-neon-blue text-4xl font-bold mb-2">50+</div>
            <p className="text-gray-300">Projects Completed</p>
          </div>
          <div className="bg-dark-secondary p-6 rounded-2xl shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-105">
            <div className="text-neon-blue text-4xl font-bold mb-2">100%</div>
            <p className="text-gray-300">Passion Driven</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
