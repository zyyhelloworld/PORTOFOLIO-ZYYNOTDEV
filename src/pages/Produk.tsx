import { ShoppingCart } from 'lucide-react';

interface Product {
  name: string;
  price: string;
  type: string;
  keunggulan: string;
}

function Produk() {
  const products: Product[] = [
    {
      name: 'Panel Pterodactyl',
      price: '1GB/1K',
      type: 'Hosting',
      keunggulan: 'Anti DDoS All Aman',
    },
    {
      name: 'VPS Premium',
      price: '2GB/5K',
      type: 'Virtual Private Server',
      keunggulan: 'High Performance & Unlimited Bandwidth',
    },
    {
      name: 'Website Builder',
      price: '3K/Bulan',
      type: 'Web Development',
      keunggulan: 'Custom Design & SEO Optimized',
    },
    {
      name: 'Discord Bot',
      price: '10K/Bot',
      type: 'Automation',
      keunggulan: 'Custom Features & 24/7 Uptime',
    },
    {
      name: 'Domain .com',
      price: '150K/Tahun',
      type: 'Domain',
      keunggulan: 'Free SSL & DNS Management',
    },
    {
      name: 'Script Premium',
      price: '5K-20K',
      type: 'Source Code',
      keunggulan: 'Clean Code & Full Documentation',
    },
  ];

  const handleBuyClick = (product: Product) => {
    const message = `Nama Produk : ${product.name}
Price : ${product.price}
Type : ${product.type}
Keunggulan : ${product.keunggulan}

Note : ALL TRX NO REFF`;

    const encodedMessage = encodeURIComponent(message);
    const telegramUrl = `https://t.me/rezzy4youautobuy_bot?start=${encodedMessage}`;

    window.open(telegramUrl, '_blank');
  };

  return (
    <div className="min-h-[calc(100vh-120px)] animate-fade-in">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-neon-blue mb-4">Produk</h1>
        <p className="text-gray-300 mb-12">Explore our premium products and services.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-dark-secondary p-6 rounded-2xl shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-105 border-2 border-neon-blue"
            >
              <div className="space-y-4 mb-6">
                <div className="flex items-center gap-2">
                  <span className="text-gray-400 font-medium">Nama Produk:</span>
                  <span className="text-white font-semibold">{product.name}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-gray-400 font-medium">Price:</span>
                  <span className="text-neon-blue font-bold text-lg">{product.price}</span>
                </div>

                <div className="flex items-center gap-2">
                  <span className="text-gray-400 font-medium">Type:</span>
                  <span className="text-white">{product.type}</span>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-gray-400 font-medium whitespace-nowrap">Keunggulan:</span>
                  <span className="text-white">{product.keunggulan}</span>
                </div>
              </div>

              <div className="pt-4 border-t border-gray-700">
                <p className="text-xs text-gray-400 mb-4 text-center">Note : ALL TRX NO REFF</p>
                <button
                  onClick={() => handleBuyClick(product)}
                  className="w-full py-3 bg-green-neon text-dark-primary font-bold rounded-xl hover:bg-opacity-90 transition-all duration-300 hover:shadow-green-glow flex items-center justify-center gap-2 animate-pulse-slow"
                  style={{
                    backgroundColor: '#00ff99',
                    boxShadow: '0 0 20px rgba(0, 255, 153, 0.4)',
                  }}
                >
                  <ShoppingCart className="w-5 h-5" />
                  BUY NOW
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-dark-secondary p-8 rounded-2xl shadow-glow border border-neon-blue text-center">
          <h2 className="text-2xl font-bold text-neon-blue mb-4">Ready to Purchase?</h2>
          <p className="text-gray-300">
            Click the BUY NOW button on any product to start your order through our automated Telegram bot.
            Fast, secure, and hassle-free!
          </p>
        </div>
      </div>
    </div>
  );
}

export default Produk;
