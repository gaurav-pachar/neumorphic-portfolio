import React from "react";
import Classes from "./button.module.css";
import NextLink from "next/link";
import PropTypes from 'prop-types';
import ClassNames from "Utils/ClassNames";
export default function Button({
     type,
     path,
     onClick,
     ButtonType,
     surface,
     disabled,
     borderRadius,
     width,
     height,
     shape,
     styling,
     active,
     ...props
}){
     
    switch (styling) {
     case "link":
          return (
          <NextLink href={path}>
            <div className="w-full h-full m-2">
               <button
                      className={ClassNames("relative flex justify-center items-center shadow-protruding rounded-lg bg-convex hover:bg-concave w-full h-full", shape === "circle" ? "aspect-square rounded-[50%]" : "")}
                      disabled={disabled}>
                   <span className={ClassNames("flex justify-center items-center box-border w-sub13px h-sub13px py-2 shadow-smooth-corner rounded-lg subpixel-antialiased font-medium text-gray-500 ", shape === "circle" ? "rounded-[50%]" : "")}>{props.children}
                    </span>
               </button>
               </div>
          </NextLink>
          );
     case "linkStyled":
          return (
               <NextLink href={path}>
               <div className="w-full h-full">
               <svg className="hidden">
                 <filter id="filter0_i_190_4" x="0" y="0" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                 <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                 <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                 <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                 <feOffset/>
                 <feGaussianBlur stdDeviation="2.5"/>
                 <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                 <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.43 0"/>
                 <feBlend mode="normal" in2="shape" result="effect1_innerShadow_190_4"/>
                 </filter>
               </svg>
               <button
                      className={ClassNames("flex justify-center items-center shadow-protruding rounded-lg bg-convex hover:bg-concave w-full h-auto", shape === "circle" ? "aspect-square rounded-[50%]" : "")}
                      disabled={disabled}>
                   <span className={ClassNames("flex justify-center items-center w-full h-full py-3 shadow-sunken-dark bg-concave-dark rounded-lg p-2 subpixel-antialiased iconInnerShadow font-medium text-gray-500 ", shape === "circle" ? "rounded-[50%]" : "")}>{props.children}
                    </span>
               </button>
               </div>
               </NextLink>
          )
     case "button":
          return (
               <button
                      onClick={(e) => {
                        onClick(e);
                      }}
                      className={ClassNames(
                         "flex justify-center items-center",
                         "shadow-protruding rounded-lg",
                         "hover:bg-concave w-full h-auto p-[6px]", 
                         active ? "bg-concave" : "bg-convex",
                         shape === "circle" ? "aspect-square rounded-[50%]" : "")}
                      disabled={disabled}>
                   <span className={ClassNames("flex justify-center items-center w-full py-1.5 shadow-smooth-corner rounded-lg subpixel-antialiased font-medium text-gray-500 ", shape === "circle" ? "rounded-[50%]" : "")}>{props.children}
                    </span>
               </button>
          )
     case "buttonStyled":
          return (
               <div className="w-full sm:w-24 lg:w-full h-full sm:h-24 lg:h-full m-2 p-2">
               <svg className="hidden">
                 <filter id="filter0_i_190_4" x="0" y="0" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                 <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                 <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
                 <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                 <feOffset/>
                 <feGaussianBlur stdDeviation="2.5"/>
                 <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1"/>
                 <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.43 0"/>
                 <feBlend mode="normal" in2="shape" result="effect1_innerShadow_190_4"/>
                 </filter>
               </svg>
               <button
                      onClick={(e) => {
                        onClick(e);
                      }}
                      className={ClassNames("flex justify-center items-center shadow-protruding rounded-lg bg-convex hover:bg-concave w-full h-auto", shape === "circle" ? "aspect-square rounded-[50%]" : "")}
                      disabled={disabled}>
                   <span className={ClassNames("flex justify-center items-center w-full h-full py-3 shadow-sunken-dark bg-concave-dark rounded-lg subpixel-antialiased iconInnerShadow font-medium text-gray-500 ", shape === "circle" ? "rounded-[50%]" : "")}>{props.children}
                    </span>
               </button>
               </div>
          )
     
    }
}

Button.propTypes = {
   path: PropTypes.string,
   ButtonType: PropTypes.oneOf([
     "floating",
     "protruding",
     "sunken"
   ]),
   type: PropTypes.oneOf(["link","button"]),
   borderRadius: PropTypes.string,
   width: PropTypes.string,
   height: PropTypes.string
}

Button.defaultProps = {
     path: "/#",
     ButtonType: "protruding",
     width: "auto",
     height: "auto"
}

const ButtonShape = (shape) => {
     switch (shape) {
          case "circle":
               return "aspect-square rounded-[50%]";
          case "sqaure":
               return "aspect-square rounded-lg";
          case "rectangle":
               return ""; 
     }
}
const ShadowType = (type) => {
   switch (type) {
     case "floating":
          return "--shadow-only";
     case "protruding":
          return "--protruding-effect";
     case "sunken" :
          return "--sunken-effect"; 
    }
}

const ButtonSurfaceType = (surface) => {
     switch (surface) {
       case "concave":
            return "--concave-surface";
       case "convex":
            return "--convex-surface"; 
     }
}

// "shadow-smooth-corner rounded-lg bg-convex w-sub20px h-sub20px flex justify-center items-center m-2"

//{Classes.buttonInner}

/*
<span className="shadow-smooth-corner rounded-lg bg-convex w-sub20px h-sub20px flex justify-center items-center innerbutton aspect-square p-2">{props.children}</span>
*/