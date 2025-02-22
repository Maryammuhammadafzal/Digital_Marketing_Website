import React from "react";

const Banner = () => {
  return (
    <div className="banner overflow-x-hidden flex justify-center items-center p-3">
      <div className="content w-[70%] max-lg:w-[80%] max-md:w-[95%] h-fit ">
        <p className="w-full h-auto text-center text-2xl max-md:text-xl max-sm:text-lg text-white font-bold">
          A brief overview of your services and expertise. Example: "At [Agency
          Name], we provide cutting-edge digital marketing solutions tailored to
          help businesses like yours thrive in the online world. From social
          media marketing to SEO, we have the tools to grow your brand."
        </p>
      </div>
    </div>
  );
};

export default Banner;
