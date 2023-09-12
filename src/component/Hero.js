import React from 'react'
import {FaFacebook,FaInstagram,FaTwitter,FaTelegram} from "react-icons/fa";

export const Hero = () => {
  return (
    <div className='hero'>
        <h1>TextoGraph</h1>
        <p>image A.I generator sponsored by stable diffusion search engine</p> 
        <div>
            <button>Learn more</button>
            <button>Join discord</button>
        </div>
        <div>
            <i><FaFacebook/></i>
            <i><FaInstagram/></i>
            <i><FaTelegram></FaTelegram></i>
            <i><FaTwitter/></i>
        </div>
    </div>
  )
}
