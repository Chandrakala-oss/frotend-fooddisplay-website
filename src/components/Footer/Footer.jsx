import React from 'react'
import './Footer.css'
import { assets } from '../../assets/assets'
const Footer = () => {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img id="img"src={assets.logo1} alt=" "/>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias vel, quis nemo suscipit aperiam, consectetur dolores in ratione molestiae at unde fugit aut rem tempore ad porro ipsam illum culpa., dolor sit amet consectetur adipisicing elit. Cum dolore optio recusandae commodi, minima dolores eius repellendus quas adipisci hic? Vel corporis voluptatum omnis a cumque maiores perferendis at repellat?</p>
            <div className="footer-social-icon">
                <img src={assets.facebook_icon} alt=" "/>
                <img src={assets.twitter_icon} alt=" "/>
                <img src={assets.linkedin_icon} alt=" "/>
            </div>
            
           
            
        </div>
        <div className="footer-content-center">
           <h2>COMPANY</h2>
           <ul>
            <li>Home</li>
            <li>About Us</li>
            <li>Delivery</li>
            <li>Privacy Policy</li>
           </ul>
        </div>
        <div className="footer-content-right">
           <h2>GET IN TOUCH</h2>
           <ul>
            <li>+91-904-0243-258</li>
            <li>Contact@foods.com</li>
           </ul>
        </div>
      </div>
      <hr/>
      <p className="foter-copyright">
        Copyright 2024 © Foods.com - All Right Reverved.

    
      </p>
    </div>
  )
}

export default Footer
