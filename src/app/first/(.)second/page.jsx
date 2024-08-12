import Link from 'next/link'
import React from 'react'

// Intercepting routes

const SecondInterceptedPage = () => {
    return (
        <div>
            <h2>Intercepted Second Page</h2>
            <Link href="/first" className='text-blue-900 font-semibold'>previous Page</Link>
        </div>
    )
}

export default SecondInterceptedPage