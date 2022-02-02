import React from 'react';

function OurNews () {
    return (
        <>
            <section class="block">
                <div class="container">
                    <div class="section-title d-flex flex-wrap align-items-end">
                        <h2 class="h-title dark-clr mw-40">Our news</h2>
                        <p class="text-right"><a href="blog.html" title="" class="btn-default">Read more news</a></p>
                    </div>
                    <div class="blog-posts">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="blog-post-lg overlay wow slideInLeft" data-wow-duration="1000ms">
                                    <img src="https://via.placeholder.com/444x573" alt="" class="w-100" />
                                    <div class="figcaption">
                                        <h4>Business</h4>
                                        <h2><a href="blog-single.html" title="">How to file for bankruptcy of your company</a></h2>
                                        <span>15 Jule 2019</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="blog-post">
                                    <div class="blog-thumbnail">
                                        <img src="https://via.placeholder.com/444x287" alt="" class="w-100" />
                                    </div>
                                    <div class="blog-info">
                                        <h4>Family relation</h4>
                                        <h2><a href="blog-single.html" title="">How to get a divorce without violating each other's rights</a></h2>
                                        <span>23 October 2019</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="blog-post">
                                    <div class="blog-thumbnail">
                                        <img src="https://via.placeholder.com/444x287" alt="" class="w-100" />
                                    </div>
                                    <div class="blog-info">
                                        <h4>Business</h4>
                                        <h2><a href="blog-single.html" title="">How to survive a business pandemic. Recommendations</a></h2>
                                        <span>18 April 2019</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
export default OurNews;