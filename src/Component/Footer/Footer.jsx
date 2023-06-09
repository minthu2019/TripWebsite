import React from 'react'
import './footer.scss';
import {SiYourtraveldottv} from "react-icons/si"
import {ImFacebook} from "react-icons/im"
import {BsTwitter} from "react-icons/bs"
import {AiFillInstagram} from "react-icons/ai"


const Footer = () => {
  return (
    <section className="footer">
      <div className="secContainer container grid">
        <div className="logoDiv">
          <div className="footerLogo">
            <a href="#" className="logo flex">
             <h1 className="flex">
               <SiYourtraveldottv className ="icon"/>
                PREY
              </h1>
            </a>
          </div>     

          <div className="socials flex">
            <ImFacebook className ="icon"/>
            <BsTwitter className ="icon"/>
            <AiFillInstagram className ="icon"/>
          </div>   
        </div> 
     
          <div className="footerLinks">
            <span className="linkTitle">
              Information
            </span>
            
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Exploer</a>
            </li>
            <li>
              <a href="#">Travel</a>
            </li>
            <li>
              <a href="#">Blog</a>
            </li>
          </div>

          <div className="footerLinks">
            <span className="linkTitle">
              Helpful Link
            </span>
            
            <li>
              <a href="#">Destination</a>
            </li>
            <li>
              <a href="#">Support</a>
            </li>
            <li>
              <a href="#">Travel & Condation</a>
            </li>
            <li>
              <a href="#">Privacy</a>
            </li>
          </div>

          <div className="footerLinks">
            <span className="linkTitle">
              Contact Us
            </span>
            <span className="phone">
              +959 7847 06612
            </span>
            
            <span className="email">
              mtk.min2003@gmail.com
            </span>
            
          </div>
      </div>
    </section>
  )
}

export default Footer;