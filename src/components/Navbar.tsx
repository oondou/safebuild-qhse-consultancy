import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion } from 'motion/react';

const Navbar = () => {
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleNavigation = (path: string) => {
    navigate(path);
    setMobileOpen(false);
    window.scrollTo(0, 0);
  };

  return (
    <nav className="fixed top-0 w-full z-50 glass-header shadow-sm border-b border-blue-400/10 bg-slate-950/80 backdrop-blur-md">
      <div className="flex justify-between items-center h-20 px-8 max-w-screen-2xl mx-auto">
        <button 
          onClick={() => handleNavigation('/')}
          className="flex items-center gap-3 hover:opacity-80 transition-opacity"
        >
          <img 
            alt="SafeBuild Logo" 
            className="h-10 w-auto" 
            src="https://lh3.googleusercontent.com/aida/ADBb0ui_vXGJcEbBPH22KiUoJ0cDN7_kmVTacxzlKj_EFtkE0zeO9IBTNXr7yJ-ZcnCtl7hrrozlLM8DnaxkZucqmcdsrTUfrS8Pnb38QwurOdNhDXyxiSgJjatN0qGQS7v_t2FJQGk3goW_bMhnMGxEnGGCF6uqhfoiIRb-HEi9GwMdmOjh35GjTaq56T4VfLGr4cdAXgTBq9xwebrcY7_xTW3kjEdwznKgGc4gCRSvr1xaLbSgKRXSVKaolUSoVW2fqs7abksiRh8rNg"
            referrerPolicy="no-referrer"
          />
          <div className="text-xl font-bold tracking-tighter text-blue-400 uppercase hidden sm:block">
            SafeBuild
          </div>
        </button>
        
        <div className="hidden lg:flex items-center space-x-8">
          <button 
            onClick={() => handleNavigation('/')}
            className="text-blue-400 border-b-2 border-blue-400 pb-1 font-bold tracking-tight hover:text-emerald-400 transition-colors"
          >
            Consultancy
          </button>
          <button 
            onClick={() => handleNavigation('/services')}
            className="text-gray-400 font-medium hover:text-blue-400 transition-colors"
          >
            Services
          </button>
          <a 
            href="#methodology"
            className="text-gray-400 font-medium hover:text-blue-400 transition-colors"
          >
            Methodology
          </a>
          <a 
            href="#contact"
            className="text-gray-400 font-medium hover:text-blue-400 transition-colors"
          >
            Contact
          </a>
        </div>

        <div className="flex items-center gap-4">
          <button 
            onClick={() => handleNavigation('/')}
            className="hidden sm:inline-block bg-gradient-to-r from-blue-500 to-emerald-500 text-white px-6 py-2.5 rounded-xl font-bold tracking-tight hover:shadow-lg hover:shadow-blue-500/50 transition-all"
          >
            Book Consultation
          </button>
          <button 
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden text-blue-400 hover:text-emerald-400 transition-colors"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-slate-900 border-t border-blue-400/10 px-8 py-4 space-y-4"
        >
          <button 
            onClick={() => handleNavigation('/')}
            className="block w-full text-left text-blue-400 font-medium py-2 hover:text-emerald-400"
          >
            Home
          </button>
          <button 
            onClick={() => handleNavigation('/services')}
            className="block w-full text-left text-gray-400 font-medium py-2 hover:text-blue-400"
          >
            Services
          </button>
          <a 
            href="#methodology"
            className="block w-full text-gray-400 font-medium py-2 hover:text-blue-400"
          >
            Methodology
          </a>
          <a 
            href="#contact"
            className="block w-full text-gray-400 font-medium py-2 hover:text-blue-400"
          >
            Contact
          </a>
        </motion.div>
      )}
    </nav>
  );
};

export default Navbar;
