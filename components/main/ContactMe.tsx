import { EnvelopeIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import React from 'react'


const ContactMe = () => {
  return (
    <div className=' grid grid-cols-1 md:grid-cols-2 ' id='contactMe'>
         <div className=" grid justify-center items-center flex-wrap text-white ">
                

                <div className="z-40 min-w-[200px] h-auto flex md:block flex-col items-center  md:items-start justify-start ">
                <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-12">
                    Contact Me
                </h1>
                  <div className=''>
                <a href="https://www.linkedin.com/in/martin-aguirre-38b201244/" target={"_blank"}>
                    <p className="flex flex-col sm:flex-row items-center my-[15px] cursor-pointer">
                    <Image src={"/linkedin.png"} width={80} height={80} alt='linkedin' />
                        <span className="text-[20px] ml-[6px]">Conéctate conmigo en linkedin</span>    
                    </p>
                </a>
                    <p className="flex flex-col sm:flex-row items-center my-[15px] cursor-pointer">
                    <Image src={"/gmail.png"} width={80} height={80} alt='gmail' />
                        <span className="text-[20px] ml-[6px]">martinavendano095@gmail.com</span>    
                    </p>

                  
                  <a href="https://wa.me/+573173996738">
                    <p className="flex flex-col sm:flex-row items-center my-[15px] cursor-pointer">
                    <Image src={"/whatsapp.png"} width={80} height={80} alt='linkedin' />
                        <span className="text-[20px] ml-[6px]"> +57 317 399 6738</span>    
                    </p>
                   </a>
                   
                  </div>
                    

                    
                    
                </div>
               
                
            </div>
            <div className='hidden md:grid justify-center items-center'>              
                <Image src={"/contactMeIMG.webp"} width={700} height={700} alt='contact Me'/>
            </div>
        

    </div>
  )
}

export default ContactMe