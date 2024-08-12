import Link from 'next/link'
import React from 'react'

const SecondPage = () => {
    return (
        <div>
            <h2>Second Page</h2>
            <Link href="/first" className='text-blue-900 font-semibold'>previous Page</Link>
        </div>
    )
}

export default SecondPage