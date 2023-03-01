import React from 'react'
import "./guestbook.model.css"
import { FaGithub } from "react-icons/fa";

function Guestbook() {
  return (
    <div className='guestbook-container'>
      <div className="guestbook-content">
        <h1>Guestbook</h1>
        <a className='guestbook-btn mb-4' href="#"><FaGithub className='guestbook-icon'/>Sign in with GitHub</a>
        <div className="guestbook-list">
            <p><span>Deus Gitonga: </span>nice website</p>
            <p><span>Nick Price: </span>big ups on your site and your code walkthrough of it. helped me out a lot!</p>
            <p><span>pushpendravhpx: </span>This is really good</p>
            <p><span>Josh: </span>Your site is great. So simple and clean</p>
            <p><span>Marcel Pirosca: </span>nice</p>
            <p><span>VallenDra: </span>very cool site !</p>
        </div>

      </div>
    </div>
  )
}

export default Guestbook