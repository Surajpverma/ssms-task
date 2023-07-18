import { useState } from "react"

import logo from "../assets/logo.png"
import yelp from "../assets/svgs/yelp-184-svgrepo-com.svg"
import { AiOutlineInstagram } from "react-icons/ai"
import { BiLogoYelp } from "react-icons/bi"


function App() {
    const [toggleMenu, setToggleMenu] = useState(false);

    return (

        <nav className="sticky top-0 bg-white z-10">
            <div className="px-16 lg:px-8 md:px-4 xs:px-3 overflow-hidden">
                <div className="flex items-center justify-between sm:min-w-full">
                    {/* logo */}
                    <div className="flex items-center justify-start w-1/2">
                        <a href="/" className="flex font-bold text-gray-700 items-center justify-center" >
                            <img src={logo} className="w-[12rem] my-4 lg:w-[8rem] sm:w-[3rem]" />
                        </a>
                    </div>

                    {/* secondary */}
                    <div className="flex gap-3 min-h-full sm:gap-2 max-w-[80%]">
                        {/* primary */}
                        <div className="md:hidden xl:text-[0.8rem] flex items-center justify-end gap-6 border-r border-r-primaryRed pr-2">
                            <a href="#" className="title text-[#002e48] text-[16px] md:text-[12px] hover:text-primaryRed font-semibold ease-in-out duration-700">MENU</a>
                            <a href="#" className="title text-[#002e48] text-[16px] md:text-[12px] hover:text-primaryRed font-semibold ease-in-out duration-700">DRINKS</a>
                            <a href="#" className="title text-[#002e48] text-[16px] md:text-[12px] hover:text-primaryRed font-semibold ease-in-out duration-700">CATERING</a>
                            <a href="#" className="title text-[#002e48] text-[16px] md:text-[12px] hover:text-primaryRed font-semibold ease-in-out duration-700">EVENTS</a>
                            <a href="#" className="title text-[#002e48] text-[16px] md:text-[12px] hover:text-primaryRed font-semibold ease-in-out duration-700">PARTIES</a>
                            <a href="#" className="title text-[#002e48] text-[16px] md:text-[12px] hover:text-primaryRed font-semibold ease-in-out duration-700">RESERVE</a>
                            <a href="#" className="title text-[#002e48] text-[16px] md:text-[12px] hover:text-primaryRed font-semibold ease-in-out duration-700 pr-2">JOB</a>
                        </div>
                        <div className="flex items-center justify-center text-black gap-2">
                                <div className="p-1 hover:bg-primaryRed hover:text-white duration-500 cursor-pointer"><AiOutlineInstagram /></div>
                                <div className="p-1 hover:bg-primaryRed hover:text-white duration-500 cursor-pointer"><BiLogoYelp /></div>
                        </div>
                        {/* Mobile navigation toggle */}
                        <div className="">
                            <button onClick={() => setToggleMenu(!toggleMenu)} className="flex-col items-center justify-cente hidden md:flex">
                                <span className={` bg-dark dark:bg-light block duration-300 ease-out h-[3px] w-8 ${toggleMenu ? 'bg-primaryRed' : ''}`}></span>
                                <span className={` bg-dark dark:bg-light duration-300 ease-out h-[3px] w-8 my-[6px] ${toggleMenu ? 'bg-primaryRed' : ''}`}></span>
                                <span className={` bg-dark dark:bg-light duration-300 ease-out h-[3px] w-8 ${toggleMenu ? 'bg-primaryRed' : ''}`}></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            {/* mobile navigation */}
            <div
                className={`fixed z-40 w-full bg-white overflow-hidden md:flex flex-col hidden  origin-top duration-700 ${!toggleMenu ? "h-0" : "h-[30%]"
                    }`}
            >
                <div className="px-8 sm:px-4 h-full overflow-y-scroll">
                    <div className="flex flex-col items-start justify-between gap-2 min-h-full">
                        <a href="#" className="title text-[#002e48] text-[14px] hover:text-primaryRed font-semibold ease-in-out duration-700">MENU</a>
                        <a href="#" className="title text-[#002e48] text-[14px] hover:text-primaryRed font-semibold ease-in-out duration-700">DRINKS</a>
                        <a href="#" className="title text-[#002e48] text-[14px] hover:text-primaryRed font-semibold ease-in-out duration-700">CATERING</a>
                        <a href="#" className="title text-[#002e48] text-[14px] hover:text-primaryRed font-semibold ease-in-out duration-700">EVENTS</a>
                        <a href="#" className="title text-[#002e48] text-[14px] hover:text-primaryRed font-semibold ease-in-out duration-700">PARTIES</a>
                        <a href="#" className="title text-[#002e48] text-[14px] hover:text-primaryRed font-semibold ease-in-out duration-700">RESERVE</a>
                        <a href="#" className="title text-[#002e48] text-[14px] hover:text-primaryRed font-semibold ease-in-out duration-700 pb-4">JOB</a>
                    </div>
                </div>
            </div>
        </nav>

    );
}

export default App;