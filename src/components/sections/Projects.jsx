import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaExternalLinkAlt, FaGithub } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const allProjects = [
  {
    title: 'E-Commerce Platform',
    description: 'A full-featured e-commerce platform with cart, checkout, admin dashboard, order tracking, and Sanctum authentication.',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&w=800&q=80',
    tech: ['React', 'Tailwind', 'Laravel', 'MySQL'],
    category: 'Full Stack',
    demo: '#',
    github: '#',
  },
  {
    title: 'Gym Management System',
    description: 'A robust system for managing gym members, subscriptions, workout plans, and equipment inventory.',
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
    tech: ['React', 'Bootstrap', 'Express.js', 'MySQL'],
    category: 'Full Stack',
    demo: '#',
    github: '#',
  },
  {
    title: 'Real Estate Listings',
    description: 'A property listing app with advanced search, filtering, map integration, and user authentication.',
    image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
    tech: ['TypeScript', 'Tailwind', 'PHP', 'MySQL'],
    category: 'Frontend',
    demo: '#',
    github: '#',
  },
  {
    title: 'Task Management App',
    description: 'A Kanban-style project management tool with drag-and-drop, team collaboration, and real-time updates.',
    image: 'https://images.unsplash.com/photo-1611224885990-ab7363d1f2b9?auto=format&fit=crop&w=800&q=80',
    tech: ['React', 'TypeScript', 'Express.js', 'MySQL'],
    category: 'Full Stack',
    demo: '#',
    github: '#',
  },
  {
    title: 'Blog & CMS',
    description: 'A content management system with a rich text editor, categories, tags, and a public-facing blog.',
    image: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80',
    tech: ['Laravel', 'PHP', 'MySQL', 'Bootstrap'],
    category: 'Backend',
    demo: '#',
    github: '#',
  },
  {
    title: 'Portfolio Template',
    description: 'A sleek, animated portfolio template built with React and Tailwind CSS featuring GSAP animations.',
    image: 'https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&fit=crop&w=800&q=80',
    tech: ['React', 'Tailwind', 'GSAP', 'JavaScript'],
    category: 'Frontend',
    demo: '#',
    github: '#',
  },
];

const FILTERS = ['All', 'Full Stack', 'Frontend', 'Backend'];

const Projects = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const [filter, setFilter] = useState('All');

  const filtered = filter === 'All' ? allProjects : allProjects.filter((p) => p.category === filter);

  useEffect(() => {
    gsap.fromTo(headingRef.current, { opacity: 0, y: 30 }, {
      opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
      scrollTrigger: { trigger: '#projects', start: 'top 80%' },
    });
  }, []);

  useEffect(() => {
    const cards = containerRef.current?.querySelectorAll('.project-card');
    if (!cards) return;
    gsap.fromTo(cards, { opacity: 0, y: 40, scale: 0.95 }, {
      opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.1, ease: 'power3.out',
    });
  }, [filter]);

  return (
    <section id="projects" className="relative overflow-hidden py-28">
      <div className="absolute top-0 w-3/4 h-px -translate-x-1/2 left-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container px-6 mx-auto md:px-12">
        {/* Heading */}
        <div ref={headingRef} className="mb-12 text-center">
          <p className="mb-3 text-sm font-semibold tracking-widest uppercase text-highlight">My Work</p>
          <h2 className="section-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <p className="max-w-xl mx-auto text-base text-gray-400">
            A curated selection of my recent full-stack work and experiments.
          </p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-3 mb-10">
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
                filter === f
                  ? 'bg-highlight text-white shadow-lg shadow-highlight/30'
                  : 'glass-card text-gray-400 hover:text-white hover:border-white/20'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div ref={containerRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
          {filtered.map((project, index) => (
            <div key={index} className="overflow-hidden transition-all duration-300 project-card glass-card group hover:border-white/20 hover:-translate-y-1">
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="object-cover w-full h-full transition-transform duration-700 transform group-hover:scale-110"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-primary via-primary/40 to-transparent opacity-60" />
                {/* Hover actions */}
                <div className="absolute inset-0 flex items-center justify-center gap-4 transition-all duration-300 opacity-0 group-hover:opacity-100">
                  <a
                    href={project.demo}
                    className="flex items-center justify-center text-white transition-transform rounded-full shadow-lg w-11 h-11 bg-highlight hover:scale-110"
                  >
                    <FaExternalLinkAlt size={15} />
                  </a>
                  <a
                    href={project.github}
                    className="flex items-center justify-center text-white transition-all rounded-full w-11 h-11 bg-white/10 backdrop-blur hover:bg-white hover:text-primary"
                  >
                    <FaGithub size={20} />
                  </a>
                </div>
                {/* Category badge */}
                <span className="absolute top-3 left-3 px-2.5 py-1 text-xs font-bold rounded-full bg-highlight/80 text-white backdrop-blur">
                  {project.category}
                </span>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="mb-2 text-lg font-bold text-white transition-colors group-hover:text-highlight">
                  {project.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-gray-400 line-clamp-2">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="px-2 py-1 text-xs font-semibold border rounded-md bg-white/5 text-highlight border-white/10">
                      {t}
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

export default Projects;
