import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Phone, Clock, Instagram, MessageCircle, Calendar } from 'lucide-react';

const Contato = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const infos = [
    { icon: <MapPin className="w-6 h-6" />, titulo: "Endereço", texto: "Rua Alcídes Faria, 214 - Varginha", subtexto: "Itajubá - MG, 37501-058" },
    { icon: <Phone className="w-6 h-6" />, titulo: "Telefone", texto: "(35) 3621-8735", subtexto: "Atendimento comercial" },
    { icon: <Clock className="w-6 h-6" />, titulo: "Horário", texto: "Segunda a Sexta", subtexto: "06h45 às 18h" },
    { icon: <Instagram className="w-6 h-6" />, titulo: "Instagram", texto: "@colegiomaternakids", subtexto: "Siga-nos", link: "https://instagram.com/colegiomaternakids" }
  ];

  return (
    <section id="contato" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }} 
          animate={isInView ? { opacity: 1, y: 0 } : {}} 
          transition={{ duration: 0.6 }} 
          className="text-center mb-16"
        >
          <span className="text-turquesa font-semibold text-sm uppercase tracking-wider">
            Entre em Contato
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-cinza mt-2 mb-4">
            Venha nos <span className="text-turquesa">conhecer</span>
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Agende uma visita e conheça de perto nosso espaço, metodologia e equipe.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* CTA Principal - WhatsApp */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }} 
            animate={isInView ? { opacity: 1, x: 0 } : {}} 
            transition={{ duration: 0.8 }}
          >
            <div className="bg-gradient-to-br from-turquesa to-turquesa-dark rounded-3xl p-8 md:p-12 text-white h-full flex flex-col justify-center">
              <div className="text-center">
                <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <MessageCircle className="w-10 h-10" />
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold mb-4">
                  Fale conosco pelo WhatsApp
                </h3>
                
                <p className="text-white/90 mb-8 text-lg">
                  Tire suas dúvidas, conheça nossos programas ou agende uma visita. 
                  Estamos prontos para atender você!
                </p>

                <div className="space-y-4">
                  <a
                    href="https://api.whatsapp.com/send/?phone=553536218735&text=Ol%C3%A1!%20Gostaria%20de%20agendar%20uma%20visita%20ao%20Col%C3%A9gio%20Materna."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 px-8 rounded-full font-bold text-turquesa bg-white hover:bg-amarelo hover:text-cinza transition-all flex items-center justify-center gap-3 text-lg shadow-lg hover:shadow-xl hover:scale-105"
                  >
                    <Calendar className="w-6 h-6" />
                    Agendar uma Visita
                  </a>

                  <a
                    href="https://api.whatsapp.com/send/?phone=553536218735&text=Ol%C3%A1!%20Gostaria%20de%20saber%20mais%20sobre%20o%20Col%C3%A9gio%20Materna."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full py-4 px-8 rounded-full font-semibold text-white bg-white/20 hover:bg-white/30 transition-all flex items-center justify-center gap-3 text-lg backdrop-blur-sm"
                  >
                    <MessageCircle className="w-6 h-6" />
                    Tirar Dúvidas
                  </a>
                </div>

                <p className="mt-6 text-white/70 text-sm">
                  Respondemos em até 2 horas em dias úteis
                </p>
              </div>
            </div>
          </motion.div>

          {/* Informações e Mapa */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }} 
            animate={isInView ? { opacity: 1, x: 0 } : {}} 
            transition={{ duration: 0.8 }} 
            className="space-y-6"
          >
            {/* Cards de Informação */}
            <div className="grid sm:grid-cols-2 gap-4">
              {infos.map((info, index) => (
                <motion.div 
                  key={index} 
                  initial={{ opacity: 0, y: 20 }} 
                  animate={isInView ? { opacity: 1, y: 0 } : {}} 
                  transition={{ duration: 0.5, delay: index * 0.1 }} 
                  className="bg-cinza-claro rounded-2xl p-5 hover:shadow-lg transition-all hover:-translate-y-1"
                >
                  {info.link ? (
                    <a href={info.link} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-turquesa/10 rounded-xl flex items-center justify-center text-turquesa flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-cinza">{info.titulo}</h4>
                        <p className="text-turquesa font-medium">{info.texto}</p>
                        <p className="text-gray-500 text-sm">{info.subtexto}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-turquesa/10 rounded-xl flex items-center justify-center text-turquesa flex-shrink-0">
                        {info.icon}
                      </div>
                      <div>
                        <h4 className="font-semibold text-cinza">{info.titulo}</h4>
                        <p className="text-gray-700">{info.texto}</p>
                        <p className="text-gray-500 text-sm">{info.subtexto}</p>
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            {/* Mapa */}
            <div className="rounded-2xl overflow-hidden shadow-lg h-[250px]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.123456789!2d-45.4504600!3d-22.4235780!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDI1JzI0LjkiUyA0NcKwMjcnMDEuNyJX!5e0!3m2!1spt-BR!2sbr!4v1234567890" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade" 
                title="Localização Colégio Materna Kids" 
              />
            </div>

            {/* Como chegar */}
            <div className="bg-cinza-claro rounded-2xl p-6">
              <h4 className="font-bold text-cinza text-lg mb-2 flex items-center gap-2">
                📍 Como chegar
              </h4>
              <p className="text-gray-600 text-sm">
                Estamos localizados no bairro Varginha, em Itajubá. 
                Fácil acesso e estacionamento disponível para visitantes.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
