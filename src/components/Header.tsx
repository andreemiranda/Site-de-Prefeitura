import { Link } from 'react-router-dom';
import { FaSearch, FaAccessibleIcon, FaPhone, FaEnvelope, FaBars, FaMoon, FaAdjust } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import Logo from './Logo';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [highContrast, setHighContrast] = useState(false);
  const [fontSize, setFontSize] = useState(16);

  useEffect(() => {
    const savedContrast = localStorage.getItem('highContrast') === 'true';
    const savedFontSize = Number(localStorage.getItem('fontSize')) || 16;
    setHighContrast(savedContrast);
    setFontSize(savedFontSize);
    applyHighContrast(savedContrast);
    applyFontSize(savedFontSize);
  }, []);

  const toggleHighContrast = () => {
    const newValue = !highContrast;
    setHighContrast(newValue);
    localStorage.setItem('highContrast', String(newValue));
    applyHighContrast(newValue);
  };

  const applyHighContrast = (enabled: boolean) => {
    if (enabled) {
      document.body.classList.add('high-contrast');
    } else {
      document.body.classList.remove('high-contrast');
    }
  };

  const changeFontSize = (increase: boolean) => {
    const newSize = increase ? fontSize + 2 : fontSize - 2;
    if (newSize >= 12 && newSize <= 24) {
      setFontSize(newSize);
      localStorage.setItem('fontSize', String(newSize));
      applyFontSize(newSize);
    }
  };

  const applyFontSize = (size: number) => {
    document.documentElement.style.fontSize = `${size}px`;
  };

  return (
    <header className="shadow-custom">
      <div className="top-header">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center py-2">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 mb-2 md:mb-0">
              <span className="flex items-center">
                <FaPhone className="mr-2 text-primary" />
                <span>(63) 3411-7000</span>
              </span>
              <span className="flex items-center">
                <FaEnvelope className="mr-2 text-primary" />
                <span>contato@verdesmares.gov.br</span>
              </span>
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-4">
                <button
                  onClick={() => changeFontSize(false)}
                  className="text-sm px-2 py-1 bg-gray-200 rounded"
                  aria-label="Diminuir fonte"
                >
                  A-
                </button>
                <button
                  onClick={() => changeFontSize(true)}
                  className="text-sm px-2 py-1 bg-gray-200 rounded"
                  aria-label="Aumentar fonte"
                >
                  A+
                </button>
                <button
                  onClick={toggleHighContrast}
                  className="flex items-center space-x-2 text-primary hover:text-secondary transition-colors"
                  aria-label="Alternar alto contraste"
                >
                  {highContrast ? <FaMoon /> : <FaAdjust />}
                  <span className="hidden md:inline">Alto Contraste</span>
                </button>
                <button
                  className="flex items-center space-x-2 text-primary hover:text-secondary transition-colors"
                  onClick={() => {
                    const vw = document.querySelector('.enabled') as HTMLElement;
                    if (vw) {
                      vw.style.display = vw.style.display === 'none' ? 'block' : 'none';
                    }
                  }}
                >
                  <FaAccessibleIcon />
                  <span className="hidden md:inline">VLibras</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="main-header">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-4">
              <Logo size="lg" />
              <div className="text-white">
                <h1 className="text-2xl font-bold leading-tight">Verdes Mares do Norte</h1>
                <p className="text-sm opacity-90">Prefeitura Municipal</p>
              </div>
            </Link>
            
            <div className="hidden md:flex items-center space-x-6">
              <div className="relative">
                <input
                  type="search"
                  placeholder="Pesquisar no site..."
                  className="w-64 px-4 py-2 rounded-full text-sm focus:outline-none focus:ring-2 focus:ring-secondary/50"
                />
                <FaSearch className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
              </div>
            </div>

            <button 
              className="md:hidden text-white text-2xl"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <FaBars />
            </button>
          </div>
        </div>
      </div>

      <nav className={`nav-menu ${isMenuOpen ? 'block' : 'hidden md:block'}`}>
        <div className="container mx-auto">
          <ul className="flex flex-col md:flex-row md:justify-center">
            <li>
              <Link to="/" className="nav-link">
                Início
              </Link>
            </li>
            <li>
              <Link to="/noticias" className="nav-link">
                Notícias
              </Link>
            </li>
            <li>
              <Link to="/servicos" className="nav-link">
                Serviços
              </Link>
            </li>
            <li>
              <Link to="/transparencia" className="nav-link">
                Transparência
              </Link>
            </li>
            <li>
              <Link to="/contato" className="nav-link">
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Header;