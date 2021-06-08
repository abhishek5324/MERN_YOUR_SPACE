// const express = require('express');
// const mongoose = require('mongoose');
// const Cors = require('cors');
// const User = require('./Models/UserData');
// const Blog = require('./Models/BlogData');
import express from 'express';
import mongoose from 'mongoose'; 
import Cors from 'cors';
import Blog from './BlogData.js';
import passport from 'passport';
//require('dotenv').config();
// import findOrCreate from "mongoose-findorcreate";
// import LocalStrategy from "passport-local";
const app = express();

// const connection_URL = process.env.MONGO_CLIENT
const port = process.env.PORT || 5050;
app.use(express.json());
app.use(Cors());
app.use(passport.initialize());
app.use(passport.session());

//connection
mongoose.connect(`mongodb+srv://abhi5324:abhishek58@cluster0.4fpul.mongodb.net/blogDB`,{
    useNewUrlParser:true,
    useCreateIndex: true,
    useUnifiedTopology: true
})
.then(() => {
    console.log("connection established");
})
.catch((err) => {
    console.log(err);
})



  
  
// /

// //get
app.get('/',(req,res) => {
    res.send("<h1>hi</h1>")
})
// app.get('/register',(req,res) => {
//     res.send("HELLO");
// })

// app.get('/blogs',(req,res) => {
//   Blog.find((err,data) => {
//     if(err)
//     {
//       console.log(err);
//     }
//     else
//     {
//       res.send(data);
//     }
//   })
// })



// //post

// app.post("/addblog",(req,res) => {
//   const blog = req.body;
//     Blog.create(
//         {
//           username: blog.username,
//           author: blog.author,
//           title: blog.title,
//           subheading: blog.subheading,
//           content: blog.content,
//           timestamp: blog.timestamp,
//           image: blog.image, 
//         },(err,data) => {
//           if(err)
//             console.log(err);
//           else{
//             res.send(data);
//           }
//         }
// )})

// app.post("/login",(req,res) => {

//     const user = new User({
//       username: req.body.username,
//       password: req.body.password
//     });
  
//     req.login(user, function(err){
//       if (err) {
//         console.log(err);
//       } else {
//         passport.authenticate("local")(req, res, function(){
//           console.log("Login success");;
//         });
//       }
//     });
  
//   });



// //LOGIN 2

// // app.post('/login', (req, res, next) => {
// //     passport.authenticate('local',
// //     (err, user, info) => {
// //       if (err) {
// //         return next(err);
// //       }
  
// //       if (!user) {
// //         return res.send("failed");
// //       }
  
// //       req.logIn(user, function(err) {
// //         if (err) {
// //           return next(err);
// //         }
  
// //         return res.redirect('/');
// //       });
  
// //     })(req, res, next);
// //   });
  
  
// app.post("/register",(req,res) =>{

//     const userDetails = req.body;
//     User.create(
//         {
//             name: userDetails.name,
//             username: userDetails.username,
//             email: userDetails.email,
//             password: userDetails.password
//         },
//         function(err,user){
//       if(err)
//       {
//         console.log(err);
        
//       }
//       else{
//         passport.authenticate("local")(req,res,function(){
//           res.send("User registred");
//         });
//       }
//     });
  
  
//   });

app.get('/blogs/:id', async(req, res) => {
    
    const blog=await Blog.findById(req.params.id);

    res.send(blog);
})

// app.post('/addLike/:id',(req,res) => {
//     console.log(res.data);
// })

app.get('/blogs', async(req, res) => {
    
  const blogs = await Blog.find({});

  res.send(blogs);
})

app.post('/addBlog',async (req,res) => {
  const post = await Blog.create(req.body);
    console.log(post);
    res.send("hi")
})

app.patch('/blogs/:id', async (req, res) => {
    const blog=await Blog.findByIdAndUpdate(req.params.id,req.body)
    console.log("HIT THE PATCH ROUTE")
    res.send(blog);
})

app.delete('/blogs/:id', async (req, res) => {
    const blog=await Blog.findByIdAndDelete(req.params.id);
    res.send(blog);
})
//Port listen
app.listen(port,() => {
    console.log("Listening on port"+ port);
})