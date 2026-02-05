import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Heart, Users, Sparkles, Home } from 'lucide-react';

const PropostaValor = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const cards = [
    {
      icon: <Heart className="w-8 h-8" />,
      title: "Especialistas em Infância",
      description: "Única escola de Itajubá focada 100% na primeira infância, respeitando cada fase do desenvolvimento.",
      color: "bg-turquesa",
      delay: 0
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Turmas Reduzidas",
      description: "Atendimento personalizado com número reduzido de crianças por turma e equipe capacitada.",
      color: "bg-amarelo",
      textColor: "text-cinza",
      delay: 0.1
    },
    {
      icon: <Sparkles className="w-8 h-8" />,
      title: "Metodologia Ativa",
      description: "A criança como protagonista do seu aprendizado através do brincar e interagir.",
      color: "bg-azul-claro",
      delay: 0.2
    },
    {
      icon: <Home className="w-8 h-8" />,
      title: "Família no Centro",
      description: "Parceria escola-família como pilar fundamental da educação consciente e positiva.",
      color: "bg-rosa",
      textColor: "text-cinza",
      delay: 0.3
    }
  ];

  return (
    <section className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-turquesa font-semibold text-sm uppercase tracking-wider">
            Por que nos escolher
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-cinza mt-2 mb-4">
            Educamos com <span className="text-turquesa">propósito</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Acreditamos que cada criança é única e merece uma educação que respeite seu ritmo, 
            estimule sua curiosidade e desenvolva todo seu potencial.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {cards.map((card, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: card.delay }}
              whileHover={{ y: -10, transition: { duration: 0.3 } }}
              className="group bg-white rounded-2xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
            >
              <div className={`${card.color} w-16 h-16 rounded-2xl flex items-center justify-center ${card.textColor || 'text-white'} mb-5 group-hover:scale-110 transition-transform`}>
                {card.icon}
              </div>
              <h3 className="text-xl font-bold text-cinza mb-3">{card.title}</h3>
              <p className="text-gray-600 leading-relaxed">{card.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropostaValor;
