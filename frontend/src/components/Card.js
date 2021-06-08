import React from 'react'
import { Link } from 'react-router-dom';

export default function Card(props) {
    const { _id,id, title,subheading,content, image,author ,timestamp,like} = props.blog;



    console.log(props);
    return (
      
        <div>
        
            <article key={id} className='blog-item'>
          {/* <p>{_id}</p> */}
            <h1>{title}</h1>
            <p>
                <small>By - {author}</small>
                <br />
                <small>{timestamp}</small>
            </p>
            <img src={image} alt={title} className='photo' />
            <h5>{subheading}</h5>
            <p>{content.substring(0,200)}</p>
            <p>♥ {like}</p>
             <Link to={`/blogs/${_id}`}>
            
            <button type="submit" class="btn btn-primary"  >view</button>
            </Link>
          </article>
        </div>
    )
}
