import React from 'react'
import {useParams, useNavigate} from 'react-router-dom'
import AllBlogs from './AllBlogs'

// need useParams to get the ID that was passed
const Delete = ({blogs, setBlogs}) => {
    
    const navigate = useNavigate()
    // destructure it and compare it to the ID from the blog and if it matches, display the blog post
    const {id} = useParams()
    
    const filteredArray = blogs.filter(blog => parseInt(blog.id) === parseInt(id))
    // console.log(filteredArray)

// add new blog post to blog
    function handleOnSubmit(e) {
        e.preventDefault()

    if (filteredArray.length === 1) {
         // Create a copy of the blogs array and remove the blog post with the specified ID
        const updatedBlogs = blogs.filter(blog => parseInt(blog.id) !== parseInt(id))
// Update the state with the new blogs array (i.e., removing the deleted blog post)
      setBlogs(updatedBlogs)

// go to another page
        navigate(`/blogs`)
    }
}
  return (
//    show the blog which needs to be deleted
   <>
        <AllBlogs blogs = {filteredArray} />
{/* Delete this post with this ID and return to AllBlogs and show all posts minus the deleted post */}
        <button onClick={handleOnSubmit}>Delete Post</button>
{/* or can use this instead
        {filteredArray.map(blog => {
        return (
            <>
            <h3>Title: {blog.title}</h3>
            <h3>Author: {blog.author}</h3>
            <p>Contents: {blog.content}</p>
            <p>Date: {blog.date}</p>
            <p>Id: {blog.id}</p>
            <hr />
            </>
        )
       })}         
*/}

    </>
    
  )
}

export default Delete