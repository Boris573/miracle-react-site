import React from 'react';
import {Link} from 'react-router-dom';

import './menu-list-item.css';

const MenuListItem = ({id, url, text, onMenuChange, activePage}) => {

    const clazz = (window.location.pathname === url || activePage === id) ? ' active' : '';

    return (
        <li><Link 
            className={`menu-item section-btn${clazz}`} 
            id="homeBtn" 
            to={url}
            onClick={() => onMenuChange(id)}>
            {text}
        </Link></li>
    )
}

export default MenuListItem;