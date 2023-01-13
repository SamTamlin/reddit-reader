import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getSearch,
         getSearchChildren, 
         isLoading, 
         failedToLoad } from "./searchSlice";
import { ItemPreview } from "../../components/itemPreview/ItemPreview";
import { useParams } from "react-router-dom";
import './search.css';

export function Search() {
    const dispatch = useDispatch();

    const searchChildren = useSelector(getSearchChildren);
    const loadingSearch = useSelector(isLoading);
    const failedSearch = useSelector(failedToLoad);

    const {search} = useParams();
    // const [path, search] = searchPath.split('?');

    useEffect(() => {
        window.scrollTo(0, 0);
        console.log(search);
        dispatch(getSearch(search));
    }, [dispatch, search]);
    
    loadingSearch ? <p>Please Wait</p> : <p></p>;
    failedSearch ? <p>Sorry faild to load</p> : <p></p>;

    if(searchChildren !== undefined) {
        return (
            <div className='searchResults'>
                <h2 className='searchTitle'>
                    Search Results
                </h2>
                {searchChildren.map((post, key) => (
                    <ItemPreview data={post} key={key} />
                ))};
            </div>
        )
    }
};

export default Search;
