import React from 'react';
import PostList from '../pages/postList/postList';
import Post from '../pages/post/Post';
import {SubReddits} from '../features/subreddits/subReddits';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <h1><Link to='/'>Reddit Reader</Link></h1>
        </header>
        <main className='App-main'>
          <SubReddits />
          <Routes>
            <Route path='/'
                   element={<PostList />} />
            <Route path='/r/:subreddit' 
                   element={<PostList />} />
            <Route path='/r/:subreddit/comments/:id/:postLink'
                   element={<Post />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
