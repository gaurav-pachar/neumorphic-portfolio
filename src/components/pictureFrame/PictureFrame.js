import React from "react";
import ClassNames from "Utils/ClassNames";
import Image from "next/image";
export default function PictureFrame({shape, ...props}) {
   return (
      
      <div className={ClassNames("relative shadow-protruding flex justify-center items-center w-full h-auto aspect-square bg-primary", shape === "square" ? "rounded-3xl" : "rounded-full")}>

       <div className={ClassNames("absolute w-sub20px h-sub20px z-10", shape === "square" ? "rounded-3xl" : "rounded-full")}>
         <Image 
              layout="fill" src={props.ImageSrc} 
              className={ClassNames("z-10", shape === "square" ? "rounded-3xl" : "rounded-full")}/>
       </div>

         <div className={ClassNames("w-sub20px h-sub20px z-20 shadow-sunken",shape === "square" ? "rounded-3xl" : "rounded-full")}></div>
         
      </div>
   )
}

/*
<div className={Classes.pictureFrame}>
            <img src={props.ImageSrc}/>
        </div>
*/