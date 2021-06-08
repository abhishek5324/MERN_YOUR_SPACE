import mongoose from 'mongoose'; 

const BlogSchema =  mongoose.Schema({
    email: String,
    author: String,
    title: String,
    subheading: String,
    content: String,
    timestamp: String,
    image: String, 
    like: Number
})

export default mongoose.model('blog',BlogSchema);