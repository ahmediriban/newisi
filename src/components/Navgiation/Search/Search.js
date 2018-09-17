import React,{ Component } from 'react';


class Search extends Component{
    render(){
        return (
            <form className="toolbar__search-form">
                <input type="text" placeholder="أبحث" className="toolbar__search-input"/>
                <button className="toolbar__search-btn">
                    <i className="fas fa-search toolbar__search-icon"></i>
                </button>
            </form>
        )
    }
}

export default Search;