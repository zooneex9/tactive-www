import React from 'react';
import PropTypes from 'prop-types';
import Menu from '../Menu';

function NavBar() {
    return (
        <>
        <header>
                <div class="container">
                    <div class="header-content d-flex flex-wrap align-items-center">
                        <div class="menu-btn">
                            <a href="#" title="">
                                <span class="bar1"></span>
                                <span class="bar2"></span>
                                <span class="bar3"></span>
                            </a>
                        </div>
                        <div class="logo">
                            <a href="index.html" title="">
                                <img src="images/logo.png" alt="" />
                            </a>
                        </div>
                        <nav>
                            <ul>
                                <li><a class="active" href="index.html" title="">Home</a></li>
                                <li><a href="about.html" title="">About Us</a></li>
                                <li><a href="services.html" title="">Services</a></li>
                                <li><a href="blog.html" title="">News</a></li>
                                <li><a href="contact.html" title="">Contact</a></li>
                            </ul>
                        </nav>
                        <ul class="contact-head-info ml-auto">
                            <li>
                                <img src="images/phone.svg" alt="" />
                                <span>+44 62 7146 9812</span>
                            </li>
                            <li>
                                <img src="images/mail.svg" alt="" />
                                <a href="mailto:example@example.com" title="">info@zeus.com</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            <Menu/>
    </>
    );
}


NavBar.PropTypes = {
    user: PropTypes.objectOf(PropTypes.any)
}

NavBar.defaultProps = {
    user: {
        id: 1,
        name: 'Jona',
        last_name: 'Orozco'
    }
}


export default NavBar;