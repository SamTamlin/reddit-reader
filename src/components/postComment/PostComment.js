import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import './postComment.css'

export function PostComment(comment, index) {

    const timeSince = () =>{
        // calculate hours from when a comment was posted 
        const dateFormatted = Date.now()/ 1000
        const timePosted = new Date(comment.data.created_utc)
        return Math.floor((dateFormatted - timePosted)/3600)
    };

    const hideUnhide = (e) => {
        // hide content within the parent div using a button
        const divider = e.target.parentElement.parentElement;
        if(divider.style.height !== '2ch') {
            divider.style.height = '2ch';
            e.target.innerHTML = '+';
        } else {
            divider.style.height = 'auto';
            e.target.innerHTML = '-';
        }
    };
    
    return(
        <div className={'comments'} key={index} id={index}>
            {/* Comment header */}
            <p className='commentHeader'> 
                <button onClick={hideUnhide}>-</button><strong> u/{comment.data.author} </strong>
                {comment.data.is_submitter ? <strong id='op'> OP </strong> : ''}
                · ({comment.data.score} point{comment.data.score !== 1 ? 's' : '' }) · {timeSince() > 1 ? timeSince() : 'less than 1'}hr ago
            </p>

            {/* Comments use markdown */}
            <ReactMarkdown 
                children={comment.data.body}
                remarkPlugins={[remarkGfm]}
                />

            {/* if there are replies send to new PostComment */}
            {comment.data.replies !== '' && comment.data.replies !== undefined?
                comment.data.replies.data.children.map((comment, index) => (
                    // comments have the 'kind' 'listing', 'more' does not have the same layout
                    comment.kind !== 'more'?
                        <PostComment 
                            data={comment.data} 
                            key={index} 
                            /> 
                        :''
                    ))
                : ''
            }
        </div> 
    )
};
