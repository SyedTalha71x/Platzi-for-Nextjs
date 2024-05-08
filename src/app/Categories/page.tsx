import React from 'react'
import { Montserrat } from "next/font/google";
import Link from "next/link";
import Image from 'next/image';

const monserrat = Montserrat({
    weight: ['600'],
    subsets: ['latin']
})

async function getData() {
    const res = await fetch('https://api.escuelajs.co/api/v1/categories?limit=10');

    if (!res.ok) {
        throw new Error('Failed to fetched Categories')
    }
    return res.json();
}

const Page = async () => {

    const categories = await getData();
    return (
        <div className={monserrat.className}>
            <div className='flex justify-center items-center mt-10 cursor-pointer'>
                <h1 className='text-3xl tracking-wider font-extrabold uppercase mb-2'>Popular Categories</h1>
            </div>
            <section className="text-gray-600 body-font cursor-pointer">
                <div className="container px-5 py-20 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {categories.map((item: any, index: any) => {
                            return <div key={index} className="xl:w-1/3 text-center md:w-1/2 p-4">
                                <div className="border border-gray-200 p-6 bg-gray-100 hover:bg-gray-200">
                                    <div className="w-10 h-10 inline-flex items-center justify-center rounded-full bg-gray-300 text-indigo-500 mb-4">
                                        <Image src={item.image} height={400} width={600} alt='' className='h-full w-full object-cover object-center rounded-full' />
                                    </div>
                                    <h2 className="text-lg text-gray-900 font-medium title-font mb-2">{item.name}</h2>                                </div>
                            </div>
                        })}
                    </div>
                    <button className="flex mx-auto mt-16 text-white uppercase text-sm bg-black font-medium hover:bg-gray-800 py-3 px-14 ">Checkout</button>
                </div>
            </section>
        </div>
    )
}

export default Page