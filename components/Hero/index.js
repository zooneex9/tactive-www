import React from "react";

function Hero () {
    return (
        <>
        <section class="main-banner overlay">
                <div class="container">
                    <div class="main-banner-content">
                        <div class="social-links">
                            <ul>
                                <li><a href="#" title=""><i class="fab fa-linkedin"></i></a></li>
                                <li><a href="#" title=""><i class="fab fa-twitter"></i></a></li>
                                <li><a href="#" title=""><i class="fab fa-facebook-f"></i></a></li>
                            </ul>
                        </div>
                        <div class="banner-text">
                            <h2>Simple solution <br /> to complex <br /> questions</h2>
                            <a href="contact.html" title="">Receive consultation</a>
                            <ul class="counter-row">
                                <li>
                                    <h2><span class="count">21</span>/%</h2>
                                    <span>charges dropped</span>
                                </li>
                                <li>
                                    <h2><span class="count">82</span>%</h2>
                                    <span>countersuit filed</span>
                                </li>
                                <li>
                                    <h2><span class="count">57</span>%</h2>
                                    <span>cases dismissed</span>
                                </li>
                                <li>
                                    <h2><span class="count">77</span>%</h2>
                                    <span>cases won</span>
                                </li>
                            </ul>
                        </div>
                        <div class="banner-img wow fadeInUp" data-wow-duration="1000ms">
                            <img src="https://via.placeholder.com/618x820" alt="" class="w-100" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero;