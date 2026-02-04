import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Brain, Puzzle, Heart, Users, Palette, Music } from 'lucide-react';

const Metodologia = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const pilares = [
    {
      icon: <Brain className="w-6 h-6" />,
      title: "Desenvolvimento Cognitivo",
      description: "Estimulamos novas conexões neuronais aproveitando a fase de maior plasticidade cerebral."
    },
    {
      icon: <Heart className="w-6 h-6" />,
      title: "Desenvolvimento Emocional",
      description: "Comunicação não violenta e intervenção consciente para crianças seguras e felizes."
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: "Desenvolvimento Social",
      description: "Interação com pares e adultos além do círculo familiar para autonomia e independência."
    },
    {
      icon: <Puzzle className="w-6 h-6" />,
      title: "Aprendizado Ativo",
      description: "A criança como protagonista do seu próprio aprendizado através de projetos e descobertas."
    }
  ];

  return (
    <section id="metodologia" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Conteúdo */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-turquesa font-semibold text-sm uppercase tracking-wider">
              Proposta Pedagógica
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-cinza mt-2 mb-6">
              Metodologias <span className="text-turquesa">Ativas</span> e Personalizadas
            </h2>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Acreditamos que cada criança é única e responde de forma única aos estímulos 
              recebidos. São dotadas de talentos únicos que sobressaem às suas dificuldades, 
              tornando-as cada dia mais seguras.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Nossa forma de construir educação não se limita à exposição do conhecimento 
              por parte do educador, mas à mediação de todo conhecimento já adquirido por 
              cada criança como base para novos projetos.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {pilares.map((pilar, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex gap-3 items-start"
                >
                  <div className="w-10 h-10 bg-turquesa/10 rounded-lg flex items-center justify-center text-turquesa flex-shrink-0">
                    {pilar.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-cinza text-sm mb-1">{pilar.title}</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">{pilar.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            {/* Imagem principal */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=600&h=500&fit=crop"
                alt="Metodologia ativa"
                className="w-full h-[400px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-turquesa/40 to-transparent" />
            </div>

            {/* Cards flutuantes */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-4 -left-4 bg-white p-4 rounded-2xl shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-amarelo rounded-full flex items-center justify-center">
                  <Palette className="w-5 h-5 text-cinza" />
                </div>
                <div>
                  <div className="font-bold text-cinza text-sm">Brincar</div>
                  <div className="text-xs text-gray-500">e Interagir</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-4 -right-4 bg-white p-4 rounded-2xl shadow-xl"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-rosa rounded-full flex items-center justify-center">
                  <Music className="w-5 h-5 text-cinza" />
                </div>
                <div>
                  <div className="font-bold text-cinza text-sm">Explorar</div>
                  <div className="text-xs text-gray-500">e Descobrir</div>
                </div>
              </div>
            </motion.div>

            {/* Badge BNCC */}
            <div className="absolute bottom-4 left-4 bg-turquesa text-white px-4 py-2 rounded-full text-sm font-semibold">
              ✓ Alinhado à BNCC
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Metodologia;
