import React from 'react';

import './pages.css';
import './films.css';

///Films posters


import thorRangnarok from '../../assets/posters/thor-ragnarok.jpg';
import shazam from '../../assets/posters/shazam.jpg';
import justiceLeague from '../../assets/posters/justice-league.jpg';
import drStrange from '../../assets/posters/dr-strange.jpg';
import superman from '../../assets/posters/superman.jpg';
import batman2 from '../../assets/posters/batman2.jpg';
import capMarvel from '../../assets/posters/cap-marvel.jpg';
import spiderMan from '../../assets/posters/spider-man.jpg';
import avengers3 from '../../assets/posters/avangers.jpg';
import avengers4 from '../../assets/posters/avanger-endgame.jpg';
import strangerThings from '../../assets/posters/strangerthings.jpg';


//Serials posters

import friends from '../../assets/posters/friends.jpg';
import breakingBad from '../../assets/posters/breaking-bad.jpg';
import bigBangTheory from '../../assets/posters/big-bang-theory.jpg';
import gameOfThrone from '../../assets/posters/game-of-throne.jpg';
import vikings from '../../assets/posters/viking.jpg';
import mandalorian from '../../assets/posters/mandalorian.jpg';
import witcher from '../../assets/posters/witcher.jpg';

const FilmsPage = () => {
    return (
        <div className="tab-item">
            <div id="films" className="section">
                <div className="section-name">
                    <h2 className="headline"><b>Films</b></h2>
                </div>
                <div className="section-info center posters">

                    <div className="film-list">
                        
                        <div className="film">
                            <a href="/">
                                <img alt="" src={thorRangnarok} />
                                <div className="film-name">Thor 3: Ragnarok</div>
                            </a>
                        </div>

                        <div className="film">
                            <a href="/">
                                <img alt="" src={spiderMan} />
                                <div className="film-name">Spider Man: Home Coming</div>
                            </a>
                        </div>
                        <div className="film">
                            <a href="/">
                            <img alt="" src={shazam} />
                                <div className="film-name">Shazam</div>
                            </a>
                        </div>
                        <div className="film">
                            <a href="/">
                                <img alt="" src={justiceLeague} />
                                <div className="film-name">Justice League</div>
                            </a>
                        </div>
                        <div className="film">
                            <a href="/">
                                <img alt="" src={drStrange} />
                                <div className="film-name">Doctor Strange</div>
                            </a>
                        </div>
                        <div className="film">
                            <a href="/">
                                <img alt="" src={capMarvel} />
                                <div className="film-name">Captain Marvel</div>
                            </a>
                        </div>
                        <div className="film">
                            <a href="/">
                                <img alt="" src={batman2} />
                                <div className="film-name">The dark knight</div>
                            </a>
                        </div>
                        <div className="film">
                            <a href="/">
                                <img alt="" src={superman} />
                                <div className="film-name">Man of steel</div>
                            </a>
                        </div>
                        <div className="film">
                            <a href="/">
                                <img alt="" src={avengers3} />
                                <div className="film-name">Avengers: Infinity War</div>
                            </a>
                        </div>
                        <div className="film">
                            <a href="/">
                                <img alt="" src={avengers4} />
                                <div className="film-name">Avengers: Endgame</div>
                            </a>
                        </div>

                    </div>
                </div>
            </div>

            <div id="serials" className="section">
                <div className="section-name">
                    <h2 className="headline"><b>Serials</b></h2>
                </div>
                <div className="section-info center posters not-column">
                    <div className="film-list">
                        <div className="film">
                            <a href="/">
                                <img alt="" src={friends} />
                                <div className="film-name">Friends</div>
                            </a>
                        </div>
                        <div className="film">
                            <a href="/">
                                <img alt="" src={mandalorian} />
                                <div className="film-name">Mandalorian</div>
                            </a>
                        </div>
                        <div className="film">
                            <a href="/">
                                <img alt="" src={bigBangTheory} />
                                <div className="film-name">Big Bang Theory</div>
                            </a>
                        </div>
                        <div className="film">
                            <a href="/">
                                <img alt="" src={vikings} />
                                <div className="film-name">Vikings</div>
                            </a>
                        </div>
                        <div className="film">
                            <a href="/">
                                <img alt="" src={breakingBad} />
                                <div className="film-name">Breaking Bad</div>
                            </a>
                        </div>
                        <div className="film">
                            <a href="/">
                                <img alt="" src={gameOfThrone} />
                                <div className="film-name">Game of Throne</div>
                            </a>
                        </div>
                        <div className="film">
                            <a href="/">
                                <img alt="" src={strangerThings} />
                                <div className="film-name">Stranger Things</div>
                            </a>
                        </div>
                        <div className="film">
                            <a href="/">
                                <img alt="" src={witcher} />
                                <div className="film-name">The Witcher</div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FilmsPage;