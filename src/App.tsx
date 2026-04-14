/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import ServicesPage from './pages/ServicesPage';

export default function App() {
  return (
    <Router>
      <div className="min-h-screen bg-slate-950 selection:bg-blue-500 selection:text-white">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/services" element={<ServicesPage />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
            SafeBuild
          </div>
        </div>
        <div className="hidden lg:flex items-center space-x-8">
          <a className="text-primary border-b-2 border-primary pb-1 font-headline font-bold tracking-tight" href="#">Consultancy</a>
          <a className="text-on-surface-variant font-medium hover:text-primary transition-colors font-headline tracking-tight" href="#">Methodology</a>
          <a className="text-on-surface-variant font-medium hover:text-primary transition-colors font-headline tracking-tight" href="#">Sectors</a>
          <a className="text-on-surface-variant font-medium hover:text-primary transition-colors font-headline tracking-tight" href="#">Certification Support</a>
          <a className="text-on-surface-variant font-medium hover:text-primary transition-colors font-headline tracking-tight" href="#">About Us</a>
        </div>
        <button className="industrial-gradient text-on-primary px-6 py-2.5 rounded-xl font-headline font-bold tracking-tight scale-95 active:scale-100 transition-transform hover:opacity-90 inline-block text-center">
          Book Consultation
        </button>
      </div>
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          className="w-full h-full object-cover" 
          alt="Modern glass and steel industrial facility" 
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnH8bIXkokAvlEjbHIjpSM2N08CyBBXSQiayDAxQ-P2pX33XMfAoZJKePKYRWHxQnNBUrrvEaUOquukUqPsEupNI4ot3VSnC23YwhI4IRVxEfGB2lSQcfX9qBF1S67sHfRgAKSIiOjsVsPXpttLQu1tvbHSmEAluTRQ8YRm06NwmcOehPWWFRIu21LRTiMYMpYTtEaV7rWnHfAzCkq0pi4ECdJJswpB8N1FJBmieF6ifMQjcDVphn510C1xHLh6K5Sj314YGpPT8I"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-primary/30 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-surface via-surface/90 to-transparent"></div>
      </div>
      <div className="relative z-10 max-w-screen-2xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-12">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-secondary-container text-on-secondary-container text-xs font-bold tracking-widest uppercase">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
            </span>
            Elite QHSE Guidance
          </div>
          <h1 className="text-5xl md:text-7xl font-headline font-extrabold tracking-tighter text-primary leading-none">
            WE GUIDE YOU <br/><span className="text-secondary">TO EXCELLENCE.</span>
          </h1>
          <p className="text-xl text-on-surface-variant max-w-lg leading-relaxed font-medium">
            Expert consultancy designed to harden your industrial safety infrastructure. We don't just advise; we engineer the rigorous frameworks required for world-class certification.
          </p>
          <div className="flex flex-wrap gap-4">
            <button className="industrial-gradient text-on-primary px-8 py-4 rounded-xl font-headline font-bold text-lg shadow-xl hover:opacity-90 transition-all">
              Start Your Journey
            </button>
            <button className="bg-surface-container-lowest text-primary px-8 py-4 rounded-xl font-headline font-bold text-lg ghost-border hover:bg-surface-container-low transition-all">
              Our Methodology
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const Sectors = () => {
  return (
    <section className="py-24 bg-surface-container-low">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <h2 className="text-4xl font-headline font-extrabold tracking-tight text-primary">Sectors of Intervention</h2>
            <div className="h-1.5 w-24 bg-secondary mt-4"></div>
          </div>
          <p className="text-on-surface-variant max-w-xl font-medium">SafeBuild provides specialized consultancy across high-stakes industrial environments where precision is non-negotiable.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 h-auto md:h-[600px]">
          {/* Large Feature */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-8 bg-surface-container-lowest rounded-xl p-10 flex flex-col justify-between overflow-hidden relative group border border-outline-variant/30"
          >
            <div className="relative z-10">
              <span className="text-secondary font-headline font-bold tracking-widest uppercase text-xs">Primary Focus</span>
              <h3 className="text-3xl font-headline font-bold mt-4 mb-6">Heavy Industrial Manufacturing</h3>
              <p className="text-on-surface-variant max-w-md">We implement complex QHSE management systems that mitigate high-risk variables. Our approach ensures your operations meet the stringent requirements of ISO standards through rigorous field implementation.</p>
            </div>
            <img 
              className="absolute bottom-0 right-0 w-2/3 h-2/3 object-cover opacity-10 group-hover:opacity-25 transition-all duration-700" 
              alt="High-tech manufacturing floor" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBQLiIG4F_uSm3kbZvRMOr9Vt0uLLK4bNLbjQxIjBhHkIcIKmurfaVykpqEwF5NrfD-yPGEqyNFFa3vahVJtr6nIF4Jdfk4Ai-tS9Xa-JxMBumsejLSUf18PvifKVUfno4LSPLVxisQUBwVub6nDLD185cOxVZxPdH7Od66mV4h24Um-8CY5DKEjZ4JOhW8NSyJFpW06Xrd76qM-YzAykvgQlr0tarPJDwrTlJtD-WuWZo7gJ6o7ifSvN2OKNW482OqFrcmZ1mRsAg"
              referrerPolicy="no-referrer"
            />
          </motion.div>
          {/* Small Feature 1 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-4 bg-primary text-on-primary rounded-xl p-10 flex flex-col justify-end relative overflow-hidden group"
          >
            <div className="absolute top-10 right-10 group-hover:scale-110 transition-transform">
              <Cog className="w-16 h-16 text-primary-fixed-dim opacity-40" />
            </div>
            <h3 className="text-2xl font-headline font-bold mb-4">Civil Engineering & BTP</h3>
            <p className="text-white/80">Securing construction sites with architectural rigor. We prepare your teams for zero-accident compliance audits.</p>
          </motion.div>
          {/* Small Feature 2 */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-4 bg-secondary text-on-secondary rounded-xl p-10 flex flex-col justify-end relative overflow-hidden group"
          >
            <div className="absolute top-10 right-10 group-hover:scale-110 transition-transform">
              <Leaf className="w-16 h-16 text-secondary-container opacity-40" />
            </div>
            <h3 className="text-2xl font-headline font-bold mb-4">Environmental Strategy</h3>
            <p className="text-white/80">Strategic guidance for carbon reduction and sustainable waste management protocols in line with international norms.</p>
          </motion.div>
          {/* Medium Feature */}
          <motion.div 
            whileHover={{ y: -5 }}
            className="md:col-span-8 bg-surface-container-highest rounded-xl p-10 flex items-center gap-12 border border-outline-variant/30"
          >
            <div className="flex-1">
              <h3 className="text-2xl font-headline font-bold mb-4">Certification Support Expertise</h3>
              <p className="text-on-surface-variant">We act as your dedicated liaison for ISO 9001, 14001, and 45001. Our specialists handle the technical gap analysis and system design, ensuring you are audit-ready without the administrative burden.</p>
            </div>
            <div className="hidden lg:flex w-48 h-48 bg-surface-container-lowest rounded-full p-4 items-center justify-center ghost-border flex-shrink-0">
              <div className="text-center">
                <div className="text-2xl font-headline font-extrabold text-primary">AUDIT</div>
                <div className="text-[10px] uppercase tracking-widest text-secondary font-bold">Ready</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Expertise = () => {
  const pillars = [
    {
      icon: <ShieldCheck className="w-8 h-8" />,
      title: "Certification Mastery",
      description: "Our consultants specialize in guiding organizations through the complex journey of international certification, from initial diagnostic to final audit support.",
      color: "text-primary"
    },
    {
      icon: <DraftingCompass className="w-8 h-8" />,
      title: "Technical Rigor",
      description: "We employ an architectural mindset. Every safety protocol is a structural element designed for durability, resilience, and operational efficiency.",
      color: "text-secondary"
    },
    {
      icon: <ClipboardCheck className="w-8 h-8" />,
      title: "Authority & Compliance",
      description: "Navigate the evolving landscape of regulatory requirements with confidence. We provide the authoritative expertise needed to ensure permanent compliance.",
      color: "text-primary-container"
    }
  ];

  return (
    <section className="py-24 bg-surface">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {pillars.map((pillar, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.2 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <div className={cn("w-16 h-16 rounded-xl bg-surface-container-high flex items-center justify-center shadow-sm", pillar.color)}>
                {pillar.icon}
              </div>
              <h3 className="text-2xl font-headline font-extrabold tracking-tight">{pillar.title}</h3>
              <p className="text-on-surface-variant leading-relaxed">{pillar.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Methodology = () => {
  const steps = [
    {
      num: "01",
      title: "Strategic Gap Analysis",
      desc: "Identifying the technical and cultural distance between your current state and international certification standards."
    },
    {
      num: "02",
      title: "Structural Integration",
      desc: "Developing and embedding management systems that align perfectly with your unique operational workflows."
    },
    {
      num: "03",
      title: "Audit Preparation & Support",
      desc: "Providing on-site technical assistance during certification audits and managing continuous improvement cycles."
    }
  ];

  return (
    <section className="py-24 bg-surface-container-low overflow-hidden">
      <div className="max-w-screen-2xl mx-auto px-8">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
              <h2 className="text-4xl font-headline font-extrabold tracking-tight text-primary">A Methodology Built for Rigor</h2>
              <p className="text-lg text-on-surface-variant font-medium">SafeBuild's structured approach ensures your QHSE ecosystem is not just compliant, but optimized for growth.</p>
            </div>
            <div className="space-y-4">
              {steps.map((step, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-4 p-6 bg-surface-container-lowest rounded-xl border border-outline-variant/20 shadow-sm"
                >
                  <div className="font-headline font-black text-4xl text-surface-container-highest">{step.num}</div>
                  <div>
                    <h4 className="font-headline font-bold text-lg mb-1 text-primary">{step.title}</h4>
                    <p className="text-sm text-on-surface-variant">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          <div className="lg:w-1/2 relative">
            <div className="absolute -inset-10 bg-primary/5 rounded-full blur-3xl"></div>
            <motion.img 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative rounded-xl shadow-2xl transition-transform hover:scale-[1.02] duration-500" 
              alt="Architectural blueprint and tools" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkMHguG3K7Tbst6s_QL_YcLHIVSaeTinSjyEHZgP7qDdnIAGDLTMrTrJLoK-p4FxS8sktYVtXIoZ-3fcg70u2b94rnedAcXys-NtrvjMRo-B9T3FdFaLNqBs0oeohiXaM8ZGrSvzbBjcVV62cjwJha9lXxRpO6xHgkw77lTbtwZAIkPxjXhZmO6z1lwxuBaactGMetdhBB-K8z8X43TLRrhquKts0uSWDQmIZ90jY_YCdkLS68Ct3pX8RiWWEPgivDsRdrzV0X_Jo"
              referrerPolicy="no-referrer"
            />
            <div className="absolute -bottom-6 -left-6 bg-surface-container-lowest p-6 rounded-xl shadow-xl border border-outline-variant/20 max-w-[240px]">
              <div className="flex items-center gap-3 mb-2">
                <Gavel className="w-5 h-5 text-secondary" />
                <span className="font-headline font-bold text-primary">Expert Counsel</span>
              </div>
              <p className="text-xs text-on-surface-variant">Our methodology is designed to withstand the highest levels of regulatory scrutiny.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Quote = () => {
  return (
    <section className="py-32 bg-primary text-on-primary">
      <div className="max-w-4xl mx-auto px-8 text-center space-y-12">
        <Verified className="w-16 h-16 text-secondary mx-auto" />
        <h2 className="text-3xl md:text-5xl font-headline font-extrabold leading-tight tracking-tight">
          "Excellence in QHSE is not a destination, but a structural requirement for industrial longevity."
        </h2>
        <div className="flex flex-col items-center">
          <div className="h-1 w-20 bg-secondary mb-6"></div>
          <div className="font-headline font-bold text-xl">The SafeBuild Philosophy</div>
          <div className="text-primary-fixed/60 text-sm uppercase tracking-widest font-bold">Certification Support Experts</div>
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className="py-24 bg-surface">
      <div className="max-w-screen-xl mx-auto px-8">
        <div className="bg-surface-container-high rounded-3xl p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12 border border-outline-variant/30">
          <div className="space-y-6 max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded bg-primary/10 text-primary text-[10px] font-bold uppercase tracking-wider">
              Consultancy & Support
            </div>
            <h2 className="text-4xl font-headline font-extrabold tracking-tight text-primary">Ready to secure your path to certification?</h2>
            <p className="text-on-surface-variant text-lg font-medium">Partner with SafeBuild for the expertise and rigor required to achieve operational excellence. Request a preliminary assessment today.</p>
          </div>
          <button className="industrial-gradient text-on-primary px-10 py-5 rounded-xl font-headline font-bold text-xl shadow-xl hover:scale-105 transition-transform whitespace-nowrap inline-block text-center">
            Book Your Analysis
          </button>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="w-full py-16 px-8 bg-surface-container-lowest border-t border-surface-variant/30">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <img 
              alt="SafeBuild Logo" 
              className="h-8 w-auto" 
              src="https://lh3.googleusercontent.com/aida/ADBb0ui_vXGJcEbBPH22KiUoJ0cDN7_kmVTacxzlKj_EFtkE0zeO9IBTNXr7yJ-ZcnCtl7hrrozlLM8DnaxkZucqmcdsrTUfrS8Pnb38QwurOdNhDXyxiSgJjatN0qGQS7v_t2FJQGk3goW_bMhnMGxEnGGCF6uqhfoiIRb-HEi9GwMdmOjh35GjTaq56T4VfLGr4cdAXgTBq9xwebrcY7_xTW3kjEdwznKgGc4gCRSvr1xaLbSgKRXSVKaolUSoVW2fqs7abksiRh8rNg"
              referrerPolicy="no-referrer"
            />
            <div className="font-headline font-black text-primary text-xl tracking-tighter">SafeBuild</div>
          </div>
          <p className="text-on-surface-variant text-sm leading-relaxed font-medium">
            Premier QHSE Consultancy specializing in certification support and industrial safety engineering. Guiding you to global standards.
          </p>
        </div>
        <div>
          <h5 className="font-headline font-bold text-primary mb-6 uppercase tracking-wider text-xs">Services</h5>
          <ul className="space-y-3 font-body text-sm font-medium">
            <li><a className="text-on-surface-variant hover:text-primary transition-all" href="#">QHSE Consultancy</a></li>
            <li><a className="text-on-surface-variant hover:text-primary transition-all" href="#">ISO Certification Support</a></li>
            <li><a className="text-on-surface-variant hover:text-primary transition-all" href="#">Risk Assessment Design</a></li>
            <li><a className="text-on-surface-variant hover:text-primary transition-all" href="#">Regulatory Liaison</a></li>
          </ul>
        </div>
        <div>
          <h5 className="font-headline font-bold text-primary mb-6 uppercase tracking-wider text-xs">Expertise Areas</h5>
          <ul className="space-y-3 font-body text-sm font-medium text-on-surface-variant">
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-secondary" /> Certification Support Expert</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-secondary" /> Industrial Risk Specialist</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-secondary" /> Environmental Strategist</li>
          </ul>
        </div>
        <div>
          <h5 className="font-headline font-bold text-primary mb-6 uppercase tracking-wider text-xs">Contact</h5>
          <ul className="space-y-4 font-body text-sm font-medium text-on-surface-variant">
            <li className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-primary" />
              <a className="hover:text-primary transition-all" href="tel:+221768641810">+221 76 864 18 10</a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-primary" />
              <a className="hover:text-primary transition-all" href="mailto:safebuildqhse@gmail.com">safebuildqhse@gmail.com</a>
            </li>
            <li className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-primary" />
              <span>Dakar, Sénégal</span>
            </li>
          </ul>
        </div>
      </div>
      <div className="mt-16 pt-8 border-t border-surface-variant/20 flex flex-col md:flex-row justify-between items-center gap-4 text-on-surface-variant text-xs font-medium tracking-wide">
        <div>© 2024 SafeBuild Industrial Consulting. All Rights Reserved.</div>
        <div className="flex gap-6">
          <a className="hover:text-primary transition-colors" href="#">LinkedIn</a>
          <a className="hover:text-primary transition-colors" href="#">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default function App() {
  return (
    <div className="min-h-screen bg-surface selection:bg-secondary-container selection:text-on-secondary-container">
      <Navbar />
      <main className="pt-20">
        <Hero />
        <Sectors />
        <Expertise />
        <Methodology />
        <Quote />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
