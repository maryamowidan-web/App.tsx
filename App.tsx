import React, { useState } from 'react';

export const App: React.FC = () => {
  const [prompt, setPrompt] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const handleGenerateSlide = async () => {
    if (!prompt) return;
    setLoading(true);
    setTimeout(() => {
      alert("Slide added to PowerPoint successfully!");
      setLoading(false);
    }, 1000);
  };

  return (
    <div style={{ padding: '20px', fontFamily: 'Arial, sans-serif' }}>
      <h2>PowerPoint AI Add-in</h2>
      <p>Enter a topic to generate a slide dynamically:</p>
      <input
        type="text"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        placeholder="e.g. Benefits of Cloud Computing"
        style={{ width: '100%', padding: '10px', marginBottom: '10px' }}
      />
      <button
        onClick={handleGenerateSlide}
        disabled={loading}
        style={{ padding: '10px 20px', backgroundColor: '#0078d4', color: 'white', border: 'none', cursor: 'pointer' }}
      >
        {loading ? 'Generating...' : 'Add Slide to PowerPoint'}
      </button>
    </div>
  );
};

export default App;

