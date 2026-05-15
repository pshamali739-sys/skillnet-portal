import React from 'react';

function App() {
  return (
    <div className="App" style={{ textAlign: 'center', marginTop: '50px' }}>
      <header className="App-header">
        <h1>මගේ React ඇප් එකට සාදරයෙන් පිළිගනිමු!</h1>
        <p>
          මෙය GitHub හරහා සාර්ථකව යාවත්කාලීන කරන ලද <code>src/App.jsx</code> ගොනුවයි.
        </p>
        <button 
          onClick={() => alert('බොත්තම ක්ලික් කළා!')}
          style={{ padding: '10px 20px', fontSize: '16px', cursor: 'pointer' }}
        >
          මාව ක්ලික් කරන්න
        </button>
      </header>
    </div>
  );
}

export default App;
