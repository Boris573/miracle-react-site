import React from 'react';

import NewsItem from './news-item';

import './news.css';

import {getAllNews} from '../../services/news-service';

const News = () => {
    const newz = getAllNews().map(item => {
        return (
            <NewsItem 
                key={item.id}
                newsImg={item.url}
                newsName={item.newsName}
                newsText={item.newsText} />
        )
    })
    return (
        <div className="news-wrapper">
            {newz}
        </div>
    )
}

export default News;