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
                <div className='navbar__container'>
                    <NavLink to='/' className='navbar__container__logo' onClick={closeMobileMenu}>
                        Zioła
            <i className="fab fa-pagelines"></i>
                    </NavLink>
                    <div className='menu__icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'navbar__menu active' : 'navbar__menu'}>
                        <li className='navbar__item'>
                            <NavLink to='/o-nas' className='navbar__links' onClick={closeMobileMenu}
                                activeClassName='link__active'>
                                O nas
              </NavLink>
                        </li>
                        <li className='navbar__item'>
                            <NavLink
                                to='/uslugi'
                                className='navbar__links'
                                onClick={closeMobileMenu}
                                activeClassName='link__active'
                            >
                                Usługi
              </NavLink>
                        </li>
                        <li className='navbar__item'>
                            <NavLink
                                to='/nasze-realizacje'
                                className='navbar__links'
                                onClick={closeMobileMenu}
                                activeClassName='link__active'
                            >
                                Nasz realizacje
              </NavLink>
                        </li>
                        <li className='navbar__item'>                            <NavLink
                            to='/kontakt'
                            className='navbar__links'
                            onClick={closeMobileMenu}
                            activeClassName='link__active'
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
