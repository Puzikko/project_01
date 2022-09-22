import React from 'react';
import classNavbar from '../modules/Navbar.module.css';

const Navbar = () => {
  return (
    <nav className={classNavbar.nav}>
      <div className={classNavbar.link}>
        <a>Profile</a>
      </div>
      <div className={classNavbar.link}>
        <a>Messages</a>
      </div>
      <div className={classNavbar.link}>
        <a href='#s'>News</a>
      </div>
      <div className={classNavbar.link}>
        <a href='#s'>Music</a>
      </div>
      <div className={classNavbar.link}>
        <a href='#s'>Settings</a>
      </div>
    </nav>
  )
}

export default Navbar;