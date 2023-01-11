import React from "react";
import './postComment.css'

export function PostComment(comment, key) {
    return(
        <div className='comments' 
                key={key}>
            <p>
                {comment.data.data.author} 
                {comment.data.data.is_submitter ? <strong> Original Poster</strong> : ''}
            </p>
            <p>{comment.data.data.body}</p>
        </div>
    )
}
