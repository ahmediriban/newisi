import React from 'react';

import Photo from './Photo/Photo';

const Logo =(props)=>{
    return(
        <div className="toolbar__logo">
            <Photo/>
            <p className="toolbar__newisi">نيوزي</p>
        </div>
    )
};

export default Logo;