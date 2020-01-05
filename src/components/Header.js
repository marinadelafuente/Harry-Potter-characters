import React from 'react';
import '../stylesheets/Header.scss';
import logo from '../images/logo.png';

function Header() {
    return (
        <header className="header">
            <img
                className="title-logo"
                src={logo}
                alt="Harry Potter logo"
            />
        </header>
    );
}


export default Header;