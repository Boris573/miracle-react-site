import React from 'react';

import './photos.css';
import './pages.css';

// Photos

import ironManArt from '../../assets/img/iron-man-art.jpg';
import batmanArt from '../../assets/img/batman-art.jpg';
import superman1 from '../../assets/img/superman-art.jpg';
import superman2 from '../../assets/img/superman2-art.jpg';

const PhotoPage = () => {
    return (
        <div className="tab-item">
            <div id="photos" className="section">
                <div className="section-name">
                    <h2 className="headline"><b>Photos</b></h2>
                </div>
                <div className="section-info center">
                    <div className="post">
                        <img alt="" className="post-photo" src={ironManArt} />
                        <div className="info">
                            <div className="descr">
                                Iron Man drawn by our subscriber. <p>You also can send us your drawing by mail</p>
                            </div>
                        </div>
                    </div>

                    <div className="post">
                        <img alt="" className="post-photo" src={batmanArt} />
                        <div className="info">
                            <div className="descr">
                                Batman from our subscriber. <p>You also can send us your drawing by mail</p>
                            </div>
                        </div>
                    </div>

                    <div className="post">
                        <img alt="" className="post-photo" src={superman1} />
                        <div className="info">
                            <div className="descr">
                                Another drawing from our subscriber. Now it is superman. <p>You also can send us your drawing by mail</p>
                            </div>
                        </div>
                    </div>

                    <div className="post">
                        <img alt="" className="post-photo" src={superman2} />
                        <div className="info">
                            <div className="descr">
                                Awesome drawing that one of you send. <p>You also can send us your drawing by mail</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PhotoPage;