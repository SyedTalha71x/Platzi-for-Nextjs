import React from 'react'
import { Montserrat } from "next/font/google";
import Link from "next/link";
import Image from 'next/image';


const monserrat = Montserrat({
    weight: ['600'],
    subsets: ['latin']
})


const Page = () => {
    return (
        <section className={monserrat.className}>
            <div className=" text-[#333] max-w-6xl mt-10 max-md:max-w-md mx-auto">
                <div className="grid md:grid-cols-2 items-center md:gap-8 gap-6">
                    <div className="max-md:order-1 max-md:text-center">
                        <p className="text-sm font-bold text-blue-600 mb-2"><span className="rotate-90 inline-block mr-2">|</span> ALL IN ONE ECOMMERCE STORE</p>
                        <h2 className="md:text-5xl text-3xl font-extrabold mb-4 md:!leading-[55px]"> Discover Your Perfect Finds at Click Haven</h2>
                        <p className="mt-4 text-base text-gray-500 leading-relaxed">Welcome to Click Haven, your ultimate destination for online shopping bliss. Explore a curated selection of top-quality products, unbeatable deals, and seamless shopping experiences. </p>
                        <div className="mt-10 space-x-4">
                            <button type='button'
                                className="bg-blue-600 hover:bg-transparent hover:text-blue-600 border-2 border-blue-600 transition-all text-white font-bold text-sm px-8 py-3">Purchase Now</button>
                            <button type='button'
                                className="bg-transparent hover:bg-blue-600 hover:text-white border-2 border-blue-600 transition-all text-blue-600 font-bold text-sm px-8 py-3">Learn more</button>
                        </div>
                        <hr className="mt-10" />
                    </div>
                    <div className="lg:h-[650px] md:h-[550px] flex items-center relative max-md:before:hidden before:absolute before:bg-blue-600 before:h-full before:w-3/4 before:right-0 before:z-0">
                        <Image height={400} width={600} src="https://readymadeui.com/photo.webp" className="rounded-md lg:w-3/4 md:w-11/12 z-50 relative" alt="Dining Experience" />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Page