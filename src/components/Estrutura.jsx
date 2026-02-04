import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

const Estrutura = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [selectedImage, setSelectedImage] = useState(null);

  const fotos = [
    {
      url: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&h=400&fit=crop&q=80",
      titulo: "Sala de Atividades",
      descricao: "Ambiente amplo e colorido"
    },
    {
      url: "https://images.unsplash.com/photo-1576495199011-eb94736d05d6?w=600&h=400&fit=crop&q=80",
      titulo: "Área Externa",
      descricao: "Espaço para brincar ao ar livre"
    },
    {
      url: "https://images.unsplash.com/photo-1567057419565-4349c49d8a04?w=600&h=400&fit=crop&q=80",
      titulo: "Parquinho",
      descricao: "Diversão segura para todas as idades"
    },
    {
      url: "https://images.unsplash.com/photo-1560440021-33f9b867899d?w=600&h=400&fit=crop&q=80",
      titulo: "Biblioteca",
      descricao: "Cantinho da leitura"
    },
    {
      url: "https://images.unsplash.com/photo-1564429238877-1790b696c06a?w=600&h=400&fit=crop&q=80",
      titulo: "Sala do Berçário",
      descricao: "Aconchego para os pequenos"
    },
    {
      url: "https://images.unsplash.com/photo-1597074866923-dc0589150358?w=600&h=400&fit=crop&q=80",
      titulo: "Refeitório",
      descricao: "Refeições saudáveis"
    }
  ];

  const openLightbox = (index) => setSelectedImage(index);
  const closeLightbox = () => setSelectedImage(null);
  const nextImage = () => setSelectedImage((prev) => (prev + 1) % fotos.length);
  const prevImage = () => setSelectedImage((prev) => (prev - 1 + fotos.length) % fotos.length);

  return (
    <section id="estrutura" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-turquesa font-semibold text-sm uppercase tracking-wider">
            Nossa Estrutura
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-cinza mt-2 mb-4">
            Um espaço pensado para <span className="text-turquesa">aprender</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Ambiente seguro, acolhedor e estimulante, projetado para proporcionar 
            as melhores experiências de aprendizado para seu filho.
          </p>
        </motion.div>

        {/* Galeria */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {fotos.map((foto, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.03 }}
              onClick={() => openLightbox(index)}
              className="relative rounded-2xl overflow-hidden shadow-lg cursor-pointer group"
            >
              <img
                src={foto.url}
                alt={`${foto.titulo} - ${foto.descricao} no Colégio Materna Kids`}
                className="w-full h-48 md:h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                loading="lazy"
                decoding="async"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 text-white">
                  <h4 className="font-bold">{foto.titulo}</h4>
                  <p className="text-sm text-white/80">{foto.descricao}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">Quer conhecer pessoalmente?</p>
          <a
            href="https://api.whatsapp.com/send/?phone=553536218735&text=Olá!%20Gostaria%20de%20agendar%20uma%20visita%20para%20conhecer%20a%20estrutura%20do%20colégio."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-turquesa hover:bg-turquesa-dark text-white px-8 py-4 rounded-full font-semibold transition-all hover:scale-105"
          >
            Agende uma Visita
          </a>
        </motion.div>
      </div>

      {/* Lightbox */}
      {selectedImage !== null && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white hover:text-turquesa transition-colors"
          >
            <X size={32} />
          </button>
          
          <button
            onClick={(e) => { e.stopPropagation(); prevImage(); }}
            className="absolute left-4 text-white hover:text-turquesa transition-colors"
          >
            <ChevronLeft size={48} />
          </button>
          
          <motion.img
            key={selectedImage}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            src={fotos[selectedImage].url.replace('w=600&h=400', 'w=1200&h=800')}
            alt={fotos[selectedImage].titulo}
            className="max-w-full max-h-[80vh] rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
          
          <button
            onClick={(e) => { e.stopPropagation(); nextImage(); }}
            className="absolute right-4 text-white hover:text-turquesa transition-colors"
          >
            <ChevronRight size={48} />
          </button>

          <div className="absolute bottom-4 text-white text-center">
            <h4 className="font-bold text-xl">{fotos[selectedImage].titulo}</h4>
            <p className="text-white/80">{fotos[selectedImage].descricao}</p>
          </div>
        </motion.div>
      )}
    </section>
  );
};

export default Estrutura;
