import React from 'react'
// display blogs
const AllBlogs = ({blogs}) => {
    return (
    <>
    <h2>All Blog Posts</h2>
    {blogs.map(blog => {
        return (
            <>
            <div className="all-blogs">
            <h3>Title: {blog.title}</h3>
            <h3>Author: {blog.author}</h3>
            <p>Contents: {blog.content}</p>
            <p>Date: {blog.date}</p>
            <p>ID: {blog.id}</p>
            </div>
            </>
        )
    })}
    </>
  )
}

export default AllBlogs