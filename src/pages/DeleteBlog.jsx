import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const DeleteBlog = ({blogs}) => {

    const [id, setID] = useState('')
    // add a state for an input that is invalid
    const [error, setError] = useState('')
    const navigate = useNavigate()

    function handleID(e) {
        // store the value in ID
        const inputID = e.target.value
        setID(inputID)

// Check if the inputID exists in the blogs array
        const validID = blogs.some(blog => blog.id === parseInt(inputID))
        setError(validID ? '' : `A blog post with the ID of ${inputID} doesn\'t exist...please try again!`)
    }
// add new blog post to blog
    function handleOnSubmit(e) {
        e.preventDefault()
// go to another page
if (!error) {
    navigate(`/blogs/delete/${id}`)
}
    }
    return (
        <>
        <h2>Delete a Blog Post</h2>
      <form onSubmit={handleOnSubmit}>
        <input
          type="text"
          onChange={handleID}
          placeholder='Please add an ID'
          required
        />
        {/* Wrap the error message in a container and add a class to it */}
        {error && <div className="error-message">{error}</div>}
        <button type="submit" disabled={!!error}>Delete Post</button>
      </form>
        </>
      )
}

export default DeleteBlog