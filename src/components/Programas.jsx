import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Sun, Moon, Clock, Check } from 'lucide-react';

const Programas = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const programas = [
    {
      icon: <Clock className="w-8 h-8" />,
      nome: "Programa Integral",
      horario: "06h45 às 17h15",
      cor: "turquesa",
      bgColor: "bg-turquesa",
      lightBg: "bg-turquesa/5",
      descricao: "Atendimento humanizado, consciente e positivo. União dos demais programas em jornada completa.",
      beneficios: [
        "Jornada completa",
        "Todas as refeições inclusas",
        "Projetos manhã e tarde",
        "Acompanhamento integral"
      ],
      destaque: true
    },
    {
      icon: <Sun className="w-8 h-8" />,
      nome: "Manhã Kids",
      subtitulo: "Projeto Quintal Livre",
      horario: "06h45 às 12h",
      cor: "amarelo",
      bgColor: "bg-amarelo",
      textColor: "text-cinza",
      lightBg: "bg-amarelo/10",
      descricao: "Atendimento recreativo, acolhedor, lúdico e assistencialista focado no brincar e interagir.",
      beneficios: [
        "Fábrica de Brinquedos",
        "Descobertas da Natureza",
        "Pequenos Cientistas",
        "Programa Bilíngue"
      ],
      destaque: false
    },
    {
      icon: <Moon className="w-8 h-8" />,
      nome: "Programa Regular",
      subtitulo: "Projeto Cubo Mágico",
      horario: "13h15 às 17h15",
      cor: "rosa",
      bgColor: "bg-rosa",
      textColor: "text-cinza",
      lightBg: "bg-rosa/10",
      descricao: "Atendimento estruturado de cunho pedagógico, personalizado, assistencialista e alfabetizador.",
      beneficios: [
        "Estação de Inglês",
        "Pequenos Leitores",
        "Educação Corporal",
        "Projetos Interdisciplinares"
      ],
      destaque: false
    }
  ];

  const turmas = [
    { projeto: "Primeiríssima 1", idade: "4 meses a 1 ano", turmas: "Maternal e Infantil 1" },
    { projeto: "Primeiríssima 2", idade: "2 e 3 anos", turmas: "Infantil 2 e Infantil 3" },
    { projeto: "Primeiríssima 3", idade: "4 e 5 anos", turmas: "Infantil 4 e Infantil 5" },
  ];

  return (
    <section id="programas" className="py-20 bg-cinza-claro" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-turquesa font-semibold text-sm uppercase tracking-wider">
            Nossos Programas
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-cinza mt-2 mb-4">
            Escolha o melhor para sua <span className="text-turquesa">família</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oferecemos diferentes opções de período para atender às necessidades de cada família, 
            sempre com a mesma qualidade e dedicação.
          </p>
        </motion.div>

        {/* Cards dos Programas */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {programas.map((programa, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.15 }}
              whileHover={{ y: -10 }}
              className={`relative bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all ${
                programa.destaque ? 'ring-2 ring-turquesa' : ''
              }`}
            >
              {programa.destaque && (
                <div className="absolute top-0 right-0 bg-turquesa text-white text-xs font-bold px-4 py-1 rounded-bl-xl">
                  MAIS POPULAR
                </div>
              )}
              
              <div className={`${programa.bgColor} p-6 ${programa.textColor || 'text-white'}`}>
                <div className="flex items-center gap-3 mb-3">
                  {programa.icon}
                  <div>
                    <h3 className="text-xl font-bold">{programa.nome}</h3>
                    {programa.subtitulo && (
                      <p className={`${programa.textColor ? 'text-cinza/70' : 'text-white/80'} text-sm`}>{programa.subtitulo}</p>
                    )}
                  </div>
                </div>
                <div className={`flex items-center gap-2 ${programa.textColor ? 'text-cinza/80' : 'text-white/90'}`}>
                  <Clock size={16} />
                  <span className="font-medium">{programa.horario}</span>
                </div>
              </div>
              
              <div className="p-6">
                <p className="text-gray-600 mb-6">{programa.descricao}</p>
                
                <ul className="space-y-3">
                  {programa.beneficios.map((beneficio, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm text-gray-700">
                      <Check size={16} className={`text-${programa.cor}`} style={{ color: programa.cor === 'turquesa' ? '#00C9D7' : programa.cor === 'amarelo' ? '#FFE74C' : '#FF6B35' }} />
                      {beneficio}
                    </li>
                  ))}
                </ul>
                
                <a
                  href="https://api.whatsapp.com/send/?phone=553536218735&text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20o%20${encodeURIComponent(programa.nome)}"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-6 block text-center ${programa.bgColor} ${programa.textColor || 'text-white'} py-3 rounded-full font-semibold hover:opacity-90 transition-opacity`}
                >
                  Saiba Mais
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tabela de Turmas */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden"
        >
          <div className="bg-turquesa p-6">
            <h3 className="text-xl font-bold text-white text-center">
              Divisão de Turmas por Faixa Etária
            </h3>
            <p className="text-white/80 text-center text-sm mt-1">
              Baseada nos Marcos do Desenvolvimento Infantil (BNCC)
            </p>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-cinza">Projeto</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-cinza">Idade</th>
                  <th className="px-6 py-4 text-left text-sm font-semibold text-cinza">Turmas</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100">
                {turmas.map((turma, index) => (
                  <tr key={index} className="hover:bg-gray-50 transition-colors">
                    <td className="px-6 py-4">
                      <span className="font-semibold text-turquesa">{turma.projeto}</span>
                    </td>
                    <td className="px-6 py-4 text-gray-600">{turma.idade}</td>
                    <td className="px-6 py-4 text-gray-600">{turma.turmas}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Programas;
