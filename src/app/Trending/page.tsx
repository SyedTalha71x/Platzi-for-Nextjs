import React from 'react'
import Image from 'next/image'
import { Montserrat } from "next/font/google";
import Link from "next/link";

const monserrat = Montserrat({
    weight: ['600'],
    subsets: ['latin']
})



async function getData() {
    const res = await fetch('https://api.escuelajs.co/api/v1/products?limit=8&offset=8');
    if (!res.ok) {
        throw new Error('Failed to Fetch the data')
    }
    return res.json();
}

const Page = async () => {
    const data = await getData()
    return (
        <section className={monserrat.className}>
            <h1 className='text-4xl mt-[5%] flex justify-center uppercase items-center font-extrabold'>Best Selling</h1>
            <section className="text-gray-600 body-font cursor-pointer">
                <div className="container px-5 py-16 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {data?.map((item: any, index: any) => {
                            return <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full text-center">
                                <Link href={`Products/${item.id}`} className="block relative h-70 overflow-hidden">
                                    <img
                                        alt="ecommerce"
                                        className="object-cover object-center w-full h-full block"
                                        src={item.images && item.images.length > 0 ? item.images[0] : 'https://i.imgur.com/yb9UQKL.jpeg'} />                            </Link>
                                <div className="mt-4">                                <h2 className="text-gray-900 title-font text-lg font-medium">{item.title}</h2>
                                    <p className="mt-1">${item.price}</p>
                                </div>
                            </div>
                        })}

                    </div>
                </div>
            </section>
        </section>
    )
}

export default Page