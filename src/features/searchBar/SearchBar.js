import React from 'react';
import { useNavigate } from 'react-router-dom';
import './searchBar.css';

export function SearchBar() {
    const navigate = useNavigate();
    // declare searchString as let allowing manipulation by handleInput
    let searchString = '';
    
    const handleInput = (e) => {
        const enteredSearch = e.target.value;
        // replace with '+' so that the json returns the correct search
        searchString = enteredSearch.replaceAll(' ', '+');
        console.log(searchString);
    };

    const startSearch = () => {
        navigate(`/${searchString}`);
    };

    return(
        <div className="searchDiv">
            <input
                id='searchbar'
                type='text'
                name='search'
                placeholder="Search Reddit"
                onChange={handleInput}
                onSubmit={startSearch}>
            </input>
            <button onClick={startSearch} type='submit'>Search</button>
        </div>
    );
};

export default SearchBar;
