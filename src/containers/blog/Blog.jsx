import React from 'react'
import Article from '../../components/article/Article'
import blog01 from '../../assets/Nidhi EiR.jpeg'
import blog02 from '../../assets/achv-1.jpeg'
import blog03 from '../../assets/achv-2.jpeg'
import blog04 from '../../assets/Patent.jpeg'
import blog05 from '../../assets/blog05.png'
import './blog.css'

const Blog = () => {
  return (
    <div className='gpt3__blog section__padding' id='blog'>
      <div className="gpt3__blog-heading gradient__text">
        <h1>Our Achievements</h1>
      </div>
      <div className="gpt3__blog-container">

        <div className="gpt3__blog-container_groupB">
          <Article imgUrls={blog01} date='' title='We are proud to announce that MediFor7 has successfully completed the DST NIDHI EIR Scheme from COEPs Bhau Institute, Pune. This recognition strengthens our mission to revolutionize medication management for the elderly, hospital patients, and busy professionals across India.' />
          <Article imgUrls={blog02} date='' title='We Are Thrilled To Announce That Our Startup, MediFor7, Has Successfully Secured The Prestigious Startup India Seed Fund Grant Through COEPs Bhau Institute, Pune. This Remarkable Milestone Reflects Our Commitment To Revolutionizing Medication Management For Elderly Individuals, Hospital Patients, And Busy Professionals Through Our Innovative Hardware And Software Solution.' />
          <Article imgUrls={blog03} date='' title='We are thrilled to announce that MediFor7 won 1st prize in the Entrepreneurship sector at the Ignited Innovators of India (i2i) Business Model Competition, COEP Technological University, Pune. Our innovative solution simplifies medication management with smart hardware and software features.' />
          <Article imgUrls={blog04} date='' title='MediFor7 is a revolutionary solution for medication adherence, proudly granted 4 design patents by the Indian government. With 28-dose containers, LED alerts, voice reminders, and a mobile app, it ensures seamless and reliable medication management.' />
          {/* <Article imgUrls={blog05} date='' title='GPT-3 and Open  AI is the future. Let us exlore how it is?' /> */}
        </div>
      </div>
    </div>
  )
}

export default Blog
