"use client";
import React, { useState, useEffect } from 'react'
import { Montserrat } from "next/font/google";
import { useParams } from 'next/navigation';
import axios from 'axios';
import Link from 'next/link';

const montserrat = Montserrat({
    weight: ['600'],
    subsets: ['latin']
})

const Page = () => {
    const { id } = useParams();
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchSingleApi = async () => {
            try {
                const response = await axios.get(`https://api.escuelajs.co/api/v1/products/${id}`);
                setData(response.data);
                console.log(response.data);
            }
            catch (error) {
                console.log('Error while fetching Single Products');
            }
        }

        if (id) {
            fetchSingleApi();
        }
    }, [id]);

    return (
        <div className={montserrat.className}>
            <section className="text-gray-600 body-font overflow-hidden">
                <div className="container px-5 py-24 mx-auto">
                    {data ? (
                        <div className="lg:w-4/5 mx-auto flex flex-wrap">
                            <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={data.images && data.images.length > 0 ? data.images[0] : 'https://i.imgur.com/yb9UQKL.jpeg'} />
                            <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                                <h2 className="text-sm title-font text-gray-500 tracking-widest">{data.category && data.category.name}</h2>
                                <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{data.title}</h1>
                                <div className="flex mb-4">
                                    {/* Star ratings and reviews */}
                                </div>
                                <p className="leading-relaxed">{data.description}</p>
                                <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                                    {/* Color and size options */}
                                </div>

                                <div className="mt-8">
                                    <h3 className="text-lg font-bold text-gray-800">Sizes</h3>
                                    <div className="flex flex-wrap gap-4 mt-4">
                                        <button type="button" className="w-16 h-12 border-2 hover:bg-slate-50 font-bold text-sm  flex items-center justify-center shrink-0">SM</button>
                                        <button type="button" className="w-16 h-12 border-2 hover:bg-slate-50 border-gray-800 font-bold text-sm  flex items-center justify-center shrink-0">MD</button>
                                        <button type="button" className="w-16 h-12 border-2 hover:bg-slate-50 font-bold text-sm  flex items-center justify-center shrink-0">LG</button>
                                        <button type="button" className="w-16 h-12 border-2 hover:bg-slate-50 font-bold text-sm  flex items-center justify-center shrink-0">XL</button>
                                    </div>
                                    <div className='mt-2'>
                                        <h3 className="text-lg font-bold text-gray-800">Color</h3>
                                        <div className="flex items-center gap-1 mt-2">
                                            <button className="ml-1 bg-gray-700 w-7 h-7 focus:outline-none"></button>
                                            <button className="ml-1 bg-indigo-500 w-7 h-7 focus:outline-none"></button>
                                            <button className="ml-1 bg-black w-7 h-7 focus:outline-none"></button>
                                            <button className="ml-1 bg-red-700 w-7 h-7 focus:outline-none"></button>
                                            <button className="ml-1 bg-gray-700 w-7 h-7 focus:outline-none"></button>
                                            <button className="ml-1 bg-yellow-700 w-7 h-7 focus:outline-none"></button>

                                        </div>
                                    </div>
                                </div>
                                <div className="flex justify-end items-center mb-4 mt-4">
                                    <span className="title-font font-medium text-2xl text-gray-900">${data.price}</span>
                                    {/* Add to cart button */}
                                </div>
                                <div className='mt-4'>
                                    <button className='bg-black text-white w-full py-3 text-center'>Add to Cart</button>
                                </div>
                            </div>

                        </div>
                    ) : (
                        <div>No data available</div>
                    )}
                </div>
            </section>
        </div>
    )
}

export default Page;
