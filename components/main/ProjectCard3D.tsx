"use client";

import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "../ui/3d-card";

interface Props {
    src: string;
    title: string;
    description: string;
    link:string
  }

export function ThreeDCardDemo( { src, title, description, link }: Props) {
  return (
    <CardContainer className="inter-var">
      <CardBody className="bg-gray-50 relative group/card  dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1]   rounded-xl p-6 border  ">
        <CardItem
          translateZ="50"
          className="text-neutral-600 dark:text-white text-2xl font-semibold text-white text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 "
        >
          {title}
        </CardItem>
        <CardItem
          as="p"
          translateZ="60"
          className="text-neutral-500 text-sm  mt-2 dark:text-neutral-300"
        >
          {description}
        </CardItem>
        <CardItem translateZ="100" className="w-full mt-4  ">
          <Image
            src={src}
            height="1000"
            width="1000"
            className="h-72 w-full object-cover rounded-xl group-hover/card:shadow-xl box-shadow-card"
            alt="thumbnail"
          />
        </CardItem>
        <div className="flex justify-between items-center mt-10">
            <a href={link} target="_blank"
            >
          <CardItem
            translateZ={20}
            as="button"
            className="px-4  text-xs font-normal dark:text-white bg-gradient-card py-2  text-center text-white cursor-pointer rounded-lg max-w-[200px] mt-2 grid"
          >
           
          Ver Proyecto
        
          </CardItem>
         </a>
        </div>
      </CardBody>
    </CardContainer>
  );
}
