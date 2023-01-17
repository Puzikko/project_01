import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { authMeThunk, logOutThunk } from '../../redux/AuthReducer';

class HeaderContainerWithId extends React.Component {

    componentDidMount() {
        this.props.authMeThunk()
    }

    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => {
    return {
        authUserLogin: state.auth.login,
        isAuth: state.auth.isAuth,
    }
};

const HeaderContainer = connect(mapStateToProps, { authMeThunk, logOutThunk })(HeaderContainerWithId);

export default HeaderContainer;