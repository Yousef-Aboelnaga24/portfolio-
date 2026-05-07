import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FiMonitor, FiServer, FiDatabase, FiSmartphone } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    icon: <FiMonitor size={32} />,
    title: 'Frontend Development',
    description:
      'Building fast, responsive, pixel-perfect UIs using React, Tailwind CSS, and Bootstrap with a focus on performance and UX.',
    tags: ['React', 'Tailwind CSS', 'Bootstrap', 'TypeScript'],
    color: 'from-blue-500/20 to-cyan-500/10',
    border: 'hover:border-blue-400/40',
    iconColor: 'text-blue-400',
  },
  {
    icon: <FiServer size={32} />,
    title: 'Backend Development',
    description:
      'Crafting secure, scalable RESTful APIs and server-side logic using Laravel and Express.js with proper authentication.',
    tags: ['Laravel', 'Express.js', 'PHP', 'REST API'],
    color: 'from-red-500/20 to-orange-500/10',
    border: 'hover:border-red-400/40',
    iconColor: 'text-red-400',
  },
  {
    icon: <FiDatabase size={32} />,
    title: 'Database Design',
    description:
      'Designing efficient relational database schemas, writing optimized queries, and managing data integrity with MySQL.',
    tags: ['MySQL', 'Schema Design', 'Eloquent ORM', 'Queries'],
    color: 'from-green-500/20 to-emerald-500/10',
    border: 'hover:border-green-400/40',
    iconColor: 'text-green-400',
  },
  {
    icon: <FiSmartphone size={32} />,
    title: 'Responsive Design',
    description:
      'Delivering fully responsive, mobile-first designs that look great on every screen size and device.',
    tags: ['Mobile-First', 'CSS', 'HTML', 'Cross-Browser'],
    color: 'from-purple-500/20 to-pink-500/10',
    border: 'hover:border-purple-400/40',
    iconColor: 'text-purple-400',
  },
];

const Services = () => {
  const cardsRef = useRef([]);
  const headingRef = useRef(null);

  useEffect(() => {
    gsap.fromTo(headingRef.current, { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: '#services', start: 'top 80%' },
    });

    gsap.fromTo(cardsRef.current, { opacity: 0, y: 50 }, {
      opacity: 1, y: 0, duration: 0.7, stagger: 0.15, ease: 'power3.out',
      scrollTrigger: { trigger: '#services', start: 'top 70%' },
    });
  }, []);

  return (
    <section id="services" className="relative overflow-hidden py-28 bg-secondary/30">
      <div className="absolute inset-0 pointer-events-none grid-bg opacity-30" />
      <div className="absolute top-0 w-3/4 h-px -translate-x-1/2 left-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container relative z-10 px-6 mx-auto md:px-12">
        <div ref={headingRef} className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold tracking-widest uppercase text-highlight">What I Offer</p>
          <h2 className="section-title">
            My <span className="gradient-text">Services</span>
          </h2>
          <p className="max-w-xl mx-auto text-base text-gray-400">
            End-to-end web development services, from pixel-perfect UIs to robust backend systems.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-7">
          {services.map((service, index) => (
            <div
              key={service.title}
              ref={(el) => (cardsRef.current[index] = el)}
              className={`glass-card p-7 group transition-all duration-300 hover:-translate-y-1 ${service.border} relative overflow-hidden`}
            >
              {/* Gradient glow background */}
              <div className={`absolute inset-0 bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl`} />

              <div className="relative z-10">
                <div className={`${service.iconColor} mb-5 transition-transform duration-300 group-hover:scale-110 w-fit`}>
                  {service.icon}
                </div>
                <h3 className="mb-3 text-xl font-bold text-white">{service.title}</h3>
                <p className="mb-5 text-sm leading-relaxed text-gray-400">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 text-xs font-semibold rounded-lg bg-white/5 border border-white/10 text-gray-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
