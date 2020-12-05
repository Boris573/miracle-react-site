import React from 'react';

import News from '../news/news';
import './pages.css';

const MainPage = () => {
    return (
        <div className="tab-item">
                <div id="news" className="section">
                    <div className="section-name">
                        <h2 className="headline"><b>News</b></h2>
                    </div>
                    <div className="section-info">
                        <News />
                    </div>
                </div>

                <div id="trailers" className="section">
                    <div className="section-name">
                        <h2 className="headline"><b>Trailers</b></h2>
                    </div>
                    <div className="section-info center trailers">
                        <div className="video">
                            <div className="powr-video-slider" id="1420835f_1607002609"></div>  
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default MainPage;