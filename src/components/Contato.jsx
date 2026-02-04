import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';
import { MapPin, Phone, Clock, Instagram, Send, MessageCircle } from 'lucide-react';

const Contato = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    mensagem: '',
    interesse: 'visita'
  });
  const [enviando, setEnviando] = useState(false);
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setEnviando(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    const mensagem = `Olá! Meu nome é ${formData.nome}.%0A%0AInteresse: ${formData.interesse}%0A%0AMensagem: ${formData.mensagem}%0A%0AContato: ${formData.telefone}`;
    window.open(`https://api.whatsapp.com/send/?phone=553536218735&text=${mensagem}`, '_blank');
    setEnviando(false);
    setEnviado(true);
    setFormData({ nome: '', email: '', telefone: '', mensagem: '', interesse: 'visita' });
    setTimeout(() => setEnviado(false), 3000);
  };

  const infos = [
    { icon: <MapPin className="w-6 h-6" />, titulo: "Endereço", texto: "Rua Alcídes Faria, 214 - Varginha", subtexto: "Itajubá - MG, 37501-058" },
    { icon: <Phone className="w-6 h-6" />, titulo: "WhatsApp", texto: "(35) 3621-8735", subtexto: "Atendimento comercial" },
    { icon: <Clock className="w-6 h-6" />, titulo: "Horário", texto: "Segunda a Sexta", subtexto: "06h45 às 18h" },
    { icon: <Instagram className="w-6 h-6" />, titulo: "Instagram", texto: "@colegiomaternakids", subtexto: "Siga-nos", link: "https://instagram.com/colegiomaternakids" }
  ];

  return (
    <section id="contato" className="py-20 bg-white" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 30 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center mb-16">
          <span className="text-turquesa font-semibold text-sm uppercase tracking-wider">Entre em Contato</span>
          <h2 className="text-3xl md:text-4xl font-bold text-cinza mt-2 mb-4">Venha nos <span className="text-turquesa">conhecer</span></h2>
          <p className="text-gray-600 max-w-2xl mx-auto">Agende uma visita e conheça de perto nosso espaço, metodologia e equipe.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          <motion.div initial={{ opacity: 0, x: -50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }}>
            <div className="bg-cinza-claro rounded-3xl p-8">
              <h3 className="text-2xl font-bold text-cinza mb-6">Agende uma Visita</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Nome completo</label>
                  <input type="text" name="nome" value={formData.nome} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-turquesa focus:border-transparent" placeholder="Seu nome" />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-turquesa focus:border-transparent" placeholder="seu@email.com" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Telefone</label>
                    <input type="tel" name="telefone" value={formData.telefone} onChange={handleChange} required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-turquesa focus:border-transparent" placeholder="(00) 00000-0000" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Interesse</label>
                  <select name="interesse" value={formData.interesse} onChange={handleChange} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-turquesa focus:border-transparent">
                    <option value="visita">Agendar uma visita</option>
                    <option value="matricula">Informações sobre matrícula</option>
                    <option value="valores">Valores e mensalidades</option>
                    <option value="outro">Outro assunto</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Mensagem (opcional)</label>
                  <textarea name="mensagem" value={formData.mensagem} onChange={handleChange} rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-turquesa focus:border-transparent resize-none" placeholder="Conte-nos mais..." />
                </div>
                <button type="submit" disabled={enviando} className={`w-full py-4 rounded-full font-semibold text-white flex items-center justify-center gap-2 ${enviado ? 'bg-green-500' : 'bg-turquesa hover:bg-turquesa-dark'} transition-all`}>
                  {enviando ? (<><div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />Enviando...</>) : enviado ? (<>✓ Redirecionando...</>) : (<><Send size={20} />Enviar Mensagem</>)}
                </button>
              </form>
              <div className="mt-6 pt-6 border-t border-gray-200">
                <p className="text-center text-gray-500 text-sm mb-3">ou se preferir</p>
                <a href="https://api.whatsapp.com/send/?phone=553536218735" target="_blank" rel="noopener noreferrer" className="w-full py-4 rounded-full font-semibold text-white bg-[#25D366] hover:bg-[#20BD5A] transition-all flex items-center justify-center gap-2">
                  <MessageCircle size={20} />Chamar no WhatsApp
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div initial={{ opacity: 0, x: 50 }} animate={isInView ? { opacity: 1, x: 0 } : {}} transition={{ duration: 0.8 }} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              {infos.map((info, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={isInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.5, delay: index * 0.1 }} className="bg-cinza-claro rounded-2xl p-5 hover:shadow-lg transition-shadow">
                  {info.link ? (
                    <a href={info.link} target="_blank" rel="noopener noreferrer" className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-turquesa/10 rounded-xl flex items-center justify-center text-turquesa flex-shrink-0">{info.icon}</div>
                      <div><h4 className="font-semibold text-cinza">{info.titulo}</h4><p className="text-turquesa font-medium">{info.texto}</p><p className="text-gray-500 text-sm">{info.subtexto}</p></div>
                    </a>
                  ) : (
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 bg-turquesa/10 rounded-xl flex items-center justify-center text-turquesa flex-shrink-0">{info.icon}</div>
                      <div><h4 className="font-semibold text-cinza">{info.titulo}</h4><p className="text-gray-700">{info.texto}</p><p className="text-gray-500 text-sm">{info.subtexto}</p></div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
            <div className="rounded-2xl overflow-hidden shadow-lg h-[300px]">
              <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3685.123456789!2d-45.4504600!3d-22.4235780!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjLCsDI1JzI0LjkiUyA0NcKwMjcnMDEuNyJX!5e0!3m2!1spt-BR!2sbr!4v1234567890" width="100%" height="100%" style={{ border: 0 }} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Localização Colégio Materna" />
            </div>
            <div className="bg-gradient-to-r from-turquesa to-turquesa-dark rounded-2xl p-6 text-white">
              <h4 className="font-bold text-lg mb-2">📍 Como chegar</h4>
              <p className="text-white/90 text-sm">Estamos localizados no bairro Varginha, em Itajubá. Fácil acesso e estacionamento disponível para visitantes.</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contato;
