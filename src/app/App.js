import React from 'react';
import PostList from '../features/postList/postList';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1>Reddit Reader</h1>
        </header>
        <main className='App-main'>
          <Routes>
            <Route path='/:subreddit?' element={<PostList />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
