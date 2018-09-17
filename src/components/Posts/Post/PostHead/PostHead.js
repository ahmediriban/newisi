import React from 'react';
import UserBox from "./UserBox/UserBox";

const PostHead =(props)=>{
    return(
        <div className="post__head">
            <UserBox/>
        </div>
    )
};

export default PostHead;