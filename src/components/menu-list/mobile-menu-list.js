import React, {useState} from 'react';
import { slide as Menu } from "react-burger-menu";


import MenuListItem from '../menu-list-item/menu-list-item';

import './menu-list.css';


const MobileMenuList = () => {

    const tabs = [
        {id: "main", url: "/", text: "Main"},
        {id: "films", url: "/films", text: "Films"},
        {id: "photos", url: "/photos", text: "Photos"},
        {id: "contacts", url: "/contacts", text: "Contacts"}
    ]

    const [index, setIndex] = useState('');



    const onMenuChange = (id) => {
        setIndex(id);
    }

    const tabsBtn = tabs.map((item) => {
        return (
            <MenuListItem 
                key={item.id} 
                {...item}
                activePage={index}
                onMenuChange={onMenuChange}/>
        )
    })

        return (
            <Menu className="mobile" >
                <ul className="navigation-panel-list">
                    {tabsBtn}
                </ul>
            </Menu>
        )
}

export default MobileMenuList;