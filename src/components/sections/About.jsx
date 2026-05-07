import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const stats = [
  { value: 2, label: 'Years Experience', suffix: '+' },
  { value: 20, label: 'Projects Completed', suffix: '+' },
  { value: 11, label: 'Technologies', suffix: '' },
  { value: 100, label: 'Client Satisfaction', suffix: '%' },
];

function useCountUp(target, trigger) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!trigger) return;
    let start = 0;
    const duration = 1800;
    const step = Math.ceil(target / (duration / 16));
    const timer = setInterval(() => {
      start += step;
      if (start >= target) {
        setCount(target);
        clearInterval(timer);
      } else {
        setCount(start);
      }
    }, 16);
    return () => clearInterval(timer);
  }, [trigger, target]);
  return count;
}

const StatCard = ({ value, label, suffix, trigger }) => {
  const count = useCountUp(value, trigger);
  return (
    <div className="glass-card p-5 text-center hover:border-highlight/30 transition-colors duration-300">
      <p className="text-3xl font-black gradient-text mb-1">
        {count}{suffix}
      </p>
      <p className="text-gray-400 text-sm">{label}</p>
    </div>
  );
};

const About = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const statsRef = useRef(null);
  const [statsVisible, setStatsVisible] = useState(false);

  useEffect(() => {
    gsap.fromTo(leftRef.current, { opacity: 0, x: -60 }, {
      opacity: 1, x: 0, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: '#about', start: 'top 75%' },
    });
    gsap.fromTo(rightRef.current, { opacity: 0, x: 60 }, {
      opacity: 1, x: 0, duration: 1, ease: 'power3.out',
      scrollTrigger: { trigger: '#about', start: 'top 75%' },
    });

    ScrollTrigger.create({
      trigger: statsRef.current,
      start: 'top 85%',
      onEnter: () => setStatsVisible(true),
    });
  }, []);

  return (
    <section id="about" className="py-28 bg-secondary/30 relative overflow-hidden">
      {/* Decorative grid */}
      <div className="absolute inset-0 grid-bg opacity-50 pointer-events-none" />

      <div className="container mx-auto px-6 md:px-12 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Image Column */}
          <div ref={rightRef} className="w-full lg:w-2/5 flex justify-center">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute -inset-4 rounded-3xl border border-highlight/20 rotate-6" />
              <div className="absolute -inset-4 rounded-3xl border border-accent/20 -rotate-3" />
              <div className="relative w-72 h-80 rounded-2xl overflow-hidden glass-card p-2 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80"
                  alt="Developer Workspace"
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              {/* Floating badge */}
              <div className="absolute -bottom-5 -right-5 glass-card px-4 py-3 shadow-xl border-highlight/20">
                <p className="text-white font-bold text-sm">🚀 Open to Work</p>
              </div>
            </div>
          </div>

          {/* Text Column */}
          <div ref={leftRef} className="w-full lg:w-3/5">
            <p className="text-highlight text-sm font-semibold uppercase tracking-widest mb-3">About Me</p>
            <h2 className="section-title mb-6">
              Passionate About <span className="gradient-text">Building Things</span>
            </h2>
            <p className="text-gray-300 text-lg leading-relaxed mb-5">
              I'm a Full Stack Developer based in <span className="text-white font-semibold">Cairo, Egypt</span>, with a strong
              foundation in modern web technologies. I specialize in building scalable, user-centric
              applications from the ground up using <span className="text-white font-semibold">React</span> and <span className="text-white font-semibold">Laravel</span>.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              My approach prioritizes clean code, intuitive UX, and robust architecture. I thrive in
              dynamic environments where I can leverage both frontend and backend skills to solve
              complex problems and deliver impactful digital products.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {['Problem Solver', 'Team Player', 'Fast Learner', 'Detail-Oriented'].map((tag) => (
                <span key={tag} className="px-3 py-1.5 rounded-full text-sm bg-white/5 border border-white/10 text-gray-300">
                  ✦ {tag}
                </span>
              ))}
            </div>

            <a href="#contact" className="btn-primary">Let's Work Together</a>
          </div>
        </div>

        {/* Stats Row */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-20">
          {stats.map((s) => (
            <StatCard key={s.label} {...s} trigger={statsVisible} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
