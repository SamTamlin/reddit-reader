import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import './postHeader.css'

export function PostHeader(header) {

    return(
        <div className='postHeader' 
                key={header.data.id}>
            <aside className='score'>
                <p>score:</p>
                <p>{header.data.score}</p>
            </aside>
            <article>
                <h2>posted by: {`u\\${header.data.author}`}</h2>
                <h3>
                    {header.data.title} {header.data.thumbnail === 'nsfw'?
                        <span className='NSFW'>nsfw</span>
                        : ''}
                </h3>
                {header.data.selftext !== '' ?
                    <p className="mdSpan">
                        <ReactMarkdown remarkPlugins={[remarkGfm]}>
                            {header.data.selftext}
                        </ReactMarkdown>
                    </p>
                    : ''}
            
                {header.data.is_video ? 
                    <video controls >
                        <source src={header.data.media.reddit_video.fallback_url}
                            type={"video/mp4"}>
                        </source>
                    </video> : ''}

                {header.data.post_hint === 'image' ?
                    <img src={header.data.url} alt={''}/> 
                    :   <p className='outsideLink'>
                            <a href={header.data.url} target='blank'>
                                {header.data.url}
                            </a>
                        </p>}
                
                {header.data.secure_media_embed.content !== undefined? 
                    <iframe 
                        src={header.data.secure_media_embed.media_domain_url}
                        title={header.data.id}
                        height={header.data.secure_media_embed.height}
                        width={header.data.secure_media_embed.width}
                        >
                    </iframe> 
                    : ''}
            </article>

        </div>
    )
}