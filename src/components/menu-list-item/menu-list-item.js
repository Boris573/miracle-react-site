import React from 'react';
import {Link} from 'react-router-dom';

import './menu-list-item.css';

const MenuListItem = ({id, url, text, onMenuChange, active}) => {

    const clazz = window.location.pathname === url ? ' active' : '';

    return (
        <li><Link 
            className={`section-btn${clazz}`} 
            id="homeBtn" 
            to={url}
            onClick={() => onMenuChange(id)}>
            {text}
        </Link></li>
    )
}

export default MenuListItem;