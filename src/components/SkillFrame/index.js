import CircularProgressBar from "components/CircularBar/CircularProgressBar";
import React from"react";
import Classes from "./skillFrame.module.css";

export default function SkillFrame ({...props}) {
   
    return (
        <div className={Classes.base}>
           <div className={Classes.outer}>
            <div className={Classes.inner}>
               <div className={Classes.contentWrapper}>
                 <div className="h-10 w-20">
                 {props.children}
                 </div>
                 <span>
                    65%
                 </span>
               </div>
            </div>
           </div>
          <CircularProgressBar value={85}/>
        </div>
    )
}

/*
<div className={Classes.base}>
           <div className={Classes.outer}>
            <div className={Classes.inner}>
               <div className="h-6 w-6">
               {props.children}
               </div>
               <span>
                  65%
               </span>
            </div>
           </div>
           <svg xmlns="http://www.w3.org/2000/svg" className={Classes.circularBar} version="1.1">
              <defs>
                 <linearGradient id="GradientColor">
                    <stop offset="0%" stop-color="#007991" />
                    <stop offset="100%" stop-color="#78FFD6" />
                 </linearGradient>
              </defs>
              <circle className={Classes.circle} cx="50" cy="50" r="40%" stroke-linecap="round"/>
           </svg>
  
  
         </div>


         <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
<circle cx="50" cy="50" r="49" stroke="black" stroke-width="2"/>
</svg>

*/