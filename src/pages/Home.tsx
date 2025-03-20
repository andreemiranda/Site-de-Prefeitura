import { useState } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { FaNewspaper, FaFileAlt, FaUsers, FaCalendar, FaArrowRight } from 'react-icons/fa';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {
  const [news] = useState([
    {
      id: 1,
      title: 'Verdes Mares do Norte inaugura Centro de Atendimento ao Cidadão',
      date: '2024-03-15',
      image: 'https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7?auto=format&fit=crop&w=800&q=80',
      excerpt: 'Novo espaço centraliza diversos serviços municipais para facilitar o atendimento à população.'
    },
    {
      id: 2,
      title: 'Programa de Desenvolvimento Local gera mais empregos',
      date: '2024-03-14',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80',
      excerpt: 'Iniciativa da prefeitura já beneficiou mais de 100 pequenos empresários locais.'
    },
    {
      id: 3,
      title: 'Festival Cultural movimenta a cidade',
      date: '2024-03-13',
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=80',
      excerpt: 'Evento reúne artistas locais e atrai visitantes de toda a região.'
    }
  ]);

  const officials = {
    mayor: {
      name: 'João Silva',
      role: 'Prefeito',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80'
    },
    vicePresident: {
      name: 'Maria Santos',
      role: 'Vice-Prefeita',
      image: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=800&q=80'
    }
  };

  const secretaries = [
    {
      id: 'health',
      name: 'Dr. Pedro Costa',
      role: 'Secretário de Saúde',
      image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'education',
      name: 'Profa. Ana Oliveira',
      role: 'Secretária de Educação',
      image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'infrastructure',
      name: 'Eng. Carlos Mendes',
      role: 'Secretário de Infraestrutura',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 'social',
      name: 'Dra. Luciana Ferreira',
      role: 'Secretária de Assistência Social',
      image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=800&q=80'
    }
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    className: "rounded-lg overflow-hidden shadow-xl mb-12"
  };

  const secretariesSliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  };

  return (
    <div className="py-8">
      <div className="container">
        <Slider {...sliderSettings}>
          {news.map(item => (
            <div key={item.id} className="relative">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-12">
                <div className="container">
                  <h2 className="text-white text-4xl font-bold mb-4">{item.title}</h2>
                  <p className="text-white/90 text-xl max-w-2xl mb-4">{item.excerpt}</p>
                  <Link 
                    to={`/noticias/${item.id}`} 
                    className="btn-read-more-light"
                  >
                    Leia mais
                    <FaArrowRight />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </Slider>

        {/* Government Officials */}
        <div className="mb-16">
          <h2 className="section-title mb-12">Governo Municipal</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            {/* Mayor */}
            <Link to="/oficial/prefeito" className="bg-white rounded-lg shadow-md p-6 flex items-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <img 
                src={officials.mayor.image} 
                alt={officials.mayor.name}
                className="w-40 h-40 object-cover rounded-full mr-6"
              />
              <div>
                <h3 className="text-2xl font-bold text-gray-800">{officials.mayor.name}</h3>
                <p className="text-primary text-lg">{officials.mayor.role}</p>
              </div>
            </Link>
            {/* Vice Mayor */}
            <Link to="/oficial/vice-prefeito" className="bg-white rounded-lg shadow-md p-6 flex items-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
              <img 
                src={officials.vicePresident.image} 
                alt={officials.vicePresident.name}
                className="w-40 h-40 object-cover rounded-full mr-6"
              />
              <div>
                <h3 className="text-2xl font-bold text-gray-800">{officials.vicePresident.name}</h3>
                <p className="text-primary text-lg">{officials.vicePresident.role}</p>
              </div>
            </Link>
          </div>

          {/* Secretaries Carousel */}
          <h2 className="section-title mb-12">Secretários Municipais</h2>
          <Slider {...secretariesSliderSettings}>
            {secretaries.map((secretary) => (
              <div key={secretary.id} className="px-2">
                <Link to={`/oficial/secretario/${secretary.id}`} className="block">
                  <div className="bg-white rounded-lg shadow-md p-6 text-center transform transition-all duration-300 hover:scale-105 hover:shadow-lg">
                    <img 
                      src={secretary.image} 
                      alt={secretary.name}
                      className="w-32 h-32 object-cover rounded-full mx-auto mb-4"
                    />
                    <h3 className="text-xl font-bold text-gray-800">{secretary.name}</h3>
                    <p className="text-primary">{secretary.role}</p>
                  </div>
                </Link>
              </div>
            ))}
          </Slider>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          <Link to="/noticias" className="service-card group">
            <FaNewspaper className="text-5xl text-primary mb-6" />
            <h3 className="text-xl font-bold mb-3">Últimas Notícias</h3>
            <p className="text-gray-600">Fique por dentro das últimas atualizações da cidade.</p>
          </Link>

          <Link to="/downloads" className="service-card group">
            <FaFileAlt className="text-5xl text-primary mb-6" />
            <h3 className="text-xl font-bold mb-3">Documentos</h3>
            <p className="text-gray-600">Acesse documentos e formulários importantes.</p>
          </Link>

          <Link to="/servicos" className="service-card group">
            <FaUsers className="text-5xl text-primary mb-6" />
            <h3 className="text-xl font-bold mb-3">Portal do Cidadão</h3>
            <p className="text-gray-600">Serviços online para facilitar sua vida.</p>
          </Link>

          <Link to="/noticias" className="service-card group">
            <FaCalendar className="text-5xl text-primary mb-6" />
            <h3 className="text-xl font-bold mb-3">Agenda</h3>
            <p className="text-gray-600">Calendário de eventos e atividades.</p>
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-2">
            <h2 className="section-title">Últimas Notícias</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {news.map(item => (
                <Link to={`/noticias/${item.id}`} key={item.id}>
                  <article className="news-card group cursor-pointer">
                    <div className="overflow-hidden">
                      <img 
                        src={item.image} 
                        alt={item.title}
                        className="group-hover:scale-110 transition-transform duration-500" 
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-sm text-gray-500">{item.date}</span>
                      <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                      <p className="text-gray-600 mb-4">{item.excerpt}</p>
                      <button className="btn-read-more">
                        Leia mais
                        <FaArrowRight />
                      </button>
                    </div>
                  </article>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <h2 className="section-title">Acesso Rápido</h2>
            <div className="bg-white rounded-lg shadow-md p-6 border border-gray-100">
              <ul className="space-y-4">
                <li>
                  <Link to="/transparencia" className="flex items-center text-primary hover:text-secondary transition-colors p-3 rounded-lg hover:bg-gray-50">
                    <FaFileAlt className="mr-3 text-xl" />
                    <span className="font-medium">Portal da Transparência</span>
                  </Link>
                </li>
                <li>
                  <Link to="/licitacoes" className="flex items-center text-primary hover:text-secondary transition-colors p-3 rounded-lg hover:bg-gray-50">
                    <FaFileAlt className="mr-3 text-xl" />
                    <span className="font-medium">Licitações</span>
                  </Link>
                </li>
                <li>
                  <Link to="/contratos" className="flex items-center text-primary hover:text-secondary transition-colors p-3 rounded-lg hover:bg-gray-50">
                    <FaFileAlt className="mr-3 text-xl" />
                    <span className="font-medium">Contratos</span>
                  </Link>
                </li>
                <li>
                  <Link to="/legislacao" className="flex items-center text-primary hover:text-secondary transition-colors p-3 rounded-lg hover:bg-gray-50">
                    <FaFileAlt className="mr-3 text-xl" />
                    <span className="font-medium">Legislação</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;