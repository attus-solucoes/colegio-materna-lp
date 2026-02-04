import { motion } from 'framer-motion';
import { Play, Calendar, MessageCircle } from 'lucide-react';

const Hero = () => {
  return (
    <section id="inicio" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background com gradiente */}
      <div className="absolute inset-0 bg-gradient-to-br from-turquesa via-turquesa-dark to-turquesa" />
      
      {/* Formas decorativas */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-amarelo/20 rounded-full blur-3xl animate-blob" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-rosa/20 rounded-full blur-3xl animate-blob animation-delay-2000" />
      <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-laranja/10 rounded-full blur-3xl animate-blob animation-delay-4000" />
      
      {/* Círculos decorativos */}
      <motion.div 
        animate={{ y: [0, -20, 0] }}
        transition={{ duration: 4, repeat: Infinity }}
        className="absolute top-32 right-20 w-16 h-16 bg-amarelo rounded-full hidden lg:block"
      />
      <motion.div 
        animate={{ y: [0, 20, 0] }}
        transition={{ duration: 3, repeat: Infinity }}
        className="absolute bottom-40 left-20 w-12 h-12 bg-rosa rounded-full hidden lg:block"
      />
      <motion.div 
        animate={{ y: [0, -15, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="absolute top-1/2 right-40 w-8 h-8 bg-laranja rounded-full hidden lg:block"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Conteúdo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.span 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-block bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              🌟 Especialistas em Primeira Infância
            </motion.span>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6"
            >
              Aqui seu filho aprende com{' '}
              <span className="text-amarelo">amor</span>,{' '}
              <span className="text-rosa">propósito</span> e{' '}
              <span className="text-laranja">alegria</span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-xl text-white/90 mb-8 max-w-xl"
            >
              Da primeira infância aos primeiros passos rumo ao futuro. 
              Educação personalizada para crianças de 4 meses a 5 anos em Itajubá.
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a
                href="https://api.whatsapp.com/send/?phone=553536218735&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20visita%20ao%20Col%C3%A9gio%20Materna."
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white text-turquesa px-8 py-4 rounded-full font-bold text-lg hover:bg-amarelo hover:text-cinza transition-all hover:scale-105 flex items-center justify-center gap-2 shadow-xl"
              >
                <Calendar size={22} />
                Agende uma Visita
              </a>
              <a
                href="https://api.whatsapp.com/send/?phone=553536218735"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white hover:text-turquesa transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle size={22} />
                Fale pelo WhatsApp
              </a>
            </motion.div>

            {/* Stats */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/20"
            >
              <div>
                <div className="text-3xl font-bold text-amarelo">10+</div>
                <div className="text-white/80 text-sm">Anos de experiência</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-rosa">500+</div>
                <div className="text-white/80 text-sm">Famílias atendidas</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-laranja">100%</div>
                <div className="text-white/80 text-sm">Dedicação</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Imagem */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Imagem principal */}
              <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&h=700&fit=crop"
                  alt="Crianças felizes aprendendo"
                  className="w-full h-[500px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-turquesa/30 to-transparent" />
              </div>
              
              {/* Card flutuante */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -bottom-6 -left-6 bg-white p-4 rounded-2xl shadow-xl z-20"
              >
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-turquesa/10 rounded-full flex items-center justify-center">
                    <span className="text-2xl">👶</span>
                  </div>
                  <div>
                    <div className="font-bold text-cinza">4 meses a 5 anos</div>
                    <div className="text-sm text-gray-500">Berçário ao Pré</div>
                  </div>
                </div>
              </motion.div>

              {/* Card flutuante 2 */}
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
                className="absolute -top-4 -right-4 bg-amarelo p-4 rounded-2xl shadow-xl z-20"
              >
                <div className="flex items-center gap-2">
                  <span className="text-2xl">⭐</span>
                  <span className="font-bold text-cinza">Turmas Reduzidas</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Wave bottom */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0 120L60 105C120 90 240 60 360 45C480 30 600 30 720 37.5C840 45 960 60 1080 67.5C1200 75 1320 75 1380 75L1440 75V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z"
            fill="white"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
