import React from "react";
import Classes from "./skillcard.module.css";
import SvgElements from "elements/SVG/SvgElements";
import ClassNames from "Utils/ClassNames";
export default function SkillCard ({...props}) {
    console.log(props);
    const {icon, details, name, score} = props; 
    const array = [1,2,3,4,5,6,7,8,9,10]
    return (
        <div className={Classes.skillCard}>
          <div className={Classes.contentWrapper}>
            <div className="flex flex-col justify-center items-center">
              <div id="IconAndDetails" className="flex gap-6">
                <div id="icon" className="">
                  <SvgElements name={icon}/>
                </div>
                {details.length > 0 ?
                 <div id="SkillDetails">
                  <p className="text-lg font-medium text-gray-400 whitespace-pre-wrap tracking-wider antialiased">
                    {details}
                  </p>
                </div> : null}
              </div>
              {
              score > 0 ? 
              <div id="score" className="flex gap-2 p-2">
                {
                  array.map((item) => {
                    console
                    return (
                      <span key={item} className={ClassNames(
                        "h-4 w-4 rounded-full",
                        item <= score ? "shadow-sunken-dark" : "shadow-sunken-white")}></span>
                    )
                  })
                }
              </div> : null 
              }
            </div>
          </div>
        </div>
    )
}