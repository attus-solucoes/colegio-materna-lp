import { Heart, Instagram, Facebook, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-cinza text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer */}
        <div className="py-16 grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Logo e Descrição */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="Colégio Materna Kids" className="h-16 object-contain" />
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              Especialistas em primeira infância. Educação com amor, propósito e alegria 
              para crianças de 4 meses a 5 anos em Itajubá - MG.
            </p>
            <div className="flex gap-4">
              <a href="https://instagram.com/colegiomaternakids" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-turquesa rounded-full flex items-center justify-center transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 hover:bg-turquesa rounded-full flex items-center justify-center transition-colors">
                <Facebook size={20} />
              </a>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h4 className="font-bold text-lg mb-4">Links Rápidos</h4>
            <ul className="space-y-3">
              <li><a href="#inicio" className="text-gray-400 hover:text-turquesa transition-colors">Início</a></li>
              <li><a href="#sobre" className="text-gray-400 hover:text-turquesa transition-colors">Sobre Nós</a></li>
              <li><a href="#metodologia" className="text-gray-400 hover:text-turquesa transition-colors">Metodologia</a></li>
              <li><a href="#programas" className="text-gray-400 hover:text-turquesa transition-colors">Programas</a></li>
              <li><a href="#estrutura" className="text-gray-400 hover:text-turquesa transition-colors">Estrutura</a></li>
              <li><a href="#contato" className="text-gray-400 hover:text-turquesa transition-colors">Contato</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h4 className="font-bold text-lg mb-4">Contato</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={20} className="text-turquesa flex-shrink-0 mt-1" />
                <span className="text-gray-400">Rua Alcídes Faria, 214<br />Varginha, Itajubá - MG<br />37501-058</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={20} className="text-turquesa" />
                <a href="tel:+553536218735" className="text-gray-400 hover:text-turquesa transition-colors">(35) 3621-8735</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={20} className="text-turquesa" />
                <span className="text-gray-400">contato@colegiomaterna.com.br</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-6 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            © {currentYear} Colégio Materna Kids. Todos os direitos reservados.
          </p>
          <p className="text-gray-400 text-sm flex items-center gap-1">
            Feito com <Heart size={14} className="text-rosa fill-rosa" /> em Itajubá
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
