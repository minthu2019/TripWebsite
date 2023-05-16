import React from 'react'
import './popular.scss';
import {Outlet} from 'react-router-dom'
import {BsArrowLeftShort} from 'react-icons/bs' 
import {BsArrowRightShort} from 'react-icons/bs' 
import {BsDot} from 'react-icons/bs' 
import image8 from "../../Travel/Switzweland15.jpg"
import image1 from "../../Travel/Canada5.jpg"
import image2 from "../../Travel/Chile6.jpg"
import image3 from "../../Travel/Greece8.jpg"
import image4 from "../../Travel/Italy10.jpg"
import image5 from "../../Travel/Kenya12.jpg"
import image6 from "../../Travel/New Zeland12.jpg"
import image7 from "../../Travel/Oman13.jpg"



const Data = [
  {
    id : 1 ,
    Image : image1,
    desTitle :" Canada City ",
    location : "Canada ",
    grade :'CULTURAL RELAX',

  },
  {
    id : 2 ,
    Image : image2,
    desTitle :" Chile City ",
    location : "Chile  ",
    grade :'CULTURAL RELAX',

  },
  {
    id : 3,
    Image : image3,
    desTitle :" Greece City ",
    location : "Greece ",
    grade :'CULTURAL RELAX',

  },
  {
    id : 4 ,
    Image : image4,
    desTitle :" Italy City ",
    location : "Italy",
    grade :'CULTURAL RELAX',

  },
  {
    id : 5 ,
    Image : image5,
    desTitle :" Kenya City ",
    location : "Kenya ",
    grade :'CULTURAL RELAX',

  },
  {
    id : 6 ,
    Image : image6,
    desTitle :" New Zeland City ",
    location : "New Zeland  ",
    grade :'CULTURAL RELAX',

  },
  {
    id : 7 ,
    Image : image7,
    desTitle :" Oman City ",
    location : "Oman",
    grade :'CULTURAL RELAX',

  },
  {
    id : 8 ,
    Image : image8,
    desTitle :" Switzweland City ",
    location : "Switzweland",
    grade :'CULTURAL RELAX',

  },
]

const Popular = () => {
  return (
    <section className="Popular section container">
      <div className="secContainer">

        <div className="secHeader ">
          <div className="textDiv">
            <h2 className="secTitle">
              Popular Distination
            </h2>
            <p>From histrical cities to natural spectecular, 
              come see the best of the world!
            </p>
          </div>

          <div className="iconsDiv flex">
            <BsArrowLeftShort className='icon arrow'/>
            <BsArrowRightShort className='icon '/>
          </div>
        </div>

        <div className="mainContent grid">

        {
          Data.map((data) => {
            return(
              <div className="singleDistination">

              <div className="destImage">             
                <img src={data.Image} alt="Image title" />
                <div className="overlayInfo flex">
                  <h3>{data.desTitle}</h3>
                  <p>{data.grade}</p>
                  <BsArrowRightShort className='icon '/>
                </div>
              </div>
                
              <div className="destFooter">
                <div className="number">
                  0{data.id}
                </div>
  
                 <div className="destText flex">
                   <h6>{data.location}</h6>
                  <span className="flex">
                    <span className="dot">
                      <BsDot className="icon"/>
                    </span>
                    Dot
                  </span>
                </div>
              </div>
  
            </div>
  
            )
          })
        }
         
        </div>
        <Outlet/>
      </div>
      
    </section>
  )
}

export default Popular;