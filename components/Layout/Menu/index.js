import React from 'react';
import PropTypes from 'prop-types';

function Menu () {
    return (
        <>
        <div class="burger-menu">
                <a href="#" title="" class="close-menu">
                    <i class="flaticon-close"></i>
                </a>
                <div class="menu-middle">
                    <div class="container">
                        <div class="main-menu">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="menu-widget">
                                        <h4>SOCIAL MEDIA</h4>
                                        <ul>
                                            <li><a href="#" title="">Twitter</a></li>
                                            <li><a href="#" title="">Linkedin</a></li>
                                            <li><a href="#" title="">Instagram</a></li>
                                            <li><a href="#" title="">Facebook</a></li>
                                            <li><a href="#" title="">Telegram</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="menu-widget">
                                        <h4>COMPANY</h4>
                                        <ul>
                                            <li><a href="about.html" title="">About Us</a></li>
                                            <li><a href="team.html" title="">Our Team</a></li>
                                            <li><a href="prices.html" title="">Prices</a></li>
                                            <li><a href="contact.html" title="">Contact</a></li>
                                            <li><a href="blog.html" title="">News</a></li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="menu-widget">
                                        <h4>Services</h4>
                                        <ul>
                                            <li><a href="services.html" title="">Judicial protection</a></li>
                                            <li><a href="services.html" title="">Lawyer consulting</a></li>
                                            <li><a href="services.html" title="">Debt collection</a></li>
                                            <li><a href="services.html" title="">Protection of rights</a></li>
                                            <li><a href="services.html" title="">Real estate lawyer</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="menu-footer">
                    <div class="container">
                        <div class="row align-items-center">
                            <div class="col-md-4">
                                <div class="menu-footer-logo">
                                    <img src="images/logo.png" alt="" />
                                </div>
                            </div>
                            <div class="col-md-8">
                                <ul class="contact-menu-links">
                                    <li>
                                        <p>340 Woodland Dr. <br /> Southaven, MS 38671</p>
                                    </li>
                                    <li><span>+44 62 7146 9812</span></li>
                                    <li><a href="example@exmaple.com" title="">info@zeus.com</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </>
    );
}

export default Menu;