import React from 'react'
import Navbar from '../Navbar/Navbar'
import HeroImage from '../../assets/Images/HeroImage.png'
import BlurCircle from '../BlurCircle/BlurCircle'
const Hero = () => {
  return (
        <section className="text-white w-full min-h-screen max-md:flex-col flex gap-3">
        <div className="grid max-w-screen-xl px-4 py-8 max-lg:w-[90%] mx-auto  xl:gap-0  lg:gap-8 lg:py-16 lg:grid-cols-12">
            <div className="mr-auto place-self-center max-lg:col-span-5  lg:col-span-7">
                <h1 className="max-w-2xl mb-4 text-5xl max-lg:text-4xl  max-lg:leading-14 font-bold tracking-tight leading-none xl:text-6xl dark:text-white">Transform Your Business with Results-Driven <span className='text-[#9C27B0]'>Digital Marketing</span></h1>
                <p className="max-w-xl mb-6 font-light  text-gray-500 lg:mb-8 md:text-lg  max-lg:leading-6 lg:text-xl dark:text-gray-400">We help businesses gcol through innovative digital marketing strategies that deliver real results.</p>
                <a href="#" className="inline-flex items-center justify-center px-5 py-3 mr-3 text-base font-medium text-center bg-[#9C27B0] text-white rounded-lg bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 dark:focus:ring-primary-900">
                    Get started
                    <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </a>
                <a href="#" className="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-[#9C27B0]  border border-[#9C27B0] rounded-lg hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:text-white dark:border-gray-700 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
                   Contact Us
                </a> 
            </div>
            <div className="lg:mt-0 lg:col-span-5 max-lg:col-span-3 max-lg:justify-end flex">
                <img src={HeroImage} alt="HeroImage" />
            </div>                
        </div>
    </section>
  )
}

export default Hero
