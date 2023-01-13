import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import './postComment.css'

export function PostComment(comment, key) {
    return(
        <div className='comments' 
                key={key}>
            <p>
                <strong>u/{comment.data.data.author} </strong>
                {comment.data.data.is_submitter ? <strong id='op'> Original Poster</strong> : ''}
            </p>
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {comment.data.data.body}
            </ReactMarkdown>
        </div>
    )
}
