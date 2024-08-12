import React from 'react'

// 404 Error Handler

const NotFound = () => {
    return (
        <div className='flex justify-center items-center w-full h-[70vh]'>
            <div className='text-center'>
                <h1 className='text-red-600 font-bold'>404</h1>
                <h4>Page Not Found</h4>
            </div>
        </div>
    )
}

export default NotFound