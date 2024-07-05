import React from 'react';
import Section from "../components/Section";
import Button from "../components/Button";
import { home, services, prog } from '../components/constants';
import Sertag from '../components/sertag';
import Image from 'next/image';
import { CardStackDemo } from '../components/Testimony';

const Home = () => {
  return (
    <Section>
      <div className='bg-[url("/contact.jpg")] bg-cover bg-center w-full h-full bg-opacity-25'>
        <div className='w-full lg:w-[50%] xl:w-[50%] p-5'>
          <h2 className='text-5xl text-white font-bold mt-12'>INDUSTRY LEADING LOGISTIC FIRM</h2>
          <p className='text-white text-xl mt-12 text-balance'>
            Being relatively new in the industry, the company has sourced for experienced, self-motivated staff in logistics, transport, and maintenance of the new fleet of trucks acquired to take the company to the next level of growth.
          </p>
          <div className='flex mt-12 gap-6 items-center justify-center'>
            <Button className='border p-3 rounded-lg mt-8 bg-gray-300' href='/Contact'>Contact Us</Button>
            <Button className='border p-3 rounded-lg mt-8 bg-gray-300' href='/Services'>Discover More</Button>
          </div>
        </div>
      </div>

      <div className='w-full grid xl:grid-cols-4 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 mt-12 gap-5'>
        {home.map((item) => (
          <div key={item.id} className='card items-center justify-center bg-gray-200'>
            <div className='flex gap-1 items-center justify-center'>
              <span>{item.icon}</span>
              <h2 className='text-2xl font-bold'>{item.title}</h2>
            </div>
            <p className='text-lg mt-5'>{item.descr}</p>
          </div>
        ))}
      </div>

      <div className='mt-12'>
        
        <div className='mt-4 grid xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-4'>
          {services.map((item) => (
            <div key={item.id} className='card'>
              <Image src={item.imageUrl} alt={item.name} width={300} height={200} />
              <div>
                <h3 className='text-2xl font-bold mb-3'>{item.name}</h3>
                <p>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className='mt-12 flex h-auto gap-5 flex-wrap items-center justify-between'>
        <div className='flex flex-col w-full h-auto xl:h-[50%] lg:h-[50%] border-l-4 p-3 border-black xl:w-[69%] lg:w-[69%]'>
          <h6 className='font-bold text-2xl'>OUR TESTIMONIAL</h6>
          <h3 className='text-4xl font-bold mt-2 mb-4'>What customers say about us</h3>
          <p className='text-balance text-xl'>
            We revolutionize the way sales teams interact with customers. Our success has been driven by your passion for great selling.
          </p>
        </div>
        <div className='w-full'>
          <CardStackDemo />
        </div>
      </div>

      <div className='top-[-500px] flex lg:flex-nowrap xl:flex-nowrap md:flex-wrap sm:flex-wrap gap-5'>
        <div className='w-full gap-5 space-y-5 xl:w-[69%] lg:w-[70%]'>
          {prog.map((item) => (
            <div key={item.id} className='flex flex-col gap-1 group group:ease-in-out'>
              <label className='flex items-center justify-between'>
                <span className='font-bold text-xl'>{item.name}</span>
                <span className='font-bold text-xl'>{item.value}</span>
              </label>
              <progress
                color='blue'
                value={item.value}
                max='100'
                className='bg-gray-500 w-full transition ease-in-out delay-150 color-blue-200'
              />
            </div>
          ))}
        </div>

        <div className='flex flex-col w-full xl:w-[31%] lg:w-[30%] h-auto border-l-4 p-3 border-black md:mt-5 sm:mt-7'>
          <h1 className='text-3xl font-bold'>Our Year In Numbers</h1>
          <p className='text-balance mt-12 text-lg'>
            We revolutionize the way sales teams interact with customers. Our success has been driven by your passion for great selling.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Home;
