import { useState } from 'react';
import { FaFileAlt, FaDownload, FaSearch, FaCalendar } from 'react-icons/fa';

const Biddings = () => {
  const [currentTab, setCurrentTab] = useState('active');

  const biddings = {
    active: [
      {
        id: 1,
        number: '001/2024',
        type: 'Pregão Eletrônico',
        object: 'Aquisição de material de escritório para as secretarias municipais',
        openingDate: '2024-04-10',
        status: 'Em andamento',
        documents: ['Edital', 'Anexo I', 'Anexo II']
      },
      {
        id: 2,
        number: '002/2024',
        type: 'Concorrência Pública',
        object: 'Contratação de empresa para pavimentação asfáltica',
        openingDate: '2024-04-15',
        status: 'Aberto',
        documents: ['Edital', 'Projeto Básico', 'Planilha Orçamentária']
      }
    ],
    finished: [
      {
        id: 3,
        number: '010/2023',
        type: 'Pregão Presencial',
        object: 'Aquisição de equipamentos de informática',
        openingDate: '2023-12-15',
        status: 'Concluído',
        winner: 'Tech Solutions LTDA',
        value: 'R$ 156.789,00',
        documents: ['Edital', 'Ata', 'Homologação']
      }
    ]
  };

  return (
    <div className="container mx-auto py-8">
      <div className="bg-white rounded-lg shadow-md p-6 mb-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">Licitações</h1>
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <div className="flex gap-4">
            <button
              onClick={() => setCurrentTab('active')}
              className={`px-4 py-2 rounded-md ${
                currentTab === 'active'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              Em Andamento
            </button>
            <button
              onClick={() => setCurrentTab('finished')}
              className={`px-4 py-2 rounded-md ${
                currentTab === 'finished'
                  ? 'bg-primary text-white'
                  : 'bg-gray-100 hover:bg-gray-200'
              }`}
            >
              Concluídas
            </button>
          </div>
          
          <div className="relative">
            <input
              type="text"
              placeholder="Pesquisar licitações..."
              className="pl-10 pr-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary w-full md:w-80"
            />
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="bg-gray-50">
                <th className="px-4 py-3 text-left">Número</th>
                <th className="px-4 py-3 text-left">Modalidade</th>
                <th className="px-4 py-3 text-left">Objeto</th>
                <th className="px-4 py-3 text-left">Data de Abertura</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Documentos</th>
              </tr>
            </thead>
            <tbody>
              {biddings[currentTab as keyof typeof biddings].map((bidding) => (
                <tr key={bidding.id} className="border-t border-gray-100">
                  <td className="px-4 py-4">{bidding.number}</td>
                  <td className="px-4 py-4">{bidding.type}</td>
                  <td className="px-4 py-4">{bidding.object}</td>
                  <td className="px-4 py-4">
                    <div className="flex items-center">
                      <FaCalendar className="mr-2 text-gray-400" />
                      {new Date(bidding.openingDate).toLocaleDateString('pt-BR')}
                    </div>
                  </td>
                  <td className="px-4 py-4">
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        bidding.status === 'Em andamento'
                          ? 'bg-yellow-100 text-yellow-800'
                          : bidding.status === 'Aberto'
                          ? 'bg-green-100 text-green-800'
                          : 'bg-gray-100 text-gray-800'
                      }`}
                    >
                      {bidding.status}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <div className="flex gap-2">
                      {bidding.documents.map((doc, index) => (
                        <button
                          key={index}
                          className="flex items-center text-primary hover:text-secondary transition-colors"
                        >
                          <FaFileAlt className="mr-1" />
                          {doc}
                        </button>
                      ))}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="bg-primary/5 rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Informações Importantes</h2>
        <ul className="space-y-2">
          <li className="flex items-start">
            <FaFileAlt className="text-primary mt-1 mr-2" />
            <span>Os editais completos podem ser baixados gratuitamente através desta página.</span>
          </li>
          <li className="flex items-start">
            <FaDownload className="text-primary mt-1 mr-2" />
            <span>Para participar das licitações eletrônicas, é necessário cadastro prévio no portal de compras.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Biddings;