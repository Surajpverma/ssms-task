import React, { useEffect, useState } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight, BsPauseFill, BsPlayFill, BsFillStarFill } from 'react-icons/bs';
import { GoDot, GoDotFill } from 'react-icons/go';
import { AiFillStar, AiTwotoneCheckSquare } from "react-icons/ai";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa"

const Reviews = () => {

    const slides = [
        {
            customer: "Nikole T ",
            text: "Absolutely delicious food! Great service! Great atmosphere. Sat inside with a beautiful water view! I recommend going first thing when they open. It wasn't too crowded despite the lunchtime busyness. A great way to celebrate my birthday early! I WILL BE COMING BACK!"
        },
        {
            customer: "Jane C ",
            text: "If you're looking for a fine dining with superb customer service... this place is the gem! Been here last night, and everything is absolutely amazing. Our server is the utmost attentive and accommodating waiter I have encountered for the longest time..."
        },
        {
            customer: "Karina K ",
            text: "Wow this is a restaurant I plan on going to a thousand times over. Located in the beautiful desire shores, this was a fabulous dining experience. The seating was better than I expected, and out of all the restaurants in desert shores, this indoor dining seating gives you the best view of the lake."
        },

        {
            customer: "Karen S ",
            text: "Went for their Sunday brunch and my party and I could not have been happier . They offer bottomless mimosas , bloody Mary's , and palomas ( tequila and grapefruit juice ) , which was nice because they allowed us to switch drinks up when ordering more  rounds..."
        },

        {
            customer: "Yogi C ",
            text: "Wonderful and beautiful to have Sunday brunch here! It is by the lake and the ambient is just so relaxing! Food was excellent! The salad was so fresh and crispy. The dressing was just mixed to perfect. And the main dish of pasta and salmon was so tender and juicy."
        },
    ];

    const autoSlideInterval = 3000
    const [currentIndex, setCurrentIndex] = useState(0)
    const [autoSlide, setAutoSlide] = useState(false)


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

    return (
        <div className='bg_review !bg-local'>
            <div className='h-auto w-full m-auto relative group flex items-center justify-center flex-col lg:h-auto md:'>
                <div className='w-1/2 h-full bg-center bg-cover flex items-center justify-center ease-out duration-500 lg:w-[70%] md:w-[80%] sm:w-full min-w-[250px]'>
                    <div className='flex flex-col items-center w-full h-full py-16 md:py-4 md:px-0 md:mx-0 xs:py-2'>
                        <p className=' text-black text-7xl title font-normal text-center md:text-4xl py-4 xs:pt-0'>REVIEWS</p>

                        <p className='text-[#002e48] text-4xl sub-title font-normal text-center md:text-2xl sm:text-xl py-4'>Review by - Yelp</p>

                        <div className='text-primaryRed gap-2 md:gap-0 text-xl sub-title font-normal text-center md:text-2xl sm:text-[1rem] flex flex-row items-center justify-center py-4'>
                            <p className='text-black sm:text-xl'>{slides[currentIndex].customer}: </p>
                            <AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar /><AiFillStar />
                        </div>

                        <div className='flex w-full py-4'>
                            <span className='text-[3rem] sub-title md:hidden self-start'> <FaQuoteLeft /></span>
                            <p className='text-center px-4 py-6 sm:'> {slides[currentIndex].text} </p>
                            <span className='text-[3rem] sub-title md:hidden self-end'> <FaQuoteRight /></span>
                        </div>


                            <div className='flex items-center justify-center gap-4 py-4'>
                                {slides.map((slide, slideIndex) => (
                                    <div key={slideIndex} onClick={() => goToSlide(slideIndex)} className='text-3xl py-0 cursor-pointer text-primaryRed'>
                                        {slideIndex === currentIndex ? <GoDotFill /> : <GoDot />}
                                    </div>
                                ))}
                            </div>
                            <div onClick={() => setAutoSlide(!autoSlide)} className='flex py-2 items-center text-3xl cursor-pointer text-primaryRed gap-2'>
                                <span className="text-[1.25rem]" ><AiTwotoneCheckSquare /></span> <BsPlayFill />
                            </div>



                    </div>
                </div>
            </div>
        </div>
    )
}

export default Reviews