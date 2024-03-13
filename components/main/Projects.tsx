"use client"
import React, { useState } from "react";
import ProjectCard from "../sub/ProjectCard";
import { Button, Typography } from "@material-tailwind/react";
import { ThreeDCardDemo } from "./ProjectCard3D";

const Projects = () => {

  const projectList = [
    {
      id: 1,
      image: "/disney-plus-image.webp",
      name: "Disney clone",
      description: "un clone de disney plus para ver trailers y descripciones de algunas peliculas",
      link: "https://disney-plus-clone-v1.netlify.app/",
    },
    {
      id: 2,
      image: "/pokedex.webp",
      name: "Pokedex",
      description: "Investiga un poco sobre tu Pokémon favorito",
      link: "https://pokedex-msa.netlify.app/",
    },
    {
      id: 3,
      image: "/Ecomerce.webp",
      name: "E-commerce",
      description: "Sitio online para comprar y vender productos",
      link: "https://e-comerce-msa.netlify.app/#/login",
    },
    {
      id: 4,
      image: "/RickYMorty.webp",
      name: "Ricky and Morty",
      description: "Busca cualquier dimensión de Rick & Morty por su ID",
      link: "https://wiki-rick-and-morty-2024.netlify.app/",
    },
    {
      id: 5,
      image: "/ClimApp.webp",
      name: "Weather App",
      description: "Activa tu ubicación para ver el clima de tu zona",
      link: "https://entregable-2-clima-martin-santiago.netlify.app/",
    },
    {
      id: 6,
      image: "/Calculadora.webp",
      name: "Calculadora",
      description: "una calculadora simple pero eficaz",
      link: "https://calculadora-proyect.netlify.app/",
    },
    {
      id: 7,
      image: "/Register.webp",
      name: "Card register",
      description: "una pagina para registar usuarios creando tarjetas",
      link: "https://users-register-msa.netlify.app/",
    }
    
  ];

  
  return (
    <div className="flex flex-col items-center justify-center py-10" id="projects">
    <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
      My Projects
    </h1>
   
    {/* pc design */}

   <div className="hidden  z-40 h-full w-full md:grid grid-cols-1 md:grid-cols-2 gap-10 px-10 md:px-[5.5rem]">
      {projectList.map((project) => (
        <ThreeDCardDemo
        key={project.id}
        src={project.image}
        title={project.name}
         description={project.description}
         link={project.link}

        />
          
      ))}
     
    </div>



{/* mobile design */}

   <div className=" md:hidden z-40 h-full w-full grid grid-cols-1 md:grid-cols-2 gap-10 px-10 md:px-[5.5rem]">
      {projectList.map((project) => (
        <ProjectCard
        key={project.id}
        src={project.image}
        title={project.name}
        description={project.description}
        link={project.link}
      />
          
      ))}
     
    </div>
  </div>
  );
};

export default Projects;
