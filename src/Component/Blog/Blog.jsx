import React from 'react'
import {BsArrowRightShort} from 'react-icons/bs';
import './blog.scss';
import image1 from "../../Travel/Italy10.jpg"
import image2 from "../../Travel/Kenya12.jpg"
import image3 from "../../Travel/New Zeland12.jpg"
import image4 from "../../Travel/Oman13.jpg"

const Data = [
  {
    id : 1,
    Image : image1 ,
    Title : 'Beautiful Moroco, let us travel!',
    des : 'The Kingdom of Moroco is a Muslin country in westerm North Africa ,The Kingdom of Moroco is a Muslin country in westerm North Africa',
  },
  {
    id : 2,
    Image : image2 ,
    Title : 'Beautiful Moroco, let us travel!',
    des : 'The Kingdom of Moroco is a Muslin country in westerm North Africa ,The Kingdom of Moroco is a Muslin country in westerm North Africa',
  },
  {
    id : 3,
    Image : image3 ,
    Title : 'Beautiful Moroco, let us travel!',
    des : 'The Kingdom of Moroco is a Muslin country in westerm North Africa ,The Kingdom of Moroco is a Muslin country in westerm North Africa',
  },
  {
    id : 4,
    Image : image4 ,
    Title : 'Beautiful Moroco, let us travel!',
    des : 'The Kingdom of Moroco is a Muslin country in westerm North Africa ,The Kingdom of Moroco is a Muslin country in westerm North Africa',
  }
]

const Blog = () => {
  return (
    <section className='blog container section'>  
      <div className="secContainer">
        <div className="secIntro">
          <h2 className="secTitle">
            Our Best Blog?
          </h2>
          <p>
            An insight to the incredible experince in the world.
          </p>
        </div>
        
        <div className="mainContainer grid">
          {
            Data.map((data) => {
              return(
                <div className="singlePost grid">
                  <div className="imgDiv">
                    <img src={data.Image} alt= {data.Title} />
                  </div>

                  <div className="postDetails">
                    <h3>
                      {data.Title}
                    </h3>
                    <p>
                      {data.des}
                    </p>
                  </div>

                  <a href="#" className="flex">                    
                    Read More
                    <BsArrowRightShort className="icon"/>
                  </a>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Blog;