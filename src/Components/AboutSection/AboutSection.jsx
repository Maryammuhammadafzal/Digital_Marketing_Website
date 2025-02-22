import React from 'react'
import SubHeading from '../Subheading/SubHeading'
import BlurCircle from '../BlurCircle/BlurCircle'
const AboutSection = () => {
  return (
        <div className="relative overflow-x-hidden about w-[80%] max-lg:w-[90%] max-md:w-[100%] min-h-screen flex justify-center mx-auto items-center p-3">
        <div className='absolute w-fit rotate-14 h-fit -top-10 -left-50'>
        <BlurCircle/>
        </div>
        <div className="content w-[80%] max-md:w-[90%]  max-lg:w-[98%] gap-3 h-fit flex flex-col justify-center items-center">
<SubHeading text="Who We" span="Are"/>
          <p className=" text-center text-2xl max-md:text-xl  max-sm:text-[16px] max text-white font-bold">
          "We are a team of passionate digital marketers dedicated to driving success for our clients. With years of experience and a creative approach, we bring innovative strategies to businesses looking to elevate their online presence. Our mission is to turn your digital goals into measurable results."
          </p>
        </div>
      </div>
  )
}

export default AboutSection
