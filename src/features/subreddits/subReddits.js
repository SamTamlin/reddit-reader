import React from 'react';
import { useNavigate } from 'react-router-dom';
import './subReddits.css';

export function SubReddits() {
  const navigate = useNavigate();
  const goToSubreddit = (e) => {
    navigate(`/r/${e.target.value}`);
  };

  return(
    <div className='subRedditsMenu'>
      <select name="subreddit" id="subreddit-select" >
          <option value=''>Select a Sub-Reddit</option>
          <option value="Popular" onClick={goToSubreddit}>
            Popular
          </option>
          <option value="AgedLikeWine" onClick={goToSubreddit}>
            Aged Like Wine
          </option>
          <option value="AnimalsBeingGeniuses" onClick={goToSubreddit}>
            Animals Being Geniuses
          </option>
          <option value='BeAmazed' onClick={goToSubreddit}>
            Be Amazed
          </option>
          <option value="CatsAreLiquid" onClick={goToSubreddit}>
            Cats Are Liquid
          </option>
          <option value="EyeBleach" onClick={goToSubreddit}>
            Eye Bleach
          </option>
          <option value="Futurology" onClick={goToSubreddit}>
            Futurology
          </option>
          <option value='GooglyEyes' onClick={goToSubreddit}>
            Googly Eyes
          </option>
          <option value="Pics" onClick={goToSubreddit}>
            Pics
          </option>
          <option value="LifeProTips" onClick={goToSubreddit}>
            Life Pro Tips
          </option>
          <option value="MadeMeSmile" onClick={goToSubreddit}>
            Made Me Smile
          </option>
          <option value="MildlyInteresting" onClick={goToSubreddit}>
            Mildly Interesting
          </option>
          <option value='NeverTellMeTheOdds' onClick={goToSubreddit}>
            Never Tell Me The Odds
          </option>
          <option value='NotTheOnion' onClick={goToSubreddit}>
            Not the Onion
          </option>
          <option value="Space" onClick={goToSubreddit}>
            Space
          </option>
          <option value="TodayILearned" onClick={goToSubreddit}>
            Today I Learned
          </option>
          <option value="UpLiftingNews" onClick={goToSubreddit}>
            Up-Lifting News
          </option>
      </select>
    </div>
  );
};

export default SubReddits;
