import React from 'react'
import {about} from './constants'
import Sertag from './sertag'

const Serve = () => {
  return (
    <div>
        <div className='grid lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 w-full gap-5 items-top justify-center'>
          <Sertag  className="card"/>
            {about.map((item)=>(
               <div key={item.id} className='flex flex-col  justify-center items-start text-balance card'>
                <div className='flex gap-3 items-center justify-center'>
                  <span className='text-2xl font-bold '>{item.iconURL}</span>
                  <h3 className='text-2xl font-bold '>{item.name}</h3>
                </div>
                
                <p className='text-lg mt-3 text-balance  text-gray-800 '>{item.description}</p>
               </div> 
            ))}
        </div>
    </div>
  )
}

export default Serve