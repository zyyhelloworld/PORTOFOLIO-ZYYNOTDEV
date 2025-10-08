import { Send, MessageCircle, Music, Instagram, Youtube } from 'lucide-react';

interface Channel {
  name: string;
  platform: string;
  url: string;
  icon: React.ElementType;
  color: string;
  gradient: string;
}

function AllChannels() {
  const channels: Channel[] = [
    {
      name: 'Telegram Channel',
      platform: 'Join our Telegram community',
      url: 'https://t.me/rezzy4you',
      icon: Send,
      color: '#0088cc',
      gradient: 'from-blue-400 to-blue-600',
    },
    {
      name: 'WhatsApp Group',
      platform: 'Connect via WhatsApp',
      url: 'https://wa.me/6281234567890',
      icon: MessageCircle,
      color: '#25D366',
      gradient: 'from-green-400 to-green-600',
    },
    {
      name: 'TikTok',
      platform: 'Follow on TikTok',
      url: 'https://tiktok.com/@rezzy4you',
      icon: Music,
      color: '#ff0050',
      gradient: 'from-pink-400 via-pink-500 to-blue-500',
    },
    {
      name: 'Instagram',
      platform: 'Follow on Instagram',
      url: 'https://instagram.com/rezzy4you',
      icon: Instagram,
      color: '#E4405F',
      gradient: 'from-purple-400 via-pink-500 to-orange-500',
    },
    {
      name: 'YouTube',
      platform: 'Subscribe to our channel',
      url: 'https://youtube.com/@rezzy4you',
      icon: Youtube,
      color: '#FF0000',
      gradient: 'from-red-500 to-red-700',
    },
  ];

  const handleChannelClick = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="min-h-[calc(100vh-120px)] animate-fade-in">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-neon-blue mb-4">All Channels</h1>
        <p className="text-gray-300 mb-12">Connect with us on all platforms.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {channels.map((channel, index) => {
            const Icon = channel.icon;
            return (
              <button
                key={index}
                onClick={() => handleChannelClick(channel.url)}
                className="group relative bg-dark-secondary p-8 rounded-3xl shadow-glow hover:shadow-glow-lg transition-all duration-500 hover:scale-105 border-2 border-transparent hover:border-neon-blue overflow-hidden"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-500">
                  <div className={`w-full h-full bg-gradient-to-br ${channel.gradient}`} />
                </div>

                <div className="relative z-10 flex items-center gap-6">
                  <div
                    className={`p-5 rounded-2xl bg-gradient-to-br ${channel.gradient} shadow-lg group-hover:scale-110 transition-transform duration-300`}
                  >
                    <Icon className="w-10 h-10 text-white" />
                  </div>

                  <div className="flex-1 text-left">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-neon-blue transition-colors duration-300">
                      {channel.name}
                    </h3>
                    <p className="text-gray-400 text-sm">{channel.platform}</p>
                  </div>

                  <svg
                    className="w-6 h-6 text-neon-blue opacity-0 group-hover:opacity-100 transform translate-x-0 group-hover:translate-x-2 transition-all duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>

                <div className="relative z-10 mt-4 pt-4 border-t border-gray-700">
                  <span className="text-xs text-gray-500 group-hover:text-neon-blue transition-colors duration-300">
                    Click to open in new tab
                  </span>
                </div>
              </button>
            );
          })}
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-dark-secondary p-6 rounded-2xl shadow-glow border border-neon-blue text-center">
            <div className="text-4xl font-bold text-neon-blue mb-2">5+</div>
            <p className="text-gray-300">Platforms</p>
          </div>
          <div className="bg-dark-secondary p-6 rounded-2xl shadow-glow border border-neon-blue text-center">
            <div className="text-4xl font-bold text-neon-blue mb-2">24/7</div>
            <p className="text-gray-300">Always Active</p>
          </div>
          <div className="bg-dark-secondary p-6 rounded-2xl shadow-glow border border-neon-blue text-center">
            <div className="text-4xl font-bold text-neon-blue mb-2">Fast</div>
            <p className="text-gray-300">Quick Response</p>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-dark-secondary to-dark-tertiary p-8 rounded-2xl shadow-glow border border-neon-blue text-center">
          <h2 className="text-2xl font-bold text-neon-blue mb-4">Stay Connected</h2>
          <p className="text-gray-300">
            Follow us on all platforms to get the latest updates, tutorials, and exclusive content.
            Join our growing community today!
          </p>
        </div>
      </div>
    </div>
  );
}

export default AllChannels;
