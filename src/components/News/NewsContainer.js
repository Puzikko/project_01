import React from "react";
import { connect } from 'react-redux';
import { Navigate } from "react-router-dom";
import { nextPhoto, prevPhoto, getPhotosThunk, setImgSrc } from "../../redux/NewsReducer";
import Preloader from "../Preloader/Preloader";
import News from './News';

class NewsAPIComponent extends React.Component {

    componentDidMount() {
        this.props.getPhotosThunk(this.props.index)
    };

    render() {
        if (!this.props.isAuth) return <Navigate replace to='/login' />
        if (this.props.src) { this.props.setImgSrc(this.props.photos[this.props.index]?.img_src) }
        else { return <><Preloader /></> };
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <News src={this.props.src}
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
        src: state.newsPage.src,
        isAuth: state.auth.isAuth,
    }
};

const NewsContainer = connect(mapStateToProps, { nextPhoto, prevPhoto, getPhotosThunk, setImgSrc })
    (NewsAPIComponent);

export default NewsContainer;