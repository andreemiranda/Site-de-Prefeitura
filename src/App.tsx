import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import TransparencyBanner from './components/TransparencyBanner';
import Home from './pages/Home';
import News from './pages/News';
import NewsArticle from './pages/NewsArticle';
import Services from './pages/Services';
import Transparency from './pages/Transparency';
import Contact from './pages/Contact';
import Biddings from './pages/Biddings';
import Contracts from './pages/Contracts';
import Legislation from './pages/Legislation';
import Downloads from './pages/Downloads';
import Ombudsman from './pages/Ombudsman';
import PublicTender from './pages/PublicTender';
import Officials from './pages/Officials';
import AdminLogin from './pages/admin/Login';
import AdminDashboard from './pages/admin/Dashboard';
import FAQ from './pages/FAQ';
import AccessInfo from './pages/AccessInfo';

function App() {
  return (
    <Router>
      <Routes>
        {/* Admin Routes */}
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/dashboard" element={<AdminDashboard />} />

        {/* Public Routes */}
        <Route
          path="/*"
          element={
            <div className="flex flex-col min-h-screen">
              <a href="#main-content" className="skip-to-main">
                Pular para o conteúdo principal
              </a>
              <Header />
              <main id="main-content" className="flex-grow" role="main">
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/noticias" element={<News />} />
                  <Route path="/noticias/:id" element={<NewsArticle />} />
                  <Route path="/servicos" element={<Services />} />
                  <Route path="/transparencia" element={<Transparency />} />
                  <Route path="/contato" element={<Contact />} />
                  <Route path="/licitacoes" element={<Biddings />} />
                  <Route path="/contratos" element={<Contracts />} />
                  <Route path="/legislacao" element={<Legislation />} />
                  <Route path="/downloads" element={<Downloads />} />
                  <Route path="/ouvidoria" element={<Ombudsman />} />
                  <Route path="/concursos" element={<PublicTender />} />
                  <Route path="/oficial/:role/:id?" element={<Officials />} />
                  <Route path="/faq" element={<FAQ />} />
                  <Route path="/acesso-informacao" element={<AccessInfo />} />
                </Routes>
              </main>
              <TransparencyBanner />
              <Footer />
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;