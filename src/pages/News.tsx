import { useState } from 'react';
import { Link } from 'react-router-dom';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { FaArrowRight } from 'react-icons/fa';

const News = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const news = [
    {
      id: 1,
      title: 'Nova Horizonte inaugura Centro de Atendimento ao Cidadão',
      date: '2024-03-15',
      image: 'https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7?auto=format&fit=crop&w=800&q=80',
      excerpt: 'Novo espaço centraliza diversos serviços municipais para facilitar o atendimento à população.',
      category: 'Infraestrutura'
    },
    {
      id: 2,
      title: 'Programa de Desenvolvimento Local gera mais empregos',
      date: '2024-03-14',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=800&q=80',
      excerpt: 'Iniciativa da prefeitura já beneficiou mais de 100 pequenos empresários locais.',
      category: 'Economia'
    },
    {
      id: 3,
      title: 'Festival Cultural movimenta a cidade',
      date: '2024-03-13',
      image: 'https://images.unsplash.com/photo-1533174072545-7a4b6ad7a6c3?auto=format&fit=crop&w=800&q=80',
      excerpt: 'Evento reúne artistas locais e atrai visitantes de toda a região.',
      category: 'Cultura'
    },
    {
      id: 4,
      title: 'Prefeitura anuncia novo programa de habitação',
      date: '2024-03-12',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
      excerpt: 'Programa vai beneficiar famílias de baixa renda com moradias populares.',
      category: 'Habitação'
    },
    {
      id: 5,
      title: 'Campanha de vacinação atinge meta',
      date: '2024-03-11',
      image: 'https://images.unsplash.com/photo-1584515933487-779824d29309?auto=format&fit=crop&w=800&q=80',
      excerpt: 'Município alcança índice de vacinação acima da média nacional.',
      category: 'Saúde'
    },
    {
      id: 6,
      title: 'Obras de pavimentação avançam nos bairros',
      date: '2024-03-10',
      image: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?auto=format&fit=crop&w=800&q=80',
      excerpt: 'Mais de 10 km de vias recebem asfalto novo em diferentes regiões da cidade.',
      category: 'Infraestrutura'
    },
    {
      id: 7,
      title: 'Secretaria de Educação promove formação de professores',
      date: '2024-03-09',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
      excerpt: 'Programa de capacitação beneficia mais de 500 profissionais da rede municipal.',
      category: 'Educação'
    },
    {
      id: 8,
      title: 'Cidade recebe prêmio de gestão ambiental',
      date: '2024-03-08',
      image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&w=800&q=80',
      excerpt: 'Reconhecimento destaca ações de preservação e sustentabilidade.',
      category: 'Meio Ambiente'
    },
    {
      id: 9,
      title: 'Nova academia ao ar livre é inaugurada',
      date: '2024-03-07',
      image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=800&q=80',
      excerpt: 'Espaço oferece equipamentos modernos para prática de exercícios.',
      category: 'Esporte'
    },
    {
      id: 10,
      title: 'Projeto social capacita jovens para mercado de trabalho',
      date: '2024-03-06',
      image: 'https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&w=800&q=80',
      excerpt: 'Iniciativa oferece cursos profissionalizantes gratuitos.',
      category: 'Assistência Social'
    },
    {
      id: 11,
      title: 'Guarda Municipal recebe novas viaturas',
      image: 'https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=800&q=80',
      date: '2024-03-05',
      excerpt: 'Investimento reforça segurança nas ruas da cidade.',
      category: 'Segurança'
    },
    {
      id: 12,
      title: 'Feira do Produtor Rural comemora um ano',
      image: 'https://images.unsplash.com/photo-1488459716781-31db52582fe9?auto=format&fit=crop&w=800&q=80',
      date: '2024-03-04',
      excerpt: 'Evento fortalece agricultura familiar e economia local.',
      category: 'Agricultura'
    }
  ];

  const totalPages = Math.ceil(news.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = news.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div className="container mx-auto py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Notícias</h1>
        <div className="flex space-x-4">
          <select className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary">
            <option value="">Todas as categorias</option>
            <option value="infraestrutura">Infraestrutura</option>
            <option value="economia">Economia</option>
            <option value="cultura">Cultura</option>
            <option value="saude">Saúde</option>
          </select>
          <input
            type="text"
            placeholder="Pesquisar notícias..."
            className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {currentItems.map(item => (
          <Link to={`/noticias/${item.id}`} key={item.id}>
            <article className="news-card group cursor-pointer">
              <div className="relative overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.title} 
                  className="w-full h-48 object-cover transition-transform group-hover:scale-105"
                />
                <span className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-sm">
                  {item.category}
                </span>
              </div>
              <div className="p-6">
                <time className="text-sm text-gray-500">
                  {format(new Date(item.date), "d 'de' MMMM 'de' yyyy", { locale: ptBR })}
                </time>
                <h2 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h2>
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

      <div className="mt-8 flex justify-center">
        <nav className="flex space-x-2">
          <button
            onClick={() => paginate(1)}
            disabled={currentPage === 1}
            className={`px-4 py-2 rounded-md ${
              currentPage === 1 ? 'bg-gray-100 text-gray-400' : 'hover:bg-gray-100'
            }`}
          >
            Primeira
          </button>
          
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index + 1}
              onClick={() => paginate(index + 1)}
              className={`px-4 py-2 rounded-md ${
                currentPage === index + 1 ? 'bg-primary text-white' : 'hover:bg-gray-100'
              }`}
            >
              {index + 1}
            </button>
          ))}

          <button
            onClick={() => paginate(totalPages)}
            disabled={currentPage === totalPages}
            className={`px-4 py-2 rounded-md ${
              currentPage === totalPages ? 'bg-gray-100 text-gray-400' : 'hover:bg-gray-100'
            }`}
          >
            Última
          </button>
        </nav>
      </div>
    </div>
  );
};

export default News;