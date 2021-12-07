import React from 'react';
import c from './header.module.css'

const Header = () => {
    return (
        <header className={c.header}>
            <div>MOVIES</div>
            <div>Repo</div>
        </header>
    );
};

export default Header;