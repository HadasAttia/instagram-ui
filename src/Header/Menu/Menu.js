import React from 'react';
import { Link } from 'react-router-dom';
import './Menu.scss';

function Menu() {
    return (
        <div>
            <ul  className="navbar-nav">
                <li className="navbar-item">
                    <Link to="/post/create">Create post</Link>
                </li>
                <li>
                    <Link to="/search">
                        
                    </Link>
                </li>
            </ul>
        </div>
    );
}

export default Menu;
