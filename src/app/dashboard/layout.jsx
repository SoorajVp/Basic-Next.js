import React from 'react'

// Parallel Routes 

const Layout = ({ children, menu, header, content }) => {
    return (
        <div className='flex h-[80vh] gap-2'>
            <div className='flex justify-center items-center bg-slate-50 w-1/4 h-full border shadow-md'>
                {menu}
            </div>
            <div className='w-full text-center space-y-2'>
                <div className='flex items-center justify-center bg-yellow-50 border shadow-md h-[30vh]'>
                    {header}
                </div>
                <div className='flex items-center justify-center bg-teal-50 border shadow-md h-[30vh]'>
                    <div>

                    {content}
                    {children}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Layout