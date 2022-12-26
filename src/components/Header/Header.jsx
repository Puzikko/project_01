import React from 'react';
import { NavLink } from 'react-router-dom';
import featherImg from '../../images/feather.png';
import classHeader from './Header.module.css';

const Header = (props) => {

    return (
        <header className={classHeader.head}>
            <NavLink to={'/news'}>
                <img src={featherImg} />
            </NavLink>

            <div className={classHeader.title}>
                <h2>Feather - network</h2>
            </div>

            <div className={classHeader.login}>
                {props.authUserLogin ? props.authUserLogin : <NavLink to='/login/'>Login</NavLink>}
            </div>
        </header>
    )
}

export default Header;