"use client";

import { useState, useRef } from 'react';
import emailjs from '@emailjs/browser';
import Button from './Button';
import { IconBrandGithubFilled, IconBrandLinkedin } from '@tabler/icons-react';
import Image from "next/image";

const Form = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
    phone: '',
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs.send(
      process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID || '',
      process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID || '', 
      {
        from_name: form.name,
        to_name: 'David Mulwa',
        from_email: form.email,
        to_email: 'mulwakitonga2000@gmail.com',
        phone: form.phone,
        message: form.message,
      }, 
      process.env.NEXT_PUBLIC_EMAIL_USER_ID || ''
    )
    .then(() => {
      setLoading(false);
      alert('Thank you. I will get back to you as soon as possible');
      setForm({
        name: '',
        email: '',
        message: '',
        phone: '',
      });
    }, (error) => {
      setLoading(false);
      console.error(error);
      alert('Ahh, something went wrong. Please try again');
    });
  };

  return (
    <div className='max-md:flex-wrap max-sm:flex-wrap xl:flex-nowrap lg:flex-nowrap flex gap-10 overflow-hidden w-full items-center justify-between'>
      <div className='flex flex-col bg-black rounded-2xl items-center justify-center w-full'>
        <p className='text-3xl text-white'>Get in touch</p>
        <h3 className='text-xl mt-4'>Contact Me</h3>
        <div className='flex gap-8 items-center justify-center mt-4'>
          <Button href='https://github.com/david-mulwa'>
            <IconBrandGithubFilled className='text-white' />
          </Button>
          <Button href='https://www.linkedin.com/in/david-mulwa-3126aa255/'>
            <IconBrandLinkedin className='text-white' />
          </Button>
        </div>

        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-2 lg:w-[50%] xl:w-[50%]'>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Name</span>
            <input
              type='text'
              name='name'
              value={form.name}
              onChange={handleChange}
              placeholder="What's your name"
              required
              className='py-4 px-6 text-black rounded-lg outline-none border-none'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Email</span>
            <input
              type='email'
              name='email'
              value={form.email}
              onChange={handleChange}
              placeholder="example@123.com"
              required
              className='py-4 px-6 rounded-lg text-black outline-none border-none'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Phone Number</span>
            <input
              type='tel'
              name='phone'
              value={form.phone}
              onChange={handleChange}
              placeholder="0712345678"
              required
              className='py-4 px-6 rounded-lg text-black outline-none border-none'
            />
          </label>
          <label className='flex flex-col'>
            <span className='text-white font-medium mb-4'>Your Message</span>
            <textarea
              name='message'
              value={form.message}
              onChange={handleChange}
              placeholder="What do you want to say"
              required
              className='py-4 px-6 text-black rounded-lg outline-none border-none'
            />
          </label>
          <Button type='submit' className='text-white bg-black border border-white rounded-full p-3 font-bold shadow-md w-fit'>
            {loading ? 'Sending...' : 'Send'}
          </Button>
        </form>
      </div>
      <div>
        <Image
          src='/contact.jpg'
          width={1350}
          height={1350}
          alt='hero'
        />
      </div>
    </div>
  );
}

export default Form;
