import React from 'react';
import classNews from './News.module.css';

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