import React from 'react'
import { Link } from 'react-router-dom';


function NavBar() {
    return (
        <nav>
            <li><Link to='/'>Movies</Link></li>
            <li><Link to='/about'>About Me</Link></li>
        </nav>
    )
}

export default NavBar