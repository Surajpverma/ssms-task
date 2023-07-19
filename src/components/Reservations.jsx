import React, { useEffect, useState } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight, BsPauseFill, BsPlayFill } from 'react-icons/bs'
import { GoDot, GoDotFill } from 'react-icons/go'
import OpenTable, { positions } from "react-opentable"

import r1 from "../assets/pictures/r1.png"
import r2 from "../assets/pictures/r2.png"
import r3 from "../assets/pictures/r3.png"
import r4 from "../assets/pictures/r4.png"



function Reservations() {
  const slides = [
    {
      url: r1,
      title: "AMERICANA’S AUTHENTIC DISHES",
      button: "OUR MENU"
    },
    {
      url: r2,
      title: "SERVED TO PERFECTION",
      button: "CATERING"
    },
    {
      url: r3,
      title: "AUTHENTIC TASTE IN EVERY DISH",
      button: "OUR MENU"
    },

    {
      url: r4,
      title: "HOST YOUR NEXT PARTY WITH US",
      button: "PARTIES"
    },
  ]

  const autoSlideInterval = 3000
  const [currentIndex, setCurrentIndex] = useState(0)
  const [autoSlide, setAutoSlide] = useState(true)


  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
    setCurrentIndex(newIndex)
  }

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0 : currentIndex + 1
    setCurrentIndex(newIndex)
  }

  const goToSlide = (slideIndex) => {
    setCurrentIndex(slideIndex)
  }

  useEffect(() => {
    if (!autoSlide) return

    const slideInterval = setInterval(nextSlide, autoSlideInterval)

    return () => clearInterval(slideInterval)
  },)


  return (
    <>
      <div className='h-[70vh] w-full m-auto relative group '>
        <div style={{ backgroundImage: `url(${slides[currentIndex].url})` }} className='w-full h-full bg-center bg-cover flex items-center justify-center ease-out duration-700'>
          <div className='flex flex-col items-center justify-center bg-black/50 w-full h-full py-16 '>
            <p className='text-white text-6xl title font-normal text-center md:text-4xl sm:text-2xl w-[95%]'>{slides[currentIndex].title}</p>
            <button className='uppercase py-3 px-9 my-8 hover:bg-[#1c3149] bg-primaryRed text-white title duration-700'>
              {slides[currentIndex].button}
            </button>
            <div className='flex justify-center py-2 items-center absolute bottom-4'>
              {slides.map((slide, slideIndex) => (
                <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className='text-5xl py-0 cursor-pointer text-white'>
                  {slideIndex === currentIndex ? <GoDotFill /> : <GoDot />}

                </div>
              ))}
            </div>
            <div onClick={() => setAutoSlide(!autoSlide)} className='flex py-2 items-center absolute bottom-4 right-4 text-5xl cursor-pointer text-white'>
              {autoSlide ? <BsPauseFill /> : <BsPlayFill />}
            </div>
          </div>
        </div>
      </div >

      <div className='w-full p-0 min-h-[600px] md:min-h-[600px] 2xl:max-h-[50vh] bg-[#002e48] relative group lg:h-screen flex flex-col items-center justify-center 2xl:py-24 lg:py-16 md:pt-2'>
        <p className=' text-white text-7xl title font-normal text-center md:text-4xl mt-0'>RESERVATIONS
        </p>
        <p className='text-lg text-center py-6 md:my-4 md:text-[1rem] text-white md:py-2 w-[95%]'>Call us at <span className=' hover:underline'>(702)-331-5565</span> or book a table through Open Table reservations:</p>

        <div className='!w-[240px] !h-[300px] !min-h-[300px] overflow-hidden flex justify-center my-8 md:mt-2 '>
          <OpenTable rid="123123" className=" overflow-hidden" />
        </div>
      </div>
    </>
  )
}

export default Reservations