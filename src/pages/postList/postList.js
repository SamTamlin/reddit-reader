import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getPostList, 
         getChildren, 
         isLoading, 
         failedToLoad } from "./postListSlice";
import { MarkdownBlock, MarkdownSpan, MarkdownElement } from "https://md-block.verou.me/md-block.js"
import { Link, useParams } from 'react-router-dom';
import './postList.css';

export function PostList() {
    const dispatch = useDispatch();
    
    const children = useSelector(getChildren);
    const loadingPostList = useSelector(isLoading);
    const failedToLoadPostList = useSelector(failedToLoad);
    const { subreddit } = useParams();

    useEffect(() => {
        dispatch(getPostList(subreddit));
    }, [dispatch, subreddit]);

    loadingPostList ? <p>Please Wait</p> : <p></p>;
    
    failedToLoadPostList ? <p>Sorry failed to load, please retry</p> : <p></p>;
    
    if(children !== undefined) {
        return (
            <div className='postList'>
                <h2 className='listTitle'>
                    {subreddit ? `Subreddit: ${subreddit}` : 'Home'}
                </h2>
                {children.map((post) => (
                    <div className ='itemPreview' 
                         key={post.data.id}>
                        <h3>
                            <Link to={post.data.permalink}>
                                {post.data.title}
                            </Link> {post.data.thumbnail === 'nsfw'? <span className='NSFW'>nsfw</span>: ''}
                        </h3>
                        <p>score: {post.data.score}</p>
                        <p><Link to={'/r/' + post.data.subreddit}>{post.data.subreddit_name_prefixed}</Link> • posted by: {`u\\${post.data.author}`}</p>
                        <p><md-span>{post.data.selftext}</md-span></p>
                        {post.data.is_video ? 
                            <video controls >
                                <source src={post.data.media.reddit_video.fallback_url}
                                    type={"video/mp4"}>
                                </source>
                            </video> : ''}

                        {post.data.post_hint === 'image'?
                            <img src={post.data.url} alt={''}/> : ''}

                        {post.data.secure_media_embed.content !== undefined? 
                            <iframe 
                                src={post.data.secure_media_embed.media_domain_url}
                                Height={post.data.secure_media_embed.height}
                                Width={post.data.secure_media_embed.width}
                                allowFullScreen='true'
                                
                                >
                            </iframe> : ''}
                    </div>
                ))};
            </div>
        )
    }
};

export default PostList;
