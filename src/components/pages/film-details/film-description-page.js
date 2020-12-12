import React from 'react';
import {getFilm} from '../../../services/films-info';

import './film-detail.css';

const FilmDescriptionPage = ({itemId}) => {
    const filmDescription = getFilm(itemId)[0];
    const {name, photo, year, genre, director, description} = filmDescription;
    return (
        <div className="film-description">
            <div className="film-description-name">{name}</div>
            <div className="description-main">
                <img src={photo} alt="" />
                <div className="description-main__stats">
                    <div className="row">
                        <div className="film-year category">Year: </div>
                        <span className="film-year-value">{year}</span>
                    </div>
                    <div className="row">
                        <div className="film-genre category">Genre: </div>
                        <span className="film-genre-value">{genre}</span>
                    </div>
                    <div className="row">
                        <div className="film-year category">Creators: </div>
                        <div className="film-year-value">{director}</div>
                    </div>
                    <div className="description-text">{description}</div>
                </div>
            </div>
        </div>
    )
}

export default FilmDescriptionPage;