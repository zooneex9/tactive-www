import React from 'react';

function ReceiveConsultation () {
    return (
        <>
            <section class="block overlay">
                <div class="fixed-bg bg2"></div>
                <div class="container">
                    <div class="section-title">
                        <h2 class="h-title mw-100">Receive consultation</h2>
                        <span>We will call you back within 15 minutes</span>
                    </div>
                    <div class="consulation-form">
                        <form class="wow fadeInUp" data-wow-duration="1000ms">
                            <div class="row">
                                <div class="col-lg-5 col-md-5 col-sm-12">
                                    <div class="form-group">
                                        <input type="text" name="name" class="form-control" placeholder="Your name" />
                                    </div>
                                </div>
                                <div class="col-lg-5 col-md-5 col-sm-12">
                                    <div class="form-group">
                                        <input type="number" name="phone" class="form-control" placeholder="Phone*" />
                                    </div>
                                </div>
                                <div class="col-lg-2 col-md-2 col-sm-12">
                                    <button type="submit" class="submit">Send</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </section>
        </> 
    )
}
export default ReceiveConsultation;