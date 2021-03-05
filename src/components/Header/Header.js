// type rsc then press Enter
import React from 'react';
// logo ke import kora
import logo from '../../images/logo.png';
// header.css file ke import kora
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <img src={logo} alt="" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/manage">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default Header;