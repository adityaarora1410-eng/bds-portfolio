/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ArrowRight, 
  Mail, 
  Linkedin, 
  Twitter, 
  Instagram, 
  ExternalLink, 
  ChevronDown,
  Menu,
  X,
  Sparkles,
  Target,
  Zap,
  Heart
} from 'lucide-react';

// --- Components ---

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Work', href: '#work' },
    { name: 'Thoughts', href: '#thoughts' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${isScrolled ? 'bg-brand-bg/90 backdrop-blur-md py-4 border-b border-brand-ink/5' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        <a href="#" className="text-2xl font-serif font-bold tracking-tight">AA.</a>
        
        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-sm font-medium tracking-wide uppercase opacity-70 hover:opacity-100 transition-opacity"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="px-6 py-2 bg-brand-ink text-brand-bg rounded-full text-sm font-medium hover:bg-brand-accent transition-colors"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 w-full bg-brand-bg border-b border-brand-ink/5 md:hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  className="text-lg font-serif"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding pt-32">
      <div className="max-w-5xl mx-auto text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1.5 mb-6 rounded-full bg-brand-accent/10 text-brand-accent text-xs font-bold uppercase tracking-widest">
            Digital Marketing Strategist
          </span>
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif leading-[0.9] mb-8 tracking-tighter">
            Crafting <span className="italic">Stories</span> That Drive <span className="text-brand-accent">Growth.</span>
          </h1>
          <p className="text-lg md:text-xl text-brand-ink/60 max-w-2xl mx-auto mb-12 font-light leading-relaxed">
            Aditya Arora helps brands navigate the digital landscape with strategic precision and creative flair.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#work" 
              className="group px-8 py-4 bg-brand-ink text-brand-bg rounded-full font-medium flex items-center gap-2 hover:bg-brand-accent transition-all"
            >
              View Portfolio
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>
            <a 
              href="#contact" 
              className="px-8 py-4 border border-brand-ink/20 rounded-full font-medium hover:bg-brand-ink/5 transition-all"
            >
              Get in Touch
            </a>
          </div>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-accent/5 rounded-full blur-3xl -z-10" />
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 opacity-30"
      >
        <ChevronDown size={32} />
      </motion.div>
    </section>
  );
};

