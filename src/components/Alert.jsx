import React, { useEffect } from "react";

export default function Modal() {
    const [showModal, setShowModal] = React.useState(false);

    useEffect(() => {
        setTimeout(() => {
            setShowModal(() => true);
        }, 5000);
    }, []);
    return (
        <>
            {showModal ? (
                <>
                    <div className="flex justify-center overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-black focus:outline-none px-4">

                        <div className="relative max-w-[38rem] my-8 mx-auto md:min-w-[90%]">
                            {/*content*/}

                            <div className="rounded-md shadow-2xl relative flex flex-col w-full bg-[#e1ecfa] outline-none focus:outline-none">
                                {/*header*/}
                                <div className="self-end pr-6 pt-6">
                                    <button className="flex-col items-center justify-cente flex opacity-75" onClick={() => setShowModal(false)} >
                                        <span className={` bg-dark  block duration-300 ease-out h-0.5 w-6 rounded-sm rotate-45  -translate-y-0.5`}></span>
                                        <span className={` bg-dark dark:bg-light duration-300 ease-out h-0.5 w-6 rounded-sm -rotate-45 -translate-y-1`}></span>
                                    </button>
                                </div>

                                <div className="flex flex-col items-center justify-between px-5 pt-4">
                                    <p className="text-[4.125rem] font-normal title md:text-[3rem] xs:text-[2rem]">NEWSLETTER</p>
                                    <p className="w-[80%] text-center text-lg sm:text-sm">Sign up for our newsletter & get exclusive offers and invites!</p>
                                </div>
                                {/*body*/}
                                <div className="relative p-8 sm:p-4 flex-auto">
                                    <input type="text" placeholder="Your Email..." className="w-full py-2 px-2 bg-transparent border border-black focus:outline-none text-black placeholder:text-black sm:placeholder:text-sm"/>
                                    <input type="text" placeholder="Phone Number..." className="w-full py-2 px-2 bg-transparent border border-black focus:outline-none text-black placeholder:text-black sm:placeholder:text-sm mt-4"/>
                                </div>
                                <div className="relative p-4 sm:p-2 flex-auto flex items-center justify-center">
                                <input type="checkbox" name="check" id="check" className="self-start" />
                                    <p className="text-center w-[90%] sm:text-sm">I'd like to get texts about specials, events, and other exclusive offers and announcements not available to general public <span className="underline">Privacy Policy </span></p>
                                </div>

                                {/*footer*/}
                                <div className="relative flex items-center p-6 sm:p-3 border-t border-solid w-full pb-12 sm:pb-6">
                                    <button className="uppercase py-3 px-9 my-4 hover:bg-[#1c3149] bg-primaryRed text-white title font-semibold ease-in-out duration-700 w-full" type="button" onClick={() => setShowModal(false)}>
                                        SUBMIT
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="opacity-40 fixed inset-0 z-40 bg-black"></div>
                </>
            ) : null}
        </>
    );
}
