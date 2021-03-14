import React from 'react';
import './Header.scss';
import HeaderAvatar from './HeaderAvatar/HeaderAvatar';
import Menu from './Menu/Menu';

function Header() {
    return (
        <header className="Header">
            <nav className="navbar navbar-dark bg-dark">
                <div className="container justify-content-start">
                    <a className="navbar-brand d-none d-md-block" href="/">Instagram</a>
                    <Menu />
                    <div className="nav ml-auto">
                        <HeaderAvatar />
                    </div>
                </div>
            </nav>
           
        </header>
    );
}

export default Header;
