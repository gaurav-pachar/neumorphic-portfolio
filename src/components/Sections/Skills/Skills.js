import React from "react";
import SvgComponents from 'elements/SVG/SvgElements';
import SkillFrame from "components/SkillFrame";
import SvgElements from "elements/SVG/SvgElements";
import Classes from "./skills.module.css"
import SkillCard from "components/SkillCard/SkillCard";
import SkillData from "Assets/SkillData";
export default function SkillsSection (props) {
    const { Languages, FrameworksAndLibraries, DevOps, OtherTools} = SkillData
    console.log(Languages);
    return (
    <div className={Classes.SectionWrapper}>
        <div className={Classes.sectionBadge}>
            <h1 className="m-auto font-bold text-3xl">Skills</h1> 
        </div>
        <div className="flex mr-6 p-4">
            <div className="flex flex-1 justify-end sm:justify-center items-center">
                  <h2 className="font-bold text-3xl text-gray-500">
                      {Languages.id}
                  </h2>
            </div> 
        </div>
        <div className="flex justify-center items-center flex-wrap gap-4">
                      {Languages.list.map((item) => {
                        console.log(item);
                          return (
                            <div key={item.name} className="flex justify-center">
                            <SkillCard {...item}/>
                              </div>
                          )
                    })}
        </div>
        <div className="flex mr-6 p-4">
            <div className="flex flex-1 justify-start sm:justify-center items-center">
                  <h2 className="font-bold text-3xl text-gray-500">
                      {FrameworksAndLibraries.id}
                  </h2>
            </div> 
        </div>
        <div className="flex justify-center items-center flex-wrap gap-4">
                      {FrameworksAndLibraries.list.map((item) => {
                        console.log(item);
                          return (
                            <div key={item.name} className="flex justify-center">
                            <SkillCard {...item}/>
                              </div>
                          )
                    })}
        </div>
        <div className="flex mr-6 p-4">
            <div className="flex flex-1 justify-end sm:justify-center items-center">
                  <h2 className="font-bold text-3xl text-gray-500">
                      {DevOps.id}
                  </h2>
            </div> 
        </div>
        <div className="flex justify-center items-center flex-wrap gap-4">
                      {DevOps.list.map((item) => {
                        console.log(item);
                          return (
                            <div key={item.name} className="flex justify-center">
                            <SkillCard {...item}/>
                              </div>
                          )
                    })}
        </div>
        <div className="flex mr-6 p-4">
            <div className="flex flex-1 justify-start sm:justify-center items-center">
                  <h2 className="font-bold text-3xl text-gray-500">
                      {OtherTools.id}
                  </h2>
            </div> 
        </div>
        <div className="flex justify-center items-center flex-wrap gap-4 mb-4">
                      {OtherTools.list.map((item) => {
                        console.log(item);
                          return (
                            <div key={item.name} className="flex justify-center">
                            <SkillCard {...item}/>
                              </div>
                          )
                    })}
        </div>
    </div> 
    )
}
const iconsWanted = [
    "css3",
  "exprejs",
  "facebook",
  "figma",
  "git",
  "github",
  "gmail",
  "html5",
  "js",
  "linkedin",
  "mongodb",
  "nodejs",
  "reactjs",
  "vscode"
  ]