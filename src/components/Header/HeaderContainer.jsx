import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setIsAuth } from '../../redux/AuthReducer';
import { authAPI } from '../../api/api';

class HeaderContainerWithId extends React.Component {

    componentDidMount() {
        authAPI.authMe()
            .then(data => {

                if (data.resultCode === 0) {
                    this.props.setIsAuth(data.data)
                }
            })
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

const HeaderContainer = connect(mapStateToProps, { setIsAuth })(HeaderContainerWithId);

export default HeaderContainer;