import React from 'react';

import './news.css';

const NewsItem = ({newsImg, newsName, newsText}) => {
    return (
        <div className="news-item">
            <img src={newsImg} alt="" />
            <div className="news-content">
                <div className="news-headline">{newsName}</div>
                <div className="news-text">{newsText}</div>
            </div>
        </div>
    );
}

export default NewsItem;