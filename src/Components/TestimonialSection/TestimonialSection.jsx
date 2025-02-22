import React from 'react'
import SubHeading from "../Subheading/SubHeading";
import BlurCircle from '../BlurCircle/BlurCircle'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const TestimonialSection = () => {
  return (
  

<section className='relative overflow-x-hidden'>
<div className='absolute w-fit rotate-14 h-fit top-0 -left-15'>
        <BlurCircle/>
        </div>
  <div className="py-8 px-4 mx-auto max-md:w-full w-[80%] text-center lg:py-16 lg:px-6">
  <div className="mx-auto mb-8 w-full lg:mb-16 gap-3 flex flex-col">
          <SubHeading text="What" span="Our Client" moreText="Say" />
          <p className="font-light text-white sm:text-xl ">
            We offer a full range of services to boost your brand’s online
            presence.
          </p>
        </div>
      <div className="grid max-md:hidden mb-8  lg:mb-12  md:grid-cols-2">
          <div className="flex flex-col gap-3 justify-center items-center">
          <figure className="flex flex-col w-full h-[250px] rounded-lg  justify-center p-8 text-center
           hover:bg-white hover:text-black bg-[#9C27B0] opacity-80 md:p-4 text-white">
      <figcaption className="flex   space-x-3">
                  <img className="w-14 h-14 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture"/>
                  <div className="space-y-0.5 font-medium e text-left">
                      <div>Bonnie Green</div>
                      <div className="text-sm font-light">Developer at Open AI</div>
                      <div className="rank"></div>
                      <p className="mt-3 max-lg:text-[12px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia mollitia aliquid minima? Corporis nostrum itaque nulla eos amet facilis culpa facere dolorem neque, hic veritatis voluptatem sed maxime eius esse?</p>
                  </div>
              </figcaption>
                
          </figure>
          <figure className="flex flex-col w-full h-[250px] rounded-lg  justify-center p-8 text-center bg-[#9C27B0]  hover:bg-white hover:text-black  opacity-80 md:p-4 text-white">
      <figcaption className="flex   space-x-3">
                  <img className="w-14 h-14 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture"/>
                  <div className="space-y-0.5 font-medium e text-left">
                      <div>Bonnie Green</div>
                      <div className="text-sm font-light">Developer at Open AI</div>
                      <div className="rank"></div>
                      <p className="mt-3 max-lg:text-[12px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia mollitia aliquid minima? Corporis nostrum itaque nulla eos amet facilis culpa facere dolorem neque, hic veritatis voluptatem sed maxime eius esse?</p>
                  </div>
              </figcaption>
                
          </figure>
          </div>
          <div className="flex flex-col gap-3 justify-center items-center">
          
          <figure className="flex flex-col w-[92%] h-[400px] rounded-lg  justify-center  text-center bg-[#9C27B0] hover:bg-white hover:text-black opacity-80 p-3 items-center text-white">
      <figcaption className="flex justify-center items-center flex-col ">
                <div className="flex gap-3">
                <img className="w-14 h-14 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture"/>
                  <div className="space-y-0.5 items-center justify-center flex flex-col  font-medium e text-left">
                      <div>Bonnie Green</div>
                      <div className="text-sm font-light">Developer at Open AI</div>
                      <div className="rank"></div>
                  </div>
                </div>
                  <div>
                  <p className="mt-7">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia mollitia aliquid minima? Corporis nostrum itaque nulla eos amet facilis culpa facere dolorem neque, hic veritatis voluptatem sed maxime eius esse?</p>
                  </div>
              </figcaption>
                
          </figure>
<div className="w-full  justify-center h-[94px]  gap-3 flex">
<a href="#" className="flex items-center justify-center px-3 w-[40%] h-[80px] ms-0 leading-tight text-white bg-[#9C27B0]   rounded-lg hover:bg-gray-100 hover:text-[#9C27B0] dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <span className="sr-only">Previous</span>
        <svg className="w-5 h-5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
        </svg>
      </a>

      <a href="#" className="flex items-center justify-center w-[40%] h-[80px] px-4 rounded-lg leading-tight text-white bg-[#9C27B0]   hover:bg-gray-100 hover:text-[#9C27B0] dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
        <span className="sr-only">Next</span>
        <svg className="w-5 h-5 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
          <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
        </svg>
      </a>

</div>

          </div>

          
      </div>
    
    <div className="carousel min-md:hidden flex  justify-center items-center w-full h-auto">
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}
      className='w-full h-full flex  justify-center items-center'
    >
      <SwiperSlide className="w-full   h-full flex justify-center items-center">
        <figure className="flex flex-col w-[80%] mx-auto h-[400px] rounded-lg  justify-center  text-center bg-[#9C27B0] hover:bg-white hover:text-black opacity-80 p-3 items-center text-white">
      <figcaption className="flex justify-center items-center flex-col ">
                <div className="flex gap-3">
                <img className="w-14 h-14 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture"/>
                  <div className="space-y-0.5 items-center justify-center flex flex-col  font-medium e text-left">
                      <div>Bonnie Green</div>
                      <div className="text-sm font-light">Developer at Open AI</div>
                      <div className="rank"></div>
                  </div>
                </div>
                  <div>
                  <p className="mt-7">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia mollitia aliquid minima? Corporis nostrum itaque nulla eos amet facilis culpa facere dolorem neque, hic veritatis voluptatem sed maxime eius esse?</p>
                  </div>
              </figcaption>
                
          </figure></SwiperSlide>
      <SwiperSlide><figure className="flex flex-col w-[92%] h-[400px] rounded-lg  justify-center  text-center bg-[#9C27B0] hover:bg-white hover:text-black opacity-80 p-3 items-center text-white">
      <figcaption className="flex justify-center items-center flex-col ">
                <div className="flex gap-3">
                <img className="w-14 h-14 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture"/>
                  <div className="space-y-0.5 items-center justify-center flex flex-col  font-medium e text-left">
                      <div>Bonnie Green</div>
                      <div className="text-sm font-light">Developer at Open AI</div>
                      <div className="rank"></div>
                  </div>
                       </div>
                  <div>
                  <p className="mt-7">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia mollitia aliquid minima? Corporis nostrum itaque nulla eos amet facilis culpa facere dolorem neque, hic veritatis voluptatem sed maxime eius esse?</p>
                  </div>
              </figcaption>
                
          </figure></SwiperSlide>
      <SwiperSlide><figure className="flex flex-col w-[92%] h-[400px] rounded-lg  justify-center  text-center bg-[#9C27B0] hover:bg-white hover:text-black opacity-80 p-3 items-center text-white">
      <figcaption className="flex justify-center items-center flex-col ">
                <div className="flex gap-3">
                <img className="w-14 h-14 rounded-full" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/karen-nelson.png" alt="profile picture"/>
                  <div className="space-y-0.5 items-center justify-center flex flex-col  font-medium e text-left">
                      <div>Bonnie Green</div>
                      <div className="text-sm font-light">Developer at Open AI</div>
                      <div className="rank"></div>
                  </div>
                </div>
                  <div>
                  <p className="mt-7 max-sm:text-[12px]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officia mollitia aliquid minima? Corporis nostrum itaque nulla eos amet facilis culpa facere dolorem neque, hic veritatis voluptatem sed maxime eius esse?</p>
                  </div>
              </figcaption>
                
          </figure></SwiperSlide>
      
    </Swiper>


    </div>
  </div>
</section>

  )
}

export default TestimonialSection;
