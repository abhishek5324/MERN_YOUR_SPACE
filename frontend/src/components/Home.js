import React, {useEffect, useState} from "react";
import img from "../images/img3.jpg";
import {Link} from 'react-router-dom';
import axios from "./axios";
import Card from './Card';

const Home = () => {
    const [input,setInput] = useState([])
    // const [like,setlike] = 

    useEffect(() => {
        axios
            .get("/blogs")
            .then(res => setInput(res.data))
    }, [])

    const handleLike = ((blog) => {
        
        const blog1 = {
            email: blog.email,
            author: blog.displayName,
            title: blog.title,
            subheading: blog.subheading,
            content: blog.content,
            timestamp: blog.timestamp,
            image: blog.image, 
            like: blog.like+1
        }
         axios.post(`/addLike/${blog._id}`,blog1)
        .then((d) => {
            // console.log(d);
            // console.log("Form Submitted");
            // history.push("/");
        })
        .catch((err) => {
            console.log(err.data);
        })

    })
    return ( <> 
    <section id="header" className="d-flex align-items-center">
        <div className="container-fluid nav_bg">
            <div className="row">

                <div className="col-10 mx-auto">
                    <div className="row">
                        <div
                            className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">

                            <br></br>
                            <br></br>
                            <h1>Grow your business with
                                <strong className="brand-name">
                                    Bloggs</strong>
                            </h1>
                            <h2 className="my-3">We are the team of talented developer making websites
                            </h2>
                            <h2>You can create your own blog by clicking below button</h2>
                            <br></br>
                            <div className="mt-3">
                                <Link to="/createblog" className="btn-get-started ">
                                    Create Blog
                                </Link>

                            </div>
                        </div>
                        <div className="col-lg-6 order-1 order-lg-2 header-img">
                            <img src={img} className="img-fluid animated" alt="home img"/>
                        </div>

                    </div>
                </div>
            </div>
            
        </div>
        
    </section> 
   
       <hr  />

<h1 className="h1B">Blogs</h1>
 <div className='section-blog'>
      {input.map((my_blogs) => {
        const { _id,id, title,subheading,content, image,author ,timestamp} = my_blogs
        return (
         
          <Card blog={my_blogs}/>
        )
      })}
    </div>



      

    </>
    );
};



export default Home;