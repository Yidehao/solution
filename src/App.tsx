import { useState } from 'react';
import './App.css';

interface CatData {
  url: string;
}

export default function App() {
  const [catImage, setCatImage] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const fetchCat = async () => {
    setLoading(true);
    try {
      const response = await fetch('https://cataas.com/cat?json=true');
      const data: CatData = await response.json();
      setCatImage(`https://cataas.com${data.url}`);
    } catch (error) {
      console.error("Error fetching cat:", error);
      alert("Failed to fetch cat. Please try again!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="app-container">
      <h1>Artisanal Cat Server 🐱</h1>
      <button 
        onClick={fetchCat} 
        disabled={loading}
        className="cat-button"
      >
        {loading ? 'Loading...' : 'Serve Cat!'}
      </button>
      
      {catImage && (
        <img 
          src={catImage} 
          alt="Random cat" 
          className="cat-image"
          onLoad={() => setLoading(false)}
        />
      )}
    </div>
  );
}