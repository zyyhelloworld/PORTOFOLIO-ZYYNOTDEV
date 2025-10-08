import { Download } from 'lucide-react';

interface FileItem {
  name: string;
  size: string;
  url: string;
}

function FreeLink() {
  const files: FileItem[] = [
    {
      name: 'React Starter Template',
      size: '2.5 MB',
      url: '#',
    },
    {
      name: 'CSS Animation Pack',
      size: '1.2 MB',
      url: '#',
    },
    {
      name: 'JavaScript Utilities',
      size: '800 KB',
      url: '#',
    },
    {
      name: 'Python Scripts Collection',
      size: '3.1 MB',
      url: '#',
    },
    {
      name: 'HTML Templates Bundle',
      size: '5.4 MB',
      url: '#',
    },
    {
      name: 'Developer Tools Pack',
      size: '4.7 MB',
      url: '#',
    },
  ];

  return (
    <div className="min-h-[calc(100vh-120px)] animate-fade-in">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-neon-blue mb-4">Free Resources</h1>
        <p className="text-gray-300 mb-12">Download free tools, templates, and resources for your projects.</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {files.map((file, index) => (
            <div
              key={index}
              className="bg-dark-secondary p-6 rounded-2xl shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-105 border border-transparent hover:border-neon-blue"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-neon-blue rounded-xl">
                  <Download className="w-6 h-6 text-dark-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-1">{file.name}</h3>
                  <p className="text-sm text-gray-400">Size: {file.size}</p>
                </div>
              </div>

              <button
                onClick={() => window.open(file.url, '_blank')}
                className="w-full py-3 bg-neon-blue text-dark-primary font-semibold rounded-xl hover:bg-opacity-90 transition-all duration-300 hover:shadow-glow flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                Download
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default FreeLink;
