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
                        <img width="600px" height="350px" alt="" className="post-photo" src={ironManArt} />
                        <div className="info">
                            <div className="descr">
                                Iron Man drawn by our subscriber. <p>You also can send us your drawing by mail</p>
                            </div>

                            {/* <div class="commands">
                                <div class="statistic">
                                    <img class="like" src="../assets/icons/like.svg">
                                    <div class="likes-count">
                                        7,404
                                    </div>
                                </div>
                                <div class="statistic">
                                    <img class="comment" src="../assets/icons/comment.svg">
                                    25,3 M
                                </div>
                                <div class="statistic">
                                    <img class="share" src="../assets/icons/share.svg">
                                    4,553
                                </div>
                            </div>

                            <div class="comments">
                                <div class="comm">
                                    <div class="nik">Boris573</div>
                                    <div class="comm-text">It's awesome</div>
                                </div>
                                <div class="comm">
                                    <div class="nik">Mad_Max123</div>
                                    <div class="comm-text">I like it</div>
                                </div>
                                <div class="comm">
                                    <div class="nik">Agrak</div>
                                    <div class="comm-text">It really beautiful</div>
                                </div>
                            </div> */}
                        </div>
                    </div>

                    <div className="post">
                        <img width="500px" height="500px" alt="" className="post-photo" src={batmanArt} />
                        <div className="info">
                            <div className="descr">
                                Batman from our subscriber. <p>You also can send us your drawing by mail</p>
                            </div>
                        </div>
                    </div>

                    <div className="post">
                        <img width="500px" height="500px" alt="" className="post-photo" src={superman1} />
                        <div className="info">
                            <div className="descr">
                                Another drawing from our subscriber. Now it is superman. <p>You also can send us your drawing by mail</p>
                            </div>
                        </div>
                    </div>

                    <div className="post">
                        <img width="600px" height="350px" alt="" className="post-photo" src={superman2} />
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