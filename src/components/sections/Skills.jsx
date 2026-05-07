import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaReact, FaBootstrap, FaLaravel, FaNodeJs, FaHtml5, FaCss3Alt, FaPhp } from 'react-icons/fa';
import { SiTailwindcss, SiMysql, SiJavascript, SiTypescript } from 'react-icons/si';

gsap.registerPlugin(ScrollTrigger);

const skills = [
  { name: 'React', icon: <FaReact />, color: 'text-blue-400', bg: 'bg-blue-400/10', level: 90 },
  { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: 'text-cyan-400', bg: 'bg-cyan-400/10', level: 92 },
  { name: 'Bootstrap', icon: <FaBootstrap />, color: 'text-purple-400', bg: 'bg-purple-400/10', level: 88 },
  { name: 'Laravel', icon: <FaLaravel />, color: 'text-red-400', bg: 'bg-red-400/10', level: 85 },
  { name: 'Express.js', icon: <FaNodeJs />, color: 'text-green-400', bg: 'bg-green-400/10', level: 80 },
  { name: 'MySQL', icon: <SiMysql />, color: 'text-blue-300', bg: 'bg-blue-300/10', level: 83 },
  { name: 'JavaScript', icon: <SiJavascript />, color: 'text-yellow-400', bg: 'bg-yellow-400/10', level: 92 },
  { name: 'TypeScript', icon: <SiTypescript />, color: 'text-blue-500', bg: 'bg-blue-500/10', level: 78 },
  { name: 'PHP', icon: <FaPhp />, color: 'text-indigo-400', bg: 'bg-indigo-400/10', level: 82 },
  { name: 'HTML', icon: <FaHtml5 />, color: 'text-orange-400', bg: 'bg-orange-400/10', level: 97 },
  { name: 'CSS', icon: <FaCss3Alt />, color: 'text-sky-400', bg: 'bg-sky-400/10', level: 93 },
];

const SkillCard = ({ skill, refEl }) => (
  <div
    ref={refEl}
    className="glass-card p-5 flex flex-col items-center group hover:-translate-y-2 hover:border-white/20 transition-all duration-300"
  >
    <div
      className={`text-4xl mb-3 p-3 rounded-xl ${skill.bg} ${skill.color} transition-transform duration-300 group-hover:scale-110`}
    >
      {skill.icon}
    </div>
    <span className="text-gray-200 font-semibold text-sm mb-3">{skill.name}</span>
    {/* Progress bar */}
    <div className="w-full bg-white/5 rounded-full h-1.5 overflow-hidden">
      <div
        className="h-full rounded-full bg-gradient-to-r from-highlight to-purple-400 skill-bar"
        style={{ '--level': `${skill.level}%` }}
      />
    </div>
    <span className="text-gray-500 text-xs mt-1">{skill.level}%</span>
  </div>
);

const Skills = () => {
  const cardsRef = useRef([]);
  const headingRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(headingRef.current, { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: '#skills', start: 'top 80%' },
    });

    gsap.fromTo(cardsRef.current, { opacity: 0, scale: 0.85, y: 30 }, {
      opacity: 1, scale: 1, y: 0, duration: 0.5, stagger: 0.08,
      ease: 'back.out(1.5)',
      scrollTrigger: { trigger: '#skills', start: 'top 70%' },
      onComplete: () => {
        // Animate skill bars after cards appear
        document.querySelectorAll('.skill-bar').forEach((bar) => {
          bar.style.width = bar.style.getPropertyValue('--level') || '0%';
          bar.style.transition = 'width 1.2s cubic-bezier(0.4,0,0.2,1)';
        });
      },
    });
  }, []);

  return (
    <section id="skills" className="py-28 relative overflow-hidden">
      {/* Decorative gradient */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div ref={headingRef} className="text-center mb-16">
          <p className="text-highlight text-sm font-semibold uppercase tracking-widest mb-3">What I Know</p>
          <h2 className="section-title">
            My <span className="gradient-text">Tech Stack</span>
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto text-base">
            Technologies I use to build seamless, full-stack web applications.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-5">
          {skills.map((skill, index) => (
            <SkillCard
              key={skill.name}
              skill={skill}
              refEl={(el) => (cardsRef.current[index] = el)}
            />
          ))}
        </div>
      </div>

      <style>{`
        .skill-bar { width: 0%; }
      `}</style>
    </section>
  );
};

export default Skills;
