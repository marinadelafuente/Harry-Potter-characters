import React from 'react';
import '../stylesheets/Header.scss';
import logo from '../images/logo.png';
import snitch from '../images/golden_snitch.png';

function Header() {

    return (
        <header className="header">
            <img
                className="title-logo"
                src={logo}
                alt="Harry Potter logo"
            />
            <img
                className="snitch"
                src={snitch}
                alt="Harry Potter snitch"
            />
        </header>
    );
}


export default Header;