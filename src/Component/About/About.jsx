import React from 'react'
import './about.scss';
import img from '../../Travel/mountains.png'
import img1 from '../../Travel/Climbime Image.png'
import img2 from '../../Travel/Customer.jpg'
import video from '../../Travel/sunset-111204.mp4'


const About = () => {
  return (
    <section className="about section">
      <div className="secContainer">

        <h2 className="title">
          Why Hiking?
        </h2>

        <div className="mainContent container grid">
          <div className="singleItem">
            <img src={img}  alt="Image Item" />

            <h3>100 + Mountains</h3>

            <p>
              Research shows that a chance to break away from the normal rhythms 
              if daily life reduces stress and improve health ad well-being.
            </p>

          </div>

          <div className="singleItem">
            <img src= {img1}  alt="Image Item" />

            <h3>1000 + Hikings</h3>

            <p>
              Research shows that a chance to break away from the normal rhythms 
              if daily life reduces stress and improve health ad well-being.
            </p>

          </div>

          <div className="singleItem">
            <img src={img2} alt="Image Item" />

            <h3>2000 + Customer</h3>

            <p>
              Research shows that a chance to break away from the normal rhythms 
              if daily life reduces stress and improve health ad well-being.
            </p>

          </div>

        </div>

        <div className="viedoCard container">
          <div className="cardContent grid">
            
            <div className="cardText">
              <h2>
                Wondwrful House experience nin there!
              </h2>
              <p>
                The Adventure subranking is base on an equally weighted average
                of scores from five country.
              </p>
            </div>

            <div className="cardVideo">
              <video src={video} autoPlay loop muted type="video/mp4"></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About;
