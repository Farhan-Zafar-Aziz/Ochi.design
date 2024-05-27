import React from "react";
import card3 from "../assets/card3.jpg";
import card4 from "../assets/card4.png";
import { motion, useAnimation } from "framer-motion";


function Featured() {
  const cards = [useAnimation(), useAnimation()];

  const handleHover = (index) => {
    cards[index].start({ y: "0" });
  };

  const handleHoverEnd = (index) => {
    cards[index].start({ y: "100%" });
  };

  return (
    <>
      <div data-scroll data-scroll-section 
      className="w-full py-10 mb-10">
        <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-10">
          <h1 className='text-6xl text-white font-["Neue Montreal"] tracking-tight'>
            Featured projects
          </h1>
        </div>
        <div className="px-20">
          <div className="cards w-full flex gap-10 mt-10">
            <motion.div
              onHoverStart={() => handleHover(0)}
              onHoverEnd={() => handleHoverEnd(0)}
              className="cardcontainer relative w-1/2 h-[70vh]"
            >
              <h1 className="absolute flex overflow-hidden text-[#CDEA68] left-full -translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-6xl font-bold">
              {"TRAWA".split("").map((item, index) => (
                <motion.span
                initial={{y: "100%"}}
                animate={cards[0]}
                transition={{ease: [0.22,1, 0.36,1], delay: index * 0.05}}
                className="inline-block">
                  {item}
                </motion.span>
              ))}
               </h1>
              <div className="card w-full h-[70vh] rounded-xl overflow-hidden">
                <img className="w-full h-full transition-all duration-300 hover:scale-110" src={card3} alt="" />
              </div>
              <div className="flex gap-8 mt-7">
                <div className="px-6 py-1 text-white hover:text-black hover:bg-white  border-[1.5px] font-light text-sm uppercase rounded-full border-zinc-100 transform transition duration-300 hover:scale-125 cursor-pointer">
                  Audit
                </div>
                <div className="px-6 py-1 text-white hover:text-black hover:bg-white  border-[1.5px]  text-sm uppercase rounded-full border-zinc-100 transform transition duration-300 hover:scale-125 cursor-pointer">
                  Copy Writing
                </div>
                <div className="px-6 py-1 text-white hover:text-black hover:bg-white  border-[1.5px] text-sm uppercase rounded-full border-zinc-100 transform transition duration-300 hover:scale-125 cursor-pointer">
                  Sales Deck
                </div>
              </div>
            </motion.div>
            <motion.div
             onHoverStart={() => handleHover(1)}
             onHoverEnd={() => handleHoverEnd(1)}
              className="cardcontainer relative w-1/2 h-[70vh">
              <h1 className="absolute flex overflow-hidden text-[#CDEA68] right-full translate-x-1/2 top-1/2 -translate-y-1/2 z-[9] leading-none tracking-tighter text-6xl font-bold">
              {"PREMIUM BLEND".split("").map((item, index) => (
               <motion.span
                initail={{y: "100%"}}
                animate={cards[1]}
                transition={{ease: [0.22,1, 0.36,1], delay: index * 0.05}}
                className="inline-block">
                  {item}
                </motion.span>
              ))}
               </h1>
              <div className="card w-full h-[70vh] rounded-xl overflow-hidden">
                <img className="w-full h-full transition-all duration-300 hover:scale-110" src={card4} alt="" />
              </div>
              <div className="flex gap-10 mt-7">
                <div className="px-5 py-1 hover:text-black hover:bg-white  border-[1.5px] uppercase rounded-full border-zinc-100 transform transition duration-300 hover:scale-125 cursor-pointer">
                  Agency
                </div>
                <div className="px-5 py-1 text-white hover:text-black hover:bg-white border-[1.5px] uppercase rounded-full border-zinc-100 transform transition duration-300 hover:scale-125 cursor-pointer">
                  Company Presentation
                </div>
              </div>
            </motion.div>
          </div>
        </div>
        <div className="w-full px-20 border-b-[1px] border-zinc-700 mt-10"></div>
      </div>
    </>
  );
}

export default Featured;
