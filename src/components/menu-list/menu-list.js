import React, { useState } from 'react';

import MenuListItem from '../menu-list-item/menu-list-item';

import './menu-list.css';

const MenuList = () => {

    const [index, setIndex] = useState('');

    const tabs = [
        {id: "main", url: "/", text: "Main"},
        {id: "films", url: "/films", text: "Films"},
        {id: "photos", url: "/photos", text: "Photos"},
        {id: "contacts", url: "/contacts", text: "Contacts"}
    ]

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
        <ul className="desctop navigation-panel-list">
            {tabsBtn}
        </ul>
    )
}

export default MenuList;