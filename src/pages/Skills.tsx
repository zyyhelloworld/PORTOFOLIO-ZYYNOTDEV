import { useEffect, useState } from 'react';

interface Skill {
  name: string;
  percentage: number;
  color: string;
}

function Skills() {
  const [animate, setAnimate] = useState(false);

  const skills: Skill[] = [
    { name: 'HTML', percentage: 95, color: 'from-blue-500 to-cyan-400' },
    { name: 'CSS', percentage: 90, color: 'from-blue-400 to-cyan-300' },
    { name: 'JavaScript', percentage: 90, color: 'from-cyan-500 to-blue-400' },
    { name: 'Python', percentage: 80, color: 'from-cyan-400 to-blue-300' },
    { name: 'C++', percentage: 18, color: 'from-blue-300 to-cyan-200' },
    { name: 'Ruby', percentage: 13, color: 'from-cyan-300 to-blue-200' },
  ];

  useEffect(() => {
    setTimeout(() => setAnimate(true), 100);
  }, []);

  return (
    <div className="min-h-[calc(100vh-120px)] animate-fade-in">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-neon-blue mb-4">My Skills</h1>
        <p className="text-gray-300 mb-12">Technologies and languages I work with.</p>

        <div className="space-y-8">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-dark-secondary p-6 rounded-2xl shadow-glow hover:shadow-glow-lg transition-all duration-300"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex justify-between items-center mb-3">
                <h3 className="text-xl font-semibold text-white">{skill.name}</h3>
                <span className="text-neon-blue font-bold text-lg">{skill.percentage}%</span>
              </div>

              <div className="w-full h-4 bg-dark-tertiary rounded-full overflow-hidden">
                <div
                  className={`h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-1500 ease-out shadow-glow`}
                  style={{
                    width: animate ? `${skill.percentage}%` : '0%',
                    transitionDelay: `${index * 150}ms`,
                  }}
                />
              </div>

              <div className="mt-3 flex gap-2 flex-wrap">
                {skill.percentage >= 80 && (
                  <span className="px-3 py-1 bg-neon-blue bg-opacity-20 text-neon-blue text-xs rounded-full border border-neon-blue">
                    Expert
                  </span>
                )}
                {skill.percentage >= 50 && skill.percentage < 80 && (
                  <span className="px-3 py-1 bg-neon-blue bg-opacity-20 text-neon-blue text-xs rounded-full border border-neon-blue">
                    Intermediate
                  </span>
                )}
                {skill.percentage < 50 && (
                  <span className="px-3 py-1 bg-neon-blue bg-opacity-20 text-neon-blue text-xs rounded-full border border-neon-blue">
                    Learning
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-dark-secondary p-8 rounded-2xl shadow-glow border border-neon-blue">
          <h2 className="text-2xl font-bold text-neon-blue mb-4">Continuous Learning</h2>
          <p className="text-gray-300">
            I believe in continuous improvement and always strive to learn new technologies and enhance my existing skills.
            Every project is an opportunity to grow and master my craft.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Skills;
