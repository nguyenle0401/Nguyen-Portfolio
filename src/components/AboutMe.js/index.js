import React from 'react'
import './style.css'
import { MDBRow, MDBCol, MDBView, MDBMask, MDBBtn } from 'mdbreact'
import {scroller } from 'react-scroll'

const AboutMe = () => {
  

  return (
    <div id="aboutme" className='dn-about-me-bg'>
      <div className='container row dn-about-me mt-5'>
        <MDBRow className='text-left mb-5'>
          <MDBCol lg="5" className='dn-about-me-img'>
            <MDBView className="rounded z-depth-2 mb-lg-0 mb-4" hover waves>
              <img className="img-fluid" src="https://c1.wallpaperflare.com/preview/480/45/109/book-business-can-designer.jpg" alt="" />
              <a href="#!"><MDBMask overlay="white-slight" /></a>
            </MDBView>
          </MDBCol>

          <MDBCol lg="7">
            <h1 className="font-weight-bold mb-3 p-0 about-me-head"><strong>ABOUT ME</strong></h1>
            <h5>Aspiring Software Engineer actively looking for Internship</h5>
            <p>As an Computer Science student who urges to become a Software Engineer who can deliver meaningful products, I am passionate in doing and learning more about Web Development and Data Science since their combination makes a huge positive impacts on people's lives across many industries, particularly Healthcare and E-commerce.<br/><br/>Personally, I am a motivated and responsible person who can handle pressure, adapts to a new environment, and attempt to learn more.</p>

           
          </MDBCol>
        </MDBRow>
      </div>
    </div>
  )
}

export default AboutMe
