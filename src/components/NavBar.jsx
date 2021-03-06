import React from 'react';
import { Link } from "gatsby"

import '../styles/NavBar.scss';

const NavBar = () => {
    return <div className="nav-bar">
        <Link to="/wedding/">THE WEDDING</Link>
        <Link to="/hotels/">HOTELS</Link>
        <Link to="/registry/">REGISTRY</Link>
        <div>RSVP</div>
        <div>CONTACT US</div>
    </div>
}

export default NavBar;