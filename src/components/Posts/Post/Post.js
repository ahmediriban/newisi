import React,{ Component } from 'react';
import PostHead from "./PostHead/PostHead";
import Content from "./Content/Content";
import Likebar from "./Likebar/Likebar";


class Post extends Component{

    render(){
        return(
            <div className="post">
                <PostHead/>
                <Content/>
                <Likebar/>
            </div>
        )
    }

}

export default Post;