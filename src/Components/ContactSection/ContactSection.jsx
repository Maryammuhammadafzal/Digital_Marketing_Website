import React from 'react'
import SubHeading from "../Subheading/SubHeading";
import { FaLocationDot } from "react-icons/fa6";
import { IoMail } from "react-icons/io5";
import { FaPhone } from "react-icons/fa6";
import BlurCircle from '../BlurCircle/BlurCircle'
const ContactSection = () => {
  return (
        <section class="relative">
            <div className='absolute w-fit -rotate-14  h-fit -top-20 -right-10'>
        <BlurCircle/>
        </div>
        <div class="py-8 lg:py-16 max-md:w-full max-md:p-3 w-[85%] mx-auto justify-center items-center flex flex-col">
        <div class="mx-auto mb-8 w-[90%] lg:mb-16 gap-3 flex justify-center items-center flex-col">
          <SubHeading text="Let's Plan" span="Your Digital" moreText="Growth" />
          <p class="font-light text-center text-white sm:text-xl  ">
          “Ready to take your business to the next level? Reach out to us for a free consultation, and let’s discuss how we can help you grow.”
          </p>
        </div>  
        <div className='w-full h-[70px] max-md:flex-col max-md:items-start max-md:gap-2 max-md:m-5 text-white flex justify-center items-center space-x-10'>
            <div className="address flex gap-3 w-fit h-fit items-center">
                <FaLocationDot className='text-[#9C27B0]' size="20"/>
                <p>1901 Thornridge Cir. Shiloh, Hawaii 81063</p>
            </div>
            <div className="address flex gap-3 w-fit h-fit items-center">
                <IoMail className='text-[#9C27B0]' size="20"/>
                <p>dolores.chambers@example.com</p>
            </div>
            <div className="address flex gap-3 w-fit h-fit items-center">
                <FaPhone className='text-[#9C27B0]' size="20"/>
                <p>(225) 555-0118</p>
            </div>

        </div>
            <form action="#" class=" bg-[#9C27B0] opacity-80 max-md:py-3  max-md:h-auto w-full rounded-lg justify-center items-center h-[200px] flex-col  flex gap-3">
                <div className='w-full max-md:flex-col max-md:items-center flex gap-3 p-5 text-white'>
                <div className='w-[220px] max-md:w-[90%]'>
                    <label htmlFor="email" class="block mb-2 text-sm font-medium ">Your email</label>
                    <input type="email" id="email" class="shadow-sm bg-black opacity-40  border border-gray-300 text-white placeholder:text-white  text-sm rounded-lg block w-full p-2.5  " placeholder="name@flowbite.com" required />
                </div>
                <div className='w-[220px] max-md:w-[90%]' >
                    <label htmlFor="password" class="block mb-2 text-sm font-medium ">Subject</label>
                    <input type="password" id="password" class="block p-3 w-full text-sm text-white placeholder:text-white  bg-black opacity-40  rounded-lg border border-gray-300 shadow-sm  " placeholder="password" required />
                </div>
                <div class=" flex-grow max-md:w-[90%]">
                    <label htmlFor="message" class="block mb-2 text-sm font-medium ">Your message</label>
                    <textarea id="message" rows="1"  class="block p-2.5 w-full text-sm text-white placeholder:text-white  bg-black opacity-40  rounded-lg shadow-sm border border-gray-300 " placeholder="Leave a comment..."></textarea>
                </div>
                </div>
                <a href="#" class="inline-flex items-center justify-center px-5 py-3 text-base font-medium text-center text-[#fff]  border border-[#fff] rounded-lg hover:text-black hover:bg-white  ">
                  Send Message
                </a> 
                 </form>
        </div>
      </section>
  )
}

export default ContactSection
