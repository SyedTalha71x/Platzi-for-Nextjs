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
        else {
            const userData = parseToken(token);
            if (!userData || userData.role !== 'admin') {
                router.push('http://localhost:3000');
            }
        }

    }, [])

    return (
        <div className='text-4xl mt-20 font-extrabold uppercase flex justify-center items-center'>Shopping Arrivals are comming Soon</div>
    )
}

const parseToken = (token: any) => {
    try {
        const decodedToken = atob(token.split('.')[1]);
        return JSON.parse(decodedToken);
    } catch (error) {
        console.error('Error parsing token:', error);
        return null;
    }
};

export default Page