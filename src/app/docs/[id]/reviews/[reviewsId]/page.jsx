import React from 'react'

const ReviewDetails = ({ params }) => {
  return (
    <>
      <h1>Document id : {params?.id}</h1>
      <h1>Reviews id : {params?.reviewsId}</h1>
    </>

  )
}

export default ReviewDetails