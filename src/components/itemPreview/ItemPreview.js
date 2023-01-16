import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

import './itemPreview.css';

export function ItemPreview(post, key) {
    const posted = new Date(post.data.created_utc*1000);
    // create date and time of when the post was created
    const datePosted = posted.toLocaleString(
        'en-GB', 
        { 
            hour12: true,
            weekday: 'short',
            month: 'short',
            year: '2-digit',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
        },
    );

    return (
        <div className ='itemPreview' key={key}>
            <aside className='score'>
                <p>points</p>
                <p>{post.data.score}</p>
            </aside>
            
            <article>
                {/* Preview Header */}
                <Link to={'/r/' + post.data.subreddit}>
                    <h2>
                        <strong>{post.data.subreddit_name_prefixed}</strong> • 
                        posted by {`u\\${post.data.author}`} on {datePosted}
                    </h2> 
                </Link>
                
                <Link to={post.data.permalink}>
                    <h3>
                        {post.data.title} {post.data.thumbnail === 'nsfw'? 
                                                <span className='NSFW'>nsfw</span>
                                                : ''}
                    </h3>
                    
                    {/* each post contains some media but not every sort  */}
                    {post.data.selftext !== '' ?
                        <p className='markDown'>
                            <ReactMarkdown remarkPlugins={[remarkGfm]}>
                                {post.data.selftext}
                            </ReactMarkdown>
                        </p>
                        : ''}
                    
                    {post.data.is_video ? 
                        <video controls >
                            <source src={post.data.media.reddit_video.fallback_url}
                                type={"video/mp4"}>
                            </source>
                        </video> : ''}

                    {post.data.post_hint === 'image'?
                        <img src={post.data.url} alt={''}/> 
                        : ''}

                    {post.data.secure_media_embed.content !== undefined? 
                        <iframe 
                            src={post.data.secure_media_embed.media_domain_url}
                            title={post.data.id}
                            height={post.data.secure_media_embed.height}
                            width={post.data.secure_media_embed.width}
                            allowFullScreen={true}
                            >
                        </iframe> 
                        : ''}

                    {post.data.post_hint === 'link'?
                        <p className='outsideLink'>
                            <a href={post.data.url} target='blank'>
                                {post.data.url}
                            </a>
                        </p>
                        : ''}

                    <p className='commentNumber'>{post.data.num_comments} Comments</p>
                </Link>
            </article>
        </div>
    );
};
