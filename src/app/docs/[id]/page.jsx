import React from 'react'

export const generateMetadata = ({params}) => {
    return {
        title: `Document ${params?.id}`
    }
}

const DocDetails = ({params}) => {
  return (
      <h2>Docuement Details {params?.id} </h2>
  )
}

export default DocDetails