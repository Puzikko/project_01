import React from 'react';
import classHeader from './Header.module.css';

const Header = (props) => {
    return (
        <header className={classHeader.head}>
            <img src='https://www.kindpng.com/picc/m/9-96703_collection-of-png-feather-icon-png-transparent-png.png'/>
            <div className={classHeader.title}>
                Feather-network
            </div>
        </header>
    )
}

export default Header;