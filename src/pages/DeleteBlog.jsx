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
        const validID = blogs.some(blog => blog.id == inputID)
        setError(validID ? '' : 'A blog post with this ID doesn\'t exist...Please try again.')
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
        <form onSubmit={handleOnSubmit}>
            
            <input
            type="text"
            onChange={handleID}
            placeholder='Please add an ID'
            required
            />
{/* short-circuit evaluation */}
    {error && <p>{error}</p>}
        <button type="submit" disabled={!!error}>Delete Post</button>
        </form>
        </>
      )
}

export default DeleteBlog