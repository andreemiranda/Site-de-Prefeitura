import React from 'react';
import { useParams } from 'react-router-dom';
import { FaEnvelope, FaPhone, FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Officials = () => {
  const { role, id } = useParams();

  const officials = {
    mayor: {
      name: 'João Silva',
      role: 'Prefeito',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80',
      bio: 'João Silva é o atual prefeito de Nova Horizonte, eleito em 2020. Com vasta experiência em gestão pública, tem dedicado sua administração ao desenvolvimento sustentável e à melhoria da qualidade de vida dos cidadãos.',
      education: 'Graduado em Administração Pública pela Universidade Federal do Tocantins',
      career: 'Possui mais de 15 anos de experiência no serviço público',
      contact: {
        email: 'prefeito@verdesmares.gov.br',
        phone: '(63) 3411-7001'
      },
      social: {
        facebook: 'https://facebook.com/prefeito.joaosilva',
        instagram: 'https://instagram.com/prefeito.joaosilva',
        twitter: 'https://twitter.com/prefeito.joaosilva'
      }
    },
    vicePresident: {
      name: 'Maria Santos',
      role: 'Vice-Prefeita',
      image: 'https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=800&q=80',
      bio: 'Maria Santos é a atual vice-prefeita de Nova Horizonte. Com formação em Direito e especialização em Gestão Pública, tem contribuído significativamente para o desenvolvimento do município.',
      education: 'Graduada em Direito pela Universidade de São Paulo',
      career: 'Advogada com experiência em Direito Público',
      contact: {
        email: 'vice.prefeita@verdesmares.gov.br',
        phone: '(63) 3411-7002'
      },
      social: {
        facebook: 'https://facebook.com/vice.mariasantos',
        instagram: 'https://instagram.com/vice.mariasantos',
        twitter: 'https://twitter.com/vice.mariasantos'
      }
    },
    secretary: {
      health: {
        name: 'Dr. Pedro Costa',
        role: 'Secretário de Saúde',
        image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=800&q=80',
        bio: 'Dr. Pedro Costa é médico com especialização em Saúde Pública e gestão hospitalar. À frente da Secretaria de Saúde, tem implementado importantes melhorias no sistema de saúde municipal.',
        contact: {
          email: 'saude@verdesmares.gov.br',
          phone: '(63) 3411-7003'
        }
      },
      education: {
        name: 'Profa. Ana Oliveira',
        role: 'Secretária de Educação',
        image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=800&q=80',
        bio: 'Professora Ana Oliveira possui mestrado em Educação e vasta experiência na área pedagógica. Tem trabalhado na modernização do ensino municipal.',
        contact: {
          email: 'educacao@verdesmares.gov.br',
          phone: '(63) 3411-7004'
        }
      },
      infrastructure: {
        name: 'Eng. Carlos Mendes',
        role: 'Secretário de Infraestrutura',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80',
        bio: 'Engenheiro Carlos Mendes é especialista em infraestrutura urbana e tem coordenado importantes obras de desenvolvimento na cidade.',
        contact: {
          email: 'infraestrutura@verdesmares.gov.br',
          phone: '(63) 3411-7005'
        }
      },
      social: {
        name: 'Dra. Luciana Ferreira',
        role: 'Secretária de Assistência Social',
        image: 'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?auto=format&fit=crop&w=800&q=80',
        bio: 'Dra. Luciana Ferreira é assistente social com doutorado em Políticas Públicas. Tem desenvolvido programas importantes de assistência à população.',
        contact: {
          email: 'social@verdesmares.gov.br',
          phone: '(63) 3411-7006'
        }
      }
    }
  };

  const getOfficialData = () => {
    if (role === 'prefeito') return officials.mayor;
    if (role === 'vice-prefeito') return officials.vicePresident;
    if (role === 'secretario') return officials.secretary[id as keyof typeof officials.secretary];
    return null;
  };

  const official = getOfficialData();

  if (!official) {
    return <div>Oficial não encontrado</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="relative h-64 md:h-96">
          <img
            src={official.image}
            alt={official.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-8">
            <h1 className="text-white text-3xl md:text-4xl font-bold">{official.name}</h1>
            <p className="text-white/90 text-xl">{official.role}</p>
          </div>
        </div>

        <div className="p-8">
          <div className="max-w-3xl">
            <h2 className="text-2xl font-bold mb-4">Biografia</h2>
            <p className="text-gray-600 mb-6">{official.bio}</p>

            {(role === 'prefeito' || role === 'vice-prefeito') && (
              <>
                <h2 className="text-2xl font-bold mb-4">Formação</h2>
                <p className="text-gray-600 mb-6">{official.education}</p>

                <h2 className="text-2xl font-bold mb-4">Carreira</h2>
                <p className="text-gray-600 mb-6">{official.career}</p>
              </>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h2 className="text-2xl font-bold mb-4">Contato</h2>
                <div className="space-y-3">
                  <a href={`mailto:${official.contact.email}`} className="flex items-center text-gray-600 hover:text-primary">
                    <FaEnvelope className="mr-2" />
                    {official.contact.email}
                  </a>
                  <a href={`tel:${official.contact.phone}`} className="flex items-center text-gray-600 hover:text-primary">
                    <FaPhone className="mr-2" />
                    {official.contact.phone}
                  </a>
                </div>
              </div>

              {(role === 'prefeito' || role === 'vice-prefeito') && (
                <div>
                  <h2 className="text-2xl font-bold mb-4">Redes Sociais</h2>
                  <div className="flex space-x-4">
                    <a href={official.social.facebook} target="_blank" rel="noopener noreferrer" className="text-2xl text-primary hover:text-secondary">
                      <FaFacebook />
                    </a>
                    <a href={official.social.instagram} target="_blank" rel="noopener noreferrer" className="text-2xl text-primary hover:text-secondary">
                      <FaInstagram />
                    </a>
                    <a href={official.social.twitter} target="_blank" rel="noopener noreferrer" className="text-2xl text-primary hover:text-secondary">
                      <FaTwitter />
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Officials;