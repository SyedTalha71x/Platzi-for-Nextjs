"use client";
import React, { useEffect } from 'react'
import { useRouter } from 'next/navigation';

const Page = () => {
    const router = useRouter();
    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            router.push('http://localhost:3000/Login')
        }

    }, [])

    return (
        <div className='text-4xl mt-20 font-extrabold uppercase flex justify-center items-center'>Shopping Arrivals are comming Soon</div>
    )
}

export default Page