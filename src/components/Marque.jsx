import React from "react";
import { motion } from "framer-motion";

function Marque() {
  return (
    <div data-scroll data-scroll-speed=".1" className="w-full py-10 mt-20 text-white rounded-tl-3xl rounded-tr-3xl bg-[#004D43]">
      <div className="text border-t-[1px] border-b-[1px] border-zinc-300 flex overflow-hidden whitespace-nowrap pr-12">
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[13vw] leading-none font-bold uppercase"
        >
          We are Ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[13vw] leading-none font-bold uppercase "
        >
          We are Ochi
        </motion.h1>
        <motion.h1
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ ease: "linear", repeat: Infinity, duration: 5 }}
          className="text-[13vw] leading-none font-bold uppercase "
        >
          We are Ochi
        </motion.h1>
      </div>
    </div>
  );
}

export default Marque;
