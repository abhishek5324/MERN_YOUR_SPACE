import axios from "./axios";
import React, { useState } from "react";
import i from "../images/img7.jpg";

import { useHistory } from "react-router-dom";




const Register = () => {
    const history = useHistory();
    const[input,setInput] = useState({
        fname:"",
        username:"",
        email:"",
        password:""
    });
    const handleChange = (e) => {
       
        const { name, value } = e.target;
            setInput(prevState => ({
                ...prevState,
                [name]: value
            }));
    }
    const userAdd = async (e) => {
        console.log("s");
        e.preventDefault()
        await axios.post('/register', {
            name: input.fname,
            username: input.username,
            email: input.email,
            password: input.password
        })
        .then((data) => {
            console.log(data);
        })
        .then(() => {
            console.log("Registered successfully");
            history.push("/login");
        })
        .catch((er) => {
            console.log(er.response.data);
        })
        console.log("e");
    } 

    return ( <> <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
            <div className="row">

                <div className="col-10 mx-auto">
                    <div className="row">
                        <div
                            className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">

                            <form className="row g-3">

                            <div className="col-md-6">
                                    <label for="name" className="form-label">Name</label>
                                    <input 
                                    onChange={handleChange}
                                    type="text" 
                                    className="form-control" id="name" placeholder="Enter first name only" 
                                    value={input.fname}
                                    name="fname"
                                    required/>
                                </div>
                                <hr></hr>   
                            <div className="col-md-6">
                                    <label for="username" className="form-label">Username</label>
                                    <input 
                                    onChange={handleChange}
                                    type="text" 
                                    className="form-control" 
                                    id="username" 
                                    placeholder="Enter username" 
                                    value={input.username}
                                    name="username"
                                    required/>
                                </div>
                                <hr></hr>
                                <div className="col-md-6">
                                    <label for="inputEmail4" className="form-label">Email</label>
                                    <input 
                                    onChange={handleChange}
                                    type="email"
                                    className="form-control" 
                                    id="inputEmail4" 
                                    placeholder="Enter email address" 
                                    value={input.email}
                                    name="email"
                                    required/>
                                </div>
                                <hr></hr>
                                <div className="col-md-6">
                                    <label for="inputPassword4" className="form-label">Password</label>
                                    <input 
                                    onChange={handleChange}
                                    type="password" 
                                    className="form-control" 
                                    id="inputPassword4" 
                                    placeholder="Enter password" 
                                    value={input.password}
                                    name="password"
                                    required/>
                                </div>
                                <hr></hr>
                                <div className="col-12">
                                
                                    <button type="submit" onClick={userAdd} className="btn btn-primary">Register</button>
                                </div>
                            </form>
                            <div className="mt-3"></div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <img src={i} className="img-fluid animated" alt="home img"/>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </section> </>
    );
};
export default Register ;