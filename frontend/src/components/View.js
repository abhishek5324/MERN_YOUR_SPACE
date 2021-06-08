
import React, { useEffect, useState } from 'react'
import { useHistory } from 'react-router';
import axios from './axios';
import Card from './Card';

export default function View(props) {
    const history = useHistory();
    const [blog,setBlog] = useState({
        email: "",
        author: "",
        title: "",
        subheading: "",
        content: "",
        timestamp: "",
        image: "", 
        like: 0
    })
    const [likee,setLike] = useState(0);

const onLike = async (e) => {
    setLike(likee+1);
    const blog2 = {
        email: blog.email,
        author: blog.displayName,
        title: blog.title,
        subheading: blog.subheading,
        content: blog.content,
        timestamp: blog.timestamp,
        image: blog.image, 
        like: likee+1
    }

    // console.log("j");
    // console.log(blog2);
    await axios.patch(`/blogs/${props.match.params.id}`, blog2)
    .then((d) => {
        console.log("Success like");
    })
    .catch((err) => {
        console.log(err);
    })

}

const onDelete = async () => {
    await axios.delete(`/blogs/${props.match.params.id}`);
    history.push("/");
}
        
        useEffect(() => {
            // console.log("view");
            // console.log(props.match.params.id);
           axios.get(`/blogs/${props.match.params.id}`)
           .then((blog1) => {
                console.log("bhb");
                console.log(blog1.data);
                setBlog({...blog,
                    email: blog1.data.email,
                author: blog1.data.author,
                title: blog1.data.title,
                subheading: blog1.data.subheading,
                content: blog1.data.content,
                timestamp: blog1.data.timestamp,
                image: blog1.data.image, 
                like: blog1.data.like
                })
                setLike(blog1.data.like);
           })
       
           
        },[])

        
    return (
        <div>
           <div>
        
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
       <p>Likes: {likee} </p>
       <div className="btn2">
        <button type="submit" class="btn btn-primary btn1 btn-md " onClick={onLike} >Like</button>
        <button type="submit" class="btn btn-danger btn1 btn-md" onClick={onDelete} >Delete</button>
        </div>
 
      </article>
    </div>
        </div>
    )
}