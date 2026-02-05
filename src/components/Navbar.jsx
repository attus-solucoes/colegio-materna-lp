import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Phone } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const menuItems = [
    { name: 'Início', href: '#inicio' },
    { name: 'Sobre', href: '#sobre' },
    { name: 'Metodologia', href: '#metodologia' },
    { name: 'Programas', href: '#programas' },
    { name: 'Estrutura', href: '#estrutura' },
    { name: 'Contato', href: '#contato' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-lg py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <a href="#inicio" className="flex items-center gap-2">
            <img 
              src="/logo.png" 
              alt="Colégio Materna Kids" 
              className="h-12 object-contain"
            />
          </a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`font-medium transition-colors hover:text-turquesa ${
                  scrolled ? 'text-cinza' : 'text-white'
                }`}
              >
                {item.name}
              </a>
            ))}
            <a
              href="https://api.whatsapp.com/send/?phone=553536218735"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-turquesa hover:bg-turquesa-dark text-white px-6 py-2 rounded-full font-semibold transition-all hover:scale-105 flex items-center gap-2"
            >
              <Phone size={18} />
              Agende uma Visita
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`md:hidden p-2 rounded-lg ${scrolled ? 'text-cinza' : 'text-white'}`}
          >
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white shadow-lg"
          >
            <div className="px-4 py-6 space-y-4">
              {menuItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-cinza font-medium hover:text-turquesa transition-colors"
                >
                  {item.name}
                </a>
              ))}
              <a
                href="https://api.whatsapp.com/send/?phone=553536218735"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-turquesa text-white text-center px-6 py-3 rounded-full font-semibold"
              >
                Agende uma Visita
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
