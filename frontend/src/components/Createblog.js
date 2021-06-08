import React, { useState } from "react";
import imge from "../images/img5.jpg";
import Login from "./Login";
import {useStateValue} from './StateProvider';
import axios from "./axios"
import { useHistory } from "react-router-dom";

const CreateBlog = () => {
    const history = useHistory();
    const [{user},dispatch] = useStateValue()
    const [input,setinput] = useState({
        title:"",
        subheading:"",
        imgurl:"",
        content:""
    });
    console.log(user);
   

    const handleChange = (event) => {
        
            const { name, value } = event.target;
        
            setinput((prevNote) => {
              return {
                ...prevNote,
                [name]: value
              };
            });
    }
   const onSubmit = async (e) => {
        e.preventDefault();
        const blog = {
            email: user.email,
            author: user.displayName,
            title: input.title,
            subheading: input.subheading,
            content: input.content,
            timestamp: new Date().toUTCString(),
            image: input.imgurl, 
            like: 0
        }
        await axios.post('/addBlog',blog)
        .then((d) => {
            console.log(d);
            console.log("Form Submitted");
            history.push("/");
        })
        .catch((err) => {
            console.log(err.data);
        })
        
      
    }
    return (
        <>
        {!user ? <Login /> :
            <section id="header" className="d-flex align-items-center">
                <div className="container-fluid nav_bg">
                    <div className="row">

                        <div className="col-10 mx-auto">
                            <div className="row">
                                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex flex-column">

                                    <br></br>
                                    <br></br>

                                    <form>
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput1" className="form-label">
                                                Blog Title
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="exampleFormControlInput1"
                                                placeholder="Enter Blog Title"
                                                onChange={handleChange}
                                                name="title"
                                                value={input.title}
                                            />
                                        </div>
                                        
                                        <div className="mb-3">
                                            <label for="exampleFormControlInput2" className="form-label">
                                                Blog Sub-heading
                                            </label>
                                            <input
                                                type="text"
                                                className="form-control"
                                                id="exampleFormControlInput2"
                                                placeholder="Enter sub-heading"
                                                onChange={handleChange}
                                                name="subheading"
                                                value={input.subheading}
                                            />
                                        </div>

                                        <div className="mb-3">
                                        <label for="image">Image</label>
                                        <input type="URL"
                                                className="form-control"
                                                id="image"
                                                placeholder="Enter Image URL" 
                                                onChange={handleChange}
                                                name="imgurl"
                                                value={input.imgurl}
                                                /> 
                                        </div>
                                        

                                        <div className="mb-3">
                                            <label for="exampleFormControlTextarea1" className="form-label">
                                                Blog Content
                                            </label>
                                            <textarea 
                                            className="form-control" 
                                            id="exampleFormControlTextarea1" 
                                            rows="3"
                                            onChange={handleChange}
                                            name="content"
                                            value={input.content}
                                                ></textarea>    
                                            
                                        </div>
                                        <div className="col-12">
                                            <button className="btn btn-outline-primary" onClick={onSubmit} type="submit">Submit</button>
                                        </div>
                                    </form>

                                    <div className="mt-3">


                                    </div>
                                </div>
                                <div className="col-lg-6 order-1 order-lg-2 header-img">
                                    <img src={imge}
                                        className="img-fluid animated"
                                        alt="home img"

                                    />
                                </div>

                            </div>
                        </div>
                    </div>
                </div>


            </section>}
        </>
    );
};

export default CreateBlog;