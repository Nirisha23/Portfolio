import React from 'react'
import { FaLinkedinIn, FaGithub, FaYoutube } from "react-icons/fa";
import { ImArrowUpRight2 } from "react-icons/im";
import "./about.model.css"

function About() {
  return (
    <div className='about-container'>
      <div className="about-content">
        <h1>About Me</h1>
        <p>Hey, I'm Lee. Most folks know me as <b>leerob</b> online.</p>
        <div className="about-me">
          <p>I'm currently the <b>VP of Developer Experience at Vercel </b>, where I lead our Developer Relations and Documentation teams. I focus on <b>educating and growing </b> the Vercel and Next.js communities.</p>
          <hr/>
          <p className="mb-3">I'm passionate about many creative pursuits, including music, photography, videography, and of course, coding. This combination of interests is what ultimately led me to my current role in building developer communities.</p>
          <p>I love building for the web. From something as simple as a single HTML file – all the way to large Next.js applications. The web is incredible. Anyone can become a developer, writer, or creator – and no one has to ask for permission. You can just build.</p>
          <p>Outside of Vercel, I <b>angel invest</b>  in developer tools companies and <b>advise early-stage startups.</b> I also do Developer Relations consulting work, helping companies take their DevRel function from 0 to 1, or provide guidance on growing communities, content creation, and developer marketing.</p>
        </div>
        <div className="about-social-page">
          <a href="#">
            <div className="about-social-links">
                <div className="social-navigator">
                <FaLinkedinIn className='about-social-icon'/> 
                {/* <div className='social-navigator-text'>Linked In</div> */}
                <p className='social-navigator-text'>Linked In</p>
                </div>
                <div className="social-navigator-arrow">
                <ImArrowUpRight2 className='social-arrowicon'/>
                </div>
            </div>
          </a>

          <a href="#">
            <div className="about-social-links">
                <div className="social-navigator">
                <FaGithub className='about-social-icon'/>
                {/* <div className='social-navigator-text'>GitHub</div> */}
                <p className='social-navigator-text'>GitHub</p>
                </div>
                <div className="social-navigator-arrow">
                <ImArrowUpRight2 className='social-arrowicon'/>
                </div>
            </div>
          </a>

          <a href="#">
            <div className="about-social-links">
                <div className="social-navigator">
                <FaYoutube className='about-social-icon'/>
                {/* <div className='social-navigator-text'>YouTube</div> */}
                <p className='social-navigator-text'>YouTube</p>
                </div>
                <div className="social-navigator-arrow">
                <ImArrowUpRight2 className='social-arrowicon'/>
                </div>
            </div>
          </a>
          </div>
        
      </div>

    </div>
  )
}

export default About