import React from 'react';

import NavigationItem from './NavigationItem/NavgiationItem';

const NavigationItems = (props) => (
    <ul className="toolbar__list">
        <NavigationItem link="/"><i className="fas fa-home toolbar__list-icon"></i></NavigationItem>
        <NavigationItem link="/"><i className="far fa-envelope toolbar__list-icon"></i></NavigationItem>
    </ul>
);

export default NavigationItems;
