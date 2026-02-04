import Navbar from './components/Navbar';
import Hero from './components/Hero';
import PropostaValor from './components/PropostaValor';
import Sobre from './components/Sobre';
import Metodologia from './components/Metodologia';
import Programas from './components/Programas';
import Estrutura from './components/Estrutura';
import Depoimentos from './components/Depoimentos';
import FAQ from './components/FAQ';
import Contato from './components/Contato';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';

function App() {
  return (
    <div className="overflow-x-hidden">
      <Navbar />
      <Hero />
      <PropostaValor />
      <Sobre />
      <Metodologia />
      <Programas />
      <Estrutura />
      <Depoimentos />
      <FAQ />
      <Contato />
      <Footer />
      <WhatsAppButton />
    </div>
  );
}

export default App;
