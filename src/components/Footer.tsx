import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaYoutube, FaMapMarkerAlt, FaPhone, FaEnvelope } from 'react-icons/fa';
import Logo from './Logo';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container mx-auto">
        <div className="footer-grid">
          <div className="flex flex-col items-start">
            <div className="flex items-center space-x-4 mb-6">
              <Logo size="md" />
              <div>
                <h3 className="text-xl font-bold text-white">Verdes Mares do Norte</h3>
                <p className="text-white/80 text-sm">Prefeitura Municipal</p>
              </div>
            </div>
            <div className="space-y-3 text-white/80">
              <p className="flex items-center">
                <FaMapMarkerAlt className="mr-2" />
                Av. Principal, 1000 - Centro
              </p>
              <p className="flex items-center">
                <FaPhone className="mr-2" />
                (63) 3411-7000
              </p>
              <p className="flex items-center">
                <FaEnvelope className="mr-2" />
                contato@verdesmares.gov.br
              </p>
            </div>
          </div>

          <div>
            <h3 className="footer-title">Links Úteis</h3>
            <ul className="footer-links">
              <li><Link to="/servicos">Serviços</Link></li>
              <li><Link to="/transparencia">Portal da Transparência</Link></li>
              <li><Link to="/noticias">Notícias</Link></li>
              <li><Link to="/licitacoes">Licitações</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="footer-title">Acesso Rápido</h3>
            <ul className="footer-links">
              <li><Link to="/ouvidoria">Ouvidoria</Link></li>
              <li><Link to="/concursos">Concursos</Link></li>
              <li><Link to="/legislacao">Legislação</Link></li>
              <li><Link to="/downloads">Downloads</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="footer-title">Redes Sociais</h3>
            <div className="flex space-x-4 mt-4">
              <a href="https://facebook.com/prefeituraverdesmaresnorte" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-secondary transition-colors">
                <FaFacebook />
              </a>
              <a href="https://instagram.com/prefeituraverdesmaresnorte" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-secondary transition-colors">
                <FaInstagram />
              </a>
              <a href="https://youtube.com/prefeituraverdesmaresnorte" target="_blank" rel="noopener noreferrer" className="text-2xl hover:text-secondary transition-colors">
                <FaYoutube />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/20">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center md:text-left mb-2 md:mb-0">
              &copy; 2024 Prefeitura de Verdes Mares do Norte. Todos os direitos reservados.
            </p>
            <p className="text-sm text-center md:text-right">
              Desenvolvido por André Miranda - (63) 99242-8022
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;