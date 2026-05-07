import { useState, useEffect } from 'react';
import { HiMenu, HiX } from 'react-icons/hi';

const navLinks = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Services', href: '#services' },
  { name: 'Projects', href: '#projects' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      // Active section tracking
      const sections = navLinks.map((l) => l.href.slice(1));
      const current = sections.find((id) => {
        const el = document.getElementById(id);
        if (!el) return false;
        const rect = el.getBoundingClientRect();
        return rect.top <= 120 && rect.bottom > 120;
      });
      if (current) setActive(current);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed w-full z-50 transition-all duration-500 ${
        scrolled ? 'glass-nav py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="container flex items-center justify-between px-6 mx-auto md:px-12">
        {/* Logo */}
        <a href="#home" className="text-2xl font-extrabold tracking-tighter text-white">
          Yousef<span className="text-highlight">.dev</span>
        </a>

        {/* Desktop Nav */}
        <div className="items-center hidden md:flex space-x-7">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={`relative text-sm font-semibold uppercase tracking-wider transition-colors group ${
                active === link.href.slice(1) ? 'text-highlight' : 'text-gray-300 hover:text-white'
              }`}
            >
              {link.name}
              <span
                className={`absolute -bottom-1 left-0 h-0.5 bg-highlight transition-all duration-300 ${
                  active === link.href.slice(1) ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </a>
          ))}
          <a href="#contact" className="px-5 py-2 text-sm btn-primary">
            Hire Me
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white transition-transform duration-200 md:hidden focus:outline-none active:scale-90"
          aria-label="Toggle menu"
        >
          {isOpen ? <HiX size={28} /> : <HiMenu size={28} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <div
        className={`md:hidden absolute top-full left-0 w-full glass-nav shadow-xl py-4 px-6 flex flex-col space-y-3 transition-all duration-300 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        {navLinks.map((link) => (
          <a
            key={link.name}
            href={link.href}
            onClick={() => setIsOpen(false)}
            className={`text-lg font-semibold transition-colors py-1 border-b border-white/5 last:border-0 ${
              active === link.href.slice(1) ? 'text-highlight' : 'text-gray-300'
            }`}
          >
            {link.name}
          </a>
        ))}
        <a href="#contact" className="justify-center w-full mt-2 text-sm btn-primary">
          Hire Me
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
