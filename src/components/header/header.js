import React from 'react';

import MenuList from '../menu-list/menu-list';
import SearchPanel from '../search-panel/search-panel';
import logo from '../../assets/img/logohead.png';
import SideBar from "../menu-list/mobile-menu-list";


import './header.css';

const Header = () => {
    return (
        <div className="header">
            <div className="logo-head">
                <img className="logo-img" alt="logo" src={logo}/>
            </div>
            <div className="mobile"><SideBar className="mobile" pageWrapId={"page-wrap"} outerContainerId={"App"} /></div>
            <MenuList />
            <SearchPanel />
        </div>
    );
}

export default Header;