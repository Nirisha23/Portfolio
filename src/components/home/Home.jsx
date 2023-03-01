import React from 'react'
import ProfileImg from "../../Assets/profile.avif"
import { FaLinkedinIn, FaGithub, FaBroom } from "react-icons/fa";
import { ImArrowUpRight2 } from "react-icons/im";



import "./home.model.css"

function Home() {
  return (
    <div className='home-container'>
        <div className="home-content">
            <div className="home-desc">
                <div className="home-desc-head">
                    <h1>Nirisha</h1>
                    <p>Hey, I'm Nirisha. I'm the <b>Front Developer Experience at Vercel </b> where my team helps developers build a faster web.</p>
                </div>
                <div className="profile">
                    <div className="profile-container">
                        <div className="profile-image">
                            <img src={ProfileImg} alt="Profile-image" />
                        </div>
                        <div className="profile-content">
                            <a href="#"><FaLinkedinIn className='social-icons' /> 6,873 posts all time</a>
                            <a href="#"><FaGithub className='social-icons'/> 5,278 stars on this repo</a>
                            <a href="#"><FaBroom className='social-icons' /> 1,609,168 blog views all time</a>   
                        </div>
                    </div>
                </div>
                <p className='passion'>An aspiring front-end web developer with skills in HTML, CSS, JS, Bootstrap and Basic ReactJS with the ability to adapt to new technologies. Enthusiastic to work and learn in an organization where I can gain hands-on experience on real-time projects.</p>
                <div className="social-media">
                    <a href="#"><ImArrowUpRight2 className='social-icons' />follow me on LinkedIn</a>
                    <a href="#"><ImArrowUpRight2 className='social-icons' />get email updates</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Home