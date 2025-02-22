import React from 'react'
import BlurCircle from '../BlurCircle/BlurCircle'
import SubHeading from '../Subheading/SubHeading'
const BlogSection = () => {
  return (
    <div className='w-full min-h-screen overflow-x-hidden flex items-center justify-center'>
         <div className="absolute w-fit -rotate-14  h-fit top-0 -right-15">
        <BlurCircle />
      </div>
      <div className="py-8 px-4 mx-auto w-full text-center lg:py-16 lg:px-6">
        <div className="mx-auto mb-8 w-full lg:mb-16 gap-3 flex flex-col">
          <SubHeading text="Our" span="Digital MArketing" moreText="Services" />
          <p className="font-light text-white sm:text-xl ">
            We offer a full range of services to boost your brand’s online
            presence.
          </p>
        </div>
        

<div id="controls-carousel" class="relative w-full h-auto" data-carousel="static">
    {/* <!-- Carousel wrapper --> */}
    <div class="relative h-[500px]  overflow-hidden rounded-lg md:h-96">
         {/* <!-- Item 1 --> */}
        <div class="hidden carouselItem h-full duration-700 ease-in-out" data-carousel-item>
        <div className="content w-[70%] max-lg:w-[80%] max-md:w-[95%] h-fit ">
        <p className="w-full h-auto text-center text-2xl max-md:text-xl max-sm:text-lg text-white font-bold">
          A brief overview of your services and expertise. Example: "At [Agency
          Name], we provide cutting-edge digital marketing solutions tailored to
          help businesses like yours thrive in the online world. From social
          media marketing to SEO, we have the tools to grow your brand."
        </p>
      </div>
        </div>
         {/* <!-- Item 2 --> */}
        <div class="hidden carouselItem duration-700 h-full ease-in-out" data-carousel-item="active">
        <div className="content w-[70%] max-lg:w-[80%] max-md:w-[95%] h-fit ">
        <p className="w-full h-auto text-center text-2xl max-md:text-xl max-sm:text-lg text-white font-bold">
           overview of your services and expertise. Example: "At [Agency
          Name], we provide cutting-edge digital marketing solutions tailored to
          help businesses like yours thrive in the online world. From social
          media marketing to SEO, we have the tools to grow your brand."
        </p>
      </div>
       </div>
        {/* <!-- Item 3 --> */}
        {/* <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-3.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div> */}
        {/* <!-- Item 4 --> */}
        {/* <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-4.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div> */}
        {/* <!-- Item 5 --> */}
        {/* <div class="hidden duration-700 ease-in-out" data-carousel-item>
            <img src="/docs/images/carousel/carousel-5.svg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
        </div>  */}
    </div>
    {/* <!-- Slider controls --> */}
    <button type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
            </svg>
            <span class="sr-only">Previous</span>
        </span>
    </button>
    <button type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
            <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
            </svg>
            <span class="sr-only">Next</span>
        </span>
    </button>
</div>

        </div>
      
    </div>
  )
}

export default BlogSection
