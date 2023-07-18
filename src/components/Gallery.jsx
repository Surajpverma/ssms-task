import { useState, useEffect } from "react"
import { BsChevronCompactLeft, BsChevronCompactRight, BsPauseFill, BsPlayFill } from 'react-icons/bs'
import { BiSolidChevronLeftCircle, BiSolidChevronRightCircle } from 'react-icons/bi'
import { GoDot, GoDotFill } from 'react-icons/go'
import { IoIosCloseCircle } from "react-icons/io"

import g1 from "../assets/gallery/1.jpeg"
import g2 from "../assets/gallery/2.jpeg"
import g3 from "../assets/gallery/3.jpeg"
import g4 from "../assets/gallery/4.jpeg"
import g5 from "../assets/gallery/5.jpeg"
import g6 from "../assets/gallery/6.jpeg"
import g7 from "../assets/gallery/7.jpeg"
import g8 from "../assets/gallery/8.jpeg"
import g9 from "../assets/gallery/9.jpeg"
import g10 from "../assets/gallery/10.jpeg"
import g11 from "../assets/gallery/11.jpeg"
import g12 from "../assets/gallery/12.jpeg"
import g13 from "../assets/gallery/13.jpeg"
import g14 from "../assets/gallery/14.jpeg"

const slides = [
    g1, g2, g3, g4, g5, g6, g7, g8, g9, g10, g11, g12, g13, g14
]

const Gallery = () => {
    const autoSlideInterval = 3000
    const [currentIndex, setCurrentIndex] = useState(0)
    const [open, setOpen] = useState(false)


    const prevSlide = () => {
        const isFirstSlide = currentIndex === 0
        const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1
        setCurrentIndex(newIndex)
    };

    const nextSlide = () => {
        const isLastSlide = currentIndex === slides.length - 1
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    };

    const goToSlide = (slideIndex) => {
        setCurrentIndex(slideIndex)
    };

    const handleClick = (slideIndex) => {
        goToSlide(slideIndex)
        setOpen(!open)
    }


    return (
        <div>
            <div className='flex items-center justify-center top-0 left-0 h-screen w-screen m-auto !z-50 group bg-black/40 fixed' style={{ visibility: `${open ? "visible" : "hidden"}` }}>
                <div className='relative flex items-center justify-center'>

                    <div className="w-[750px] md:w-[85vw] h-[750px] lg:h-auto flex items-center justify-center bg-white">
                        <img src={slides[currentIndex]} alt="" className="w-full h-full p-4 md:p-2 object-cover" />
                        <div className='hidden group-hover:block absolute top-0 right-0 text-2xl rounded-full translate-x-1/2 -translate-y-1/2 bg-white text-black cursor-pointer shadow-lg shadow-black md:p-[0.5px]'>
                            <IoIosCloseCircle onClick={() => setOpen(!open)} size={30} />
                        </div>
                    </div>

                    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] left-7 text-2xl rounded-full p-[1px] bg-white text-black cursor-pointer shadow-lg shadow-black'>
                        <BiSolidChevronLeftCircle onClick={prevSlide} size={30} />
                    </div>

                    <div className='hidden group-hover:block absolute top-[50%] -translate-x-0 translate-y-[-50%] right-7 text-2xl rounded-full p-[1px] bg-white text-black cursor-pointer shadow-lg shadow-black'>
                        <BiSolidChevronRightCircle onClick={nextSlide} size={30} />
                    </div>
                </div>
            </div >


            <div className="grid grid-cols-5 grid-rows-4 gap-0 row-span-2">
            {slides.map((slide, slideIndex) => (
                <div key={slideIndex} onClick={ () => {
                    goToSlide(slideIndex)
                    setOpen(!open)
                } } className='py-0 cursor-pointer bg-black aspect-square overflow-hidden' style={{ gridRow: `${slideIndex % 7 === 0 ? "span 2" : "span 1"}`, gridColumn: `${slideIndex % 7 === 0 ? "span 2" : "span 1"}` }} >
                  
                  <img src={slide} alt={slide} className="hover:scale-[1.1] duration-700 opacity-80 hover:opacity-100" />

                </div>
              ))}
            </div>


        </div>
    )
}

export default Gallery