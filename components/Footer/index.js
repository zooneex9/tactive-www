import React from 'react';

function Footer () {
    return (
        <>
            <footer>
                <div class="container">
                    <div class="top-footer">
                        <div class="row">
                            <div class="col-md-4 col-sm-6">
                                <div class="widget widget-about">
                                    <img src="images/logo.png" alt="" />
                                    <p>340 Woodland Dr. <br /> Southaven, MS 38671</p>
                                    <ul>
                                        <li><span>+44 62 7146 9812</span></li>
                                        <li><a href="mailto:example@example.com" title="">info@zeus.com</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-2 col-sm-6">
                                <div class="widget widget-links">
                                    <h4 class="widget-title">SOCIAL MEDIA</h4>
                                    <ul>
                                        <li><a href="#" title="">Twitter</a></li>
                                        <li><a href="#" title="">Linkedin</a></li>
                                        <li><a href="#" title="">Instagram</a></li>
                                        <li><a href="#" title="">Facebook</a></li>
                                        <li><a href="#" title="">Telegram</a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-2 col-sm-6">
                                <div class="widget widget-links">
                                    <h4 class="widget-title">COMPANY</h4>
                                    <ul>
                                        <li><a href="about.html" title="">About Us</a></li>
                                        <li><a href="team.html" title="">Our team</a></li>
                                        <li><a href="prices.html" title="">Prices</a></li>
                                        <li><a href="contact.html" title="">Contact</a></li>
                                        <li><a href="blog.html" title="">News </a></li>
                                    </ul>
                                </div>
                            </div>
                            <div class="col-md-3 col-sm-6">
                                <div class="widget widget-links">
                                    <h4 class="widget-title">SERVISES</h4>
                                    <ul>
                                        <li><a href="service-details.html" title="">Judicial protection</a></li>
                                        <li><a href="service-details.html" title="">Lawyer consulting</a></li>
                                        <li><a href="service-details.html" title="">Debt collection</a></li>
                                        <li><a href="service-details.html" title="">Protection of rights</a></li>
                                        <li><a href="service-details.html" title="">Real estate lawyer</a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="bottom-strip">
                        <ul class="bt-links">
                            <li><a href="#" title="">Privacy Policy</a></li>
                            <li><a href="#" title="">Terms and Conditions</a></li>
                        </ul>
                    </div>
                </div>
            </footer>
        </>
    )
}
export default Footer;