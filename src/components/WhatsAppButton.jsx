import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';

const WhatsAppButton = () => {
  return (
    <motion.a
      href="https://api.whatsapp.com/send/?phone=553536218735&text=Olá!%20Gostaria%20de%20mais%20informações%20sobre%20o%20Colégio%20Materna."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0 }}
      animate={{ scale: 1 }}
      transition={{ delay: 1, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-[#25D366] rounded-full shadow-lg flex items-center justify-center text-white animate-pulse-whatsapp hover:bg-[#20BD5A] transition-colors"
      aria-label="Fale conosco pelo WhatsApp"
    >
      <MessageCircle size={32} />
      
      {/* Tooltip */}
      <motion.div
        initial={{ opacity: 0, x: 10 }}
        whileHover={{ opacity: 1, x: 0 }}
        className="absolute right-full mr-3 bg-white text-cinza px-4 py-2 rounded-lg shadow-lg whitespace-nowrap text-sm font-medium"
      >
        Fale conosco! 💬
      </motion.div>
    </motion.a>
  );
};

export default WhatsAppButton;
