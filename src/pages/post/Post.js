import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getPost, 
         getHeader, 
         getComments, 
         isLoadingPost,  
         failedToLoadPost} from './postSlice';
import { Link, useParams } from 'react-router-dom';
import './Post.css';

export function Post() {
    const dispatch = useDispatch();

    const header = useSelector(getHeader);
    const userComments = useSelector(getComments);
    const loadingPost = useSelector(isLoadingPost);
    const failedLoadPost = useSelector(failedToLoadPost)
    const { subreddit, id, postLink } = useParams();

    
    useEffect(() => {
        dispatch(getPost({
            subreddit: subreddit,
            id: id,
            postLink: postLink
        }));
    }, [dispatch, subreddit, id, postLink]);

    loadingPost ?
        <p>Please Wait</p> :
        <p></p>;

    failedLoadPost ?
        <p>Sorry failed to load, please retry</p> :
        <p></p>;

    if(header !== undefined) {
        return (
            <div className='post'>
                <h2 className='postTitle'>
                    {subreddit ? 
                    <Link to={`/r/${header.children[0].data.subreddit}`}>
                        Subreddit: {subreddit}
                    </Link> : 
                    'Failed to Load'}
                </h2>
                <div className='postHeader' 
                     key={header.children[0].data.id}>
                    <h3>
                        {header.children[0].data.title} {header.children[0].data.thumbnail === 'nsfw'? <span className='NSFW'>nsfw</span>: ''}
                    </h3>
                    <p>score: {header.children[0].data.score}</p>
                    <p>posted by: {`u\\${header.children[0].data.author}`}</p>
                    <p><md-span>{header.children[0].data.selftext}</md-span></p>
                    {header.children[0].data.is_video ? 
                        <video controls >
                            <source src={header.children[0].data.media.reddit_video.fallback_url}
                                type={"video/mp4"}>
                            </source>
                        </video> : ''}

                    {header.children[0].data.post_hint === 'image'?
                        <img src={header.children[0].data.url} alt={''}/> 
                        : ''}
                    
                    {header.children[0].data.secure_media_embed.content !== undefined? 
                        <iframe 
                            src={header.children[0].data.secure_media_embed.media_domain_url}
                            height={header.children[0].data.secure_media_embed.height}
                            width={header.children[0].data.secure_media_embed.width}
                            >
                        </iframe> : ''}
                </div>
                
                <h3 className='commentTitle'>Comments</h3>
                {userComments.children.map((comment) => (
                    <div className='comments' 
                         key={comment.data.id}>
                        <p>{comment.data.body}</p>
                        {comment.data.replies !== ''?
                            <p>IT WORKS!</p>
                        //     <div>
                        //     {comment.data.replies.data.children.map((reply) => (
                        //         <div className='comments'
                        //             key={reply.data.id}>
                        //             <p>{reply.data.body}</p>
                        //         </div>
                        //  ))}</div> 
                        : <p>NOTHING TO SEE HERE!</p>}
                    </div>
                ))}
            </div>
        )
    }
};

export default Post;
