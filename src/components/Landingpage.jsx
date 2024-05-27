import { motion } from "framer-motion";
import React from "react";
import { FaArrowUpLong } from "react-icons/fa6";

function Landingpage() {
  motion;
  return (
    <div data-scroll data-scroll-section data-scroll-speed="-.3" className="w-full h-screen bg-zinc-900 pt-1">
      <div className="textStrures mt-52 px-20">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className="masker">
              <div className="w-fit flex overflow-hidden">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "8vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1], duration: 1 }}
                    className="m-r-[1vw] w-[8vw] rounded-md h-[5.7vw] relative top-[1vw] bg-green-500"
                  ></motion.div>
                )}
                <h1 className="uppercase leading-[7vw] tracking-tighter text-[8vw] font-medium ">
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1px] border-zinc-800 mt-20 flex justify-between items-center py-5 px-20">
        {[
          "For public and private companies",
          "From the first pitch to IPO",
        ].map((item, index) => (
          <p className="text-md font-light tracking-tight leading-none transform transition duration-300 hover:scale-125 cursor-pointer">
            {item}
          </p>
        ))}
        <div className="start flex items-center gap-5">
          <div className="px-5 py-1 border-[1px] font-light text-md uppercase hover:text-black hover:bg-white  qq q rounded-full border-zinc-400 transition-all duration-300 hover:scale-110">
            Start the project
          </div>
          <div className="w-8 h-8 flex justify-center items-center border-[1px]  hover:text-black hover:bg-white  border-zinc-400 rounded-full transition-all duration-300 hover:scale-110">
            <span className="rotate-[45deg]">
              <FaArrowUpLong />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
