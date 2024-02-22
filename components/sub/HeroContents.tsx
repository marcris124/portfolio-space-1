"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";

import Image from "next/image";


const HeroContent = () => {
  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-col-reverse md:flex-row items-center justify-center px-0 md:px-20 mt-28 md:mt-40 w-full z-[20] md:grid md:grid-cols-2"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-center md:text-start items-center md:items-stretch flex-wrap">
       

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-[45px] md:text-[2.75rem] lg:text-6xl  leading-none font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
          Proporcionando
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              la mejor{" "}
            </span>
            experiencia en proyectos
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg md:text-base lg:text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Soy un desarrollador web Full Stack enfocado en el desarrollo front-end de aplicaciones y plataformas web, en el cual siempre estoy dispuesto a mejorar mis habilidades, creando proyectos, enfrentando desafíos y con la motivación de seguir aprendiendo.
        </motion.p>
        <motion.div
        className=" flex justify-start gap-24 md:gap-48 "
        >

          <motion.a
                    variants={slideInFromLeft(1)}
                    className="p-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[90px]"
                    href="https://github.com/marcris124" target={"_blank"}
                  >
                    <Image src={"/gitwhite.png"} width={80} height={80} alt='github'/>
                  
                  </motion.a>
                  <motion.a
                    variants={slideInFromLeft(1)}
                    className="p-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[90px]"
                    href="https://www.linkedin.com/in/martin-aguirre-38b201244/" target={"_blank"}
                  >
                    <Image src={"/linkedin.png"} width={80} height={80}  alt='linkedin' />
                  </motion.a>

        </motion.div>
       
      </div>

      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center "
      >
        <Image
          className="w-[50%] md:w-[70%] lg:w-[60%] skew-x-[-5deg] rounded border-2 border-white"
          src="/imageMain.webp"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
