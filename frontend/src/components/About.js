import React from "react";
import imge from "../images/img4.jpg";

const About = () => {
    return ( <> <section id="headerabout" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
            <div className="row">

                <div className="col-10 mx-auto">
                    <div className="row">
                        <div
                            className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">

                            <h2>
                                <strong className="brand-names">
                                    About Us</strong>
                            </h2>
                            <h3 className="h22">We’re a small team who are all sharing mutual passion for
                                web development and online business. We’re all working remotely and enjoying it
                                since 2021 🙂
                            </h3>
                            <h2 >
                                <strong className="brand-namess">
                                    Our mission
                                </strong>
                            </h2>
                            <h3>Our goal is to help beginners to create their own website, blogs and using
                                the right tools and platforms. WebsiteSetup doesn’t have any banner ads nor do
                                we accept sponsored posts.</h3>

                            <div className="mt-33"></div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <img src={imge} className="img-fluid animated" alt="home img"/>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </section> </>
    );
};
export default About;