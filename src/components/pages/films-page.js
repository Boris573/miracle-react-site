import React from 'react';
import Film from './film';

import './pages.css';
import './films.css';

import {getAllFilms, getAllSerials} from '../../services/films-info';


const FilmsPage = () => {
    const filmz = getAllFilms().map((item) => {
        return (
            <Film key={item.id}  description={item} />
        )
    })
    const serialz = getAllSerials().map((item) => {
        return (
            <Film key={item.id}  description={item} />
        )
    })

    return (
        <div className="tab-item">
            <div id="films" className="section">
                <div className="section-name">
                    <h2 className="headline"><b>Films</b></h2>
                </div>
                <div className="section-info center posters">
                    <div className="film-list">

                        {filmz}
                        
                    </div>
                </div>
            </div>

            <div id="serials" className="section">
                <div className="section-name">
                    <h2 className="headline"><b>Serials</b></h2>
                </div>
                <div className="section-info center posters not-column">
                    <div className="film-list">

                        {serialz}

                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilmsPage;