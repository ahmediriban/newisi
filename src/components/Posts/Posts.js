import React,{ Component } from 'react';
import Post from "./Post/Post";

class Posts extends Component{

    render(){
        return(
            <div className="posts-layout">
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
                <Post/>
            </div>
        )
    }

}

export default Posts;