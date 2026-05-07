import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaEnvelope, FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa';
import { FiGithub, FiLinkedin, FiTwitter, FiSend } from 'react-icons/fi';

gsap.registerPlugin(ScrollTrigger);

const contactInfo = [
  {
    icon: <FaEnvelope />,
    label: 'Email',
    value: 'yousef.w.aboelnaga@email.com',
    href: 'mailto:yousef.w.aboelnaga@email.com',
  },
  {
    icon: <FaPhoneAlt />,
    label: 'Phone',
    value: '+20 112 569 3566',
    href: 'tel:+201125693566',
  },
  {
    icon: <FaMapMarkerAlt />,
    label: 'Location',
    value: 'Cairo, Egypt 🇪🇬',
    href: null,
  },
];

const socials = [
  { icon: <FiGithub size={18} />, href: 'https://github.com/Yousef-Aboelnaga24', label: 'GitHub' },
  { icon: <FiLinkedin size={18} />, href: 'https://www.linkedin.com/in/yousef-walid-aboelnaga/', label: 'LinkedIn' },
  { icon: <FiTwitter size={18} />, href: 'https://twitter.com', label: 'Twitter' },
];

const Contact = () => {
  const leftRef = useRef(null);
  const rightRef = useRef(null);
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  useEffect(() => {
    gsap.fromTo(leftRef.current, { opacity: 0, x: -50 }, {
      opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: '#contact', start: 'top 75%' },
    });
    gsap.fromTo(rightRef.current, { opacity: 0, x: 50 }, {
      opacity: 1, x: 0, duration: 0.9, ease: 'power3.out',
      scrollTrigger: { trigger: '#contact', start: 'top 75%' },
    });
  }, []);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  const inputClass =
    'w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-highlight/60 focus:bg-white/8 transition-all duration-300 text-sm';

  return (
    <section id="contact" className="relative overflow-hidden py-28 bg-secondary/30">
      <div className="absolute inset-0 pointer-events-none grid-bg opacity-30" />
      <div className="absolute top-0 w-3/4 h-px -translate-x-1/2 left-1/2 bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="container relative z-10 px-6 mx-auto md:px-12">
        {/* Heading */}
        <div className="mb-16 text-center">
          <p className="mb-3 text-sm font-semibold tracking-widest uppercase text-highlight">Say Hello</p>
          <h2 className="section-title">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <p className="max-w-xl mx-auto text-base text-gray-400">
            Have a project or an idea? I'd love to hear from you. Let's build something amazing together.
          </p>
        </div>

        <div className="flex flex-col max-w-5xl gap-12 mx-auto lg:flex-row">
          {/* Left — Info */}
          <div ref={leftRef} className="w-full space-y-6 lg:w-2/5">
            <div className="glass-card p-7 space-y-7">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4 group">
                  <div className="flex items-center justify-center transition-all duration-300 w-11 h-11 rounded-xl bg-highlight/15 text-highlight shrink-0 group-hover:bg-highlight group-hover:text-white">
                    {item.icon}
                  </div>
                  <div>
                    <p className="mb-1 text-xs tracking-wider text-gray-500 uppercase">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="font-semibold text-white transition-colors hover:text-highlight">
                        {item.value}
                      </a>
                    ) : (
                      <p className="font-semibold text-white">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Social Links */}
            <div className="p-6 glass-card">
              <p className="mb-4 text-sm tracking-wider text-gray-400 uppercase">Find me on</p>
              <div className="flex gap-3">
                {socials.map((s) => (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex items-center justify-center text-gray-400 transition-all duration-300 border w-11 h-11 rounded-xl bg-white/5 border-white/10 hover:text-white hover:bg-highlight hover:border-highlight hover:scale-110"
                  >
                    {s.icon}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Right — Form */}
          <div ref={rightRef} className="w-full lg:w-3/5">
            <form onSubmit={handleSubmit} className="p-8 space-y-5 glass-card">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div>
                  <label className="block mb-2 text-xs font-semibold tracking-wider text-gray-400 uppercase">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="Yousef Walid"
                  />
                </div>
                <div>
                  <label className="block mb-2 text-xs font-semibold tracking-wider text-gray-400 uppercase">
                    Your Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    className={inputClass}
                    placeholder="hello@example.com"
                  />
                </div>
              </div>

              <div>
                <label className="block mb-2 text-xs font-semibold tracking-wider text-gray-400 uppercase">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  required
                  value={form.subject}
                  onChange={handleChange}
                  className={inputClass}
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label className="block mb-2 text-xs font-semibold tracking-wider text-gray-400 uppercase">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="5"
                  required
                  value={form.message}
                  onChange={handleChange}
                  className={`${inputClass} resize-none`}
                  placeholder="Tell me about your project..."
                />
              </div>

              <button
                type="submit"
                className={`btn-primary w-full justify-center text-base transition-all duration-300 ${
                  sent ? 'bg-green-500 shadow-green-500/30 pointer-events-none' : ''
                }`}
              >
                {sent ? (
                  <>✓ Message Sent!</>
                ) : (
                  <>Send Message <FiSend size={16} /></>
                )}
              </button>

              {sent && (
                <p className="text-sm text-center text-green-400 animate-pulse">
                  Thanks! I'll get back to you as soon as possible. 🚀
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
