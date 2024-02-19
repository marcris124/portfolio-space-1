"use client";


import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import { Collapse, IconButton, Navbar, Typography } from "@material-tailwind/react";
import Image from "next/image";
import React from "react";


const NavList = () => {
  return (
    <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
    
      <Typography placeholder={""}
        as="li"
        variant="paragraph"
        color="white"
        className="p-1 font-semibold"
      >
        <a href="#skills" className="flex items-center hover:text-blue-500 transition-colors">
        Habilidades

        </a>
      </Typography>
      <Typography placeholder={""}
        as="li"
        variant="paragraph"
        color="white"
        className="p-1 font-semibold"
      >
        <a href="#projects" className="flex items-center hover:text-blue-500 transition-colors">
         Proyectos
        </a>
      </Typography>
      <Typography placeholder={""}
        as="li"
        variant="paragraph"
        color="white"
        className="p-1 font-semibold"
      >
        <a href="#" className="flex items-center hover:text-blue-500 transition-colors">
          Contácta Me
        </a>
      </Typography>
    </ul>
  );
}
 
export function NavbarSimple() {
  const [openNav, setOpenNav] = React.useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
 
  return (
  
    <Navbar placeholder={""} className="border xs:border-none mx-auto max-w-none px-6 py-3 fixed z-50 shadow-lg shadow-[#2A0E61]/50 bg-[#03001417] backdrop-blur-md rounded-none">
      <div className="flex items-center justify-between text-white">
        <Typography placeholder={""}
          as="a"
          href="#"
          variant="h5"
          className="mr-4 cursor-pointer py-1.5 "
        >
          Martin Santiago
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton placeholder={""}
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (  
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          ) : (
            <Bars3Icon className="h-6 w-6" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
      
        <NavList />
       
      </Collapse>
    </Navbar>

  );
}





export default NavList;
