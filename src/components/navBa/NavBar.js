import React, { useContext } from "react";
import { FaHome, FaFileAlt } from "react-icons/fa";
import { IoDocumentText, IoMail } from "react-icons/io5";
import Classes from "./navbar.module.css";
import Button from "elements/Button";
import MyGif from "../../../public/AREmoji_20221029_123415_9044 (1).gif";
import DP from "../../../public/20221115_212121(0).jpg"
import PictureFrame from 'components/pictureFram/pictureFrame';
import {
   ResumePageTabsStateContext,
   ResumePageTabsDispatchContext,
   setActiveTab
 } from "context/resumeSectionStore.js";
 import ClassNames from "Utils/ClassNames";
export default function NavBar ({
   page, 
   resumeBackdropClicked,
   ...props
}){
   const DispatchActiveTab = useContext(ResumePageTabsDispatchContext);
   const { activeTab } = React.useContext(ResumePageTabsStateContext);
   switch (page) {
      case 'homePage':
         return (
         <nav className={Classes.NavBar}>
            <div className='grid grid-cols-4 grid-rows-2 gap-4 w-full h-[20vh] px-6 md:hidden'>
               <div className='col-span-4 flex justify-center items-center'>
                  <div className="w-1/5">
                     <Button ButtonType="protruding" styling="linkStyled" path="/resume" shape="circle">
                        <IoDocumentText className='mx-auto w-9 h-9 z-10 text-gray-400'/>
                     </Button>
                  </div>
               </div>
               <div className='col-span-2 flex justify-start items-center'>
                  <div className="w-2/5">
                     <Button ButtonType="protruding" styling="linkStyled" path="/" shape="circle">
                        <FaHome className='mx-auto w-9 h-9 z-10 text-gray-400'/> 
                     </Button>
                  </div>
               </div>
               <div className='col-span-2 flex justify-end items-center'>
                  <div className="w-2/5">
                     <Button ButtonType="protruding" styling="linkStyled" path="/contact" shape="circle">
                        <IoMail className='mx-auto w-9 h-9 z-10 text-gray-400'/> 
                     </Button>
                  </div>
               </div>
            </div>
   
            <div className={Classes.desktopMenu}>
               <div className="w-18 h-18">
                  <Button ButtonType="protruding" styling="linkStyled" path="/" borderRadius="10px" shape="circle">
                     <FaHome className='mx-auto w-7 h-7 z-10 text-gray-400'/> 
                  </Button>
               </div>
               <div className="w-18 h-18">
                  <Button ButtonType="protruding" styling="linkStyled" path="/resume" borderRadius="10px" width='100%' height='100%' shape="circle">
                     <IoDocumentText className='mx-auto w-7 h-7 z-10 text-gray-400'/>
                  </Button>
               </div>
               <div className="w-18 h-18">
                  <Button ButtonType="protruding" styling="linkStyled" path="/contact" borderRadius="10px" width='100%' height='100%' shape="circle">
                     <IoMail className='mx-auto w-7 h-7 z-10 text-gray-400'/> 
                  </Button>
               </div>
            </div>
         </nav>
        );
      case 'resumePage':
         return (
            <>
            {props.showMenu && <div id="resumeNavbarBackdrop" className="fixed lg:hidden z-resumeNavbarBackdrop top-0 bottom-0 left-0 right-0" onClick={(e) => {
               console.log("bakdrop cliked");
               resumeBackdropClicked();
               }}> 
               </div>}
            <div className={ClassNames(
               "absolute lg:relative top-0 left-0 bottom-0",
               "flex justify-center items-center",
               "m-4 w-fit lg:w-1/3 lg:max-w-xs lg:min-w-[300px]",
               "lg:translate-x-0 transition-all lg:transition-none duration-500 ease-in-out z-resumeNavbar",
               (props.showMenu ? "translate-x-0" : "-translate-x-[500px]"))}> 

               <nav className={ClassNames(
                  "w-full h-auto lg:h-full min-h-fit",
                  "grid grid-cols-[auto_auto] lg:grid-cols-[auto_auto]", 
                  "lg:grid-row-3", 
                  "shadow-shadow-only md:shadow-protruding rounded-[20px]", 
                  "p-3 bg-primary")}>
                  {/* Inter Page Navigation Links */}
                  <div className={ClassNames(
                     "flex justify-between items-center", 
                     "col-start-1 lg:col-start-1 col-span-2 lg:col-span-2",
                     "row-start-1 row-span-1",
                     "lg:w-full")}>
                     <div className="p-2 lg:w-2/5 lg:max-w-[70px] flex justify-between items-center">
                     <Button ButtonType="protruding" styling="linkStyled" path="/" borderRadius="10px" width='100%' height='100%' shape="circle">
                        <FaHome className='mx-auto w-7 h-7 z-10 text-gray-400'/>
                     </Button>
                     </div>
                     <div className="p-2 lg:w-2/5 lg:max-w-[70px] flex justify-between items-center">
                     <Button ButtonType="protruding" styling="linkStyled" path="/contact" borderRadius="10px" width='100%' height='100%' shape="circle">
                        <IoMail className='mx-auto w-7 h-7 text-gray-400'/> 
                     </Button>
                     </div>
                  </div>
                  {/* Display Pic */}
                  <div className={ClassNames(
                     "flex items-center justify-center",
                     "col-start-1 col-span-2 lg:col-span-2",
                     "row-start-2 lg:row-start-2 row-span-1 lg:row-span-1",
                     "py-3",
                     "w-[200px] md:w-[250px] lg:w-full h-[200px] sm:h-[250px] lg:h-full")}>
                     <PictureFrame ImageSrc={DP.src}/>
                  </div>
                  {/* Section Tabs */}
                  <div className={ClassNames(
                     "grid grid-cols-1 grid-rows-3 gap-4 lg:gap-4",
                     "col-start-1 lg:col-start-1 col-span-2 lg:col-span-2",
                     "row-start-3 row-span-1",
                     "w-full p-2")}>
                        <div className="row-span-1 flex justify-center items-center">
                        <Button onClick={(e) => setActiveTab(DispatchActiveTab, 0)} ButtonType="protruding" styling="button" active={activeTab === 0}>
                           Work Ex
                        </Button>
                        </div>
                        <div className="row-span-1 flex justify-center items-center">
                        <Button onClick={(e) => setActiveTab(DispatchActiveTab, 1)} ButtonType="protruding" styling="button" active={activeTab === 1}>
                           Skills
                        </Button>
                        </div>
                        <div className="row-span-1 flex justify-center items-center">
                        <Button onClick={(e) => setActiveTab(DispatchActiveTab, 2)} ButtonType="protruding" styling="button" active={activeTab === 2}>
                           About 
                        </Button>
                        </div>
                  </div>
               </nav>
            </div>
            </>
         );
      case "contactPage":
         return (
            <nav className="flex justify-center items-center fixed top-0 left-0 right-0 m-10 z-20">
            <div className="flex justify-between items-center w-96 rounded-full shadow-protruding py-2 px-4 bg-primary">
               <div className="w-18 h-18">
                  <Button ButtonType="protruding" styling="linkStyled" path="/" borderRadius="10px" shape="circle">
                     <FaHome className='mx-auto w-7 h-7 z-10 text-gray-400'/> 
                  </Button>
               </div>
               <div className="w-18 h-18">
                  <Button ButtonType="protruding" styling="linkStyled" path="/resume" borderRadius="10px" width='100%' height='100%' shape="circle">
                     <IoDocumentText className='mx-auto w-7 h-7 z-10 text-gray-400'/>
                  </Button>
               </div>
               <div className="w-18 h-18">
                  <Button ButtonType="protruding" styling="linkStyled" path="/contact" borderRadius="10px" width='100%' height='100%' shape="circle">
                     <IoMail className='mx-auto w-7 h-7 z-10 text-gray-400'/> 
                  </Button>
               </div>
            </div>
         </nav>
         )   
   }
    
}