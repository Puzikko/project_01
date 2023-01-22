import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logOutThunk } from '../../redux/AuthReducer';

class HeaderContainerWithId extends React.Component {

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

const HeaderContainer = connect(mapStateToProps, { logOutThunk })(HeaderContainerWithId);

export default HeaderContainer;