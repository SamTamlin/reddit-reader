import React, { useEffect } from "react";
import { useSelector, useDispatch } from 'react-redux';
import { Link, useParams } from 'react-router-dom';

import { Loading } from '../loading/Loading';
import { PageNotFound } from "../pageNotFound/PageNotFound";

import { PostHeader } from "../../components/postHeader/PostHeader";
import { PostComment } from "../../components/postComment/PostComment";

import { getPost, 
         getHeader, 
         getComments, 
         isLoadingPost,  
         failedToLoadPost} from './postSlice';

import './Post.css';

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
        return <Loading />
    }; 
    
    if(failedLoadPost) {
        return <PageNotFound />
    };

    if(header !== undefined) {
        return (
            <div className='post'>
                <h2 className='postTitle'>
                    {subreddit ? 
                    <Link to={`/r/${header.children[0].data.subreddit}`}>
                        r/{subreddit}
                    </Link>
                    : ''}
                </h2>

                <PostHeader data={header.children[0].data} />
                
                <h3 className='commentTitle'>Comments</h3>
                
                {userComments.children.map((comment, index) => (
                    <PostComment 
                        data={comment.data} 
                        key={index}
                    />
                ))}
            </div>
        )
    };
};

export default Post;
