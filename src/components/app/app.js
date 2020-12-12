import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';

import Header from '../header/header';
import Footer from '../footer/footer';
import MainPage from '../pages/main-page/main-page';
import FilmsPage from '../pages/films-page/films-page';
import PhotosPage from '../pages/photos-page/photos-page';
import ContactsPage from '../pages/contacts-page/contacts-page';
import FilmDescriptionPage from '../pages/film-details/film-description-page';

import './app.css';



export default class App extends Component {
    render() {
        return (
            <Router>
                <div id="App">
                    <Header />
                    <div className="wrapper" id="page-wrap">
                        <div className="content">
                            <Route path="/" exact component={MainPage}/>
                            <Route path="/films" exact component={FilmsPage}/>
                            <Route path="/films/:id" 
                                    render={({match}) => <FilmDescriptionPage itemId={match.params.id} />}/>
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