import React, { Component } from 'react';

import News from '../../news/news';
import '../pages.css';
import './main.css';

import left from '../../../assets/icons/left.svg';
import right from '../../../assets/icons/right.svg';


export default class MainPage extends Component {

    state = {
        videoNumber: 0,
    }

    videos = [
        'https://www.youtube.com/embed/sj9J2ecsSpo',
        'https://www.youtube.com/embed/g59rUQbVlIw',
        'https://www.youtube.com/embed/XW2E2Fnh52w'
    ]

    nextVideo = (direction) => {
        this.setState(() => {
            let newNumber = this.state.videoNumber;
            if (direction === -1) {
                if (newNumber === 0) {
                    newNumber = this.videos.length - 1;
                } else {
                    newNumber--;
                }
            } else if (direction === 1) {
                if (newNumber === this.videos.length - 1) {
                    newNumber = 0;
                } else {
                    newNumber++;
                }
            }
            
            return {
                videoNumber: newNumber
            }
        });
    }

    render() {


        const {videoNumber} = this.state;
        const video = <iframe width="700" height="400" title="1" src={this.videos[videoNumber]} frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
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
                    <div className="arrows">
                        <img 
                            className="left clarity" 
                            alt="" 
                            onClick={()=> this.nextVideo(-1)}
                            src={left}/>
                        <img 
                            className="right clarity" 
                            alt="" 
                            onClick={()=> this.nextVideo(1)}
                            src={right}/>
                    </div>
                    <div className="section-info center trailers">
                        {video}                    
                    </div>
                </div>
            </div>
        )
    }
}