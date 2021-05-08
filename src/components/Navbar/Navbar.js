import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if (window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <NavLink to='/' className='navbar-logo' onClick={closeMobileMenu}>
                        Jacek Maciejak
            <i className="fas fa-tools"></i>
                    </NavLink>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <NavLink to='/o-nas' className='nav-links' onClick={closeMobileMenu}
                                activeClassName='link-active'>
                                O nas
              </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink
                                to='/uslugi'
                                className='nav-links'
                                onClick={closeMobileMenu}
                                activeClassName='link-active'
                            >
                                Usługi
              </NavLink>
                        </li>
                        <li className='nav-item'>
                            <NavLink
                                to='/nasze-realizacje'
                                className='nav-links'
                                onClick={closeMobileMenu}
                                activeClassName='link-active'
                            >
                                Nasz realizacje
              </NavLink>
                        </li>
                        <li className='nav-item'>                            <NavLink
                            to='/kontakt'
                            className='nav-links'
                            onClick={closeMobileMenu}
                            activeClassName='link-active'
                        >
                            Kontakt
              </NavLink></li>

                        <li>
                            {/* <NavLink
                                to='/sign-up'
                                className='nav-links-mobile'
                                onClick={closeMobileMenu}
                                activeClassName='link-active'
                            >
                                Sign Up
              </NavLink> */}

                        </li>
                    </ul>
                    {/* {button} */}
                </div>
            </nav>
        </>
    );
}

export default Navbar;
