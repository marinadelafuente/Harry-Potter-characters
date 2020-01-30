import React from 'react';
import '../stylesheets/Header.scss';
import logo from '../images/logo.png';
import snitch from '../images/golden_snitch.png';
import { Link } from 'react-router-dom';

function Header() {

    return (
        <header className="header">
            <div className="img-container">
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
            </div>
            <h1 className="title">Professors at Hogwarts</h1>
        </header>
    );
}


export default Header;