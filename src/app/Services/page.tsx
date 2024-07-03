import React from 'react'
import Section from "../../components/Section";
import {services} from '../../components/constants'
import Image from 'next/image'
const Services = () => {
  return (
    <Section>
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

            <button className='border p-3 rounded-lg mt-8  bg-gray-300 text-black  hover:bg-gray-800 hover:text-white' href='/Contact' >Get Quatation</button>

          </div>
        ))}
      </div>
    </Section>
  )
}

export default Services