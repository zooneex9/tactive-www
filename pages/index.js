import Error from "next/error";
import { useRouter } from "next/router";
import { getClient, usePreviewSubscription } from "../utils/sanity";
import ProductsPage from "../components/ProductsPage";
import NavBar from "../components/Layout/NavBar";
import Hero from "../components/Hero";
import AboutUs from "../components/AboutUs";
import SectionDescription from "../components/SectionDescription";

const query = `//groq
  *[_type == "product" && defined(slug.current)]
`;

function IndexPage(props) {
  const { productsData, preview } = props;
  const router = useRouter();

  if (!router.isFallback && !productsData) {
    return <Error statusCode={404} />;
  }
  const { data: products } = usePreviewSubscription(query, {
    initialData: productsData,
    enabled: preview || router.query.preview !== null,
  });

  return (
          <>
            <NavBar/>
            <Hero/>
            <AboutUs/>
            <SectionDescription/>

            <section class="block">
                <div class="container">
                    <div class="section-title d-flex flex-wrap align-items-center">
                        <h2 class="h-title dark-clr">What can we help you with</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper metus mi, sit amet cursus ante viverra nec. Vivamus luctus, ipsum eget ornare convallis, urna justo rutrum diam, eget tempus lorem ipsum a magna.</p> 
                    </div>
                    <div class="posts">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="post">
                                    <div class="post-thumbnail">
                                        <img src="https://via.placeholder.com/444x344" alt="" class="w-100" />
                                    </div>
                                    <div class="post-info">
                                        <h4><a href="service-details.html" title="">Judicial protection</a></h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper metus mi, sit amet cursus ante viverra nec. Vivamus luctus, ipsum eget ornare convallis, urna at rutrum diam, eget tempus a magna fitam. Phasellus facilisis sapien eget suscipit lectus. </p>
                                        <a href="#" title="" class="btn-default">See more</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="post">
                                    <div class="post-thumbnail">
                                        <img src="https://via.placeholder.com/444x344" alt="" class="w-100" />
                                    </div>
                                    <div class="post-info">
                                        <h4><a href="service-details.html" title="">Lawyer consulting</a></h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper metus mi, sit amet cursus ante viverra nec. Vivamus luctus, ipsum eget ornare convallis, urna at rutrum diam, eget tempus a magna fitam. Phasellus facilisis sapien eget suscipit lectus. </p>
                                        <a href="#" title="" class="btn-default">See more</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="post">
                                    <div class="post-thumbnail">
                                        <img src="https://via.placeholder.com/444x344" alt="" class="w-100" />
                                    </div>
                                    <div class="post-info">
                                        <h4><a href="service-details.html" title="">Debt collection</a></h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper metus mi, sit amet cursus ante viverra nec. Vivamus luctus, ipsum eget ornare convallis, urna at rutrum diam, eget tempus a magna fitam. Phasellus facilisis sapien eget suscipit lectus. </p>
                                        <a href="#" title="" class="btn-default">See more</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="post">
                                    <div class="post-thumbnail">
                                        <img src="https://via.placeholder.com/444x344" alt="" class="w-100" />
                                    </div>
                                    <div class="post-info">
                                        <h4><a href="service-details.html" title="">Real estate lawyer</a></h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper metus mi, sit amet cursus ante viverra nec. Vivamus luctus, ipsum eget ornare convallis, urna at rutrum diam, eget tempus a magna fitam. Phasellus facilisis sapien eget suscipit lectus. </p>
                                        <a href="#" title="" class="btn-default">See more</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="post">
                                    <div class="post-thumbnail">
                                        <img src="https://via.placeholder.com/444x344" alt="" class="w-100" />
                                    </div>
                                    <div class="post-info">
                                        <h4><a href="service-details.html" title="">Protection of rights</a></h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper metus mi, sit amet cursus ante viverra nec. Vivamus luctus, ipsum eget ornare convallis, urna at rutrum diam, eget tempus a magna fitam. Phasellus facilisis sapien eget suscipit lectus. </p>
                                        <a href="#" title="" class="btn-default">See more</a>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="post">
                                    <div class="post-thumbnail">
                                        <img src="https://via.placeholder.com/444x344" alt="" class="w-100" />
                                    </div>
                                    <div class="post-info">
                                        <h4><a href="service-details.html" title="">Lawyer for family Affairs</a></h4>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper metus mi, sit amet cursus ante viverra nec. Vivamus luctus, ipsum eget ornare convallis, urna at rutrum diam, eget tempus a magna fitam. Phasellus facilisis sapien eget suscipit lectus. </p>
                                        <a href="#" title="" class="btn-default">See more</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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

            <section class="block">
                <div class="container">
                    <div class="section-title d-flex flex-wrap align-items-end">
                        <h2 class="h-title dark-clr mw-40">We have the best lawyers in the city</h2>
                        <p class="text-right"><a href="team.html" title="" class="btn-default">Learn more about our team</a></p>
                    </div>
                    <div class="team-section">
                        <div class="row">
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="team">
                                    <div class="team-thmb">
                                        <img src="https://via.placeholder.com/444x476" alt="" class="w-100" />
                                    </div>
                                    <div class="team-info">
                                        <h3><a href="team-details.html" title="">William Brown</a></h3>
                                        <span>Lawyer</span>
                                        <ul class="social-links">
                                            <li><a href="#" title=""><i class="fab fa-linkedin"></i></a></li>
                                            <li><a href="#" title=""><i class="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#" title=""><i class="fab fa-twitter"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="team">
                                    <div class="team-thmb">
                                        <img src="https://via.placeholder.com/444x476" alt="" class="w-100" />
                                    </div>
                                    <div class="team-info">
                                        <h3><a href="team-details.html" title="">Sofia Martinez</a></h3>
                                        <span>Lawyer</span>
                                        <ul class="social-links">
                                            <li><a href="#" title=""><i class="fab fa-linkedin"></i></a></li>
                                            <li><a href="#" title=""><i class="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#" title=""><i class="fab fa-twitter"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="team">
                                    <div class="team-thmb">
                                        <img src="https://via.placeholder.com/444x476" alt="" class="w-100" />
                                    </div>
                                    <div class="team-info">
                                        <h3><a href="team-details.html" title="">Anthony Harris</a></h3>
                                        <span>Lawyer</span>
                                        <ul class="social-links">
                                            <li><a href="#" title=""><i class="fab fa-linkedin"></i></a></li>
                                            <li><a href="#" title=""><i class="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#" title=""><i class="fab fa-twitter"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="team">
                                    <div class="team-thmb">
                                        <img src="https://via.placeholder.com/444x476" alt="" class="w-100" />
                                    </div>
                                    <div class="team-info">
                                        <h3><a href="team-details.html" title="">David Thompson</a></h3>
                                        <span>Lawyer</span>
                                        <ul class="social-links">
                                            <li><a href="#" title=""><i class="fab fa-linkedin"></i></a></li>
                                            <li><a href="#" title=""><i class="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#" title=""><i class="fab fa-twitter"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="team">
                                    <div class="team-thmb">
                                        <img src="https://via.placeholder.com/444x476" alt="" class="w-100" />
                                    </div>
                                    <div class="team-info">
                                        <h3><a href="team-details.html" title="">Kevin Johnson</a></h3>
                                        <span>Lawyer</span>
                                        <ul class="social-links">
                                            <li><a href="#" title=""><i class="fab fa-linkedin"></i></a></li>
                                            <li><a href="#" title=""><i class="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#" title=""><i class="fab fa-twitter"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-4 col-md-6 col-sm-6">
                                <div class="team">
                                    <div class="team-thmb">
                                        <img src="https://via.placeholder.com/444x476" alt="" class="w-100" />
                                    </div>
                                    <div class="team-info">
                                        <h3><a href="team-details.html" title="">Elizabeth Lewis</a></h3>
                                        <span>Lawyer</span>
                                        <ul class="social-links">
                                            <li><a href="#" title=""><i class="fab fa-linkedin"></i></a></li>
                                            <li><a href="#" title=""><i class="fab fa-facebook-f"></i></a></li>
                                            <li><a href="#" title=""><i class="fab fa-twitter"></i></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section class="block overlay">
                <div class="fixed-bg bg3"></div>
                <div class="container">
                    <div class="section-title">
                        <h2 class="h-title mw-40">Check out our customer reviews</h2>
                    </div>
                    <div class="testimonials">
                        <div class="row testi-carousel">
                            <div class="col-lg-6">
                                <div class="testimonial d-flex flex-wrap align-items-start">
                                    <div class="testi-thumb">
                                        <img src="https://via.placeholder.com/77x77" alt="" />
                                    </div>
                                    <div class="testi-info">
                                        <h3>David Thompson</h3>
                                        <span>Manager</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper metus mi, sit amet cursus ante viverra nec. Vivamus luctus, ipsum eget ornare for a convallis, urna justo rutrum diam, eget tempus lorem.</p>
                                        <span>18 June 2017</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="testimonial d-flex flex-wrap align-items-start">
                                    <div class="testi-thumb">
                                        <img src="https://via.placeholder.com/77x77" alt="" />
                                    </div>
                                    <div class="testi-info">
                                        <h3>Edward Backer</h3>
                                        <span>Manager</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper metus mi, sit amet cursus ante viverra nec. Vivamus luctus, ipsum eget ornare for a convallis, urna justo rutrum diam, eget tempus lorem.</p>
                                        <span>11 December 2018</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="testimonial d-flex flex-wrap align-items-start">
                                    <div class="testi-thumb">
                                        <img src="https://via.placeholder.com/77x77" alt="" />
                                    </div>
                                    <div class="testi-info">
                                        <h3>Grace Morgan</h3>
                                        <span>Manager</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper metus mi, sit amet cursus ante viverra nec. Vivamus luctus, ipsum eget ornare for a convallis, urna justo rutrum diam, eget tempus lorem.</p>
                                        <span>15 August 2019</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="testimonial d-flex flex-wrap align-items-start">
                                    <div class="testi-thumb">
                                        <img src="https://via.placeholder.com/77x77" alt="" />
                                    </div>
                                    <div class="testi-info">
                                        <h3>Vanessa Jones</h3>
                                        <span>Manager</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper metus mi, sit amet cursus ante viverra nec. Vivamus luctus, ipsum eget ornare for a convallis, urna justo rutrum diam, eget tempus lorem.</p>
                                        <span>24 February 2020</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="testimonial d-flex flex-wrap align-items-start">
                                    <div class="testi-thumb">
                                        <img src="https://via.placeholder.com/77x77" alt="" />
                                    </div>
                                    <div class="testi-info">
                                        <h3>David Thompson</h3>
                                        <span>Manager</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper metus mi, sit amet cursus ante viverra nec. Vivamus luctus, ipsum eget ornare for a convallis, urna justo rutrum diam, eget tempus lorem.</p>
                                        <span>18 June 2017</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="testimonial d-flex flex-wrap align-items-start">
                                    <div class="testi-thumb">
                                        <img src="https://via.placeholder.com/77x77" alt="" />
                                    </div>
                                    <div class="testi-info">
                                        <h3>Edward Backer</h3>
                                        <span>Manager</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper metus mi, sit amet cursus ante viverra nec. Vivamus luctus, ipsum eget ornare for a convallis, urna justo rutrum diam, eget tempus lorem.</p>
                                        <span>11 December 2018</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="testimonial d-flex flex-wrap align-items-start">
                                    <div class="testi-thumb">
                                        <img src="https://via.placeholder.com/77x77" alt="" />
                                    </div>
                                    <div class="testi-info">
                                        <h3>Grace Morgan</h3>
                                        <span>Manager</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper metus mi, sit amet cursus ante viverra nec. Vivamus luctus, ipsum eget ornare for a convallis, urna justo rutrum diam, eget tempus lorem.</p>
                                        <span>15 August 2019</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-lg-6">
                                <div class="testimonial d-flex flex-wrap align-items-start">
                                    <div class="testi-thumb">
                                        <img src="https://via.placeholder.com/77x77" alt="" />
                                    </div>
                                    <div class="testi-info">
                                        <h3>Vanessa Jones</h3>
                                        <span>Manager</span>
                                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer semper metus mi, sit amet cursus ante viverra nec. Vivamus luctus, ipsum eget ornare for a convallis, urna justo rutrum diam, eget tempus lorem.</p>
                                        <span>24 February 2020</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

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
  );
}

export async function getStaticProps({ params = {}, preview = false }) {
  const productsData = await getClient(preview).fetch(query);

  return {
    props: {
      preview,
      productsData,
    },
  };
}

export default IndexPage;