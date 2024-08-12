"use client"

// Recieving the error message through the props

const ErrorBoundary = ({error}) => {
  return (
    <div className='flex justify-center items-center h-[70vh]'>
        <div className="text-center">
        <h2>Error Page</h2>
        <h3>{error?.message}</h3>
        </div>
    </div>
  )
}

export default ErrorBoundary