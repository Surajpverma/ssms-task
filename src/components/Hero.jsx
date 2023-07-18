import React from 'react'
import backgroundVideo from '../assets/intro-video.mp4'
import { FaMapMarkerAlt } from "react-icons/fa"

const Hero = () => {
  return (
    <div className='w-screen'>
      <video src={backgroundVideo} type="video/mp4" autoPlay muted loop className='w-full object-cover object-bottom aspect-video' />
      <div className='bg-primaryRed text-white flex items-center justify-center p-8 text-[1.2rem] sm:flex-col text-center'>
        <div className="hover:text-black cursor-pointer"><FaMapMarkerAlt /></div>
        <p className=' text-white p-4 xs:text-[1rem]'> 2620 Regatta Drive, Las Vegas, NV 89128</p>
      </div>

    </div>
  )
}

export default Hero