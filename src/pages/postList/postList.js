import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from 'react-router-dom';

import { Loading } from "../loading/Loading";
import { PageNotFound } from "../pageNotFound/PageNotFound";
import { ItemPreview } from "../../components/itemPreview/ItemPreview";

import { getPostList, 
    getChildren, 
    isLoadingPostList, 
    failedToLoad } from "./postListSlice";

import './postList.css';


export function PostList() {
    const dispatch = useDispatch();
    const children = useSelector(getChildren);
    const loadingPostList = useSelector(isLoadingPostList);
    const failedToLoadPostList = useSelector(failedToLoad);
    const { subreddit } = useParams();

    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(getPostList(subreddit));
    }, [dispatch, subreddit]);

    if(loadingPostList) {
        return <Loading />
    };

    if(failedToLoadPostList) {
        return <PageNotFound />
    };

    if(children !== undefined) {
        return (
            <div className='postList'>
                <h2 className='listTitle'>
                    {subreddit ? `Subreddit: ${subreddit}` : 'Home'}
                </h2>
                {children.map((post, index) => (
                    <ItemPreview data={post.data} key={index} />
                ))};
            </div>
        )
    };
};

export default PostList;
