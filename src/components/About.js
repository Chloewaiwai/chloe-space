import React from 'react'
import './About.css';

export default function About() {
  return (
    <div >
      <img src={process.env.PUBLIC_URL+'/about-background.png'} className='about-background' alt="coloured background" />
      <div className='container padding'>
      <div className='row'>
        <div className='col-7'>
            <h2>Here's Chloe Yip!</h2>
            <h4>Bachelor’s degree of</h4>
            <h1>Fintech & AI</h1>
            <p>I love developing <b>website</b>, building <b>AI models</b>. <b>3D modelling</b> is also my favourite! I am looking for more <b>job opportunities</b> to work in coding and modelling on both <b>regular</b> and <b>freelance</b> basis.</p>
            <p className='leading-text'>Check out what've I built and made below !</p>
          </div >
        <div className='col-5'>
          <img src={process.env.PUBLIC_URL+'/me.png'} className='myphoto rounded-circle' alt="chloe's icon"/>
        </div>

      </div>
       
      </div> 
    </div>

  )
}
