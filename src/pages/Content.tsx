import { useState } from 'react';
import { Search, Play } from 'lucide-react';

interface VideoItem {
  title: string;
  caption: string;
  url: string;
  thumbnail: string;
}

function Content() {
  const [searchQuery, setSearchQuery] = useState('');

  const videos: VideoItem[] = [
    {
      title: 'Web Development Tutorial',
      caption: 'Learn modern web development from scratch',
      url: 'https://files.catbox.moe/sample1.mp4',
      thumbnail: 'https://files.catbox.moe/es04cd.jpg',
    },
    {
      title: 'JavaScript Basics',
      caption: 'Master JavaScript fundamentals',
      url: 'https://files.catbox.moe/sample2.mp4',
      thumbnail: 'https://files.catbox.moe/es04cd.jpg',
    },
    {
      title: 'React Components',
      caption: 'Building reusable React components',
      url: 'https://files.catbox.moe/sample3.mp4',
      thumbnail: 'https://files.catbox.moe/es04cd.jpg',
    },
    {
      title: 'Python Programming',
      caption: 'Python for beginners and beyond',
      url: 'https://files.catbox.moe/sample4.mp4',
      thumbnail: 'https://files.catbox.moe/es04cd.jpg',
    },
    {
      title: 'CSS Animations',
      caption: 'Create stunning CSS animations',
      url: 'https://files.catbox.moe/sample5.mp4',
      thumbnail: 'https://files.catbox.moe/es04cd.jpg',
    },
    {
      title: 'API Development',
      caption: 'Build powerful REST APIs',
      url: 'https://files.catbox.moe/sample6.mp4',
      thumbnail: 'https://files.catbox.moe/es04cd.jpg',
    },
  ];

  const filteredVideos = videos.filter(
    (video) =>
      video.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      video.caption.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-[calc(100vh-120px)] animate-fade-in">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-neon-blue mb-4">Content Library</h1>
        <p className="text-gray-300 mb-8">Explore tutorials, guides, and creative content.</p>

        <div className="relative mb-12">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Search videos by title or caption..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-4 bg-dark-secondary text-white rounded-2xl border-2 border-transparent focus:border-neon-blue outline-none transition-all duration-300 shadow-glow"
          />
        </div>

        {filteredVideos.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-gray-400 text-lg">No videos found matching your search.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map((video, index) => (
              <div
                key={index}
                className="bg-dark-secondary rounded-2xl overflow-hidden shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-105 border border-transparent hover:border-neon-blue group"
              >
                <div className="relative aspect-video bg-dark-tertiary overflow-hidden">
                  <img
                    src={video.thumbnail}
                    alt={video.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <button className="p-4 bg-neon-blue rounded-full hover:scale-110 transition-transform duration-300">
                      <Play className="w-8 h-8 text-dark-primary" />
                    </button>
                  </div>
                </div>

                <div className="p-5">
                  <h3 className="text-lg font-semibold text-white mb-2">{video.title}</h3>
                  <p className="text-sm text-gray-400">{video.caption}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default Content;
