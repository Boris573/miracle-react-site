import React from 'react';

import './news.css';

const NewsItem = ({newsImg, newsName, newsText}) => {
    return (
        <a href="/">
            <div className="section-info__content">
                <img src={newsImg} alt="" />
                <div className="news-content">
                    <div className="news-headline">{newsName}</div>
                    <div className="news-text">{newsText}</div>
                </div>
            </div>
        </a>
    );
}

export default NewsItem;