import React from 'react';
import PostList from '../pages/postList/postList';
import Post from '../pages/post/Post';
import Search from '../pages/search/Search';
import SearchBar from '../features/searchBar/SearchBar';
import SubReddits from '../features/subreddits/subReddits';
import { PageNotFound } from '../pages/pageNotFound/PageNotFound';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <SubReddits />
          <div className='title'>
            <img src="https://www.redditstatic.com/desktop2x/img/favicon/android-icon-192x192.png" />
            <h1><Link to='/'>reddit reader</Link></h1>
          </div>

          <SearchBar />
        </header>
        <main className='App-main'>
          <Routes>
            <Route path='/'
                   element={<PostList />} />
            <Route path='*'
                   element={<PageNotFound />} />
            <Route path='/:search'
                   element={<Search />} />
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
