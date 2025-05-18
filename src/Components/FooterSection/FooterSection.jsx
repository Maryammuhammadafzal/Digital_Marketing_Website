import React from 'react'
import { FaWhatsapp } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { CiTwitter } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import BlurCircle from '../BlurCircle/BlurCircle'
import { Link } from 'react-router';
const FooterSection = () => {
  return (
        <footer class="p-4 relative text-white">
            <div className='absolute w-fit rotate-14  h-fit -top-20 -left-15'>
        <BlurCircle/>
        </div>
        <div class="mx-auto max-w-screen-xl">
            <div class="mx-auto max-md:gap-3 max-md:flex-col max-md:items-center flex justify-between max-md:w-full w-[80%]">
                <div class="w-1/2 max-md:w-[95%] p-3">
                    <p >
                    Empowering businesses with innovative digital marketing strategies. From SEO to social media, we help brands grow, engage, and succeed in the digital world."
                    </p>
                </div>
                <div class="w-1/2 max-md:w-[90%] max-md:justify-center flex gap-3 items-center justify-end">
                    <div className='w-[150px] h-[250px]'>
                        <h2 class="mb-6 text-sm w-full font-bold text-white uppercase">QuiCk Links</h2>
                        <ul class="text-gray-600 dark:text-gray-400">
                            <li class=" m-1">
                                <Link to="/" href="https://flowbite.com" class="hover:underline">Home</Link>
                            </li>
                            <li class=" m-1">
                                <Link to="/about" href="https://tailwindcss.com/" class="hover:underline">About us</Link>
                            </li>
                            <li class=" m-1">
                                <Link to="/services" href="https://tailwindcss.com/" class="hover:underline">Our Services</Link>
                            </li>
                            <li class=" m-1">
                                <Link to="/work" href="https://tailwindcss.com/" class="hover:underline">Case Study</Link>
                            </li>
                            <li class=" m-1">
                                <Link to="/" href="https://tailwindcss.com/" class="hover:underline">Blog</Link>
                            </li>
                            <li class=" m-1">
                                <Link to="/contact" href="https://tailwindcss.com/" class="hover:underline">Contact us</Link>
                            </li>
                        </ul>
                    </div>
                    <div className=' w-[150px] h-[250px]'>
                        <h2 class="mb-6 text-sm w-full font-bold  uppercase text-white">Social Links</h2>
                        <ul class="text-gray-600 dark:text-gray-400">
                            <li className='w-fit flex gap-2 h-auto m-3'>
                            <CiFacebook className='text-[#9C27B0]' size="20"/>
                                <a href="https://github.com/themesberg/flowbite" class="hover:underline "> Facebook</a>
                            </li>
                            <li className='w-fit flex gap-2 h-auto m-3'>
                                <FaInstagram className='text-[#9C27B0]' size="20"/>
                                <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Instagram</a>
                            </li>
                            <li className='w-fit flex gap-2 h-auto m-3'><CiTwitter className='text-[#9C27B0]' size="20"/>
                                <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">Twitter</a>
                            </li>
                            <li className='w-fit flex gap-2 h-auto m-3'><CiLinkedin className='text-[#9C27B0]' size="20"/>
                                <a href="https://discord.gg/4eeurUVvTy" class="hover:underline"> LinkedIn</a>
                            </li>
                            <li className='w-fit flex gap-2 h-auto m-3'><FaWhatsapp className='text-[#9C27B0]' size="20" />
                                <a href="https://discord.gg/4eeurUVvTy" class="hover:underline">WhatsApp</a>
                            </li>
                            
                        </ul>
                    </div>
                   
                </div>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div class="flex items-center justify-center">
                <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2022 <a href="https://flowbite.com" class="hover:underline">BrightPath Academy.</a>. All Rights Reserved.
                </span>
                
            </div>
        </div>
    </footer>
  )
}

export default FooterSection
