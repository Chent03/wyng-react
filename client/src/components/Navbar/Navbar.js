import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';

const Navbar = ({ isLoggedIn }) => {
    return (
        <nav className="navbar">
            <div className="navbar-brand">
                <Link className="navbar-item" to="/">
                    <h1 className="wyng">WYNG</h1>
                </Link>
            </div>
            <div className="navbar-end login">
                <div className="navbar-item">
                    <div className="buttons">
                        {
                            isLoggedIn ? 
                            <a 
                                className="button is-primary" 
                                href="/api/logout">
                                Log out
                            </a> : 
                            <a 
                                className="button is-primary" 
                                href="/auth/google">
                                Log in
                            </a>
                        }
                        
                    </div>
                </div>
            </div>
  
        </nav>
    )
}

export default Navbar;