import React from 'react';

import image from '../../../../../assets/Images/lionel-messi-3973x2644-hd-4k-10886.jpg';


const ContentImage =(props)=>{
    return(
        <div className="post__content--image-box">
            <img src={image} alt="News Image" className="post__content--image"/>
        </div>
    )
};

export default ContentImage;