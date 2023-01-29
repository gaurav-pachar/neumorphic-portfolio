import React from "react";
import ExperienceData from "Assets/ExperienceData";
export default function WorkEx ({props}) {
    const { WorkEx, OpenSource } = ExperienceData
    return (
    <div className="flex flex-col w-full p-8">
        <div className="fixed lg:hidden top-0 left-0 bg-primary shadow-shadow-only rounded-br-3xl w-fit p-2">
            <h1 className="m-auto font-bold text-3xl text-gray-500 tracking-wider antialiased">Experience</h1> 
        </div>
        <div className="flex mt-6 p-4">
            <div className="flex flex-1 justify-end sm:justify-center items-center">
                  <h2 className="font-bold text-3xl text-gray-500 tracking-wider antialiased">
                  {WorkEx.Name}
                  </h2>
            </div> 
        </div>
        <div className="">
            {WorkEx.list.map((item, index) => {
                return (
                    <div key={index}>
                        <h2 className="text-2xl font-medium text-gray-600 tracking-wider antialiased">
                            {item.organisation}
                        </h2>
                        <h3 className="text-xl font-normal text-gray-600 tracking-wider antialiased">
                            {item.timePeriod}
                        </h3>
                        <ol className="p-2 text-lg antialiased text-gray-500">
                            {item.projectDetails.map((item, index) => {
                                return (
                                    <li key={index}>
                                       <p>{index + 1}. {item}</p>
                                    </li>
                                )
                            })}
                        </ol>
                    </div>
                )
            })}
        </div>
        <div className="flex mt-6 p-4">
            <div className="flex flex-1 justify-end sm:justify-center items-center">
                  <h2 className="font-bold text-3xl text-gray-500 tracking-wider antialiased">
                  {OpenSource.Name}
                  </h2>
            </div> 
        </div>
        <div>
            {OpenSource.list.map((item, index) => {
                return (
                    <div className="" key={index}>
                        <h2 className="text-2xl font-medium text-gray-600 tracking-wider antialiased">
                            {item.name}
                        </h2>
                        <p className="p-2 text-lg tracking-wider antialiased text-gray-500">
                            {item.details}
                        </p>
                        <a className="tracking-wider antialiased" href={item.projectUrl} target="_blank" rel="noreferrer">
                            GitHub Link
                        </a>
                    </div>
                )
            })}
        </div>
    </div>
    )
}