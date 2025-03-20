import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaUser, FaBuilding, FaFileAlt, FaMoneyBill, FaGraduationCap, FaHeart } from 'react-icons/fa';

const Services = () => {
  const navigate = useNavigate();

  const services = [
    {
      id: 1,
      title: 'Serviços ao Cidadão',
      icon: FaUser,
      items: [
        'Emissão de Documentos',
        'Certidões',
        'Agendamento Online',
        'Consulta de Processos'
      ]
    },
    {
      id: 2,
      title: 'Empresas',
      icon: FaBuilding,
      items: [
        'Alvará de Funcionamento',
        'Nota Fiscal Eletrônica',
        'Certidões Negativas',
        'Licitações'
      ]
    },
    {
      id: 3,
      title: 'Documentos e Formulários',
      icon: FaFileAlt,
      items: [
        'Requerimentos',
        'Formulários',
        'Declarações',
        'Legislação'
      ]
    },
    {
      id: 4,
      title: 'Tributos',
      icon: FaMoneyBill,
      items: [
        'IPTU',
        'ISS',
        'Taxas',
        'Parcelamentos'
      ]
    },
    {
      id: 5,
      title: 'Educação',
      icon: FaGraduationCap,
      items: [
        'Matrícula Escolar',
        'Transporte Escolar',
        'Bolsas de Estudo',
        'Cursos'
      ]
    },
    {
      id: 6,
      title: 'Saúde',
      icon: FaHeart,
      items: [
        'Agendamento de Consultas',
        'Cartão SUS',
        'Medicamentos',
        'Vacinas'
      ]
    }
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Serviços</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map(service => {
          const Icon = service.icon;
          return (
            <div key={service.id} className="service-card">
              <div className="flex items-center mb-4">
                <Icon className="text-3xl text-primary mr-3" />
                <h2 className="text-xl font-bold">{service.title}</h2>
              </div>
              <ul className="space-y-3">
                {service.items.map((item, index) => (
                  <li key={index}>
                    <a 
                      href="#" 
                      className="text-gray-600 hover:text-primary transition-colors flex items-center"
                    >
                      <span className="w-2 h-2 bg-secondary rounded-full mr-2"></span>
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <div className="mt-12 bg-primary/5 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Precisa de ajuda?</h2>
        <p className="text-gray-600 mb-6">
          Entre em contato com nossa central de atendimento para tirar suas dúvidas sobre os serviços oferecidos.
        </p>
        <div className="flex flex-wrap gap-4">
          <Link to="/contato" className="btn-primary">
            Fale Conosco
          </Link>
          <Link to="/faq" className="btn-secondary">
            FAQ
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;