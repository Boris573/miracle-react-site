import React from 'react';
import {Link} from 'react-router-dom';

import MenuList from '../menu-list/menu-list';
import SearchPanel from '../search-panel/search-panel';
import logo from '../../assets/img/logohead.png';

import './header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="logo-head">
                <Link to="/">
                    <img className="logo-img" alt="logo" src={logo}/>
                </Link>
            </div>
            <MenuList />
            <SearchPanel />
        </div>
    );
}

export default Header;