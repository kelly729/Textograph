import React from 'react'
import { Modal } from './modal'
import InfiniteScroll from 'react-infinite-scroll-component';


export const Grid = ({results,openModal,ismodalOpen}) => {
  return (
    <InfiniteScroll
    dataLength={results.length}
    >
    <>
    <div style={ismodalOpen?{opacity:0.4}:{opacity:1}} className='grid'>
        {results.map((item)=>{
            return(
                <div key={item.id} className="grid-item">
                    <img onClick={()=>openModal(item)} src={item.src} alt={item.id}></img>
                    <div className='content'>
                        <h2>{item.model}</h2>
                        <p>{item.prompt}</p>
                    </div>

                </div>
            )
        })}

    </div>


    </>
    </InfiniteScroll>
  )
}
