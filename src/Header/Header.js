import React from 'react';
import './Header.scss';
import HeaderAvatar from './HeaderAvatar/HeaderAvatar';
import Menu from './Menu/Menu';

function Header() {
    return (
        <header className="Header">
            <h1>Instagram</h1>

            <Menu />

            <HeaderAvatar />
        </header>
    );
}

export default Header;
