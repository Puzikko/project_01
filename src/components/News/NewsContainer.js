import React from "react";
import { connect } from 'react-redux';
import { nextPhoto, prevPhoto, getPhotosThunk, setImgSrc } from "../../redux/NewsReducer";
import Preloader from "../common/Preloader/Preloader";
import News from './News';
import { WithAuthRedirect } from './../../hoc/withAuthRedirect';
import { compose } from 'redux';

class NewsAPIComponent extends React.Component {

    componentDidMount() {
        this.props.getPhotosThunk(this.props.index)
    };

    render() {
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
    }
};

const NewsContainer = compose(
    connect(mapStateToProps, { nextPhoto, prevPhoto, getPhotosThunk, setImgSrc }),
    WithAuthRedirect
)(NewsAPIComponent)

export default NewsContainer;