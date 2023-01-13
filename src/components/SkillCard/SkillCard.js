import React from "react";
import Classes from "./skillcard.module.css";
import SvgElements from "elements/SVG/SvgElements";
export default function SkillCard ({...props}) {
    console.log(props);
    const {icon, details, name, score} = props; 
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
                  <p className="text-lg font-medium text-gray-400">
                    {details}
                  </p>
                </div> : null}
              </div>
              {score > 0 ? <div id="score" className="flex gap-2 p-2">
                 <span className="h-4 w-4 rounded-full shadow-sunken-dark"></span>
                 <span className="h-4 w-4 rounded-full shadow-sunken-dark"></span>
                 <span className="h-4 w-4 rounded-full shadow-sunken-dark"></span>
                 <span className="h-4 w-4 rounded-full shadow-sunken-dark"></span>
                 <span className="h-4 w-4 rounded-full shadow-sunken-dark"></span>
                 <span className="h-4 w-4 rounded-full shadow-sunken-dark"></span>
                 <span className="h-4 w-4 rounded-full shadow-sunken-dark"></span>
                 <span className="h-4 w-4 rounded-full shadow-sunken-white"></span>
                 <span className="h-4 w-4 rounded-full shadow-sunken-white"></span>
                 <span className="h-4 w-4 rounded-full shadow-sunken-white"></span>
              </div> : null}
            </div>
          </div>
        </div>
    )
}