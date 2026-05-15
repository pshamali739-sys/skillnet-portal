import React from 'react';

function App() {
  return (
    <div className="App" style={{ textAlign: 'center', marginTop: '50px', fontFamily: 'Arial' }}>
      <header className="App-header">
        <h1 style={{ color: '#61dafb' }}>Skillnet Portal වෙත සාදරයෙන් පිළිගනිමු!</h1>
        <p>
          මෙය සාර්ථකව යාවත්කාලීන කරන ලද <code>src/App.jsx</code> ගොනුවයි.
        </p>
        
        <div style={{ marginTop: '20px', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', display: 'inline-block' }}>
          <h3>අද දින තොරතුරු:</h3>
          <p>දිනය: {new Date().toLocaleDateString()}</p>
          <button 
            onClick={() => alert('සාර්ථකයි!')}
            style={{ backgroundColor: '#4CAF50', color: 'white', padding: '10px 20px', border: 'none', borderRadius: '5px', cursor: 'pointer', fontSize: '16px' }}
          >
            මා වෙත පිවිසෙන්න
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;
