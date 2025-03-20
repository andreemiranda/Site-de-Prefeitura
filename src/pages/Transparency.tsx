import React from 'react';
import { FaChartBar, FaFileContract, FaUsers, FaFileAlt, FaMoneyBillWave, FaHandshake } from 'react-icons/fa';

const Transparency = () => {
  const sections = [
    {
      id: 1,
      title: 'Receitas e Despesas',
      icon: FaChartBar,
      items: [
        'Receitas',
        'Despesas',
        'Relatórios Fiscais',
        'Balanços'
      ]
    },
    {
      id: 2,
      title: 'Licitações e Contratos',
      icon: FaFileContract,
      items: [
        'Licitações em Andamento',
        'Licitações Concluídas',
        'Contratos',
        'Atas de Registro'
      ]
    },
    {
      id: 3,
      title: 'Servidores',
      icon: FaUsers,
      items: [
        'Folha de Pagamento',
        'Cargos e Salários',
        'Concursos',
        'Diárias'
      ]
    },
    {
      id: 4,
      title: 'Legislação',
      icon: FaFileAlt,
      items: [
        'Leis Municipais',
        'Decretos',
        'Portarias',
        'Editais'
      ]
    }
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="bg-primary text-white rounded-lg p-8 mb-8">
        <h1 className="text-3xl font-bold mb-4">Portal da Transparência</h1>
        <p className="text-lg opacity-90">
          Acesso à informação e dados públicos da Prefeitura Municipal de Nova Horizonte
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <div className="bg-white rounded-lg p-6 shadow-md text-center transform transition-all duration-300 hover:scale-105">
          <FaMoneyBillWave className="text-4xl text-primary mx-auto mb-3" />
          <div className="text-2xl font-bold">R$ 50M</div>
          <div className="text-gray-600">Orçamento 2024</div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-md text-center transform transition-all duration-300 hover:scale-105">
          <FaFileContract className="text-4xl text-primary mx-auto mb-3" />
          <div className="text-2xl font-bold">127</div>
          <div className="text-gray-600">Contratos Ativos</div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-md text-center transform transition-all duration-300 hover:scale-105">
          <FaUsers className="text-4xl text-primary mx-auto mb-3" />
          <div className="text-2xl font-bold">1.500</div>
          <div className="text-gray-600">Servidores</div>
        </div>
        <div className="bg-white rounded-lg p-6 shadow-md text-center transform transition-all duration-300 hover:scale-105">
          <FaHandshake className="text-4xl text-primary mx-auto mb-3" />
          <div className="text-2xl font-bold">45</div>
          <div className="text-gray-600">Licitações em 2024</div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {sections.map(section => {
          const Icon = section.icon;
          return (
            <div key={section.id} className="bg-white rounded-lg shadow-md p-6 transform transition-all duration-300 hover:scale-105">
              <div className="flex items-center mb-6">
                <Icon className="text-3xl text-primary mr-3" />
                <h2 className="text-xl font-bold">{section.title}</h2>
              </div>
              <ul className="space-y-3">
                {section.items.map((item, index) => (
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

      <div className="mt-12 bg-gray-50 rounded-lg p-8">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Lei de Acesso à Informação</h2>
        <p className="text-gray-600 mb-6">
          A Lei de Acesso à Informação (LAI) regulamenta o direito constitucional de acesso às informações públicas.
        </p>
        <button className="btn-primary">
          Saiba mais sobre a LAI
        </button>
      </div>
    </div>
  );
};

export default Transparency;