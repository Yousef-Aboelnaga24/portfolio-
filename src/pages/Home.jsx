import React from 'react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import OfflineBanner from '../components/OfflineBanner';
import BackToTop from '../components/BackToTop';
import Hero from '../components/sections/Hero';
import About from '../components/sections/About';
import Skills from '../components/sections/Skills';
import Services from '../components/sections/Services';
import Projects from '../components/sections/Projects';
import Contact from '../components/sections/Contact';

const Home = () => {
  return (
    <div className="relative">
      <Helmet>
        <title>Yousef Walid — Full Stack Developer</title>
        <meta
          name="description"
          content="Yousef Walid is a Full Stack Developer based in Cairo, Egypt, specializing in React, Laravel, and modern web technologies."
        />
        <meta property="og:title" content="Yousef Walid — Full Stack Developer" />
        <meta
          property="og:description"
          content="Building scalable, high-performance web applications with React, Laravel, and more."
        />
      </Helmet>

      <OfflineBanner />
      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Services />
        <Projects />
        <Contact />
      </main>

      <Footer />
      <BackToTop />
    </div>
  );
};

export default Home;
