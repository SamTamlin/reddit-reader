import React from 'react';
import Popular from '../features/popular/Popular';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Reddit Reader</h1>
      </header>
      <main className='App-main'>
        <Popular />
      </main>
    </div>
  );
}

export default App;
