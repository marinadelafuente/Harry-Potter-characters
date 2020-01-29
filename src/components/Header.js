import React from 'react';
import '../stylesheets/Header.scss';
import logo from '../images/logo.png';
import snitch from '../images/golden_snitch.png';
import { Link } from 'react-router-dom';

function Header() {

    return (
        <header className="header">
            <Link to={'/'}>
                <img
                    className="title-logo"
                    src={logo}
                    alt="Harry Potter logo"
                />
            </Link>
            <img
                className="snitch"
                src={snitch}
                alt="Harry Potter snitch"
            />
        </header>
    );
}


export default Header;