import React from 'react'
import './offer.scss';
import {MdKingBed} from 'react-icons/md' 
import {MdBathtub} from 'react-icons/md'  
import {FaWifi} from 'react-icons/fa'  
import {MdAirportShuttle} from 'react-icons/md'
import {MdLocationOn} from 'react-icons/md'  
import {BsArrowRightShort} from 'react-icons/bs'  
import image from '../../Travel/hd-travel-wallpapers9.jpg'
import image1 from "../../Travel/vietnam22.jpg"
import image2 from "../../Travel/texas-hill-country-desktop-wallpaper16.jpg"
import image3 from "../../Travel/travel-austria-salzburg-wallpaper18.jpg"
import image4 from "../../Travel/travel-cities-wallpapers19.jpg"



const Data = [
  {
    id : 1 ,
    Image : image1,
    desTitle :" Vietnam City ",
    location : "Vietnam ",
    grade :'CULTURAL RELAX',
    price : "1000$",

  },
  {
    id : 2 ,
    Image : image2,
    desTitle :" China City ",
    location : "China  ",
    grade :'CULTURAL RELAX',
    price : "3000$",

  },
  {
    id : 3,
    Image : image3,
    desTitle :" Singapro City ",
    location : "Singapro ",
    grade :'CULTURAL RELAX',
    price : "5000$",

  },
  {
    id : 4 ,
    Image : image4,
    desTitle :" Malaysia City ",
    location : "Malaysia",
    grade :'CULTURAL RELAX',
    price : "4000$",

  },
  {
    id : 5 ,
    Image : image,
    desTitle :" Japan City ",
    location : "Japan",
    grade :'CULTURAL RELAX',
    price : "2000$",

  },
  
]
const Offer = () => {
  return (
    <div>
      <section className="offer container section">
        <div className="secContainer">

          <div className="secIntro">
            <h2 className="secTitle">
              Special Offer
            </h2>
            <p>
              Fron historical cities to nature specteculars , come see the best of the world !
            </p>
          </div>

          <div className="mainContent grid">
           {
            Data.map((data) => {
              return(
                <div className="singleOffer">

                <div className="destImage">
                  <img src={data.Image} alt={data.desTitle} />
  
                  <span className="discount">
                    30% off
                  </span>
                </div>
  
                <div className="offerBody">
  
                  <div className=" price flex">
                    <h4>
                      {data.price}
                    </h4>
                    <span className="status">
                      For Rent
                    </span>
                  </div>
                  
                  <div className="amenities flex">
                    <div className="singleAmenity flex">
                      <MdKingBed className="icon"/>
                      <small>2 Beds</small>
                    </div>
                    <div className="singleAmenity flex">
                      <MdBathtub className="icon"/>
                      <small>! Bath</small>
                    </div>
                    <div className="singleAmenity flex">
                      <FaWifi className="icon"/>
                      <small>Wi-Fi</small>
                    </div>
                    <div className="singleAmenity flex">
                      <MdAirportShuttle className="icon"/>
                      <small>Shuttle</small>
                    </div>                 
                  </div>
  
                  <div className="location">
                    <MdLocationOn className="icon"/>
                    <small>450 Vine #310, {data.location}</small>
                  </div>
  
                  <button className="btn flex">
                    View Ditial
                    <BsArrowRightShort className="icon"/>
                  </button>
                </div>
  
              </div>
              )
            })
           }
          </div>
        </div>
      </section>
    </div>
  )
}

export default Offer;