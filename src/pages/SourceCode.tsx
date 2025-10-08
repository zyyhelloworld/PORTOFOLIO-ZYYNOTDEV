import { useState } from 'react';
import { Code, Copy, Check, X } from 'lucide-react';

interface SourceItem {
  name: string;
  description: string;
  code: string;
}

function SourceCode() {
  const [selectedCode, setSelectedCode] = useState<SourceItem | null>(null);
  const [copied, setCopied] = useState(false);

  const sourceItems: SourceItem[] = [
    {
      name: 'Base HTML',
      description: 'Basic HTML5 template with modern structure',
      code: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>Hello World!</h1>
</body>
</html>`,
    },
    {
      name: 'React Starter',
      description: 'React component boilerplate',
      code: `import React, { useState } from 'react';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}

export default App;`,
    },
    {
      name: 'Python API',
      description: 'Flask REST API template',
      code: `from flask import Flask, jsonify

app = Flask(__name__)

@app.route('/api/data', methods=['GET'])
def get_data():
    return jsonify({
        'message': 'Hello from API',
        'status': 'success'
    })

if __name__ == '__main__':
    app.run(debug=True)`,
    },
    {
      name: 'CSS Animation',
      description: 'Smooth fade-in animation',
      code: `@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 0.5s ease-out;
}`,
    },
    {
      name: 'JavaScript Fetch',
      description: 'API fetch with error handling',
      code: `async function fetchData(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
}`,
    },
    {
      name: 'Node.js Server',
      description: 'Express server setup',
      code: `const express = require('express');
const app = express();
const PORT = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.json({ message: 'Server is running' });
});

app.listen(PORT, () => {
  console.log(\`Server running on port \${PORT}\`);
});`,
    },
  ];

  const handleCopy = () => {
    if (selectedCode) {
      navigator.clipboard.writeText(selectedCode.code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="min-h-[calc(100vh-120px)] animate-fade-in">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-neon-blue mb-4">Source Code Library</h1>
        <p className="text-gray-300 mb-12">Ready-to-use code snippets for your projects.</p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {sourceItems.map((item, index) => (
            <button
              key={index}
              onClick={() => setSelectedCode(item)}
              className="p-6 bg-dark-secondary rounded-2xl shadow-glow hover:shadow-glow-lg transition-all duration-300 hover:scale-105 border border-transparent hover:border-neon-blue text-left"
            >
              <Code className="w-8 h-8 text-neon-blue mb-3" />
              <h3 className="text-lg font-semibold text-white mb-1">{item.name}</h3>
              <p className="text-sm text-gray-400">{item.description}</p>
            </button>
          ))}
        </div>
      </div>

      {selectedCode && (
        <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center p-4 animate-fade-in">
          <div className="bg-dark-secondary rounded-3xl shadow-glow-lg max-w-4xl w-full max-h-[90vh] overflow-hidden border-2 border-neon-blue">
            <div className="flex justify-between items-center p-6 border-b border-neon-blue">
              <div>
                <h2 className="text-2xl font-bold text-neon-blue">{selectedCode.name}</h2>
                <p className="text-gray-400 text-sm mt-1">{selectedCode.description}</p>
              </div>
              <button
                onClick={() => setSelectedCode(null)}
                className="p-2 hover:bg-dark-tertiary rounded-lg transition-all duration-300"
              >
                <X className="w-6 h-6 text-neon-blue" />
              </button>
            </div>

            <div className="p-6 overflow-auto max-h-[60vh] scrollbar-custom">
              <pre className="bg-dark-primary p-6 rounded-xl text-gray-300 text-sm overflow-x-auto">
                <code>{selectedCode.code}</code>
              </pre>
            </div>

            <div className="p-6 border-t border-neon-blue">
              <button
                onClick={handleCopy}
                className="w-full py-3 bg-neon-blue text-dark-primary font-semibold rounded-xl hover:bg-opacity-90 transition-all duration-300 hover:shadow-glow flex items-center justify-center gap-2"
              >
                {copied ? (
                  <>
                    <Check className="w-5 h-5" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-5 h-5" />
                    Copy Code
                  </>
                )}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default SourceCode;
