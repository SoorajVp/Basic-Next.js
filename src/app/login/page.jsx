"use client"
import { useRouter } from 'next/navigation'
import React from 'react'

const Login = () => {
    const router = useRouter();
    
    const handleBack = () => {
        router.back()
    }
    const handleReplace = () => {
        router.replace("/login")
    }
    const handleForward = () => {
        router.forward()
    }
    return (
        <div className='flex justify-center items-center h-[50vh]'>
            <button onClick={handleReplace} className='px-4 py-1 bg-blue-500 text-white border shadow-md'>Replace</button>
            <button onClick={handleBack} className='px-4 py-1 bg-blue-500 text-white border shadow-md'>Back</button>
            <button onClick={handleForward} className='px-4 py-1 bg-blue-500 text-white border shadow-md'>forwad</button>
        </div>
    )
}

export default Login