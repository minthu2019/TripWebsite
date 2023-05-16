import React,{useState} from 'react'
import "./login.css" 
import GoogleImage from "./LoginImage/GoogleImage.jpg"
import TiwitterImage from "./LoginImage/TiwitterImage.png"
import FacebookImage from "./LoginImage/facebookImage.png"

const Login = () => {
  
    const [registerBtn, setregisterBtn ] = useState("Register");

    const HandleClick = () => {
      setregisterBtn("login.style.left = -450px")
    }

  return (
    <section>
      <div class="hero">
        <div class="form-box">
            <div class="button-box">
                <div id="btn"></div>
                <button type="button" class="toggle-btn" > Login</button>   
                <button type="button" class="toggle-btn" onClick={HandleClick}> Register</button>
            </div>

            
            <div class="social-icons">
                <a href="https://www.facebook.com/"> <img src={FacebookImage} /> </a>
                <a href="https://twitter.com/">  <img src={TiwitterImage} /> </a>
                <a href="https://google.com/">  <img src={GoogleImage} /> </a>
            </div>

            <form id="login" class="input-group">
                <input type="text" class="input-field" placeholder="User Id" required />
                <input type="password" class="input-field" placeholder="Enter Password" required />
                <input type="checkbox" class="check-box" /><span>Remember Password</span>
                <button type="submit" class="submit-btn">Log In</button>              
            </form>
       
            <form id={registerBtn} class="input-group">
                <input type="text" class="input-field" placeholder="User Id" required />
                <input type="email" class="input-field" placeholder="email Id" required />
                <input type="password" class="input-field" placeholder="Enter Password" required />
                <input type="checkbox" class="check-box" /><span>I agree to the term & conditions</span>
                <button type="submit" class="submit-btn">Register</button>              
            </form>

        </div>
    </div>
    </section>
  )
}

export default Login
