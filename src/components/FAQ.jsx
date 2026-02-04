import { motion, useInView, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const FAQ = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      pergunta: "Qual a faixa etária atendida pelo Colégio Materna?",
      resposta: "Atendemos crianças de 4 meses a 5 anos completos, divididas em três projetos: Primeiríssima 1 (4 meses a 1 ano), Primeiríssima 2 (2 e 3 anos) e Primeiríssima 3 (4 e 5 anos). Cada projeto é pensado para respeitar os marcos do desenvolvimento infantil."
    },
    {
      pergunta: "Quais são os horários de funcionamento?",
      resposta: "Funcionamos de segunda a sexta-feira, das 06h45 às 18h. Oferecemos três opções de programa: Integral (06h45 às 17h15), Manhã Kids (06h45 às 12h) e Regular (13h15 às 17h15). Ao final de cada período, há uma tolerância de 45 minutos."
    },
    {
      pergunta: "Como funciona o período de adaptação?",
      resposta: "O período de adaptação é gradual e respeitoso ao tempo de cada criança. Iniciamos com períodos curtos de permanência que vão aumentando progressivamente. A família participa ativamente desse processo e mantemos comunicação constante sobre a evolução da criança."
    },
    {
      pergunta: "Qual o diferencial da metodologia do Materna?",
      resposta: "Utilizamos Metodologias Ativas e Personalizadas, onde a criança é protagonista do seu aprendizado. Trabalhamos com projetos trimestrais (Quintal Livre) e mensais (Cubo Mágico), além de programa bilíngue e o Sistema de Ensino SAS a partir do Infantil 2."
    },
    {
      pergunta: "Como é a alimentação das crianças?",
      resposta: "Oferecemos alimentação balanceada e saudável, preparada com carinho e atenção às necessidades nutricionais de cada faixa etária. O cardápio é elaborado por nutricionista e respeitamos restrições alimentares e alergias de cada criança."
    },
    {
      pergunta: "Vocês oferecem programa bilíngue?",
      resposta: "Sim! O programa bilíngue (Estação de Inglês) faz parte dos nossos projetos essenciais. As crianças têm contato diário com o inglês de forma lúdica e natural, através de músicas, brincadeiras e atividades interativas."
    },
    {
      pergunta: "Como agendar uma visita ao colégio?",
      resposta: "Você pode agendar uma visita pelo nosso WhatsApp (35) 3621-8735 ou pelo formulário de contato nesta página. Teremos prazer em receber você e sua família para conhecer nossa estrutura, metodologia e equipe."
    },
    {
      pergunta: "Quais atividades extracurriculares são oferecidas?",
      resposta: "Oferecemos diversas atividades como Capoeira, Aquarela (artes), Fazendinha Feliz, além das Oficinas Interativas às terças e quintas (17h30 às 18h30) com temas como origamis, fantoches e desenho."
    }
  ];

  return (
    <section className="py-20 bg-cinza-claro" ref={ref}>
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-turquesa font-semibold text-sm uppercase tracking-wider">
            Dúvidas Frequentes
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-cinza mt-2 mb-4">
            Perguntas <span className="text-turquesa">Frequentes</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Reunimos as principais dúvidas das famílias. Se não encontrar o que procura, 
            entre em contato conosco!
          </p>
        </motion.div>

        {/* Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-md overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-cinza pr-4">{faq.pergunta}</span>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 transition-colors ${
                  openIndex === index ? 'bg-turquesa text-white' : 'bg-gray-100 text-gray-500'
                }`}>
                  {openIndex === index ? <Minus size={18} /> : <Plus size={18} />}
                </div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6">
                      <div className="pt-2 border-t border-gray-100">
                        <p className="text-gray-600 leading-relaxed pt-4">
                          {faq.resposta}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        {/* CTA adicional */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">Ainda tem dúvidas?</p>
          <a
            href="https://api.whatsapp.com/send/?phone=553536218735&text=Olá!%20Tenho%20algumas%20dúvidas%20sobre%20o%20Colégio%20Materna."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-turquesa hover:text-turquesa-dark font-semibold transition-colors"
          >
            Fale conosco pelo WhatsApp →
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;
