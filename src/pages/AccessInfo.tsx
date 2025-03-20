import { Link } from 'react-router-dom';
import { FaFileAlt, FaSearch, FaUserShield, FaClipboardList, FaExclamationTriangle } from 'react-icons/fa';

const AccessInfo = () => {
  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Lei de Acesso à Informação</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-md p-6 transform transition-transform duration-300 hover:scale-105">
          <FaFileAlt className="text-4xl text-primary mb-4" />
          <h3 className="text-xl font-bold mb-2">O que é a LAI?</h3>
          <p className="text-gray-600">
            A Lei de Acesso à Informação (LAI) regulamenta o direito constitucional de acesso às informações públicas.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 transform transition-transform duration-300 hover:scale-105">
          <FaSearch className="text-4xl text-primary mb-4" />
          <h3 className="text-xl font-bold mb-2">Como Solicitar</h3>
          <p className="text-gray-600">
            Saiba como solicitar informações públicas através dos canais oficiais.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 transform transition-transform duration-300 hover:scale-105">
          <FaUserShield className="text-4xl text-primary mb-4" />
          <h3 className="text-xl font-bold mb-2">Seus Direitos</h3>
          <p className="text-gray-600">
            Conheça seus direitos garantidos pela Lei de Acesso à Informação.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 mb-12">
        <h2 className="text-2xl font-bold mb-6">Como Solicitar Informações</h2>
        
        <div className="space-y-6">
          <div className="flex items-start">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white mr-4">
              1
            </div>
            <div>
              <h3 className="font-bold mb-2">Identifique-se</h3>
              <p className="text-gray-600">
                Forneça seus dados básicos como nome, documento de identificação e forma de contato.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white mr-4">
              2
            </div>
            <div>
              <h3 className="font-bold mb-2">Especifique a Informação</h3>
              <p className="text-gray-600">
                Descreva de forma clara e objetiva a informação que deseja obter.
              </p>
            </div>
          </div>

          <div className="flex items-start">
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white mr-4">
              3
            </div>
            <div>
              <h3 className="font-bold mb-2">Acompanhe o Pedido</h3>
              <p className="text-gray-600">
                Utilize o número de protocolo para acompanhar o status da sua solicitação.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Prazos</h2>
          <div className="space-y-4">
            <div className="flex items-center">
              <FaClipboardList className="text-primary mr-3" />
              <div>
                <p className="font-medium">20 dias</p>
                <p className="text-gray-600">Prazo inicial para resposta</p>
              </div>
            </div>
            <div className="flex items-center">
              <FaClipboardList className="text-primary mr-3" />
              <div>
                <p className="font-medium">+10 dias</p>
                <p className="text-gray-600">Prorrogação mediante justificativa</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-xl font-bold mb-4">Restrições</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <FaExclamationTriangle className="text-primary mt-1 mr-3" />
              <div>
                <p className="font-medium">Informações Sigilosas</p>
                <p className="text-gray-600">Dados que possam comprometer a segurança</p>
              </div>
            </div>
            <div className="flex items-start">
              <FaExclamationTriangle className="text-primary mt-1 mr-3" />
              <div>
                <p className="font-medium">Dados Pessoais</p>
                <p className="text-gray-600">Informações que violem a privacidade</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-primary/5 rounded-lg p-8">
        <h2 className="text-2xl font-bold mb-4">Faça sua Solicitação</h2>
        <p className="text-gray-600 mb-6">
          Utilize nosso sistema de ouvidoria para realizar sua solicitação de informações.
        </p>
        <Link to="/ouvidoria" className="btn-primary">
          Solicitar Informações
        </Link>
      </div>
    </div>
  );
};

export default AccessInfo;