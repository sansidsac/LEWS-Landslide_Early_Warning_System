import React from 'react'

const Alerts = ({region="Wuhan",scale=80}) => {
  return (
    <div className='bg-sky-400'>
      <h4 className='text-2xl font-normal text-center'>{region} is {scale}% Affected!!! Take immediate action</h4>
      <h4 className='text-2xl font-normal text-center'>{region} is {scale}% Affected!!! Take immediate action</h4>
      <h4 className='text-2xl font-normal text-center'>{region} is {scale}% Affected!!! Take immediate action</h4>
      <h4 className='text-2xl font-normal text-center'>{region} is {scale}% Affected!!! Take immediate action</h4>
    </div>
  )
}

export default Alerts