import React, { Component } from 'react';

import MenuListItem from '../menu-list-item/menu-list-item';

import './menu-list.css';

export default class MenuList extends Component {

    state = {
        idx: 0
    }

    tabs = [
        {id: "0", url: "/", text: "Main"},
        {id: "1", url: "/films", text: "Films"},
        {id: "2", url: "/photos", text: "Photos"},
        {id: "3", url: "/contacts", text: "Contacts"}
    ]

    onMenuChange = (id) => {
        this.setState({idx: id});
    }

    render() {
        const tabsBtn = this.tabs.map((item) => {
            return (
                <MenuListItem 
                    key={item.id} 
                    {...item}
                    onMenuChange={this.onMenuChange}/>
            )
        })

        return (
            <ul className="navigation-panel-list">
                {tabsBtn}
            </ul>
        )
    }
}