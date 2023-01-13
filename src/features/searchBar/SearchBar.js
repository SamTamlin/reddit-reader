import React from "react";
import { useSelector, useDispatch, useStore } from "react-redux";
import './searchBar.css';

export function SearchBar() {

    
    let searchString = '';
    
    const handleInput = (e) => {
        const enteredSearch = e.target.value;
        searchString = enteredSearch.replaceAll(' ', '-');
    }

    const startSearch = () => {
        window.location.href = `${searchString}`;
        window.scrollTo(0, 0);
    }

    return(
        <div className="searchDiv">
            <input id='searchbar'
                   type='text'
                   name='search'
                   placeholder="Search Reddit"
                   onChange={handleInput}
                   onSubmit={startSearch}>
            </input>
            <button onClick={startSearch} type='submit'>Search</button>
        </div>
    )
};

export default SearchBar;
