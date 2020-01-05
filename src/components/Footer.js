import React from 'react';
import '../stylesheets/Footer.scss';

function Footer() {
    return (
        <footer className="footer">
            <span> © Marina de la Fuente </span>
            <a
                className="github"
                href="https://github.com/marinadelafuente"
                // rel="noopener noreferrer"
                target="_blank">
                <i className="fas fa-link"></i>
            </a>
        </footer >
    );
}


export default Footer;