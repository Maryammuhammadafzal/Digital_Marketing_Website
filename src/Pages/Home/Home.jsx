import React from 'react'

import Hero from '../../Components/Hero/Hero'
import Banner from '../../Components/Banner/Banner'
import AboutSection from '../../Components/AboutSection/AboutSection'
import ServicesSection from '../../Components/ServicesSection/ServicesSection'
import WorkSection from '../../Components/WorkSection/WorkSection'
import SuccessStories from '../../Components/SuccessStories/SuccessStories'
import TestimonialSection from '../../Components/TestimonialSection/TestimonialSection'
import ContactSection from '../../Components/ContactSection/ContactSection'
import FooterSection from '../../Components/FooterSection/FooterSection'
import BlogSection from '../../Components/BlogSection/BlogSection'
const Home = () => {
  return (
    <div className='bg-[#121212] w-full min-h-screen  flex gap-3 overflow-x-hidden flex-col'>
      
      
      <Hero/>
      <Banner/>
      <AboutSection/>
      <ServicesSection/>
      <WorkSection/>
      <SuccessStories/>
      <TestimonialSection/>
      <BlogSection/>
      <ContactSection/>
      <FooterSection/>
    </div>
  )
}

export default Home
