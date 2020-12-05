import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from '../header/header';
import Footer from '../footer/footer';
import MainPage from '../pages/main-page';
import FilmsPage from '../pages/films-page';
import PhotosPage from '../pages/photos-page';
import ContactsPage from '../pages/contacts-page';

import './app.css';

export default class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <div className="wrapper">
                        <div className="content">
                            <Route path="/" exact component={MainPage}/>
                            <Route path="/films" component={FilmsPage}/>
                            <Route path="/photos" component={PhotosPage}/>
                            <Route path="/contacts" component={ContactsPage}/>

                        </div>
                    </div>
                    <Footer />
                </div>
            </Router>
        )
    }
}