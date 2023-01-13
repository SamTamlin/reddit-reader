import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPostList, 
         getChildren, 
         isLoadingPostList, 
         failedToLoad } from "./postListSlice";
import { Loading } from "../loading/Loading";
import { useParams } from 'react-router-dom';
import './postList.css';
import { ItemPreview } from "../../components/itemPreview/ItemPreview";

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
        return <Loading />;
    };

    if(failedToLoadPostList) {
        return <p>Sorry failed to load, please retry</p>;
    };
    
    if(children !== undefined && loadingPostList === false && failedToLoadPostList === false) {
        return (
            <div className='postList'>
                <h2 className='listTitle'>
                    {subreddit ? `Subreddit: ${subreddit}` : 'Home'}
                </h2>
                {children.map((post, key) => (
                    <ItemPreview data={post} key={key} />
                ))};
            </div>
        )
    }

    
};

export default PostList;
