import { Home, Link, Code, Video, Award, User, X, ShoppingBag, Radio } from 'lucide-react';

interface DrawerProps {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
  currentPage: string;
  setCurrentPage: (page: string) => void;
}

function Drawer({ isOpen, setIsOpen, currentPage, setCurrentPage }: DrawerProps) {
  const menuItems = [
    { id: 'home', label: 'Home', icon: Home },
    { id: 'free-link', label: 'Free Link', icon: Link },
    { id: 'source-code', label: 'Source Code', icon: Code },
    { id: 'content', label: 'Content', icon: Video },
    { id: 'skills', label: 'Skills', icon: Award },
    { id: 'about-me', label: 'About Me', icon: User },
    { id: 'produk', label: 'Produk', icon: ShoppingBag },
    { id: 'all-channels', label: 'All Channels', icon: Radio },
  ];

  const handleMenuClick = (pageId: string) => {
    setCurrentPage(pageId);
    setIsOpen(false);
  };

  return (
    <>
      {isOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-40 transition-opacity duration-300"
          onClick={() => setIsOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 left-0 h-full w-80 bg-dark-secondary z-50 transform transition-transform duration-300 ease-out rounded-r-3xl shadow-glow-lg ${
          isOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="mt-16 flex justify-between items-center p-6 border-b border-neon-blue">
          <h2 className="text-2xl font-bold text-neon-blue">Rezzy4You</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="p-2 hover:bg-dark-tertiary rounded-lg transition-all duration-300"
          >
            <X className="w-6 h-6 text-neon-blue" />
          </button>
        </div>

        <nav className="mt-8 px-4 space-y-2 overflow-y-auto max-h-[calc(100vh-280px)] scrollbar-custom">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = currentPage === item.id;

            return (
              <button
                key={item.id}
                onClick={() => handleMenuClick(item.id)}
                className={`w-full flex items-center gap-4 px-6 py-4 rounded-xl transition-all duration-300 ${
                  isActive
                    ? 'bg-neon-blue text-dark-primary shadow-glow'
                    : 'hover:bg-dark-tertiary text-white hover:text-neon-blue'
                }`}
              >
                <Icon className="w-5 h-5" />
                <span className="font-medium">{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="absolute bottom-8 left-0 right-0 px-6">
          <div className="bg-dark-tertiary rounded-xl p-4 border border-neon-blue">
            <p className="text-sm text-neon-blue font-medium">Portfolio v1.0</p>
            <p className="text-xs text-gray-400 mt-1">Made with passion</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default Drawer;
