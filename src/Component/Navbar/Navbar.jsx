import React from 'react'
import {useState} from 'react'
import "./navbar.scss"
import {SiYourtraveldottv} from "react-icons/si"
import {AiFillCloseCircle} from "react-icons/ai"
import {TbGridDots} from "react-icons/tb"



const Navbar = () => {
    const [active , setActive] = useState("navBar");
    const showNavbar = ( ) => {
        setActive("navBar activeNavbar")
    };

    const removeNavbar = ( ) => {
        setActive("navBar")
    };

    const [transparnt , setTransparent ] = useState("header");
    const addBg = () => {
        if(window.scrollY  >= 10) {
            setTransparent("header activeHeader")
        }else{
            setTransparent("header")
        }
    }

    window.addEventListener("scroll",addBg)


  return (
    <div>
      <section className="navBarSection">
        <div className={transparnt}>
            <div className="logoDiv">
                <a href="#" className="logo">
                    <h1><SiYourtraveldottv className="icon"/>PREY</h1>
                    
                </a>
            </div>

            <div className={active}>
                <ul className="navLists flex">

                    <li className="navItem">
                        <a href="#" className="navLink">Home</a>
                    </li>

                    <li className="navItem">
                        <a href="../Popular.jsx" className="navLink">Products</a>
                    </li>

                    <li className="navItem">
                        <a href="../Offer.jsx" className="navLink">Resources</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">Contacts</a>
                    </li>

                    <li className="navItem">
                        <a href="#" className="navLink">Blog</a>
                    </li>

                    <div className="headerBtns flex">
                        <button className="btn loginBtn">
                            <a href="#"> Login</a>
                        </button>

                        <button className="btn signupBtn">
                            <a href="#"> Sign Up</a>
                        </button>
                    </div>
                    
                </ul>

                <div onClick={removeNavbar} className="closeNavbar">
                    <AiFillCloseCircle className="icon"/>
                </div>
                
            </div>

            <div onClick={showNavbar} className="toggleNavbar"> 
                <TbGridDots className="icon"/>
            </div>

        </div>
      </section>
    </div>
  )
}

export default Navbar
