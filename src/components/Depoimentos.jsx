import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const Depoimentos = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const depoimentos = [
    {
      nome: "Família da Antonella",
      relacao: "Aluna formada",
      texto: "Desde o primeiro dia em que pisamos no Materna, fomos recebidos com tanto carinho que logo de cara sentimos que tínhamos feito a escolha certa. O Materna sempre nos transmitiu segurança, atenção e um verdadeiro compromisso com a educação feita com amor. A Antonella foi alfabetizada com muita dedicação, no tempo dela, sempre com incentivo e acolhimento.",
      rating: 5
    },
    {
      nome: "Mãe do Samuel",
      relacao: "Aluno atual",
      texto: "Foi a melhor escolha que fizemos para os dois! Agradeço muito a atenção de vocês em cada detalhe, é nítido o desenvolvimento dos dois, principalmente do Samuel, ele se soltou mais. Posso fazer minhas tarefas do dia a dia em paz sabendo que eles estão sendo muito bem cuidados. Alimentação é ótima, só tenho a agradecer em tudo! Gratidão.",
      rating: 5
    },
    {
      nome: "Daniele Lima",
      relacao: "Mãe de aluna",
      texto: "Neste ano de 2025, pude acompanhar com muita alegria o desenvolvimento da minha filha. Notei avanços significativos no vocabulário e capacidade de comunicar suas ideias com mais clareza. Além disso, percebi mudanças importantes na socialização e autoestima. Agradeço à equipe Escola Materna Kids pelo cuidado, incentivo e carinho nesse processo.",
      rating: 5
    },
    {
      nome: "Karol",
      relacao: "Mãe da Isa",
      texto: "A Isa se desenvolveu muito junto ao colégio. Aprende diversas músicas e canta em casa para nós. Traz detalhes do dia vivido com os coleguinhas. É lindo de se ver! Ela aprendeu a comer coisas que não comia mais em casa, o desfralde foi muito tranquilo pois também tive o incentivo e ajuda da escola. Só tenho a agradecer a atenção e cuidados com minha princesa.",
      rating: 5
    },
    {
      nome: "Mãe da Helena",
      relacao: "Aluna desde 2024",
      texto: "A Helena está no Colégio Materna Kids desde o início 2024. No início, o processo de adaptação foi muito desafiador para nós, mas graças ao acolhimento, suporte e apoio oferecido pela escola, conseguimos superar essa fase com tranquilidade. Hoje vejo o quanto a Helena se desenvolveu, e principalmente o quanto ela é feliz em fazer parte do Colégio Materna Kids. Tenho a certeza que fizemos a escolha certa! ❤️",
      rating: 5
    }
  ];

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % depoimentos.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + depoimentos.length) % depoimentos.length);
  };

  return (
    <section className="py-20 bg-gradient-to-br from-turquesa to-turquesa-dark" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-amarelo font-semibold text-sm uppercase tracking-wider">
            Depoimentos
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mt-2 mb-4">
            O que as famílias dizem
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto">
            A confiança das famílias é nosso maior patrimônio. Veja o que dizem 
            sobre a experiência no Colégio Materna.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="relative max-w-4xl mx-auto">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-3xl p-8 md:p-12 shadow-2xl"
          >
            <Quote className="w-12 h-12 text-turquesa/20 mb-6" />
            
            <p className="text-xl md:text-2xl text-cinza leading-relaxed mb-8">
              "{depoimentos[currentIndex].texto}"
            </p>
            
            <div className="flex items-center justify-between flex-wrap gap-4">
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-turquesa to-azul-claro flex items-center justify-center text-white font-bold text-xl">
                  {depoimentos[currentIndex].nome.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-cinza">{depoimentos[currentIndex].nome}</h4>
                  <p className="text-gray-500 text-sm">{depoimentos[currentIndex].relacao}</p>
                </div>
              </div>
              
              <div className="flex gap-1">
                {[...Array(depoimentos[currentIndex].rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amarelo text-amarelo" />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Navigation */}
          <div className="flex justify-center items-center gap-4 mt-8" role="navigation" aria-label="Navegação de depoimentos">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
              aria-label="Depoimento anterior"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex gap-2" role="tablist">
              {depoimentos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-white w-8' : 'bg-white/40'
                  }`}
                  aria-label={`Ir para depoimento ${index + 1}`}
                  aria-selected={index === currentIndex}
                  role="tab"
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
              aria-label="Próximo depoimento"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Depoimentos;
