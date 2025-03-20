import { useEffect } from 'react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { format } from 'date-fns';
import { ptBR } from 'date-fns/locale';
import { FaCalendar, FaTag, FaShare, FaArrowRight } from 'react-icons/fa';

const NewsArticle = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // This would typically come from an API or database
  const article = {
    id: 1,
    title: 'Verdes Mares do Norte inaugura Centro de Atendimento ao Cidadão',
    date: '2024-03-15',
    category: 'Infraestrutura',
    image: 'https://images.unsplash.com/photo-1577495508326-19a1b3cf65b7?auto=format&fit=crop&w=1200&q=80',
    content: `
      <p>A Prefeitura de Verdes Mares do Norte inaugurou nesta quinta-feira (15) o novo Centro de Atendimento ao Cidadão (CAC), um espaço moderno e funcional que centralizará diversos serviços municipais em um único local.</p>
      
      <p>O novo centro, localizado no coração da cidade, conta com uma área de 1.200 metros quadrados e foi projetado para oferecer mais conforto e agilidade no atendimento à população. O espaço possui guichês específicos para cada tipo de serviço, sistema de senha eletrônica e área de espera climatizada.</p>
      
      <h2>Serviços Disponíveis</h2>
      <p>No CAC, os cidadãos poderão ter acesso a diversos serviços, incluindo:</p>
      <ul>
        <li>Emissão de documentos</li>
        <li>Regularização de imóveis</li>
        <li>Serviços tributários</li>
        <li>Protocolo geral</li>
        <li>Atendimento do PROCON</li>
      </ul>

      <h2>Horário de Funcionamento</h2>
      <p>O Centro de Atendimento ao Cidadão funcionará de segunda a sexta-feira, das 8h às 14h. Para alguns serviços, será possível realizar agendamento prévio através do portal da prefeitura.</p>

      <h2>Investimento</h2>
      <p>O investimento total na obra foi de R$ 2,5 milhões, incluindo a reforma do prédio, mobiliário e equipamentos de informática. Os recursos são provenientes do tesouro municipal e de emendas parlamentares.</p>
    `,
    author: 'Secretaria de Comunicação',
    tags: ['Infraestrutura', 'Serviços', 'Atendimento', 'Cidadania']
  };

  // Related news data
  const relatedNews = [
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
    },
    {
      id: 4,
      title: 'Prefeitura anuncia novo programa de habitação',
      date: '2024-03-12',
      image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&q=80',
      excerpt: 'Programa vai beneficiar famílias de baixa renda com moradias populares.'
    }
  ];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <div className="container mx-auto py-8">
      <article className="bg-white rounded-lg shadow-md overflow-hidden">
        <img 
          src={article.image} 
          alt={article.title}
          className="w-full h-[400px] object-cover"
        />
        
        <div className="p-8">
          <div className="flex items-center gap-4 text-sm text-gray-500 mb-4">
            <span className="flex items-center">
              <FaCalendar className="mr-2" />
              {format(new Date(article.date), "d 'de' MMMM 'de' yyyy", { locale: ptBR })}
            </span>
            <span className="flex items-center">
              <FaTag className="mr-2" />
              {article.category}
            </span>
          </div>

          <h1 className="text-4xl font-bold text-gray-800 mb-6">{article.title}</h1>

          <div 
            className="prose prose-lg max-w-none"
            dangerouslySetInnerHTML={{ __html: article.content }}
          />

          <div className="mt-8 pt-6 border-t border-gray-200">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Publicado por</p>
                <p className="font-medium">{article.author}</p>
              </div>
              <div className="flex items-center gap-2">
                <button className="btn-primary flex items-center">
                  <FaShare className="mr-2" />
                  Compartilhar
                </button>
              </div>
            </div>

            <div className="mt-4">
              <p className="text-sm text-gray-500 mb-2">Tags:</p>
              <div className="flex flex-wrap gap-2">
                {article.tags.map(tag => (
                  <span 
                    key={tag}
                    className="px-3 py-1 bg-gray-100 text-gray-600 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </article>

      <div className="mt-12">
        <h2 className="text-2xl font-bold mb-6">Notícias Relacionadas</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {relatedNews.map(news => (
            <Link 
              key={news.id}
              to={`/noticias/${news.id}`}
              className="group"
              onClick={() => window.scrollTo(0, 0)}
            >
              <article className="bg-white rounded-lg shadow-md overflow-hidden">
                <div className="relative overflow-hidden">
                  <img 
                    src={news.image} 
                    alt={news.title}
                    className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-bold text-lg mb-2 group-hover:text-primary transition-colors">
                    {news.title}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">
                    {news.excerpt}
                  </p>
                  <span className="btn-read-more inline-flex items-center">
                    Leia mais
                    <FaArrowRight className="ml-2" />
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default NewsArticle;