const About = () => {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="relative">
          <div className="aspect-[4/5] bg-brand-ink/5 rounded-2xl overflow-hidden">
            <img 
              src="https://picsum.photos/seed/portrait/800/1000" 
              alt="Aditya Arora" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-brand-accent rounded-2xl -z-10" />
        </div>
        
        <div>
          <h2 className="text-4xl md:text-5xl mb-8">Strategist by Mind, <br /><span className="italic">Creative by Heart.</span></h2>
          <div className="space-y-6 text-brand-ink/70 text-lg font-light leading-relaxed">
            <p>
              I'm Aditya Arora, a digital marketing specialist dedicated to helping brands build meaningful connections in a noisy digital world. With a background in both data-driven strategy and creative storytelling, I bridge the gap between numbers and emotions.
            </p>
            <p>
              My approach is simple: understand the human behind the screen. By focusing on emotional resonance and strategic positioning, I help businesses grow not just their metrics, but their impact.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-8 mt-12">
            <div>
              <h4 className="text-3xl font-serif mb-1">5+</h4>
              <p className="text-sm uppercase tracking-widest opacity-50">Years Experience</p>
            </div>
            <div>
              <h4 className="text-3xl font-serif mb-1">50+</h4>
              <p className="text-sm uppercase tracking-widest opacity-50">Projects Completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      icon: <Target className="text-brand-accent" />,
      title: "Digital Strategy",
      desc: "Comprehensive roadmaps designed to align your brand with market opportunities and user needs."
    },
    {
      icon: <Sparkles className="text-brand-accent" />,
      title: "Brand Building",
      desc: "Creating cohesive visual and narrative identities that stand out and stay memorable."
    },
    {
      icon: <Zap className="text-brand-accent" />,
      title: "Performance Marketing",
      desc: "Data-driven campaigns focused on high ROI and sustainable customer acquisition."
    },
    {
      icon: <Heart className="text-brand-accent" />,
      title: "Content Strategy",
      desc: "Storytelling that builds emotional connections and fosters long-term brand loyalty."
    }
  ];

  return (
    <section id="services" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <span className="text-brand-accent text-sm font-bold uppercase tracking-widest mb-4 block">Capabilities</span>
            <h2 className="text-4xl md:text-6xl">Strategic Solutions for <br /><span className="italic text-brand-accent">Modern Brands.</span></h2>
          </div>
          <p className="text-brand-ink/60 max-w-sm mb-2">
            Tailored services designed to elevate your digital presence and drive measurable results.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((s, i) => (
            <motion.div 
              key={i}
              whileHover={{ y: -10 }}
              className="p-8 bg-white border border-brand-ink/5 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500"
            >
              <div className="w-12 h-12 bg-brand-accent/10 rounded-xl flex items-center justify-center mb-6">
                {s.icon}
              </div>
              <h3 className="text-2xl mb-4">{s.title}</h3>
              <p className="text-brand-ink/60 font-light leading-relaxed">
                {s.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Projects = () => {
  const projects = [
    {
      title: "Lumina Skincare",
      category: "Brand Strategy & Social",
      image: "https://picsum.photos/seed/skincare/1200/800"
    },
    {
      title: "Vertex Tech",
      category: "Digital Campaign",
      image: "https://picsum.photos/seed/tech/1200/800"
    },
    {
      title: "Aura Wellness",
      category: "Content Strategy",
      image: "https://picsum.photos/seed/wellness/1200/800"
    },
    {
      title: "Nova Fashion",
      category: "E-commerce Growth",
      image: "https://picsum.photos/seed/fashion/1200/800"
    }
  ];

  return (
    <section id="work" className="section-padding bg-brand-ink text-brand-bg">
      <div className="max-w-7xl mx-auto">
        <div className="mb-16">
          <span className="text-brand-accent text-sm font-bold uppercase tracking-widest mb-4 block">Selected Work</span>
          <h2 className="text-4xl md:text-6xl">Portfolio <span className="italic text-brand-accent">Showcase.</span></h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {projects.map((p, i) => (
            <motion.div 
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
            >
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl mb-6">
                <img 
                  src={p.image} 
                  alt={p.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-brand-ink/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <div className="w-16 h-16 bg-brand-bg text-brand-ink rounded-full flex items-center justify-center">
                    <ExternalLink size={24} />
                  </div>
                </div>
              </div>
              <h3 className="text-2xl mb-1">{p.title}</h3>
              <p className="text-brand-bg/60 uppercase tracking-widest text-xs">{p.category}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Thoughts = () => {
  return (
    <section id="thoughts" className="section-padding bg-brand-accent/5">
      <div className="max-w-4xl mx-auto text-center">
        <span className="text-brand-accent text-sm font-bold uppercase tracking-widest mb-6 block">Thought Leadership</span>
        <h2 className="text-4xl md:text-6xl mb-12">How Brands Build <br /><span className="italic">Emotional Connections.</span></h2>
        
        <div className="bg-white p-12 rounded-3xl shadow-sm text-left border border-brand-ink/5">
          <p className="text-xl md:text-2xl font-serif italic mb-8 text-brand-accent">
            "Marketing is no longer about the stuff that you make, but about the stories you tell."
          </p>
          <div className="space-y-6 text-brand-ink/70 leading-relaxed text-lg font-light">
            <p>
              In today's hyper-connected world, consumers are bombarded with thousands of messages daily. To stand out, brands must move beyond transactional relationships and aim for emotional resonance.
            </p>
            <p>
              Emotional connection is built on trust, shared values, and consistent storytelling. It's about understanding the 'why' behind the purchase. When a brand connects with a consumer's identity or aspirations, it creates a bond that transcends price points and features.
            </p>
            <p>
              This section helps make the portfolio feel unique and thoughtful, positioning the strategist as a deep thinker in the industry.
            </p>
          </div>
          <div className="mt-12 pt-8 border-t border-brand-ink/5 flex items-center gap-4">
            <div className="w-12 h-12 rounded-full bg-brand-accent/20 flex items-center justify-center">
              <Sparkles size={20} className="text-brand-accent" />
            </div>
            <div>
              <p className="font-medium">Aditya Arora</p>
              <p className="text-xs uppercase tracking-widest opacity-50">Digital Strategist</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  return (
    <section id="contact" className="section-padding">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
        <div>
          <span className="text-brand-accent text-sm font-bold uppercase tracking-widest mb-4 block">Get in Touch</span>
          <h2 className="text-5xl md:text-7xl mb-8">Let's Create <br /><span className="italic">Something Great.</span></h2>
          <p className="text-xl text-brand-ink/60 mb-12 font-light max-w-md">
            Open to collaborations, projects, and creative opportunities. Let's discuss how we can elevate your brand.
          </p>
          
          <div className="space-y-6">
            <a href="mailto:hello@adityaarora.com" className="flex items-center gap-4 text-2xl font-serif hover:text-brand-accent transition-colors">
              <div className="w-12 h-12 rounded-full border border-brand-ink/10 flex items-center justify-center">
                <Mail size={20} />
              </div>
              hello@adityaarora.com
            </a>
            <div className="flex gap-4 pt-4">
              {[
                { icon: <Linkedin size={20} />, href: "#" },
                { icon: <Twitter size={20} />, href: "#" },
                { icon: <Instagram size={20} />, href: "#" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.href} 
                  className="w-12 h-12 rounded-full border border-brand-ink/10 flex items-center justify-center hover:bg-brand-ink hover:text-brand-bg transition-all"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="bg-white p-8 md:p-12 rounded-3xl border border-brand-ink/5 shadow-xl">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold opacity-50">Name</label>
                <input type="text" className="w-full p-4 bg-brand-bg rounded-xl border-none focus:ring-2 focus:ring-brand-accent outline-none transition-all" placeholder="John Doe" />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest font-bold opacity-50">Email</label>
                <input type="email" className="w-full p-4 bg-brand-bg rounded-xl border-none focus:ring-2 focus:ring-brand-accent outline-none transition-all" placeholder="john@example.com" />
              </div>
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold opacity-50">Subject</label>
              <input type="text" className="w-full p-4 bg-brand-bg rounded-xl border-none focus:ring-2 focus:ring-brand-accent outline-none transition-all" placeholder="Project Inquiry" />
            </div>
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest font-bold opacity-50">Message</label>
              <textarea rows={4} className="w-full p-4 bg-brand-bg rounded-xl border-none focus:ring-2 focus:ring-brand-accent outline-none transition-all resize-none" placeholder="Tell me about your project..."></textarea>
            </div>
            <button className="w-full py-4 bg-brand-ink text-brand-bg rounded-xl font-bold hover:bg-brand-accent transition-all">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="py-12 px-6 border-t border-brand-ink/5">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <p className="text-sm opacity-50">© {new Date().getFullYear()} Aditya Arora. All rights reserved.</p>
        <div className="flex gap-8">
          <a href="#" className="text-sm opacity-50 hover:opacity-100 transition-opacity">Privacy Policy</a>
          <a href="#" className="text-sm opacity-50 hover:opacity-100 transition-opacity">Terms of Service</a>
        </div>
        <p className="text-sm font-serif italic opacity-50">Strategically Crafted.</p>
      </div>
    </footer>
  );
};

// --- Main App ---

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Services />
        <Projects />
        <Thoughts />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
