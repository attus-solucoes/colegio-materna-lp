import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Target, Eye, Award, BookOpen } from 'lucide-react';

const Sobre = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="sobre" className="py-20 bg-cinza-claro" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Imagens */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="grid grid-cols-2 gap-4">
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=500&fit=crop"
                alt="Criança aprendendo"
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=400&h=300&fit=crop"
                alt="Atividades lúdicas"
                className="rounded-2xl shadow-lg w-full h-48 object-cover mt-12"
              />
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="https://images.unsplash.com/photo-1564429238877-1790b696c06a?w=400&h=300&fit=crop"
                alt="Sala de aula"
                className="rounded-2xl shadow-lg w-full h-48 object-cover -mt-8"
              />
              <motion.img
                whileHover={{ scale: 1.05 }}
                src="https://images.unsplash.com/photo-1606092195730-5d7b9af1efc5?w=400&h=500&fit=crop"
                alt="Crianças brincando"
                className="rounded-2xl shadow-lg w-full h-64 object-cover"
              />
            </div>
            
            {/* Badge flutuante */}
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-turquesa text-white px-6 py-3 rounded-full shadow-xl font-semibold"
            >
              ✨ Sistema de Ensino SAS
            </motion.div>
          </motion.div>

          {/* Conteúdo */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <span className="text-turquesa font-semibold text-sm uppercase tracking-wider">
              Quem Somos
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-cinza mt-2 mb-6">
              Uma escola <span className="text-turquesa">apaixonada</span> pela infância
            </h2>
            
            <p className="text-gray-600 mb-6 leading-relaxed">
              Somos a única escola de Itajubá especializada e apaixonada pela infância, 
              respeitando todas as suas fases, necessidades e travessuras. Promovemos 
              educação de qualidade com turmas reduzidas e uma equipe de profissionais 
              capacitados, respeitosos e empáticos.
            </p>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Nossa gestão incentiva e realiza a formação continuada das educadoras 
              semanalmente de forma ativa, prática e enriquecedora. Utilizamos como 
              apoio ao desenvolvimento cognitivo das crianças o Sistema Ari de Sá 
              (Plataforma SAS) a partir do Infantil 2.
            </p>

            {/* Missão e Visão */}
            <div className="space-y-4">
              <div className="flex gap-4 items-start p-4 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-turquesa/10 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Target className="w-6 h-6 text-turquesa" />
                </div>
                <div>
                  <h4 className="font-bold text-cinza mb-1">Nossa Missão</h4>
                  <p className="text-gray-600 text-sm">
                    Tornar a família o centro da educação com base nos princípios da 
                    Educação Personalizada, Oportuna e Consciente.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 items-start p-4 bg-white rounded-xl shadow-sm">
                <div className="w-12 h-12 bg-amarelo/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Eye className="w-6 h-6 text-amarelo" />
                </div>
                <div>
                  <h4 className="font-bold text-cinza mb-1">Nossa Visão</h4>
                  <p className="text-gray-600 text-sm">
                    Ser a principal rede de apoio, incentivo e segurança, 
                    sendo referência para as famílias de nossa comunidade.
                  </p>
                </div>
              </div>
            </div>

            {/* Frase destaque */}
            <div className="mt-8 p-6 bg-turquesa/5 border-l-4 border-turquesa rounded-r-xl">
              <p className="text-xl font-semibold text-cinza italic">
                "Educar as partes, construir o todo."
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Sobre;
