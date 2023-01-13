import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { getPost, 
         getHeader, 
         getComments, 
         isLoadingPost,  
         failedToLoadPost} from './postSlice';
import { Link, useParams } from 'react-router-dom';
import './Post.css';
import { PostHeader } from "../../components/postHeader/PostHeader";
import { PostComment } from "../../components/postComment/PostComment";

export function Post() {
    const dispatch = useDispatch();

    const header = useSelector(getHeader);
    const userComments = useSelector(getComments);
    const loadingPost = useSelector(isLoadingPost);
    const failedLoadPost = useSelector(failedToLoadPost)
    const { subreddit, id, postLink } = useParams();

    
    useEffect(() => {
        window.scrollTo(0, 0);
        dispatch(getPost({
            subreddit: subreddit,
            id: id,
            postLink: postLink
        }));
    }, [dispatch, subreddit, id, postLink]);

    if(loadingPost) {
        return <p>Please Wait</p>;
    }

    if(failedLoadPost) {
        return(
            <div>
                <p>Sorry failed to load</p>
                <p>please retry</p>
            </div>
            
        )
    }

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
                <PostHeader data={header.children[0].data} />
                
                <h3 className='commentTitle'>Comments</h3>
                {userComments.children.map((comment, key) => (
                    <PostComment data={comment} key={key} />
                    ))}
            </div>
        )
    }
};

export default Post;
