import React from 'react';

import './photos.css';
import '../pages.css';

import {getAllPhotos} from '../../../services/photos-service';


const PhotoPage = () => {

    const photoz = getAllPhotos().map((item) => {

        const {id, url, description} = item;

        return (
            <div className="post" key={id}>
                <img alt="" className="post-photo" src={url} />
                <div className="info">
                    <div className="descr">
                        {description} <p>You also can send us your drawing by mail</p>
                    </div>
                </div>
            </div>
        )
    })

    return (
        <div className="tab-item">
            <div id="photos" className="section">
                <div className="section-name">
                    <h2 className="headline"><b>Photos</b></h2>
                </div>
                <div className="section-info center">
                    {photoz}
                </div>
            </div>
        </div>
    )
}

export default PhotoPage;