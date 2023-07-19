import React from 'react'
import { easeOut, motion } from "framer-motion"

import about1 from "../assets/pictures/about_us_left_1.jpeg"
import deco from "../assets/decoration.png"

const About = () => {
    return (
        <div className='bg_about md:bg-scroll'>
            <div className='flex md:flex-col items-center justify-center bg-[#e1ecfa]'>
                <motion.div className='w-1/2 min-h-[30rem] md:w-full md:min-h-[300px] about1' initial={{ x: "-100%"}} whileInView={{ x: 0}} transition={ {duration: 1}} viewport={{once:true}}></motion.div>
                <div className='w-1/2 bg-[#e1ecfa] flex items-center justify-center h-full md:w-full'>
                    <div className='h-full flex flex-col items-center justify-between w-[90%] min-h-[26vh] py-8 '>
                        <motion.h1 className='title text-center text-[4rem] 2xl:text-[3rem] text-black' initial={{ opacity: 0}} whileInView={{ opacity: 1}} transition={ {duration: 3}} viewport={{once:true}} >ABOUT US</motion.h1>
                        <motion.img src={deco} alt="" className=' md:w-[120px] lg:w-[180px] w-[220px] py-4' initial={{ opacity: 0}} whileInView={{ opacity: 1}} transition={ {duration: 2}} viewport={{once:true}} />
                        <motion.p className='text-lg text-center text-black py-4' initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1}} transition={ {duration: 1, delay: 0.5}} viewport={{once:true}}>Americana brings incredible blends of various cultures to the Desert Shores community in Las Vegas. The restaurant offers fine dining with a blended cultural theme of modern American cuisine.</motion.p>
                        <motion.button className='uppercase py-3 px-9 my-4 bg-[#1c3149] hover:bg-primaryRed text-white title duration-500' initial={{ opacity: 0, x: -100}} whileInView={{ opacity: 1, x: 0}} transition={{duration: 1 }} viewport={{once:true}} >Read More</motion.button>
                    </div>
                </div>
            </div>

            <div className='flex flex-row-reverse md:flex-col items-center justify-between p-[4rem] lg:p-[2rem] md:p-0'>
                <motion.div className='w-[45%] min-h-[30rem] md:w-full md:min-h-[300px] about2' initial={{ y: "100%"}} whileInView={{ y: 0}} transition={ {duration: 1}} viewport={{once:true}} />
                <div className='w-[45%] flex items-center justify-center h-full md:w-full'>
                    <div className='h-full mx-20 flex flex-col items-center justify-between w-[90%] min-h-[26vh] py-8 '>
                        <motion.h1 className='title text-center text-[4rem] 2xl:text-[3rem] text-black' initial={{ opacity: 0}} whileInView={{ opacity: 1}} transition={ {duration: 3}} viewport={{once:true}} >CATERING</motion.h1>
                        <motion.img src={deco} alt="" className=' md:w-[120px] lg:w-[180px] w-[220px] py-4' initial={{ opacity: 0}} whileInView={{ opacity: 1}} transition={ {duration: 2 }} viewport={{once:true}} />
                        <motion.p className='sub-title text-3xl md:text-2xl lg:text-2xl text-center' initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1}} transition={ {duration: 1, delay: 1}} viewport={{once:true}}>Let us cater your next event</motion.p>
                        <motion.p className='text-lg text-center text-black py-4 md:my-4 md:text-[1rem]' initial={{ y: 100, opacity: 0 }} whileInView={{ y: 0, opacity: 1}} transition={ {duration: 1, delay: 1.5}} viewport={{once:true}}>We Cater your Needs. Elegant style of catering for your style and budget. Any kind of event from weddings to birthdays.</motion.p>
                        <motion.button className='uppercase py-3 px-9 my-4 hover:bg-[#1c3149] bg-primaryRed text-white title duration-500' initial={{ opacity: 0, x: -100}} whileInView={{ opacity: 1, x: 0}} transition={{duration: 1 }} viewport={{once:true}}>CATERING</motion.button>
                    </div>
                </div>
            </div>

            <div className='flex md:flex-col items-center justify-between p-[4rem] lg:p-[2rem] md:p-0'>
                <motion.div className='w-[45%] min-h-[30rem] md:w-full md:min-h-[300px] about3' initial={{ x: "-100%"}} whileInView={{ x: 0}} transition={ {duration: 1}} viewport={{once:true}} />
                <div className='w-[45%] flex items-center justify-center h-full md:w-full'>
                    <div className='h-full mx-20 flex flex-col items-center justify-between w-[90%] min-h-[26vh] py-8 '>
                        <motion.h1 className='title text-center text-[4rem] 2xl:text-[3rem] text-black' initial={{ opacity: 0}} whileInView={{ opacity: 1}} transition={ {duration: 3}} viewport={{once:true}} >PARTIES</motion.h1>
                        <motion.img src={deco} alt="" className=' md:w-[120px] lg:w-[180px] w-[220px] py-4' initial={{ opacity: 0}} whileInView={{ opacity: 1}} transition={ {duration: 2 }} viewport={{once:true}} />
                        <motion.p className='sub-title text-4xl md:text-2xl lg:text-2xl text-center' initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1}} transition={ {duration: 1, delay: 1}} viewport={{once:true}}>Book your next party with us!</motion.p>
                        <motion.p className='text-lg text-center text-black pb-4 md:my-4 md:text-[1rem]' initial={{ x: -100, opacity: 0 }} whileInView={{ x: 0, opacity: 1}} transition={ {duration: 1, delay: 1}} viewport={{once:true}}>No matter the occasion you can celebrate at our place! Book a private party.</motion.p>
                        <motion.button className='uppercase py-3 px-9 my-4 hover:bg-[#1c3149] bg-primaryRed text-white title duration-500' initial={{ opacity: 0, x: -100}} whileInView={{ opacity: 1, x: 0}} transition={{duration: 1 }} viewport={{once:true}}>PARTIES</motion.button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default About