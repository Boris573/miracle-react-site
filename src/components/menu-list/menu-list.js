import React, { Component } from 'react';

import MenuListItem from '../menu-list-item/menu-list-item';

import './menu-list.css';

export default class MenuList extends Component {

    state = {
        idx: ''
    }

    tabs = [
        {id: "main", url: "/", text: "Main"},
        {id: "films", url: "/films", text: "Films"},
        {id: "photos", url: "/photos", text: "Photos"},
        {id: "contacts", url: "/contacts", text: "Contacts"}
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
                    activePage={this.state.idx}
                    onMenuChange={this.onMenuChange}/>
            )
        })

        return (
            <ul className="desctop navigation-panel-list">
                {tabsBtn}
            </ul>
        )
    }
}