import { useState } from 'react';
import { FaSearch, FaFileAlt, FaDownload, FaCalendar } from 'react-icons/fa';

const Legislation = () => {
  const [activeTab, setActiveTab] = useState('laws');

  const legislation = {
    laws: [
      {
        id: 1,
        number: '789/2024',
        date: '2024-03-15',
        description: 'Dispõe sobre o Plano Diretor Municipal',
        category: 'Urbanismo',
        status: 'Vigente'
      },
      {
        id: 2,
        number: '788/2024',
        date: '2024-03-10',
        description: 'Institui o Programa Municipal de Educação Ambiental',
        category: 'Meio Ambiente',
        status: 'Vigente'
      }
    ],
    decrees: [
      {
        id: 3,
        number: '156/2024',
        date: '2024-03-01',
        description: 'Regulamenta a Lei Municipal nº 788/2024',
        category: 'Meio Ambiente',
        status: 'Vigente'
      }
    ],
    resolutions: [
      {
        id: 4,
        number: '045/2024',
        date: '2024-02-28',
        description: 'Estabelece diretrizes para o funcionamento das feiras livres',
        category: 'Comércio',
        status: 'Vigente'
      }
    ]
  };

  return (
    <div className="container mx-auto py-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <h1 className="text-3xl font-bold text-gray-800 mb-8">Legislação Municipal</h1>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <div className="flex-1">
            <div className="relative">
              <input
                type="text"
                placeholder="Pesquisar na legislação..."
                className="pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary w-full"
              />
              <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            </div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => setActiveTab('laws')}
              className={`px-4 py-2 rounded-md ${
                activeTab === 'laws'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              Leis
            </button>
            <button
              onClick={() => setActiveTab('decrees')}
              className={`px-4 py-2 rounded-md ${
                activeTab === 'decrees'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              Decretos
            </button>
            <button
              onClick={() => setActiveTab('resolutions')}
              className={`px-4 py-2 rounded-md ${
                activeTab === 'resolutions'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              Resoluções
            </button>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-3 text-left">Número</th>
                <th className="px-4 py-3 text-left">Data</th>
                <th className="px-4 py-3 text-left">Ementa</th>
                <th className="px-4 py-3 text-left">Categoria</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Ações</th>
              </tr>
            </thead>
            <tbody>
              {legislation[activeTab as keyof typeof legislation].map((item) => (
                <tr key={item.id} className="border-t border-gray-100 hover:bg-gray-50 transition-colors card-zoom">
                  <td className="px-4 py-4">{item.number}</td>
                  <td className="px-4 py-4">
                    <div className="flex items-center">
                      <FaCalendar className="mr-2 text-gray-400" />
                      {new Date(item.date).toLocaleDateString('pt-BR')}
                    </div>
                  </td>
                  <td className="px-4 py-4">{item.description}</td>
                  <td className="px-4 py-4">
                    <span className="px-3 py-1 rounded-full text-sm bg-gray-100">
                      {item.category}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
                      {item.status}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex gap-2">
                      <button className="flex items-center text-primary hover:text-secondary transition-colors">
                        <FaFileAlt className="mr-1" />
                        Ver
                      </button>
                      <button className="flex items-center text-primary hover:text-secondary transition-colors">
                        <FaDownload className="mr-1" />
                        Baixar
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-primary/5 rounded-lg p-6 card-zoom">
          <h3 className="text-xl font-bold mb-4">Lei Orgânica</h3>
          <p className="text-gray-600 mb-4">
            Acesse a Lei Orgânica do Município, documento que estabelece as diretrizes básicas da organização municipal.
          </p>
          <button className="btn-primary">
            <FaFileAlt className="mr-2" />
            Acessar Lei Orgânica
          </button>
        </div>

        <div className="bg-primary/5 rounded-lg p-6 card-zoom">
          <h3 className="text-xl font-bold mb-4">Códigos Municipais</h3>
          <p className="text-gray-600 mb-4">
            Consulte os principais códigos municipais: Tributário, Posturas, Obras e outros.
          </p>
          <button className="btn-primary">
            <FaFileAlt className="mr-2" />
            Ver Códigos
          </button>
        </div>

        <div className="bg-primary/5 rounded-lg p-6 card-zoom">
          <h3 className="text-xl font-bold mb-4">Consolidação das Leis</h3>
          <p className="text-gray-600 mb-4">
            Acesse a compilação atualizada da legislação municipal por tema.
          </p>
          <button className="btn-primary">
            <FaFileAlt className="mr-2" />
            Ver Consolidação
          </button>
        </div>
      </div>
    </div>
  );
};

export default Legislation;