import React from 'react'
import Section from "../../components/Section";
import Sertag from '../../components/sertag'
import Button from "../../components/Button";
import {services, prog} from '../../components/constants'
import Image from 'next/image'
const Services = () => {
  return (
    <Section>
      <Sertag className='mt-6'/>
      <div className='mt-4 grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4   '>
        {services.map((item)=>(
          <div key={item.id} className='card'>
            <Image 
              src={item.imageUrl}
              alt={item.name}
              width={300}
              height={200}
            />
            <div>
              <h3 className='text-2xl font-bold mb-3'>{item.name}</h3>
              <p>{item.description}</p>
            </div>

            <Button className='border p-3 rounded-lg mt-8  bg-gray-300 text-black  hover:bg-gray-800 hover:text-white' href='/Contact' >Get Quatation</Button>

          </div>
        ))}
      </div>
      <div className=' flex lg:flex-nowrap xl:flex-nowrap md:flex-wrap sm:flex-wrap gap-5  '>
      
      <div className='w-full gap-5 space-y-5 xl:w-[69%] lg:w-[70%]'>
        {prog.map((item)=>(
          <div key={item.id} className= 'flex flex-col gap-1 group group:ease-in-out '>
            <label className='flex items-center justify-between'>
              <span className='font-bold text-xl '>{item.name}</span>
              <span className='font-bold text-xl '>{item.value}</span>
            </label>
            <progress color="blue" value={item.value} max='100' className='bg-gray-500 w-full transition ease-in-out delay-150 color-blue-200'/>
          </div>
        ))}
      </div>


      <div className='flex flex-col  w-full xl:w-[31%] lg:w-[30%] h-auto border-l-4 p-3 border-black md:mt-5 sm:mt-7'>
        <h1 className='text-3xl font-bold '>Our Year In Numbers</h1>
        <p className='text-balance mt-12 text-lg'>We revolutionize the way sales teams interact with customers. Our success has been driven by your passion for great selling</p>
        
      </div>    
    </div>
    </Section>
  )
}

export default Services