import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { logInThunk } from '../../redux/AuthReducer';

class HeaderContainerWithId extends React.Component {

    componentDidMount() {
        this.props.logInThunk()
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

const HeaderContainer = connect(mapStateToProps, { logInThunk })(HeaderContainerWithId);

export default HeaderContainer;