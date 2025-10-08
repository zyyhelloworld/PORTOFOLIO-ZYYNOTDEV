import { Code2, Heart, Lightbulb, Rocket } from 'lucide-react';

function AboutMe() {
  return (
    <div className="min-h-[calc(100vh-120px)] animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-neon-blue mb-4">About Me</h1>
        <p className="text-gray-300 mb-12">Get to know the developer behind Rezzy4You.</p>

        <div className="bg-dark-secondary p-8 md:p-12 rounded-3xl shadow-glow-lg mb-8 border border-neon-blue">
          <div className="flex flex-col md:flex-row gap-8 items-center">
            <img
              src="https://files.catbox.moe/es04cd.jpg"
              alt="Rezzy4You"
              className="w-48 h-48 rounded-full border-4 border-neon-blue shadow-glow object-cover"
            />
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-white mb-4">Rezzy4You</h2>
              <p className="text-gray-300 text-lg leading-relaxed">
                Rezzy4You adalah seorang developer solo yang suka explore HTML, CSS, JavaScript, Python, C++, dan Ruby.
                Passionate tentang menciptakan solusi web yang indah dan fungsional.
              </p>
              <div className="mt-6 inline-block px-6 py-3 bg-neon-blue text-dark-primary font-bold rounded-xl shadow-glow">
                Code. Learn. Create.
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-dark-secondary p-6 rounded-2xl shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-105">
            <div className="p-3 bg-neon-blue rounded-xl w-fit mb-4">
              <Code2 className="w-8 h-8 text-dark-primary" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Clean Code</h3>
            <p className="text-gray-400">
              Writing maintainable and efficient code is my priority. Every line matters.
            </p>
          </div>

          <div className="bg-dark-secondary p-6 rounded-2xl shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-105">
            <div className="p-3 bg-neon-blue rounded-xl w-fit mb-4">
              <Heart className="w-8 h-8 text-dark-primary" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Passion Driven</h3>
            <p className="text-gray-400">
              I love what I do and it shows in every project I take on.
            </p>
          </div>

          <div className="bg-dark-secondary p-6 rounded-2xl shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-105">
            <div className="p-3 bg-neon-blue rounded-xl w-fit mb-4">
              <Lightbulb className="w-8 h-8 text-dark-primary" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Innovative</h3>
            <p className="text-gray-400">
              Always exploring new technologies and finding creative solutions.
            </p>
          </div>

          <div className="bg-dark-secondary p-6 rounded-2xl shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-105">
            <div className="p-3 bg-neon-blue rounded-xl w-fit mb-4">
              <Rocket className="w-8 h-8 text-dark-primary" />
            </div>
            <h3 className="text-xl font-semibold text-white mb-2">Fast Learner</h3>
            <p className="text-gray-400">
              Quick to adapt and master new frameworks, languages, and tools.
            </p>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-dark-secondary to-dark-tertiary p-8 rounded-2xl shadow-glow border border-neon-blue">
          <h2 className="text-2xl font-bold text-neon-blue mb-4">My Journey</h2>
          <p className="text-gray-300 leading-relaxed mb-4">
            Started as a curious beginner, I've grown into a versatile developer with a wide range of skills.
            From front-end design to back-end architecture, I enjoy every aspect of web development.
          </p>
          <p className="text-gray-300 leading-relaxed">
            My goal is to create meaningful projects that not only solve problems but also inspire others
            to learn and grow in their coding journey.
          </p>
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
