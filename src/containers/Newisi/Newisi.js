import React,{ Component }from 'react';
import Toolbar from "../../components/Navgiation/Toolbar/Toolbar";
import Posts from "../../components/Posts/Posts";

class Newisi extends Component{
    render(){
        return(
            <div>
                <Toolbar/>
                <main>
                    <Posts/>
                </main>
            </div>
        )
    }
}

export default Newisi;