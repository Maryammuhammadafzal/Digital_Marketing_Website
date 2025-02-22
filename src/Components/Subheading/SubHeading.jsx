import React from 'react'

const SubHeading = ({text , span , moreText}) => {
  return (
    <h3 className='text-5xl w-auto max-sm:text-2xl text-center max-md:text-3xl font-semibold uppercase text-white'>{text} <span className='text-[#9C27B0]'>{span}</span> {moreText}</h3>
  )
}

export default SubHeading
