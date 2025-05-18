import React from 'react'
import SubHeading from "../Subheading/SubHeading";
import BlurCircle from '../BlurCircle/BlurCircle'
const SuccessStories = () => {
  return (
   
<section className=" relative py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
<div className='absolute w-fit  h-fit -rotate-14 -top-10 -right-100'>
        <BlurCircle/>
        </div>
<div className='w-[100%] mx-auto'>
<div className="mx-auto mb-8 w-full lg:mb-16 gap-3 flex flex-col">
          <SubHeading text="Our" span="Success" moreText="Stories" />
          <p className="font-light text-white sm:text-xl ">
          Take a look at how we’ve helped businesses achieve their marketing goals.
          </p>
        </div>
<div className="grid grid-cols-2 w-full  md:grid-cols-2 gap-4">

    <div className="grid grid-cols-1 gap-4 ">
        <div>
            <div className="h-[300px] w-full rounded-lg bg-[#9C27B0]" />
        </div>
        <div className="grid gap-4 grid-cols-2">
        <div className=''>
            <div className="h-[200px] w-full rounded-lg bg-[#fff]"  />
        </div>
        <div className=''>
            <div className="h-[200px] w-full rounded-lg bg-[#fff]"  />
        </div>
        
    </div>
        
    </div>
    <div className="grid gap-4 grid-rows-2 w-full   ">
        <div>
            <div className="h-[250px] w-full rounded-lg bg-[#fff]"  />
        </div>
        <div>
            <div className="h-[250px] w-full rounded-lg bg-[#9C27B0]"  />
        </div>
    </div>
</div>
</div>
</section>

  )
}

export default SuccessStories
