import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';

const Depoimentos = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [currentIndex, setCurrentIndex] = useState(0);

  const depoimentos = [
    {
      nome: "Fernanda Oliveira",
      relacao: "Mãe do Pedro, 3 anos",
      foto: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop",
      texto: "O Colégio Materna transformou a vida do meu filho. Ele chegava chorando e hoje não quer vir embora! A equipe é extremamente cuidadosa e atenciosa. Recomendo de olhos fechados.",
      rating: 5
    },
    {
      nome: "Ricardo Santos",
      relacao: "Pai da Beatriz, 4 anos",
      foto: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop",
      texto: "A metodologia é incrível! Minha filha desenvolveu muito a autonomia e a comunicação. Os projetos são muito bem pensados e as professoras são apaixonadas pelo que fazem.",
      rating: 5
    },
    {
      nome: "Camila Mendes",
      relacao: "Mãe do Lucas, 2 anos",
      foto: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop",
      texto: "Procuramos muito antes de encontrar o Materna. A estrutura é excelente, as turmas são pequenas e o acompanhamento é individualizado. Meu filho ama ir para a escola!",
      rating: 5
    },
    {
      nome: "André Costa",
      relacao: "Pai do Miguel, 1 ano",
      foto: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop",
      texto: "Deixar um bebê de 6 meses na escola é muito difícil, mas a equipe do berçário nos transmitiu total segurança. Recebo fotos e atualizações todos os dias. Nota 10!",
      rating: 5
    },
    {
      nome: "Juliana Ferreira",
      relacao: "Mãe da Sofia, 5 anos",
      foto: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=100&h=100&fit=crop",
      texto: "Minha filha está no Materna desde o berçário e hoje está pronta para o fundamental. O trabalho de alfabetização é excepcional. Gratidão eterna a toda equipe!",
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
            
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <img
                  src={depoimentos[currentIndex].foto}
                  alt={depoimentos[currentIndex].nome}
                  className="w-14 h-14 rounded-full object-cover"
                />
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
          <div className="flex justify-center items-center gap-4 mt-8">
            <button
              onClick={prevSlide}
              className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
            >
              <ChevronLeft size={24} />
            </button>
            
            <div className="flex gap-2">
              {depoimentos.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === currentIndex ? 'bg-white w-8' : 'bg-white/40'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center text-white transition-colors"
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
