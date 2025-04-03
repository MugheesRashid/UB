import React from 'react'

function Footer() {
    return (
        <>
            <div className='w-screen h-[140vh] bg-[#222] text-[#f2f2f2] rounded-t-4xl'>
                <div className="w-full h-[45vh] flex flex-row items-center justify-between px-[8.8vw] border-b border-[#cdcdcd]">
                    <h6 className='text-[5vw] w-[50%] montaga leading-none'>Strength Focus To Deliver</h6>
                    <img src='FooterLogo.png' />
                </div>
                <div className="w-full h-[60vh] pr-[8.8vw] pl-[8.8vw] flex flex-row items-center justify-center">
                    <div className="w-1/4 h-full flex flex-col justify-center gap-5">
                        <h6 className="text-xl montaga">Quick Link</h6>
                        <ul className='flex flex-col justify-center gap-0 inter'>
                            <li>Home</li>
                            <li>About Us</li>
                            <li>Projects</li>
                            <li>Services</li>
                            <li>Contact Us</li>
                        </ul>
                    </div>
                    <div className="w-1/3 h-full flex flex-col justify-center gap-5">
                        <h6 className="text-xl montaga">Location</h6>
                        <div className='flex flex-col gap-2 inter'>
                            <p className='text-sm'><span className='inter font-semibold text-lg block'>ADDRESS</span> UNIVERSAL BARAKA GEN. CONT. CO,Al Jubail, Kingdom of Saudi Arabia</p>
                            <p className='text-sm'><span className='inter font-semibold text-lg block'>Working Days/Hours</span>Saturday - Thursday / 9:00AM - 6:00PM</p>
                        </div>
                    </div>
                    <div className="w-1/4 h-full flex flex-col justify-center gap-5">
                        <h6 className="text-xl montaga">Location</h6>
                        <div className='flex flex-col gap-2 inter'>
                            <p className='text-sm'><span className='inter font-semibold text-lg block'>PHONE</span> <span className='inter font-semibold text-sm block'>Toll Free <a className='underline' href="tel:+966 13 362 7224">+966 13 362 7224</a></span> <span className='inter font-semibold text-sm block'>Toll Free <a className='underline' href="tel:+966 53 641 9690">+966 53 641 9690</a></span></p>
                            <p className='text-sm'><span className='inter font-semibold text-lg block'>EMAIL</span> <a className='underline' href="email:universalbaraka@gmail.com">universalbaraka@gmail.com</a> <a className='underline' href="email:sohail@universalbaraka.tech">sohail@universalbaraka.tech</a></p>
                        </div>

                    </div>
                </div>
                <div className="w-full h-[35vh] flex items-center justify-center flex-col">
                    <h6 className="text-[12vw] leading-none montaga">Universal Baraka</h6>
                    <p>© 2025 by Universal Baraka</p>
                </div>
            </div>
        </>
    )
}

export default Footer