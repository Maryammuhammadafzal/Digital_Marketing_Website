import React from "react";
import SubHeading from "../Subheading/SubHeading";
import { TbTargetArrow } from "react-icons/tb";
import { IoMegaphone } from "react-icons/io5";
import { IoIosMail } from "react-icons/io";
import { FaLaptopCode } from "react-icons/fa6";
import BlurCircle from "../BlurCircle/BlurCircle";
const ServicesSection = () => {
  return (
    <section className="relative overflow-x-hidden">
      <div className="absolute w-fit -rotate-14  h-fit top-0 -right-15">
        <BlurCircle />
      </div>
      <div className="py-8 px-4 mx-auto max-w-screen-xl text-center lg:py-16 lg:px-6">
        <div className="mx-auto mb-8 w-full lg:mb-16 gap-3 flex flex-col">
          <SubHeading text="Our" span="Digital MArketing" moreText="Services" />
          <p className="font-light text-white sm:text-xl ">
            We offer a full range of services to boost your brand’s online
            presence.
          </p>
        </div>
        <div className="grid gap-8 lg:gap-16 max-[650px]:grid-cols-1  max-[950px]:grid-cols-2 lg:grid-cols-3">
          <div className="text-center flex gap-3 h-[400px] flex-col justify-center items-center p-5 bg-white rounded-xl hover:bg-[#9C27B0] hover:text-white text-[#9C27B0] ">
            <IoMegaphone  size="130" />
            <h3 className="mb-1 text-2xl font-bold tracking-tight">
              <a href="#">SEO (Search Engine Optimization)</a>
            </h3>
            <p>
              Rank higher in search results and attract more organic traffic to
              your website.
            </p>
          </div>
          <div className="text-center flex gap-3 h-[400px] flex-col justify-center items-center p-5 bg-white rounded-xl hover:bg-[#9C27B0] hover:text-white text-[#9C27B0] ">
            <IoMegaphone  size="130" />
            <h3 className="mb-1 text-2xl font-bold tracking-tight">
              <a href="#">PPC Advertising</a>
            </h3>
            <p>
              Maximize your ROI with targeted pay-per-click campaigns on
              platforms like Google Ads and Bing.
            </p>
          </div>
          <div className="text-center flex gap-3 h-[400px] flex-col justify-center items-center p-5 bg-white rounded-xl hover:bg-[#9C27B0] hover:text-white text-[#9C27B0] ">
            <TbTargetArrow  size="130" />
            <h3 className="mb-1 text-2xl font-bold tracking-tight">
              <a href="#">Social Media Marketing</a>
            </h3>
            <p>
              Build a strong social media presence that connects you with your
              audience and boosts engagement.
            </p>
          </div>
          <div className="text-center flex gap-3 h-[400px] flex-col justify-center items-center p-5 bg-white rounded-xl hover:bg-[#9C27B0] hover:text-white text-[#9C27B0] ">
            <IoMegaphone  size="130" />
            <h3 className="mb-1 text-2xl font-bold tracking-tight">
              <a href="#">Content Marketing</a>
            </h3>
            <p>
              Engage your audience with creative, high-quality content that
              drives conversions.
            </p>
          </div>
          <div className="text-center flex gap-3 h-[400px] flex-col justify-center items-center p-5 bg-white rounded-xl hover:bg-[#9C27B0] hover:text-white text-[#9C27B0] ">
            <IoIosMail  size="130" />
            <h3 className="mb-1 text-2xl font-bold tracking-tight">
              <a href="#">Email Marketing</a>
            </h3>
            <p>
              Reach your customers directly with personalized and effective
              email campaigns.
            </p>
          </div>
          <div className="text-center flex gap-3 h-[400px] flex-col justify-center items-center p-5 bg-white rounded-xl hover:bg-[#9C27B0] hover:text-white text-[#9C27B0] ">
            <FaLaptopCode  size="130" />
            <h3 className="mb-1 text-2xl font-bold tracking-tight">
              <a href="#">Website Design & Development</a>
            </h3>
            <p>
              Create a user-friendly and visually appealing website that
              converts visitors into customers.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
