import Link from 'next/link'
import React from 'react'

const FirstPage = () => {
    return (
        <div>
            <h2>FirstPage</h2>
            <Link href="/first/second" className='text-blue-900 font-semibold'>Next Page</Link>
        </div>
    )
}

export default FirstPage