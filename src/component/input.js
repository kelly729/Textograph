import React from 'react'

import {GoSearch} from "react-icons/go";

export const Input = ({setInput,handleSearch}) => {
  return (
    <div className='search'>
        <div>
           <i><GoSearch/></i>
            <input onChange={(e)=>setInput(e.target.value)}></input>
        </div>
        <button onClick={handleSearch}>search</button>
        
    </div>
  )
}
