import React from "react";
import { Routes, Router, Link } from 'react-router-dom';
import './subReddits.css';

export function SubReddits() {
  return(
    <aside className='aside'>
      <ul>
        <li>
        <Link to='/r/AgedLikeWine'>Aged Like Wine</Link></li>
        <Link to='/r/AnimalsBeingGeniuses'><li>Animals Being Geniuses</li></Link>
        <Link to='/r/Cats'><li>Cats</li></Link>
        <Link to='/r/EyeBleach'><li>Eye Bleach</li></Link>
        <Link to='/r/Futurology'><li>Futurology</li></Link>
        <Link to='/r/Hmm'><li>Hmm</li></Link>
        <Link to='/r/Pics'><li>Pics</li></Link>
        <Link to='/r/LifeProTips'><li>Life Pro Tips</li></Link>
        <Link to='/r/MadeMeSmile'><li>Made Me Smile</li></Link>
        <Link to='/r/MildlyInteresting'><li>Mildly Interesting</li></Link>
        <Link to='/r/Space'><li>Space</li></Link>
        <Link to='/r/TodayILearned'><li>Today I Learned</li></Link>
        <Link to='/r/UpLiftingNews'><li>Up Lifting News</li></Link>
      </ul>
    </aside>
  );
};
