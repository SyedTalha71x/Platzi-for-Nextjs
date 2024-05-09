"use client";
import React, { useState, useEffect } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import { Montserrat } from 'next/font/google';
import { useParams } from 'next/navigation';

const monserrat = Montserrat({
    weight: ['600'],
    subsets: ['latin']
})

const Page = () => {
    const [data, setdata] = useState([])
    const { id } = useParams();

    useEffect(() => {
        const FetchProductsByCategory = async () => {
            try {
                const response = await fetch(`https://api.escuelajs.co/api/v1/categories/${id}/products?limit=10&offset=4`, {
                    method: 'GET',
                    headers: { 'Content-Type': 'application/json' }
                });
                const result = await response.json();
                setdata(result);
            }
            catch (error: any) {
                console.log(error);
            }
        }

        if (id) {
            FetchProductsByCategory();
        }
    }, [id])

    return (
        <section className={monserrat.className}>
            <h1 className='text-4xl mt-[5%] flex justify-center uppercase items-center font-extrabold'>Best Selling</h1>
            <section className="text-gray-600 body-font cursor-pointer">
                <div className="container px-5 py-16 mx-auto">
                    <div className="flex flex-wrap -m-4">
                        {data?.map((item: any, index: any) => {
                            const imageUrl = item.images && item.images.length > 0 ? item.images[0].replace(/[\[\]"]+/g, '') : '';


                            return <div key={index} className="lg:w-1/4 md:w-1/2 p-4 w-full text-center">
                                <Link href={`Products/${item.id}`} className="block relative h-70 overflow-hidden">
                                    <img
                                        alt="ecommerce"
                                        className="object-cover object-center w-full h-full block"
                                        src={imageUrl || 'https://i.imgur.com/yb9UQKL.jpeg'}
                                    />                            </Link>
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