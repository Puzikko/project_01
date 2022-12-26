import React from "react";
import { connect } from 'react-redux';
import { setToggleIsFetching, getPhotos, nextPhoto, prevPhoto, setImgSrc } from "../../redux/NewsReducer";
import Preloader from "../Preloader/Preloader";
import { newsAPI } from '../../api/api_NASA';
import News from './News';

class NewsAPIComponent extends React.Component {

    componentDidMount() {
        this.props.setToggleIsFetching(true);
        newsAPI.getPhotos()
            .then(data => {
                this.props.getPhotos(data.photos);
                this.props.setImgSrc(data.photos[this.props.index].img_src)
                this.props.setToggleIsFetching(false);
            })
    };



    render() {
        this.props.setImgSrc(this.props.photos[this.props.index]?.img_src)
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <News isFetching={this.props.isFetching}
                src={this.props.src}
                index={this.props.index}
                nextPhoto={this.props.nextPhoto}
                prevPhoto={this.props.prevPhoto} />
        </>
    }
};

const mapStateToProps = (state) => {

    return {
        isFetching: state.newsPage.isFetching,
        photos: state.newsPage.photos,
        index: state.newsPage.index,
        src: state.newsPage.src
    }
};

const NewsContainer = connect(mapStateToProps, { setToggleIsFetching, getPhotos, nextPhoto, prevPhoto, setImgSrc })
    (NewsAPIComponent);

export default NewsContainer;