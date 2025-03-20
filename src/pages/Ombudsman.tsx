import React, { useState } from 'react';
import { FaUser, FaEnvelope, FaPhone, FaComments, FaCheck } from 'react-icons/fa';

const Ombudsman = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    type: '',
    message: '',
    anonymous: false
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Implement form submission logic
    console.log('Form submitted:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const checked = (e.target as HTMLInputElement).checked;

    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  return (
    <div className="container mx-auto py-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h1 className="text-3xl font-bold text-gray-800 mb-6">Ouvidoria Municipal</h1>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Nome Completo
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                    disabled={formData.anonymous}
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                    disabled={formData.anonymous}
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                    Telefone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                    disabled={formData.anonymous}
                  />
                </div>
                <div>
                  <label htmlFor="type" className="block text-sm font-medium text-gray-700 mb-2">
                    Tipo de Manifestação
                  </label>
                  <select
                    id="type"
                    name="type"
                    value={formData.type}
                    onChange={handleChange}
                    className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">Selecione o tipo</option>
                    <option value="sugestao">Sugestão</option>
                    <option value="reclamacao">Reclamação</option>
                    <option value="denuncia">Denúncia</option>
                    <option value="elogio">Elogio</option>
                    <option value="solicitacao">Solicitação</option>
                  </select>
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Assunto
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Mensagem
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-primary focus:border-transparent"
                ></textarea>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="anonymous"
                  name="anonymous"
                  checked={formData.anonymous}
                  onChange={handleChange}
                  className="h-4 w-4 text-primary focus:ring-primary border-gray-300 rounded"
                />
                <label htmlFor="anonymous" className="ml-2 block text-sm text-gray-700">
                  Fazer manifestação anônima
                </label>
              </div>

              <button type="submit" className="btn-primary w-full">
                Enviar Manifestação
              </button>
            </form>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Como Funciona?</h2>
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white mr-3">
                  1
                </div>
                <p className="text-gray-600">
                  Preencha o formulário com suas informações e detalhes da manifestação
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white mr-3">
                  2
                </div>
                <p className="text-gray-600">
                  Nossa equipe receberá sua manifestação e iniciará a análise
                </p>
              </div>
              <div className="flex items-start">
                <div className="flex items-center justify-center w-8 h-8 rounded-full bg-primary text-white mr-3">
                  3
                </div>
                <p className="text-gray-600">
                  Você receberá um protocolo para acompanhar o status da sua manifestação
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-bold mb-4">Canais de Atendimento</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <FaPhone className="text-primary mr-3" />
                <div>
                  <h3 className="font-medium">Telefone</h3>
                  <p className="text-gray-600">(63) 3411-7000</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaEnvelope className="text-primary mr-3" />
                <div>
                  <h3 className="font-medium">E-mail</h3>
                  <p className="text-gray-600">ouvidoria@verdesmares.gov.br</p>
                </div>
              </div>
              <div className="flex items-center">
                <FaUser className="text-primary mr-3" />
                <div>
                  <h3 className="font-medium">Presencial</h3>
                  <p className="text-gray-600">Segunda a Sexta, 8h às 14h</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Ombudsman;