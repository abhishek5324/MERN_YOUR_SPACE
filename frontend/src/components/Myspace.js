import React, { useEffect, useState } from "react";
import axios from "./axios";
import Card from "./Card";
import Login from "./Login";
import {useStateValue} from './StateProvider';
import { Link } from 'react-router-dom';

const Myspace = () => {
const [input,setInput] = useState([])
const [{user},dispatch] = useStateValue()
useEffect(() => {
    axios
        .get("/blogs")
        .then(res => setInput(res.data))
}, [])
console.log(input);

{
    return (
        <>
      
       
       {!user ? <Login />
       :
       <div>
       {input.map((blog) => (
                <div>
                {   blog.email == user.email ?
                   
                    
                    <article className='blog-item1'>
    
                <h1>{blog.title}</h1>
    <p>
        <small>By - {blog.author}</small>
        <br />
        <small>{blog.timestamp}</small>
    </p>
    <img src={blog.image} alt={blog.title} className='photo1' />
    <h5>{blog.subheading}</h5>
    <p>{blog.content}</p>
    <Link to={`/blogs/${blog._id}`}>
    <button type="submit" class="btn btn-primary"  >view</button>
    </Link>

  </article>

                    :
                    " "
                    
                }  
                </div>

            ))
}

       </div>
       }
    
    
        </>
    );
}};
export default Myspace ;