import { Link } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import './itemPreview.css';

export function ItemPreview(post, key) {
    return (
        <div className ='itemPreview' 
            key={key}>
            <aside className='score'>
                <p>score:</p>
                <p>{post.data.data.score}</p>
            </aside>
            
            <article>
                <h2>
                    <Link to={'/r/' + post.data.data.subreddit}>
                        <strong>{post.data.data.subreddit_name_prefixed}</strong>
                    </Link> - posted by: {`u\\${post.data.data.author}`}
                </h2>
                
                <h3>
                    <Link to={post.data.data.permalink}>
                        {post.data.data.title}
                    </Link> {post.data.data.thumbnail === 'nsfw'? 
                                <span className='NSFW'>nsfw</span>
                                : ''}
                </h3>
                
                {post.data.data.selftext !== '' ?
                    <p className='mdSpan'>
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {post.data.data.selftext}
                        </ReactMarkdown>
                    </p>
                    : ''}
                
                {post.data.data.is_video ? 
                    <video controls >
                        <source src={post.data.data.media.reddit_video.fallback_url}
                            type={"video/mp4"}>
                        </source>
                    </video> : ''}

                {post.data.data.post_hint === 'image'?
                    <img src={post.data.data.url} alt={''}/> 
                    : ''}

                {post.data.data.secure_media_embed.content !== undefined? 
                    <iframe 
                        src={post.data.data.secure_media_embed.media_domain_url}
                        title={post.data.data.id}
                        height={post.data.data.secure_media_embed.height}
                        width={post.data.data.secure_media_embed.width}
                        allowFullScreen={true}
                        >
                    </iframe> 
                    : ''}

                {post.data.data.post_hint === 'link'?
                    <p className='outsideLink'>
                        <a href={post.data.data.url} target='blank'>
                            {post.data.data.url}
                        </a>
                    </p>
                    : ''}
            </article>
        </div>
    )
    
}