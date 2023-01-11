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
