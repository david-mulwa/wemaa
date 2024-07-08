import React from 'react'
import {IconBrandLinkedin, IconBrandFacebook, IconMail} from '@tabler/icons-react'
import { navItems } from './constants'
import Link from "next/link";

const Footer = () => {
  return (
    <>
        <div className='w-full h-[150px] flex gap-3 items-center justify-center bg-gray-700 text-center text-white mt-12'>
            <IconBrandLinkedin />
            < IconBrandFacebook />
            <IconMail/>   
        </div>

        <div  className='bg-gray-900 w-full h-auto p-5 grid grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-5 mb-12'>
            <div className=' flex flex-col justify-center '>
                <h1 className='text-white font-bold text-4xl  '>Wema Parcels</h1>
                <p className='text-white text-balance mt-4'>Wema Parcel Service Limited was incorporated in the Year 2018 as a Private Limited Company under the Companies Act 2015. The Company has a wide scope of activities which include logistics, warehousing and distribution.</p>
            </div>
            <div>
                {navItems.map((item)=>(
                    <Link href={item.link} key={item.name} className='flex flex-col '>
                            <span className='text-white'>{item.name}</span>
                    </Link>                    
                ))}
            </div>

            <div className='text-white'>
                <h1 className='text-2xl font-bold'>Find us</h1>
                <p className='text-balance'>Address: P.O Box 35017-00100<br/>
                    Nairobi<br/>
                    Telephone: +254776165784<br/>
                    Address: P.O Box 84-80113<br/>
                    Mombasa<br/>
                    Telephone: +254776166153
                </p>
            </div>
        </div>
    
    </>
  )
    
}

export default Footer