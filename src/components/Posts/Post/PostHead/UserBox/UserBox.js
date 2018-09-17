import React from 'react';

import photo from '../../../../../assets/Images/lionel-messi-3973x2644-hd-4k-10886.jpg';
const UserBox =(props)=>{
    return(
        <div className="post__user-box">
            <img src={photo} alt="User photo" className="post__user-photo"/>
            <p className="post__user-name">
                ميسي
            </p>
        </div>
    )
};

export default UserBox;