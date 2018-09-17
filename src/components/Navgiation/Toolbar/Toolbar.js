import React from 'react';
import NavigationItems from "../NavigationItems/NavigationItems";
import Logo from "../../Logo/Logo";
import Search from "../Search/Search";


const Toolbar = (props) => (
    <div className="toolbar">
        <div className="toolbar__wrap">
            <Logo/>
            <Search/>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
    </div>
);

export default Toolbar;

