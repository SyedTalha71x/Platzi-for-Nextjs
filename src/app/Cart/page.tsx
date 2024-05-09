"use client"
import React, { useState, useEffect } from 'react'
import { Montserrat } from "next/font/google";

const monserrat = Montserrat({
    weight: ['600'],
    subsets: ['latin']
})

const Page = () => {

    const [cartData, setCartData] = useState(null);

    useEffect(() => {
        const fetchCartData = async () => {
            try {
                const response = await fetch('https://dummyjson.com/carts');
                const data = await response.json();
                setCartData(data);
            } catch (error) {
                console.error('Error while fetching cart data:', error);
            }
        };

        fetchCartData();
    }, []);
    return (
        <section className={monserrat.className}>
            <div className=" bg-gray-100">
                <div className="max-w-7xl mx-auto p-6">
                    <h2 className="text-2xl font-extrabold uppercase mt-10 text-[#333]">Your shopping cart</h2>
                    <div className="grid lg:grid-cols-3 gap-12 relative mt-10">
                        <div className="lg:col-span-2 space-y-6">
                            <div className="p-6 bg-white shadow-[0_0px_4px_0px_rgba(6,81,237,0.2)] rounded-md relative">
                                <div className="flex items-center max-sm:flex-col gap-4">
                                    <div className="w-52 shrink-0">
                                        <img src='https://readymadeui.com/images/laptop2.webp' className="w-full h-full object-contain" />
                                    </div>
                                    <div className="sm:border-l sm:pl-4">
                                        <h3 className="text-xl font-extrabold text-[#333]">HP ProBook 455 (15.6) 39.6 cm G9 Business Laptop</h3>
                                        <ul className="mt-4 text-sm text-[#333] space-y-2">
                                            <li>AMD Ryzen™ 5 processor</li>
                                            <li>FreeDOS</li>
                                            <li>16 GB DDR4 RAM</li>
                                            <li>512 GB PCIe® NVMe™ SSD Hard Drive</li>
                                            <li><a href="javascript:void(0);" className="text-blue-600">(See more Specifications)</a></li>
                                        </ul>
                                        <hr className="my-6" />
                                        <div className="flex items-center justify-between flex-wrap gap-4">
                                            <div className="flex items-center gap-4">
                                                <h4 className="text-base font-bold text-[#333]">Qty:</h4>
                                                <button type="button" className="bg-transparent py-2 font-semibold text-[#333]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-current" viewBox="0 0 124 124">
                                                        <path d="M112 50H12C5.4 50 0 55.4 0 62s5.4 12 12 12h100c6.6 0 12-5.4 12-12s-5.4-12-12-12z" data-original="#000000"></path>
                                                    </svg>
                                                </button>
                                                <button type="button" className="bg-transparent px-4 py-2 font-semibold text-[#333] text-md shadow-[0_0px_4px_0px_rgba(6,81,237,0.2)]">
                                                    1
                                                </button>
                                                <button type="button" className="bg-transparent py-2 font-semibold text-[#333]">
                                                    <svg xmlns="http://www.w3.org/2000/svg" className="w-3 fill-current" viewBox="0 0 42 42">
                                                        <path d="M37.059 16H26V4.941C26 2.224 23.718 0 21 0s-5 2.224-5 4.941V16H4.941C2.224 16 0 18.282 0 21s2.224 5 4.941 5H16v11.059C16 39.776 18.282 42 21 42s5-2.224 5-4.941V26h11.059C39.776 26 42 23.718 42 21s-2.224-5-4.941-5z" data-original="#000000"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                            <div className="flex items-center">
                                                <h4 className="text-lg font-bold text-[#333]">$1020.00</h4>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="w-3 cursor-pointer shrink-0 fill-[#333] hover:fill-red-500 absolute top-3 right-3" viewBox="0 0 320.591 320.591">
                                                    <path d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z" data-original="#000000"></path>
                                                    <path d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z" data-original="#000000"></path>
                                                </svg>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white h-max rounded-md p-6 shadow-[0_0px_4px_0px_rgba(6,81,237,0.2)] sticky top-0">
                            <h3 className="text-xl font-extrabold [#333] border-b pb-3">Order Summary</h3>
                            <ul className="text-[#333] text-sm divide-y mt-6">
                                <li className="flex flex-wrap gap-4 py-3">Subtotal <span className="ml-auto font-bold">$2120.00</span></li>
                                <li className="flex flex-wrap gap-4 py-3">Shipping <span className="ml-auto font-bold">$4.00</span></li>
                                <li className="flex flex-wrap gap-4 py-3">Tax <span className="ml-auto font-bold">$4.00</span></li>
                                <li className="flex flex-wrap gap-4 py-3 font-bold">Total <span className="ml-auto">$2920.00</span></li>
                            </ul>
                            <button type="button" className="mt-6 text-sm px-6 py-2.5 w-full bg-[#333] hover:bg-[#111] text-white rounded-full">Check
                                out</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Page