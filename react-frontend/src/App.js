import React, { useState } from 'react';

function App() {
  const [image, setImage] = useState(null);
  const [prediction, setPrediction] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!image) return;

    const formData = new FormData();
    formData.append('image', image);

    try {
      const res = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        body: formData
      });
      const data = await res.json();
      if (data.prediction !== undefined) {
        setPrediction(`Predicted Class: ${data.prediction}`);
      } else {
        setPrediction('Error: Prediction failed.');
      }
    } catch (error) {
      setPrediction('Error: Failed to fetch');
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h2>Plant Leaf Disease Detection</h2>
      <form onSubmit={handleSubmit}>
        <input type="file" onChange={(e) => setImage(e.target.files[0])} />
        <button type="submit">Submit</button>
      </form>
      <p>{prediction}</p>
    </div>
  );
}

export default App;
