"use client"

import React, {useRef, useState} from 'react'
import Section from "../../components/Section";
import Button from "../../components/Button";

const Track = () => {

  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    track: '',
    
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
  };

  return (
    <Section>
      <form ref={formRef} onSubmit={handleSubmit} className='mt-5 bg-black text-white p-3'>

        <label className='flex flex-col gap-10 w-full h-auto justify-center items-center'>
          <span className='border w-full p-4 text-2xl font-bold text-white text-center rounded-lg'>Enter the Consignment No.</span>
          <div className='flex md:flex-wrap sm:flex-wrap lg:flex-nowrap xl:flex-nowrap gap-5 w-full justify-between items-center'>
            <input
              type='text'
              name='track'
              value={form.track}
              onChange={handleChange}
              placeholder='track your cargo using the waybill '
              required
              className='w-full p-4 border rounded-lg text-black lg:w-[75%] xl:w-[75%]'
            />

            <Button className='border rounded-lg p-4 w-full lg:w-[25%] xl:w-[25%] bg-gray-200 text-black text-center items-center justify-center text-xl'>{loading ? 'Tracking....' : 'Track Cargo'}</Button>
          </div>

          <span className='text-lg text-start mb-6 '>Ex:WPSCWEMA12345</span>
        </label>
      </form>
    </Section>
  )
}

export default Track