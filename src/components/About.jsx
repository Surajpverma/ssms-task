import React from 'react'
import about1 from "../assets/pictures/about_us_left_1.jpeg"
import deco from "../assets/decoration.png"

const About = () => {
    return (
        <div className='bg_about md:bg-scroll'>
            <div className='flex md:flex-col items-center justify-center bg-[#e1ecfa]'>
                <div className='w-1/2 min-h-[30rem] md:w-full md:min-h-[300px] about1'></div>
                <div className='w-1/2 bg-[#e1ecfa] flex items-center justify-center h-full md:w-full'>
                    <div className='h-full flex flex-col items-center justify-between w-[90%] min-h-[26vh] py-8 '>
                        <h1 className='title text-center text-[4rem] 2xl:text-[3rem] text-black'>ABOUT US</h1>
                        <img src={deco} alt="" className=' md:w-[120px] lg:w-[180px] w-[220px] py-4' />
                        <p className='text-lg text-center text-black pb-4'>Americana brings incredible blends of various cultures to the Desert Shores community in Las Vegas. The restaurant offers fine dining with a blended cultural theme of modern American cuisine.</p>
                        <button className='uppercase py-3 px-9 my-4 bg-[#1c3149] hover:bg-primaryRed text-white title duration-500'>Read More</button>
                    </div>
                </div>
            </div>

            <div className='flex flex-row-reverse md:flex-col items-center justify-between p-[4rem] lg:p-[2rem] md:p-0'>
                <div className='w-[45%] min-h-[30rem] md:w-full md:min-h-[300px] about2' />
                <div className='w-[45%] flex items-center justify-center h-full md:w-full'>
                    <div className='h-full mx-20 flex flex-col items-center justify-between w-[90%] min-h-[26vh] py-8 '>
                        <h1 className='title text-center text-[4rem] 2xl:text-[3rem] text-black'>CATERING</h1>
                        <img src={deco} alt="" className=' md:w-[120px] lg:w-[180px] w-[220px] py-4' />
                        <p className='sub-title text-3xl md:text-2xl lg:text-2xl text-center'>Let us cater your next event</p>
                        <p className='text-lg text-center text-black pb-4 md:my-4 md:text-[1rem]'>We Cater your Needs. Elegant style of catering for your style and budget. Any kind of event from weddings to birthdays.</p>
                        <button className='uppercase py-3 px-9 my-4 hover:bg-[#1c3149] bg-primaryRed text-white title duration-500'>CATERING</button>
                    </div>
                </div>
            </div>

            <div className='flex md:flex-col items-center justify-between p-[4rem] lg:p-[2rem] md:p-0'>
                <div className='w-[45%] min-h-[30rem] md:w-full md:min-h-[300px] about3' />
                <div className='w-[45%] flex items-center justify-center h-full md:w-full'>
                    <div className='h-full mx-20 flex flex-col items-center justify-between w-[90%] min-h-[26vh] py-8 '>
                        <h1 className='title text-center text-[4rem] 2xl:text-[3rem] text-black'>PARTIES</h1>
                        <img src={deco} alt="" className=' md:w-[120px] lg:w-[180px] w-[220px] py-4' />
                        <p className='sub-title text-4xl md:text-2xl lg:text-2xl text-center'>Book your next party with us!</p>
                        <p className='text-lg text-center text-black pb-4 md:my-4 md:text-[1rem]'>No matter the occasion you can celebrate at our place! Book a private party.</p>
                        <button className='uppercase py-3 px-9 my-4 hover:bg-[#1c3149] bg-primaryRed text-white title duration-500'>PARTIES</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About