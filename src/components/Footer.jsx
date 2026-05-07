import { FiGithub, FiLinkedin, FiTwitter, FiHeart } from 'react-icons/fi';

const Footer = () => {
  const year = new Date().getFullYear();

  const footerLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Services', href: '#services' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' },
  ];

  const socials = [
    { icon: <FiGithub size={18} />, href: 'https://github.com/Yousef-Aboelnaga24', label: 'GitHub' },
    { icon: <FiLinkedin size={18} />, href: 'https://www.linkedin.com/in/yousef-walid-aboelnaga/', label: 'LinkedIn' },
    { icon: <FiTwitter size={18} />, href: 'https://twitter.com', label: 'Twitter' },
  ];

  return (
    <footer className="relative pb-8 overflow-hidden border-t border-white/10 bg-primary pt-14">
      {/* Glow decoration */}
      <div className="absolute bottom-0 w-1/2 h-32 -translate-x-1/2 pointer-events-none left-1/2 bg-highlight/10 blur-3xl" />

      <div className="container relative z-10 px-6 mx-auto md:px-12">
        {/* Top row */}
        <div className="flex flex-col items-start justify-between gap-10 mb-12 md:flex-row">
          {/* Brand */}
          <div className="max-w-xs">
            <a href="#home" className="inline-block mb-3 text-3xl font-extrabold tracking-tighter text-white">
              Yousef<span className="text-highlight">.dev</span>
            </a>
            <p className="text-sm leading-relaxed text-gray-500">
              Full Stack Developer based in Cairo, Egypt. Building scalable and elegant web solutions.
            </p>
          </div>

          {/* Links */}
          <div>
            <p className="mb-4 text-xs font-bold tracking-widest text-white uppercase">Quick Links</p>
            <div className="grid grid-cols-2 gap-x-8 gap-y-2">
              {footerLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-sm text-gray-400 transition-colors hover:text-highlight"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Socials */}
          <div>
            <p className="mb-4 text-xs font-bold tracking-widest text-white uppercase">Follow Me</p>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex items-center justify-center w-10 h-10 text-gray-400 transition-all duration-300 border rounded-xl bg-white/5 border-white/10 hover:text-white hover:bg-highlight hover:border-highlight hover:scale-110"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px mb-8 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

        {/* Bottom */}
        <div className="flex flex-col items-center justify-between gap-3 text-sm text-gray-500 sm:flex-row">
          <p>
            &copy; {year} <span className="font-semibold text-gray-300">Yousef Walid</span>. All rights reserved.
          </p>
          <p className="flex items-center gap-1.5">
            Built with <FiHeart className="text-highlight animate-pulse" size={14} /> using React & Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
