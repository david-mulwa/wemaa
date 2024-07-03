import React from 'react'
import Section from '../../components/Section'
import Image from 'next/image'
import {partners} from '../../components/constants'

import Serve from '../../components/Serve'

const  About = () => {
  return (
    <Section>
      
      <Serve/>
      <div className='mt-12 flex flex-wrap xl:flex-nowrap lg:flex-nowrap w-full items-center justify-between gap-8  '>
        <div>
          <Image
            src='/agree.jpg'
            alt='agree'
            width={600}
            height={600}
            className='rounded-md '
          />
        </div>
        <div className='w-full lg:w-[50%] xl:w-[50%]'>
          <h3 className='text-3xl font-bold'>Become Our Partners</h3>
          <p className='text-xl mt-2 '>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit</p>

          <p className='text-xl mt-7 '>Aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam.</p>

          <button className='border p-3 rounded-lg mt-8  bg-gray-300' href='/Contact'>Contact Us</button>
        </div>
      </div>

      <div className='gap-5  mt-12'>
        <div className='flex flex-col items-center w-full mb-12 justify-center'>
          <h2 className='font-bold text-4xl '>Our clients</h2>
          <p className='text-gray-600'>Providing logistics solutions to leading brands</p>
        </div>
        <div>
          <div className='flex w-full items-center justify-between flex-wrap '>
            {partners.map((item)=>(
              <div className='border p-5 rounded-full hover:bg-gray-200'>
                <Image
                  src={item.imgurl}
                  width={100}
                  height={100}
                  alt={item.name}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  )
}

export default About