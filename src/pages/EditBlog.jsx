import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'

const EditBlog = () => {

    const [id, setID] = useState(0)
    const navigate = useNavigate()

    function handleID(e) {
        // store the value in ID
        setID(e.target.value)
    }
// add new blog post to blog
    function handleOnSubmit(e) {
        e.preventDefault()
// go to another page
        navigate(`/blogs/edit/${id}`)
    }

    return (
        <>
        <form onSubmit={handleOnSubmit}>
            
            <input
            type="text"
            onChange={handleID}
            placeholder='Please add an ID'
            />
    
        <button>Edit Post</button>
    
        </form>
    
    
        </>
      )
}

export default EditBlog