import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { setIsAuth } from '../../redux/AuthReducer';
import axios from 'axios';

class HeaderContainerWithId extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
            withCredentials: true
        })
            .then(response => {

                if (response.data.resultCode === 0) {
                    this.props.setIsAuth(response.data.data)
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