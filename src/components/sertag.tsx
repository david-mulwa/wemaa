import React from 'react'

const sertag = ({className}:{className:string}) => {
  return (
    <div className={`flex flex-col  w-full h-auto border-l-4 p-3 border-black ${className||''}`}>
        <h1 className='text-4xl font-bold mb-3'>Our Services</h1>
        <p className='text-balance text-gray-800 text-lg'>Our company provides services in courier clearing and forwarding as well as parcel carrier job. We understand the importance of delivering packages on time and ensuring they reach their intended destination safely. With our experienced team and reliable network of transportation partners, we offer professional handling and clearance for all types of shipments.</p>
    </div>
  )
}

export default sertag