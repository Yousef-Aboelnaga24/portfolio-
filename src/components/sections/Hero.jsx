import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { FaDownload, FaArrowRight } from 'react-icons/fa';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

const TITLES = ['Full Stack Developer', 'React Specialist', 'Laravel Expert', 'UI Enthusiast'];

const Hero = () => {
  const titleRef = useRef(null);
  const subtitleRef = useRef(null);
  const btnRef = useRef(null);
  const badgesRef = useRef(null);
  const orb1Ref = useRef(null);
  const orb2Ref = useRef(null);

  const [titleIndex, setTitleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  // Typewriter effect
  useEffect(() => {
    const currentTitle = TITLES[titleIndex];
    let timeout;

    if (!isDeleting && displayed.length < currentTitle.length) {
      timeout = setTimeout(() => setDisplayed(currentTitle.slice(0, displayed.length + 1)), 80);
    } else if (!isDeleting && displayed.length === currentTitle.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 45);
    } else if (isDeleting && displayed.length === 0) {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % TITLES.length);
    }

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, titleIndex]);

  // GSAP entrance animations
  useEffect(() => {
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo(badgesRef.current, { y: -20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6, delay: 0.1 })
      .fromTo(titleRef.current, { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1 }, '-=0.2')
      .fromTo(subtitleRef.current, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.5')
      .fromTo(btnRef.current, { y: 20, opacity: 0 }, { y: 0, opacity: 1, duration: 0.6 }, '-=0.4');

    // Floating orbs
    gsap.to(orb1Ref.current, { y: -30, x: 20, duration: 4, repeat: -1, yoyo: true, ease: 'sine.inOut' });
    gsap.to(orb2Ref.current, { y: 30, x: -20, duration: 5, repeat: -1, yoyo: true, ease: 'sine.inOut', delay: 1 });
  }, []);

  return (
    <section
      id="home"
      className="relative flex items-center justify-center min-h-screen pt-24 overflow-hidden grid-bg"
    >
      {/* Background orbs */}
      <div
        ref={orb1Ref}
        className="absolute top-1/4 left-1/6 w-[500px] h-[500px] bg-accent rounded-full mix-blend-screen filter blur-[130px] opacity-40 pointer-events-none"
      />
      <div
        ref={orb2Ref}
        className="absolute bottom-1/4 right-1/6 w-[400px] h-[400px] bg-highlight rounded-full mix-blend-screen filter blur-[130px] opacity-25 pointer-events-none"
      />

      <div className="container relative z-10 max-w-4xl px-6 mx-auto text-center">
        {/* Badge */}
        <div ref={badgesRef} className="flex items-center justify-center gap-3 mb-8">
          <span className="px-4 py-1.5 rounded-full border border-highlight/40 bg-highlight/10 text-highlight text-sm font-semibold tracking-wider">
            👋 Available for Work
          </span>
        </div>

        {/* Title */}
        <h1 ref={titleRef} className="mb-5 text-5xl font-black leading-tight tracking-tight text-white md:text-7xl">
          Hi, I'm{' '}
          <span className="gradient-text">Yousef Walid</span>
        </h1>

        {/* Typewriter subtitle */}
        <p ref={subtitleRef} className="h-10 mb-10 text-2xl font-light text-gray-300 md:text-3xl">
          <span className="font-semibold text-highlight">{displayed}</span>
          <span className="typewriter-cursor" />
        </p>

        {/* Buttons */}
        <div
          ref={btnRef}
          className="flex flex-col items-center justify-center gap-4 mb-12 sm:flex-row"
        >
          <a href="#projects" className="w-full text-base btn-primary sm:w-auto">
            View My Work <FaArrowRight size={14} />
          </a>
          <a
            href="/cv.pdf"
            download
            className="w-full text-base btn-secondary sm:w-auto"
          >
            Download CV <FaDownload size={14} />
          </a>
        </div>

        {/* Social links */}
        <div className="flex items-center justify-center gap-5">
          <a
            href="https://github.com/Yousef-Aboelnaga24"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 text-gray-400 transition-all rounded-full glass-card hover:text-white hover:border-white/30 hover:scale-110"
          >
            <FiGithub size={18} />
          </a>
          <a
            href="https://www.linkedin.com/in/yousef-walid-aboelnaga/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-10 h-10 text-gray-400 transition-all rounded-full glass-card hover:text-white hover:border-white/30 hover:scale-110"
          >
            <FiLinkedin size={18} />
          </a>
          <div className="w-16 h-px mx-2 bg-white/10" />
          <span className="text-sm text-gray-500">Based in Cairo, Egypt 🇪🇬</span>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute flex flex-col items-center gap-2 text-xs text-gray-500 -translate-x-1/2 bottom-8 left-1/2">
        <span className="tracking-widest uppercase">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-gray-500 to-transparent animate-pulse" />
      </div>
    </section>
  );
};

export default Hero;
