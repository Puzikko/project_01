import React from 'react';
import classNews from './News.module.css';

//'API-KEY' = 'l5gKg3XfmKqUEZb1BlBWkLU64hnMWPY2d6xxcenD'

const News = (props) => {
    return (
        <div className={classNews.wrapper}>
            <div>
                <button onClick={props.prevPhoto}>Previous</button>
                <button onClick={props.nextPhoto}>Next</button>
            </div>
            <img src={`${props.src}`} />
        </div>
    );
}



export default News