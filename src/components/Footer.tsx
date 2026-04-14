import React from 'react';
import { CheckCircle2, Phone, Mail, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="w-full py-16 px-8 bg-slate-900 border-t border-blue-400/10">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-12 max-w-7xl mx-auto">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <img 
              alt="SafeBuild Logo" 
              className="h-8 w-auto" 
              src="https://lh3.googleusercontent.com/aida/ADBb0ui_vXGJcEbBPH22KiUoJ0cDN7_kmVTacxzlKj_EFtkE0zeO9IBTNXr7yJ-ZcnCtl7hrrozlLM8DnaxkZucqmcdsrTUfrS8Pnb38QwurOdNhDXyxiSgJjatN0qGQS7v_t2FJQGk3goW_bMhnMGxEnGGCF6uqhfoiIRb-HEi9GwMdmOjh35GjTaq56T4VfLGr4cdAXgTBq9xwebrcY7_xTW3kjEdwznKgGc4gCRSvr1xaLbSgKRXSVKaolUSoVW2fqs7abksiRh8rNg"
              referrerPolicy="no-referrer"
            />
            <div className="font-black text-blue-400 text-xl tracking-tighter">SafeBuild</div>
          </div>
          <p className="text-gray-400 text-sm leading-relaxed font-medium">
            Premier QHSE Consultancy specializing in certification support and industrial safety engineering. Guiding you to global standards.
          </p>
        </div>
        
        <div>
          <h5 className="font-bold text-blue-400 mb-6 uppercase tracking-wider text-xs">Services</h5>
          <ul className="space-y-3 font-medium text-sm">
            <li><a className="text-gray-400 hover:text-blue-400 transition-all" href="#services">QHSE Consultancy</a></li>
            <li><a className="text-gray-400 hover:text-blue-400 transition-all" href="#services">ISO Certification Support</a></li>
            <li><a className="text-gray-400 hover:text-blue-400 transition-all" href="#services">Risk Assessment Design</a></li>
            <li><a className="text-gray-400 hover:text-blue-400 transition-all" href="#services">Regulatory Liaison</a></li>
          </ul>
        </div>
        
        <div>
          <h5 className="font-bold text-blue-400 mb-6 uppercase tracking-wider text-xs">Expertise Areas</h5>
          <ul className="space-y-3 font-medium text-sm text-gray-400">
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Certification Support Expert</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Industrial Risk Specialist</li>
            <li className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-emerald-400" /> Environmental Strategist</li>
          </ul>
        </div>
        
        <div>
          <h5 className="font-bold text-blue-400 mb-6 uppercase tracking-wider text-xs">Contact</h5>
          <ul className="space-y-4 font-medium text-sm text-gray-400">
            <li className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
              <a className="hover:text-blue-400 transition-all" href="tel:+221768641810">+221 76 864 18 10</a>
            </li>
            <li className="flex items-start gap-3">
              <Mail className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
              <a className="hover:text-blue-400 transition-all" href="mailto:safebuildqhse@gmail.com">safebuildqhse@gmail.com</a>
            </li>
            <li className="flex items-start gap-3">
              <Linkedin className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
              <a className="hover:text-blue-400 transition-all" href="https://www.linkedin.com/in/safebuild-qhse-0354a7403/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </li>
          </ul>
        </div>
      </div>
      
      <div className="mt-16 pt-8 border-t border-blue-400/10 flex flex-col md:flex-row justify-between items-center gap-4 text-gray-500 text-xs font-medium tracking-wide">
        <div>© 2024 SafeBuild Industrial Consulting. All Rights Reserved.</div>
        <div className="flex gap-6">
          <a className="hover:text-blue-400 transition-colors" href="https://www.linkedin.com/in/safebuild-qhse-0354a7403/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a className="hover:text-blue-400 transition-colors" href="mailto:safebuildqhse@gmail.com">Email</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
