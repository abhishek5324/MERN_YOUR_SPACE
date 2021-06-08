import React from "react";
import imge from "../images/img5.jpg";

const Contact = () => {
    return ( <> <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
            <div className="row">

                <div className="col-10 mx-auto">
                    <div className="row">
                        <div
                            className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">

                            <br></br>
                            <br></br>

                            <form>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="name@example.com"/>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">
                                        FullName
                                    </label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="Enter your name"/>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" className="form-label">
                                        Phone
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="exampleFormControlInput1"
                                        placeholder="mobile number"/>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlTextarea1" className="form-label">
                                        Message
                                    </label>
                                    <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                                </div>
                                <div className="col-12">
                                    <button className="btn btn-outline-primary" type="submit">Submit form</button>
                                </div>
                            </form>

                            <div className="mt-3"></div>
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

export default Contact;