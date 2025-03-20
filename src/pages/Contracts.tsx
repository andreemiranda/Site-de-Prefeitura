import { FaFileContract, FaSearch, FaCalendar, FaDownload } from 'react-icons/fa';

const Contracts = () => {
  const contracts = [
    {
      id: 1,
      number: '001/2024',
      company: 'Construções e Serviços LTDA',
      object: 'Serviços de manutenção predial dos prédios públicos municipais',
      startDate: '2024-01-15',
      endDate: '2024-12-31',
      value: 'R$ 1.250.000,00',
      status: 'Vigente'
    },
    {
      id: 2,
      number: '002/2024',
      company: 'Tech Solutions LTDA',
      object: 'Fornecimento de equipamentos de informática',
      startDate: '2024-02-01',
      endDate: '2024-07-31',
      value: 'R$ 456.789,00',
      status: 'Vigente'
    },
    {
      id: 3,
      number: '003/2024',
      company: 'Limpeza e Conservação SA',
      object: 'Serviços de limpeza para as unidades de saúde',
      startDate: '2024-03-01',
      endDate: '2025-02-28',
      value: 'R$ 890.123,00',
      status: 'Vigente'
    }
  ];

  return (
    <div className="container mx-auto py-8">
      <div className="bg-white rounded-lg shadow-md p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-8">
          <h1 className="text-3xl font-bold text-gray-800">Contratos</h1>
          
          <div className="relative">
            <input
              type="text"
              placeholder="Pesquisar contratos..."
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
                <th className="px-4 py-3 text-left">Empresa</th>
                <th className="px-4 py-3 text-left">Objeto</th>
                <th className="px-4 py-3 text-left">Vigência</th>
                <th className="px-4 py-3 text-left">Valor</th>
                <th className="px-4 py-3 text-left">Status</th>
                <th className="px-4 py-3 text-left">Ações</th>
              </tr>
            </thead>
            <tbody>
              {contracts.map((contract) => (
                <tr key={contract.id} className="border-t border-gray-100">
                  <td className="px-4 py-4">{contract.number}</td>
                  <td className="px-4 py-4">{contract.company}</td>
                  <td className="px-4 py-4">{contract.object}</td>
                  <td className="px-4 py-4">
                    <div className="flex items-center">
                      <FaCalendar className="mr-2 text-gray-400" />
                      <span>
                        {new Date(contract.startDate).toLocaleDateString('pt-BR')} até{' '}
                        {new Date(contract.endDate).toLocaleDateString('pt-BR')}
                      </span>
                    </div>
                  </td>
                  <td className="px-4 py-4">{contract.value}</td>
                  <td className="px-4 py-4">
                    <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
                      {contract.status}
                    </span>
                  </td>
                  <td className="px-4 py-4">
                    <button className="flex items-center text-primary hover:text-secondary transition-colors">
                      <FaDownload className="mr-1" />
                      Baixar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="mt-6 flex justify-between items-center">
          <div className="text-sm text-gray-500">
            Mostrando 1-3 de 3 contratos
          </div>
          <div className="flex gap-2">
            <button className="px-4 py-2 rounded-md bg-gray-100 text-gray-400" disabled>
              Anterior
            </button>
            <button className="px-4 py-2 rounded-md bg-primary text-white">
              1
            </button>
            <button className="px-4 py-2 rounded-md bg-gray-100 text-gray-400" disabled>
              Próxima
            </button>
          </div>
        </div>
      </div>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-lg shadow-md p-6">
          <FaFileContract className="text-4xl text-primary mb-4" />
          <h3 className="text-xl font-bold mb-2">Contratos Ativos</h3>
          <p className="text-gray-600">Total de contratos vigentes no momento.</p>
          <div className="text-3xl font-bold text-primary mt-4">3</div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <FaFileContract className="text-4xl text-primary mb-4" />
          <h3 className="text-xl font-bold mb-2">Valor Total</h3>
          <p className="text-gray-600">Soma dos valores contratuais ativos.</p>
          <div className="text-3xl font-bold text-primary mt-4">R$ 2.596.912,00</div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <FaFileContract className="text-4xl text-primary mb-4" />
          <h3 className="text-xl font-bold mb-2">Vencimentos Próximos</h3>
          <p className="text-gray-600">Contratos com vencimento em 30 dias.</p>
          <div className="text-3xl font-bold text-primary mt-4">0</div>
        </div>
      </div>
    </div>
  );
};

export default Contracts;