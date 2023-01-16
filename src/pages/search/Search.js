import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";

import { ItemPreview } from "../../components/itemPreview/ItemPreview";
import { Loading } from "../loading/Loading";
import { PageNotFound } from "../pageNotFound/PageNotFound";

import { getSearch,
    getSearchChildren, 
    isLoading, 
    failedToLoad } from "./searchSlice";

import './search.css';

export function Search() {
    const dispatch = useDispatch();
    const searchChildren = useSelector(getSearchChildren);
    const loadingSearch = useSelector(isLoading);
    const failedSearch = useSelector(failedToLoad);

    const {search} = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
        console.log(search);
        dispatch(getSearch(search));
    }, [dispatch, search]);
    
    if(loadingSearch) {
        return <Loading />
    };

    if(failedSearch) {
        return <PageNotFound />
    };

    if(searchChildren !== undefined) {
        return (
            <div className='searchResults'>
                <h2 className='searchTitle'>
                    Search Results
                </h2>
                {searchChildren.map((post, index) => (
                    <ItemPreview data={post.data} key={index} />
                ))};
            </div>
        )
    };
};

export default Search;
