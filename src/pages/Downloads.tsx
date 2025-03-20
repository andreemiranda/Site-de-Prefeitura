import { FaFileAlt, FaDownload, FaFileWord, FaFilePdf, FaFileExcel } from 'react-icons/fa';

const Downloads = () => {
  const categories = [
    {
      title: 'Formulários',
      icon: FaFileWord,
      files: [
        {
          name: 'Requerimento Padrão',
          format: 'DOC',
          size: '45 KB',
          icon: FaFileWord,
          color: 'text-blue-500'
        },
        {
          name: 'Declaração de Residência',
          format: 'DOC',
          size: '32 KB',
          icon: FaFileWord,
          color: 'text-blue-500'
        }
      ]
    },
    {
      title: 'Documentos Oficiais',
      icon: FaFilePdf,
      files: [
        {
          name: 'Lei Orgânica Municipal',
          format: 'PDF',
          size: '2.5 MB',
          icon: FaFilePdf,
          color: 'text-red-500'
        },
        {
          name: 'Plano Diretor',
          format: 'PDF',
          size: '5.8 MB',
          icon: FaFilePdf,
          color: 'text-red-500'
        }
      ]
    },
    {
      title: 'Planilhas e Relatórios',
      icon: FaFileExcel,
      files: [
        {
          name: 'Relatório de Gestão 2023',
          format: 'XLS',
          size: '1.2 MB',
          icon: FaFileExcel,
          color: 'text-green-500'
        },
        {
          name: 'Prestação de Contas 2023',
          format: 'XLS',
          size: '985 KB',
          icon: FaFileExcel,
          color: 'text-green-500'
        }
      ]
    }
  ];

  return (
    <div className="container mx-auto py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-8">Downloads</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <div key={index} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center mb-6">
              <category.icon className="text-3xl text-primary mr-3" />
              <h2 className="text-xl font-bold">{category.title}</h2>
            </div>

            <div className="space-y-4">
              {category.files.map((file, fileIndex) => (
                <div
                  key={fileIndex}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center">
                    <file.icon className={`text-2xl ${file.color} mr-3`} />
                    <div>
                      <h3 className="font-medium">{file.name}</h3>
                      <p className="text-sm text-gray-500">
                        {file.format} • {file.size}
                      </p>
                    </div>
                  </div>
                  <button className="flex items-center text-primary hover:text-secondary transition-colors">
                    <FaDownload className="mr-1" />
                    <span className="text-sm">Baixar</span>
                  </button>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 bg-primary/5 rounded-lg p-6">
        <h2 className="text-xl font-bold mb-4">Informações Importantes</h2>
        <ul className="space-y-2">
          <li className="flex items-start">
            <FaFileAlt className="text-primary mt-1 mr-2" />
            <span>Todos os documentos são disponibilizados gratuitamente.</span>
          </li>
          <li className="flex items-start">
            <FaFileAlt className="text-primary mt-1 mr-2" />
            <span>Os arquivos em PDF requerem Adobe Reader ou software compatível para visualização.</span>
          </li>
          <li className="flex items-start">
            <FaFileAlt className="text-primary mt-1 mr-2" />
            <span>Em caso de problemas com o download, entre em contato com o suporte técnico.</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Downloads;