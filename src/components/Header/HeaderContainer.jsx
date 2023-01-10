import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { authMeThunk } from '../../redux/AuthReducer';

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
    }
};

const HeaderContainer = connect(mapStateToProps, { authMeThunk })(HeaderContainerWithId);

export default HeaderContainer;