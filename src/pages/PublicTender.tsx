import React from 'react';
import { FaFileAlt, FaCalendar, FaUsers, FaMoneyBillWave, FaDownload } from 'react-icons/fa';

const PublicTender = () => {
  const tenders = [
    {
      id: 1,
      number: '001/2024',
      title: 'Concurso Público para Professores',
      positions: 25,
      registrationPeriod: {
        start: '2024-04-01',
        end: '2024-04-30'
      },
      examDate: '2024-06-15',
      status: 'Inscrições em Breve',
      salary: 'R$ 3.500,00',
      level: 'Superior'
    },
    {
      id: 2,
      number: '002/2024',
      title: 'Processo Seletivo - Agente de Saúde',
      positions: 15,
      registrationPeriod: {
        start: '2024-05-01',
        end: '2024-05-31'
      },
      examDate: '2024-07-10',
      status: 'Previsto',
      salary: 'R$ 2.200,00',
      level: 'Médio'
    }
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Concursos e Processos Seletivos</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6 card-zoom">
          <FaUsers className="text-4xl text-primary mb-4" />
          <h3 className="text-xl font-bold mb-2">Vagas Disponíveis</h3>
          <p className="text-gray-600">Total de vagas em concursos ativos</p>
          <div className="text-3xl font-bold text-primary mt-4">40</div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 card-zoom">
          <FaFileAlt className="text-4xl text-primary mb-4" />
          <h3 className="text-xl font-bold mb-2">Concursos Ativos</h3>
          <p className="text-gray-600">Processos em andamento</p>
          <div className="text-3xl font-bold text-primary mt-4">2</div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 card-zoom">
          <FaCalendar className="text-4xl text-primary mb-4" />
          <h3 className="text-xl font-bold mb-2">Próximas Provas</h3>
          <p className="text-gray-600">Datas de provas agendadas</p>
          <div className="text-3xl font-bold text-primary mt-4">2</div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md overflow-hidden">
        <div className="p-6">
          <h2 className="text-xl font-bold mb-6">Concursos e Processos Seletivos</h2>
          
          <div className="space-y-6">
            {tenders.map(tender => (
              <div key={tender.id} className="border rounded-lg p-6 card-zoom">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <h3 className="text-xl font-bold mb-2">{tender.title}</h3>
                    <p className="text-gray-600">Edital nº {tender.number}</p>
                  </div>
                  <span className={`px-4 py-2 rounded-full text-sm ${
                    tender.status === 'Inscrições em Breve' 
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {tender.status}
                  </span>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Vagas</div>
                    <div className="flex items-center">
                      <FaUsers className="text-primary mr-2" />
                      {tender.positions} vagas
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Salário</div>
                    <div className="flex items-center">
                      <FaMoneyBillWave className="text-primary mr-2" />
                      {tender.salary}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Inscrições</div>
                    <div className="flex items-center">
                      <FaCalendar className="text-primary mr-2" />
                      {new Date(tender.registrationPeriod.start).toLocaleDateString('pt-BR')} a{' '}
                      {new Date(tender.registrationPeriod.end).toLocaleDateString('pt-BR')}
                    </div>
                  </div>
                  <div>
                    <div className="text-sm text-gray-600 mb-1">Data da Prova</div>
                    <div className="flex items-center">
                      <FaCalendar className="text-primary mr-2" />
                      {new Date(tender.examDate).toLocaleDateString('pt-BR')}
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap gap-4">
                  <button className="btn-primary">
                    <FaFileAlt className="mr-2" />
                    Ver Edital
                  </button>
                  <button className="btn-secondary">
                    <FaDownload className="mr-2" />
                    Baixar Documentos
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-8 bg-primary/5 rounded-lg p-6 card-zoom">
        <h2 className="text-xl font-bold mb-4">Informações Importantes</h2>
        <ul className="space-y-2">
          <li className="flex items-start">
            <FaFileAlt className="text-primary mt-1 mr-2" />
            <span>Leia atentamente o edital antes de realizar sua inscrição.</span>
          </li>
          <li className="flex items-start">
            <FaFileAlt className="text-primary mt-1 mr-2" />
            <span>Mantenha seus dados cadastrais sempre atualizados.</span>
          </li>
          <li className="flex items-start">
            <FaFileAlt className="text-primary mt-1 mr-2" />
            <span>Acompanhe regularmente as publicações e comunicados.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default PublicTender;