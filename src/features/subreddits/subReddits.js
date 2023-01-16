import React from "react";
import './subReddits.css';

export function SubReddits() {

  const navigate = (e) => {
    
    window.location.href = `/r/${e.target.value}`;
    window.scrollTo(0, 0);
  }

  return(
    <div className='subRedditsMenu'>
      <select name="subreddit" id="subreddit-select" >
          <option value=''>Select a Sub-Reddit</option>
          <option value="Popular" onClick={navigate}>
            Popular
          </option>
          <option value="AgedLikeWine" onClick={navigate}>
            Aged Like Wine
          </option>
          <option value="AnimalsBeingGeniuses" onClick={navigate}>
            Animals Being Geniuses
          </option>
          <option value='BeAmazed' onClick={navigate}>
            Be Amazed
          </option>
          <option value="CatsAreLiquid" onClick={navigate}>
            Cats Are Liquid
          </option>
          <option value="EyeBleach" onClick={navigate}>
            Eye Bleach
          </option>
          <option value="Futurology" onClick={navigate}>
            Futurology
          </option>
          <option value='GooglyEyes' onClick={navigate}>
            Googly Eyes
          </option>
          <option value="Pics" onClick={navigate}>
            Pics
          </option>
          <option value="LifeProTips" onClick={navigate}>
            Life Pro Tips
          </option>
          <option value="MadeMeSmile" onClick={navigate}>
            Made Me Smile
          </option>
          <option value="MildlyInteresting" onClick={navigate}>
            Mildly Interesting
          </option>
          <option value='NeverTellMeTheOdds' onClick={navigate}>
            Never Tell Me The Odds
          </option>
          <option value='NotTheOnion' onClick={navigate}>
            Not the Onion
          </option>
          <option value="Space" onClick={navigate}>
            Space
          </option>
          <option value="TodayILearned" onClick={navigate}>
            Today I Learned
          </option>
          <option value="UpLiftingNews" onClick={navigate}>
            Up-Lifting News
          </option>
      </select>
    </div>
  );
};

export default SubReddits;
