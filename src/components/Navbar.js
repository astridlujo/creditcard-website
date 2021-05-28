import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { MdFingerprint } from 'react-icons/md'
import { FaBars, FaTimes } from 'react-icons/fa';
import { IconContext } from 'react-icons/lib';
import { Button } from './Button';

import './Navbar.css';

const Navbar = () => {

    const [ click, setClick ] = useState(false)
    const [ button, setButton ] = useState(true);

    const clickHandler = () => setClick(!click)
    const closeMobileMenu = () => setClick(false);

    useEffect(() => {
        showButton();
    }, [])
    
    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        }
        else {
            setButton(true);
        }
    }

    window.addEventListener('resize', showButton);

    return (
        <IconContext.Provider value={{ color: '#FFF' }} >
            <div className="navbar" >
                <div className="navbar-container container" >
                    <Link to="/" className="navbar-logo" onClick={closeMobileMenu} >
                        <MdFingerprint className="navbar-icon" />
                        SPEND
                    </Link>

                    <div className="menu-icon" onClick={clickHandler} >
                        {click ? <FaTimes /> : <FaBars />}
                    </div>

                    <div>
                        <ul className={ click ? 'nav-menu active' : 'nav-menu' } >
                            <li className="nav-item">
                                <Link to="/" className="nav-links" onClick={closeMobileMenu} >
                                    Home
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/services" className="nav-links" onClick={closeMobileMenu} >
                                    Services
                                </Link>
                            </li>

                            <li className="nav-item">
                                <Link to="/products" className="nav-links" onClick={closeMobileMenu} >
                                    Products
                                </Link>
                            </li>

                            <li className="nav-btn">
                                {button ? (
                                    <Link to="/sign-up" className="btn-link" >
                                        <Button buttonStyle="btn--outline">Sign Up</Button>
                                    </Link>
                                ) : (
                                    <Link to="/sign-up" className="btn-link" onClick={closeMobileMenu} >
                                        <Button buttonStyle="btn--outline" buttonSize="btn--mobile">Sign Up</Button>
                                    </Link>
                                )}
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </IconContext.Provider>
    );
};

export default Navbar;