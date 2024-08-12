import React from 'react'

const DocsLayout = ({ children }) => {
    return (
        <>
            <div>
                <h1 className='text-gray-800'> Documents Section</h1>
            </div>
            <hr />  
            {children}
        </>
    )
}

export default DocsLayout