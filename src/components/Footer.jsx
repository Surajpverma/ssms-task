import React from 'react'
import { AiOutlineInstagram } from "react-icons/ai"
import { BiLogoYelp } from "react-icons/bi"
import spothopper from "../assets/spothopper.png"

const Footer = () => {
    return (
        <div className=''>

            <div className='w-full flex md:flex-col bg-primaryRed items-center justify-center text-white px-4 py-6'>

                <div className='w-[300px] lg:w-[250px] md:w-full sm:w-full xs:w-full self-start md:text-center md:self-center'>
                    <h1 className='title text-3xl py-6'>LOCATION</h1>
                    <p className='text-[1rem]'>2620 Regatta Drive <br /> Las Vegas, NV <br />  89128</p>
                </div>

                <div className='w-[350px] md:min-w-[100%] sm:w-full xs:w-full self-start md:text-center md:self-center'>
                    <h1 className='title text-3xl py-6'>HOURS</h1>
                    <p className='text-[1rem] md:w-full md:px-4 '>
                        Lunch 11:30AM-3:00PM Tuesday-Saturday <br />
                        Brunch 11:00 AM- 3:00PM Sunday <br />
                        Dinner Tuesday, Wednesday, Thursday, Sunday, 3:00PM-9:00PM <br />
                        Dinner Friday & Saturday 3:00PM -9:30PM
                    </p>
                </div>

                <div className='w-[300px] lg:w-[250px] md:w-full sm:w-full xs:w-full self-start flex flex-col items-center md:text-center md:self-center'>

                    <div className=''>
                        <h1 className='title text-3xl py-6'>FIND US ON...</h1>
                        <div className="flex items-center justify-start text-white gap-2 text-2xl md:justify-center">
                            <div className="p-1 hover:bg-white hover:text-primaryRed duration-500 cursor-pointer"><AiOutlineInstagram /></div>
                            <div className="p-1 hover:bg-white hover:text-primaryRed duration-500 cursor-pointer"><BiLogoYelp /></div>
                        </div>
                    </div>

                    <div className=''>
                        <h1 className='title text-3xl py-6'>CONTACT US</h1>
                        <p className='text-[1rem] hover:underline'>(702)-331-5565</p>
                    </div>

                </div>

            </div>

            <div className='flex flex-col items-center justify-center bg-[#002e48] border-t-2 border-t-white text-white'>
                <div className='flex items-center justify-center py-6'>
                    Powered by: <img src={spothopper} alt="spothopper" className='w-[12rem]' />
                </div>
                <p className='text-[1rem] hover:underline hover:text-[#D87546] cursor-pointer pb-6 text-center px-4'>Website design, Social Media marketing and Email marketing provided by SpotHopper.</p>
            </div>

            <div className='flex items-center justify-center bg-[#353638] text-white py-5 md:flex md:flex-col'>
                <p className='text-center'> We strive to make our website accessible to everybody. &nbsp;</p>
                <span className='underline cursor-pointer'>Learn More.</span>
            </div>
        </div>
    )
}

export default Footer