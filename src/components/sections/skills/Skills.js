import React from "react";
import SkillCard from "components/skillCard/SkillCard";
import SkillData from "Assets/SkillData";

export default function SkillsSection (props) {
    const { Languages, FrameworksAndLibraries, DevOps, OtherTools} = SkillData
    console.log(Languages);
    return (
    <div className="flex flex-col w-full p-8">
        <div className="fixed lg:hidden top-0 left-0 bg-primary shadow-shadow-only rounded-br-3xl w-fit p-2">
            <h1 className="m-auto font-bold text-3xl text-gray-500 tracking-wider antialiased">Skills</h1> 
        </div>
        <div className="flex mt-6 p-4">
            <div className="flex flex-1 justify-end sm:justify-center items-center">
                  <h2 className="font-bold text-3xl text-gray-500 tracking-wider antialiased">
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
                  <h2 className="font-bold text-3xl text-gray-500 tracking-wider antialiased">
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
                  <h2 className="font-bold text-3xl text-gray-500 tracking-wider antialiased">
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
                  <h2 className="font-bold text-3xl text-gray-500 tracking-wider antialiased">
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
