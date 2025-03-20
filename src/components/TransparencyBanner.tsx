import { FaExternalLinkAlt } from 'react-icons/fa';

const TransparencyBanner = () => {
  return (
    <div className="container mx-auto mb-16">
      <a 
        href="https://radar.tce.mt.gov.br/extensions/radar-da-transparencia-publica/radar-da-transparencia-publica.html" 
        target="_blank" 
        rel="noopener noreferrer"
        className="block relative hover:opacity-95 transition-opacity"
      >
        <img 
          src="https://www.esperancanova.pr.gov.br/admin/globalarq/banner/banner-secundario/1024_270/56ca91caabf5a2d162c5548fe4b3858c.png"
          alt="Banner da Transparência"
          className="w-full h-auto rounded-lg shadow-md"
        />
        <div className="absolute top-0 right-0 bg-primary/80 text-white px-3 py-1 rounded-bl-lg rounded-tr-lg flex items-center">
          <FaExternalLinkAlt className="mr-2" />
          Acessar
        </div>
      </a>
    </div>
  );
};

export default TransparencyBanner;