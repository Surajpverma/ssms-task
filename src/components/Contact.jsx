import React from 'react'
import Map from './Map'

const Contact = () => {
    return (
        <div className='w-full h-[500px] flex lg:flex-col items-center justify-center lg:h-auto'>
            <div className='w-1/2 lg:w-full h-full bg-[#e1ecfa] flex flex-col items-center justify-center p-4 pb-0'>

                <div className='flex flex-col items-start lg:items-center justify-center w-3/4 lg:py-6 lg:w-[80%]'>
                    <div className="flex flex-col items-start lg:items-center justify-between">
                        <p className="text-[4.125rem] font-normal title md:text-[3rem] xs:text-[2rem]">NEWSLETTER</p>
                        <p className='sub-title text-3xl md:text-2xl lg:text-2xl text-center pb-4'>Stay tuned for updates</p>
                        <p className="w-full text-lg sm:text-sm">Sign up for our newsletter & get exclusive offers and invites!</p>
                    </div>
                    <div className="w-full relative py-8 sm:p-4 flex lg:flex-col items-center justify-between flex-auto">
                        <input type="text" placeholder="Your Email..." className="w-full py-2 px-2 bg-transparent border-b border-b-black focus:outline-none text-black placeholder:text-black sm:placeholder:text-sm" />
                        <button className='uppercase py-3 px-9 my-4 hover:bg-[#1c3149] bg-primaryRed text-white title mx-4 duration-500 lg:mt-8'>SUBMIT</button>
                    </div>
                </div>
            </div>

            <div className='w-1/2 h-[500px] shadow-inner lg:w-full '>
                <Map />
            </div>

        </div>
    )
}

export default Contact
