import React from 'react'
import "./blog.model.css"

function Blog() {
  return (
    <div className='blog-container'>
      <div className="blog-content">
      <h1>Blog</h1>
      <a className='blog-list' href="#">
        <div className='blog-list-one'>
          <h6>Funding Open Source</h6>
          <p>12,23 views</p>
        </div>
      </a>
      <a className='blog-list' href="#">
        <div className='blog-list-one'>
          <h6>2023 State of Databases for Serverless & Edge</h6>
          <p>12,23 views</p>
        </div>
      </a>
      <a className='blog-list' href="#">
        <div className='blog-list-one'>
          <h6>Why You Should Use a React Framework</h6>
          <p>12,23 views</p>
        </div>
      </a>
      <a className='blog-list' href="#">
        <div className='blog-list-one'>
          <h6>2022 Year in Review</h6>
          <p>12,23 views</p>
        </div>
      </a>
      <a className='blog-list' href="#">
        <div className='blog-list-one'>
          <h6>Why I'm Optimistic About JavaScript's Future</h6>
          <p>12,23 views</p>
        </div>
      </a>

      </div>
    </div>
  )
}

export default Blog