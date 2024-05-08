"use client";
import React, { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from 'react-toastify';



const Page = () => {
    const router = useRouter();
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const [avatar, setavatar] = useState('')

    const handleSubmit = async () => {
        try {

            const response = await fetch('https://api.escuelajs.co/api/v1/users/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ name, email, password, avatar })
            })
            const result = await response.json();
            console.log(result);
            if (response.ok) {
                toast.success("You are Now Signup", {
                    position: 'top-center',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                setTimeout(() => {
                    router.push('http://localhost:3000/Login')
                }, 1000);
            } else {
                toast.error(result.error, {
                    position: 'top-center',
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        }
        catch (error: any) {
            console.log('Error while Logging in', error)
        }
    }
    return (
        <section className="bg-gray-50 dark:bg-gray-900">
            <ToastContainer
                position='top-center'
                autoClose={5000}
                hideProgressBar={false}
                closeOnClick
                pauseOnHover
                draggable
            />
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        <h1 className="text-xl font-bold text-center leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                            Signup
                        </h1>
                        <form className="space-y-4 md:space-y-6" action="#" onSubmit={handleSubmit}>
                            <div>
                                <label htmlFor="name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Name</label>
                                <input value={name} onChange={(e: any) => { setname(e.target.value) }} type="name" name="name" id="name" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm outline-none block w-full p-2.5 " placeholder="Name" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your email</label>
                                <input value={email} onChange={(e: any) => { setemail(e.target.value) }} type="email" name="email" id="email" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm outline-none block w-full p-2.5 " placeholder="Email" />
                            </div>
                            <div>
                                <label htmlFor="avatar" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your Avatar</label>
                                <input value={avatar} onChange={(e: any) => { setavatar(e.target.value) }} type="avatar" name="avatar" id="avatar" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm outline-none block w-full p-2.5 " placeholder="Avatar" />
                            </div>
                            <div>
                                <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Password</label>
                                <input value={password} onChange={(e: any) => { setpassword(e.target.value) }} type="password" name="password" id="password" placeholder="••••••••" className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm outline-none block w-full p-2.5" />
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="flex items-start">
                                    <div className="flex items-center h-5">
                                        <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800" />
                                    </div>
                                    <div className="ml-3 text-sm">
                                        <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">Remember me</label>
                                    </div>
                                </div>                            </div>
                            <button type="submit" className="w-full text-white bg-purple-700  font-medium text-sm px-5 py-3 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign up</button>
                            <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                                Already have an account? <Link href="/Login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign in</Link>
                            </p>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Page