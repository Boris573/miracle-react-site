import React from 'react';

import NewsItem from './news-item';

import './news.css';
import news1 from '../../assets/posters/news.jpg';
import news2 from '../../assets/posters/boris.jpg';
import news3 from '../../assets/img/news3.jpg';

const News = () => {
    return (
        <div className="news-wrapper">
            <NewsItem 
                newsImg={news1}
                newsName="Trailer release data is set for August 17"
                newsText='The creators of the film "Boris" announced that trailer for the film should be released on 17 August. 17 August is the birthday of Boris himself.' />

            <NewsItem 
                newsImg={news2}
                newsName='Chepicov Boris announced "Boris 2"'
                newsText='The president of the Miracle studio, Boris, announced new film with name "Boris 2". There is no details about the movie.' />

            <NewsItem 
                newsImg={news3}
                newsName='Mads Mikkelsen officially replaces Johnny Depp'
                newsText='Film Studio Warner Bros. has officially confirmed that Mads Mikkelsen will replace Johnny Depp in Fantastic Beasts and Where to Find Them 3. This is reported by The Wrap.' />

        </div>
    )
}

export default News;