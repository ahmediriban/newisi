import React from 'react';
import ContentImage from "./ContentImage/ContentImage";
import ContentNews from "./ContentNews/ContentNews";

const Content=(props)=>{
    return(
        <div className="post__content">
            <ContentImage/>
            <ContentNews/>
        </div>
    )
};

export default Content;