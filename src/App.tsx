import { useState } from 'react';
import Drawer from './components/Drawer';
import RunningText from './components/RunningText';
import Home from './pages/Home';
import FreeLink from './pages/FreeLink';
import SourceCode from './pages/SourceCode';
import Content from './pages/Content';
import Skills from './pages/Skills';
import AboutMe from './pages/AboutMe';
import Produk from './pages/Produk';
import AllChannels from './pages/AllChannels';

function App() {
  const [currentPage, setCurrentPage] = useState('home');
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <Home />;
      case 'free-link':
        return <FreeLink />;
      case 'source-code':
        return <SourceCode />;
      case 'content':
        return <Content />;
      case 'skills':
        return <Skills />;
      case 'about-me':
        return <AboutMe />;
      case 'produk':
        return <Produk />;
      case 'all-channels':
        return <AllChannels />;
      default:
        return <Home />;
    }
  };

  return (
    <div className="min-h-screen bg-dark-primary text-white overflow-hidden">
      <RunningText />

      <Drawer
        isOpen={isDrawerOpen}
        setIsOpen={setIsDrawerOpen}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />

      <button
        onClick={() => setIsDrawerOpen(true)}
        className="fixed top-6 left-6 z-40 p-3 bg-dark-secondary rounded-xl shadow-glow hover:bg-dark-tertiary transition-all duration-300 hover:scale-110"
      >
        <svg className="w-6 h-6 text-neon-blue" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <main className="pt-20 px-6 pb-6">
        {renderPage()}
      </main>
    </div>
  );
}

export default App;
