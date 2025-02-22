import React from 'react'
import SubHeading from '../Subheading/SubHeading'
import BlurCircle from '../BlurCircle/BlurCircle'
const WorkSection = () => {
    const articleContent = [
        {
            id: 1,
            step: "01",
            title: 'Research & Strategy',
            description: [
                "Understanding your business, industry, and target audience.",
                "Conducting market research & competitor analysis.",
                "Defining clear goals and crafting a data-driven strategy." 
            ]
        },
        {
            id: 2,
            step: "02",
            title: 'Research & Strategy',
            description: [
                "Understanding your business, industry, and target audience.",
                "Conducting market research & competitor analysis.",
                "Defining clear goals and crafting a data-driven strategy." 
            ]
        },
        {
            id: 3,
            step: "03",
            title: 'Research & Strategy',
            description: [
                "Understanding your business, industry, and target audience.",
                "Conducting market research & competitor analysis.",
                "Defining clear goals and crafting a data-driven strategy." 
            ]
        },
        {
            id: 4,
            step: "04",
            title: 'Research & Strategy',
            description: [
                "Understanding your business, industry, and target audience.",
                "Conducting market research & competitor analysis.",
                "Defining clear goals and crafting a data-driven strategy." 
            ]
        },
    ]
  return (
        <section className=" w-full overflow-x-hidden relative">
            <div className='absolute w-fit rotate-14 h-fit top-0 -left-15'>
        <BlurCircle/>
        </div>
        <div className="py-8 px-4 mx-auto w-[80%] max-lg:w-full min-h-screen lg:py-16 lg:px-6">
            <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8  gap-3 flex flex-col w-full">
            <SubHeading text="Our" span="Working" moreText="Process" />
            <p className="font-light text-white sm:text-xl ">
            We follow a structured and result-driven approach to ensure your digital marketing campaigns are successful.
          </p>
            </div> 
            <div className="grid gap-8 w-full  sm:grid-cols-1 md:grid-cols-2">
                {articleContent.map(({id , step , title , description})=>(

            <article key={id} className="p-6 max-md:p-0 flex flex-col gap-5 justify-center  text-white rounded-lg   shadow-md dark:bg-gray-800 dark:border-gray-700">
                   
                   
                   <h2 className="mb-2 text-2xl max-md:text-center font-bold tracking-tight "> <span className='text-[#9C27B0] font-bold'>Step {step}: </span> <a href="#">{title}</a></h2>
                   <div className="flex justify-between pl-3 max-md:p-0 max-md:w-full max-md:text-center items-center">
                    <ul className='list-disc max-md:w-full max-md:list-none'>
                       <li className='max-md:text-center'>{description[0]}</li>
                       <li className='max-md:text-center'>{description[1]}</li>
                       <li className='max-md:text-center'>{description[2]}</li>
                       </ul>
                      
                   </div>
               </article> 
                ))}
                               
            </div>  
        </div>
      </section>
  )
}

export default WorkSection
