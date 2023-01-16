import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

import './postHeader.css'

export function PostHeader(header) {
    const posted = new Date(header.data.created_utc*1000);
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
        });

    return(
        <div className='postHeader' key={header.data.id}>
            <aside className='score'>
                <p>points:</p>
                <p>{header.data.score}</p>
            </aside>

            <article>
                {/* Post Header */}
                <h2>
                    <strong>posted by {`u\\${header.data.author}`}</strong> {datePosted}
                </h2>

                <h3>
                    {header.data.title} {header.data.thumbnail === 'nsfw'?
                        <span className='NSFW'>nsfw</span>
                        : ''}
                </h3>

                {/* each post contains some media but not every sort  */}
                {header.data.selftext !== '' ?
                    <p className="markDown">
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
    );
};
