import React from 'react';
import classHeader from './Header.module.css';

const Header = (props) => {
    return (
        <header className={classHeader.head}>
            <img src='https://phonoteka.org/uploads/posts/2021-09/thumbs/1631647327_30-phonoteka-org-p-kartinka-pero-i-chernilnitsa-prozrachnii-f-32.png'/>
            <div className={classHeader.title}>
                <h2>Feather - network</h2>
            </div>
        </header>
    )
}

export default Header;