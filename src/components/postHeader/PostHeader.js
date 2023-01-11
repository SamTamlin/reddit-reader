import React from "react";
import './postHeader.css'

export function PostHeader(header) {

    return(
        <div className='postHeader' 
                     key={header.data.id}>
                    <h3>
                        {header.data.title} {header.data.thumbnail === 'nsfw'? <span className='NSFW'>nsfw</span>: ''}
                    </h3>
                    <p>score: {header.data.score}</p>
                    <p>posted by: {`u\\${header.data.author}`}</p>
                    <p><md-span>{header.data.selftext}</md-span></p>
                    {header.data.is_video ? 
                        <video controls >
                            <source src={header.data.media.reddit_video.fallback_url}
                                type={"video/mp4"}>
                            </source>
                        </video> : ''}

                    {header.data.post_hint === 'image' ?
                        <img src={header.data.url} alt={''}/> 
                        : ''}
                    {header.data.secure_media_embed.content !== undefined? 
                        <iframe 
                            src={header.data.secure_media_embed.media_domain_url}
                            title={header.data.id}
                            height={header.data.secure_media_embed.height}
                            width={header.data.secure_media_embed.width}
                            >
                        </iframe> : ''}
                        {header.data.post_hint === 'link'?
                            <embed
                                src={header.data.url}>
                            </embed>
                            : ''}
                </div>
    )
}