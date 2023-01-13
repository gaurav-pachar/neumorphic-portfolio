import React from "react";
import { FaHome, FaFileAlt } from "react-icons/fa";
import { IoDocumentText, IoMail } from "react-icons/io5";
import Classes from "./navbar.module.css";
import Button from "elements/Button";
import MyGif from "../../../public/AREmoji_20221029_123415_9044 (1).gif";
import DP from "../../../public/20221115_212121(0).jpg"
import PictureFrame from 'components/PictureFrame';
import { Tab } from "@headlessui/react";
export default function NavBar ({page, ...props}){
   switch (page) {
      case 'homePage':
         return (
         <nav className={Classes.NavBar}>
          <div className='grid grid-cols-4 grid-rows-2 gap-4 w-full h-[20vh] px-6 md:hidden'>
                <div className='col-span-4 flex justify-center items-center'>
                  <div className="w-1/5">
                <Button ButtonType="protruding" type="linkStylized" path="/" borderRadius="10px" width='100%' height='100%' shape="circle">
             <FaHome className='mx-auto w-9 h-9 z-10 text-gray-400'/> 
                </Button>
                </div>
                </div>
                <div className='col-span-2 flex justify-start items-center'>
                <div className="w-2/5">
                <Button ButtonType="protruding" type="linkStylized" path="/" borderRadius="10px" width='100%' height='100%' shape="circle">
             <IoDocumentText className='mx-auto w-9 h-9 z-10 text-gray-400'/>
                </Button>
                </div>
                </div>
                <div className='col-span-2 flex justify-end items-center'>
                <div className="w-2/5">
                <Button ButtonType="protruding" type="linkStylized" path="/" borderRadius="10px" width='100%' height='100%' shape="circle">
              <IoMail className='mx-auto w-9 h-9 z-10 text-gray-400'/> 
           </Button>
           </div>
                </div>
          </div>
   
         <div className={Classes.desktopMenu}>
         <div className='flex justify-center items-center'>
            <FaHome className='mx-auto w-8 h-8 z-10 text-orange-400'/> 
            </div>
            <div className='flex justify-start items-center'>
         <IoDocumentText className='mx-auto w-8 h-8 text-orange-400'/>
            </div>
            <div className='flex justify-end items-center'>
          <IoMail className='mx-auto w-8 h-8 text-orange-400'/> 
            </div>
         </div>
        </nav>
        );
      case 'resumePage':
         return (
            
            <div className={"absolute sm:relative top-0 left-0 bottom-0 z-resumeNavbar flex justify-center items-center m-4 sm:mx-2 sm:mt-2 sm:mb-4 w-[50vw] sm:w-auto lg:w-[30%] sm:translate-x-0 transition-all sm:transition-none delay-100 duration-500 ease-in-out " + (props.showMenu ? "translate-x-0" : "-translate-x-[500px]")}>
            <nav className={Classes.gridWrapper}>
 
             <div className={Classes.gridItem1}>
               <Button ButtonType="protruding" type="linkStylized" path="/" borderRadius="10px" width='100%' height='100%' shape="circle">
                 <FaHome className='mx-auto w-9 h-9 z-10 text-gray-400'/>
               </Button>
               <Button ButtonType="protruding" type="linkStylized" path="/contact" borderRadius="10px" width='100%' height='100%' shape="circle">
                 <IoMail className='mx-auto w-9 h-9 text-gray-400'/> 
               </Button>
             </div>
 
             <div className={Classes.gridItem2}>
             <PictureFrame ImageSrc={DP.src}/>
             </div>
             
             <div className={Classes.gridItem3}>
               <div className="flex justify-center items-center flex-col sm:flex-row lg:flex-col sm:w-full sm:px-4 sm:py-2 lg:p-0">
               <Button ButtonType="protruding" type="button" width='100%' height='100%'>
                 Work Ex
               </Button>
               <Button ButtonType="protruding" type="button" width='100%' height='100%'>
                 Skills
               </Button>
               </div>
               <div className="flex justify-center items-center flex-col sm:flex-row lg:flex-col sm:w-full sm:px-4 sm:py-2 lg:p-0">
               <Button ButtonType="protruding" type="button" width='100%' height='100%'>
                 About 
               </Button>
               <Button ButtonType="protruding" type="button" width='100%' height='100%'>
                 Academics
               </Button>
               </div>
             </div>
             
            </nav>
          </div>
         
         );
   }
    
}