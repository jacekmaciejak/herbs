import React from 'react';
import './Footer.scss';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

function Footer() {
    return (
        <div className='footer__container'>
            <section className='footer__subscription'>
                <p className='footer__subscription__heading'>
                    Zapraszamy do zapisania się do newslettera
        </p>
                <p className='footer__subscription__text'>
                    Możesz wypisać się w każdej chwili
        </p>
                <div className='footer__subscription__area'>
                    <form className='footer__subscription__area__form'>
                        <input
                            className='footer__input'
                            name='email'
                            type='email'
                            placeholder='Your Email'
                        />
                        <Button buttonStyle='btn--outline'>Subskrybuj</Button>
                    </form>
                </div>
            </section>
            <section className='footer__links'>
                <div className='footer__links__items'>
                    <h2>O nas</h2>
                    <Link to='/kontakt'>Jak działamy?</Link>
                    <Link to='/kontakt'>Referencje</Link>
                    <Link to='/kontakt'>Kariera</Link>
                    <Link to='/kontakt'>Dla inwestora</Link>
                </div>
                <div className='footer__links__items'>
                    <h2>Media</h2>
                    <Link to='/'>Instagram</Link>
                    <Link to='/'>Facebook</Link>
                    <Link to='/'>Youtube</Link>
                    <Link to='/'>Twitter</Link>
                </div>
                <div className='footer__links__icons'>
                    <Link
                        className='social__icon__link facebook'
                        to='/'
                        target='_blank'
                        aria-label='Facebook'
                    >
                        <i className='fab fa-facebook-f' />
                    </Link>
                    <Link
                        className='social__icon__link instagram'
                        to='/'
                        target='_blank'
                        aria-label='Instagram'
                    >
                        <i className='fab fa-instagram' />
                    </Link>
                    <Link
                        className='social__icon__link youtube'
                        to='/'
                        target='_blank'
                        aria-label='Youtube'
                    >
                        <i className='fab fa-youtube' />
                    </Link>
                    <Link
                        className='social__icon__link twitter'
                        to='/'
                        target='_blank'
                        aria-label='Twitter'
                    >
                        <i className='fab fa-twitter' />
                    </Link>
                    <Link
                        className='social__icon__link twitter'
                        to='/'
                        target='_blank'
                        aria-label='LinkedIn'
                    >
                        <i className='fab fa-linkedin' />
                    </Link>
                </div>
                <div className='footer__links__items'>
                    <h2>Videos</h2>
                    <Link to='/'>Submit Video</Link>
                    <Link to='/'>Ambassadors</Link>
                    <Link to='/'>Agency</Link>
                    <Link to='/'>Influencer</Link>
                </div>
                <div className='footer__links__items'>
                    <h2>Kontakt</h2>
                    <Link to='/'>Kontakt</Link>
                    <Link to='/'>Wsparcie</Link>
                    <Link to='/'>Nasza misja</Link>
                    <Link to='/'>Dla inwestorów</Link>
                </div>

            </section>
            {/* <section class='social__media'>
                <div class='social__media__wrap'>
                    <div class='footer-logo'>
                        <Link to='/' className='social-logo'>

                            Jacek Maciejak
                            <i class="fas fa-tools"></i>
                        </Link>
                    </div>

                </div>
            </section> */}
        </div>
    );
}

export default Footer;
