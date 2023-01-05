import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPopular, getChildren, isLoading } from "./popularSlice";

export function Popular() {
    const dispatch = useDispatch();
    
    const children = useSelector(getChildren);
    const loadingPopular = useSelector(isLoading);

    useEffect(() => {
        dispatch(getPopular());
    }, [dispatch]);

    if(loadingPopular) {
        return(
            <p>Please Wait</p>
        )
    };
    
    if(children !== undefined) {
        return (
            <div className='postList'>
                {children.map((post) => (
                    <div className ='itemPreview' key={post.data.id}>
                        <h2>{post.data.title} {post.data.thumbnail === 'nsfw'? <span>nsfw</span>: ''}</h2>
                        
                        {post.data.is_video ? 
                            <video controls >
                                <source src={post.data.media.reddit_video.fallback_url}
                                    // width={post.data.media.reddit_video.width} 
                                    // height={post.data.media.reddit_video.height} 
                                    type={"video/mp4"}>
                                </source>
                            </video> : ''}
                        {post.data.post_hint === 'image'?
                             <img src={post.data.url} alt={''}/> : ''}
                       
                        <p><b>{post.data.subreddit_name_prefixed}</b> • posted by: {`u\\${post.data.author}`}</p>
                        <p>score: {post.data.score}</p>
                        <p>{post.data.selftext}</p>

                    </div>
                ))};
            </div>
        )
    }
    
};

export default Popular;
