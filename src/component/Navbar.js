import React from 'react'
import { Input } from './input'
import {BiSun,BiMoon} from "react-icons/bi";

export const Navbar = ({setInput,handleSearch,ismodalOpen,handleTheme,Theme}) => {
  return (
   <div style={ismodalOpen?{opacity:0.4}:{opacity:1}} className='navbar'>
    <h2>TextoGraph</h2>
    <Input handleSearch={handleSearch} setInput={setInput}/>
    <i className={Theme==="light"?"sun":""} onClick={handleTheme}>{Theme==='light'?<BiSun/>:<BiMoon/>}</i>
    
   </div>
  )
}
