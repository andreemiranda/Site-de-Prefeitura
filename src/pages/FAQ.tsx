import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const FAQ = () => {
  const [openSection, setOpenSection] = useState<string | null>(null);

  const faqs = {
    general: [
      {
        question: 'Como posso acessar os serviços online da prefeitura?',
        answer: 'Os serviços online podem ser acessados através do Portal do Cidadão em nossa página inicial. Basta clicar em "Serviços" e selecionar o serviço desejado.'
      },
      {
        question: 'Qual o horário de atendimento da prefeitura?',
        answer: 'A prefeitura funciona de segunda a sexta-feira, das 8h às 14h. Alguns serviços online estão disponíveis 24 horas.'
      }
    ],
    documents: [
      {
        question: 'Como solicitar uma certidão negativa de débitos?',
        answer: 'A certidão negativa pode ser solicitada online através do Portal do Cidadão ou presencialmente no setor de tributos da prefeitura.'
      },
      {
        question: 'Quais documentos preciso para solicitar alvará de funcionamento?',
        answer: 'Para solicitar o alvará, são necessários: CNPJ, contrato social, documento do imóvel, RG e CPF dos sócios, e projeto aprovado pelo Corpo de Bombeiros.'
      }
    ],
    taxes: [
      {
        question: 'Como emitir a segunda via do IPTU?',
        answer: 'A segunda via do IPTU pode ser emitida através do site da prefeitura, na seção "Serviços > Tributos > IPTU".'
      },
      {
        question: 'É possível parcelar débitos municipais?',
        answer: 'Sim, os débitos municipais podem ser parcelados. Entre em contato com o setor de tributos para verificar as condições disponíveis.'
      }
    ],
    health: [
      {
        question: 'Como agendar uma consulta médica na rede municipal?',
        answer: 'O agendamento pode ser feito diretamente na Unidade Básica de Saúde mais próxima de sua residência ou através do aplicativo da prefeitura.'
      },
      {
        question: 'Onde posso obter o Cartão SUS?',
        answer: 'O Cartão SUS pode ser obtido em qualquer Unidade Básica de Saúde, apresentando RG, CPF e comprovante de residência.'
      }
    ]
  };

  const toggleSection = (section: string) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Perguntas Frequentes</h1>

      <div className="space-y-6">
        {/* Serviços Gerais */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <button
            className="w-full px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100"
            onClick={() => toggleSection('general')}
          >
            <h2 className="text-xl font-bold text-gray-800">Serviços Gerais</h2>
            {openSection === 'general' ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {openSection === 'general' && (
            <div className="p-6 space-y-4">
              {faqs.general.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                  <h3 className="font-bold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Documentos */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <button
            className="w-full px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100"
            onClick={() => toggleSection('documents')}
          >
            <h2 className="text-xl font-bold text-gray-800">Documentos</h2>
            {openSection === 'documents' ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {openSection === 'documents' && (
            <div className="p-6 space-y-4">
              {faqs.documents.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                  <h3 className="font-bold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Tributos */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <button
            className="w-full px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100"
            onClick={() => toggleSection('taxes')}
          >
            <h2 className="text-xl font-bold text-gray-800">Tributos</h2>
            {openSection === 'taxes' ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {openSection === 'taxes' && (
            <div className="p-6 space-y-4">
              {faqs.taxes.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                  <h3 className="font-bold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Saúde */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden">
          <button
            className="w-full px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100"
            onClick={() => toggleSection('health')}
          >
            <h2 className="text-xl font-bold text-gray-800">Saúde</h2>
            {openSection === 'health' ? <FaChevronUp /> : <FaChevronDown />}
          </button>
          {openSection === 'health' && (
            <div className="p-6 space-y-4">
              {faqs.health.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 pb-4 last:border-0 last:pb-0">
                  <h3 className="font-bold mb-2">{faq.question}</h3>
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="mt-8 bg-primary/5 rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Não encontrou o que procurava?</h2>
        <p className="text-gray-600 mb-4">
          Entre em contato com nossa equipe de atendimento. Estamos aqui para ajudar!
        </p>
        <Link to="/contato" className="btn-primary">
          Fale Conosco
        </Link>
      </div>
    </div>
  );
};

export default FAQ;