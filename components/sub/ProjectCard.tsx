import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
} from "@/utils/motion";
interface Props {
  src: string;
  title: string;
  description: string;
  link:string
}

const ProjectCard = ({ src, title, description, link }: Props) => {
  return (
    <div className="relative overflow-hidden rounded-lg shadow-lg border border-[#2A0E61] shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md">
      <Image
        src={src}
        alt={title}
        width={1000}
        height={1000}
        className="w-full object-contain"
      />

      <div className="relative p-4 ">
        <h1 className="text-2xl font-semibold text-white">{title}</h1>
        <p className="mt-2 text-gray-300">{description}</p>
        <a href={link}
         target="_blank"
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px] mt-2 grid"
        >
          Ver Proyecto
        </a>
      </div>
    </div>
  );
};

export default ProjectCard;
