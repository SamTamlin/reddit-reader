import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPostList, getChildren, isLoading } from "./postListSlice";
import { MarkdownBlock, MarkdownSpan, MarkdownElement } from "https://md-block.verou.me/md-block.js"
import { Link, useParams } from 'react-router-dom';


export function PostList() {
    const dispatch = useDispatch();
    
    const children = useSelector(getChildren);
    const loadingPostList = useSelector(isLoading);
    const { subreddit } = useParams();

    useEffect(() => {
        dispatch(getPostList(subreddit));
    }, [dispatch, subreddit]);

    loadingPostList ? <p>Please Wait</p> : <p></p>;
    
    if(children !== undefined) {
        return (
            <div className='postList'>
                <h2>{subreddit ? `${subreddit}` : 'Home'}</h2>
                    {children.map((post) => (
                        <div className ='itemPreview' key={post.data.id}>
                            <h3>{post.data.title} {post.data.thumbnail === 'nsfw'? <span>nsfw</span>: ''}</h3>
                            
                            {post.data.is_video ? 
                                <video controls >
                                    <source src={post.data.media.reddit_video.fallback_url}
                                        type={"video/mp4"}>
                                    </source>
                                </video> : ''}
                            {post.data.post_hint === 'image'?
                                <img src={post.data.url} alt={''}/> : ''}
                        
                            <p><Link to={'/' + post.data.subreddit}>{post.data.subreddit_name_prefixed}</Link> • posted by: {`u\\${post.data.author}`}</p>
                            <p>score: {post.data.score}</p>
                            <p><md-span>{post.data.selftext}</md-span></p>
                        </div>
                    ))};
            </div>
        )
    }
    
};

export default PostList;
