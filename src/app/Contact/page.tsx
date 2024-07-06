import React from 'react'
import Section from '../../components/Section'
import Form from '../../components/Form'
import { contact } from '../../components/constants'
const Contact = () => {
  return (
    <Section>
      <Form/>
      <div className='mt-12 grid lg:grid-cols-3 xl:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-6'>
          {contact.map((item)=>(
            <div key={item.id} className='card flex flex-col items-center justify-center gap-5'>
              <span>{item.icon}</span>
              <h1 className='text-2xl font-bold'>{item.title}</h1>
              <p className='text-lg'>{item.details}</p>
            </div>
          ))}
      </div>
    </Section>
  )
}

export default Contact