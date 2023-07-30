import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

// get access to setBlogs by passing it as a parameter

const AddBlog = ({setBlogs}) => {
// create a new blog
    const [newBlog, setNewBlog] = useState(
        {
            id: '',
            title: '',
            author: '',
            content: '',
            date: ''
        }
    )

//  add way to go to a url after a click

const navigate = useNavigate()


// create handle functions
    function handleTitle(e) {
       setNewBlog(previousBlog => {
        return {...previousBlog, title: e.target.value}
       })
    }

    function handleAuthor(e) {
        setNewBlog(previousBlog => {
            return {...previousBlog, author: e.target.value}
           })
    }

    function handleContent(e) {
        setNewBlog(previousBlog => {
            return {...previousBlog, content: e.target.value}
           })
    }

    function handleID(e) {
        setNewBlog(previousBlog => {
            return {...previousBlog, id: e.target.value}
           })
        setNewBlog(previousBlog => {
            return {...previousBlog, date: new Date(2023, 6, 26).toISOString()}
           })
    }
// add new blog post to blog
    function handleOnSubmit(e) {
        e.preventDefault()
        // place new state into old state - this is usually done with a UseReducer because this is a state within a state
        setBlogs(previousBlogs => {
            return [...previousBlogs, newBlog]
        })
        // console.log((newBlog))
// go to this route after blog has been added
    navigate('/blogs')

    }

  return (
    <>
{/* create function to handle input from user */}

{/* create onSubmit */}
    <form onSubmit={handleOnSubmit}>
        <input
        type="text"
        onChange={handleTitle}
        placeholder='Please add a title'
        />
    
        <input
        type="text"
        onChange={handleAuthor}
        placeholder='Please add an author'
        />

        <input
        type="text"
        onChange={handleContent}
        placeholder='Please add content'
        />

        <input
        type="text"
        onChange={handleID}
        placeholder='Please add an ID'
        />

    <button>Add Post</button>

    </form>

    </>
  )
}

export default AddBlog