import React from "react";

export default function about({props}) {
    return (
        <div className="p-4 h-full lg:flex lg:items-center">
           <div className="fixed lg:hidden top-0 left-0 bg-primary shadow-shadow-only rounded-br-3xl w-fit p-2">
              <h1 className="m-auto font-bold text-3xl text-gray-500 tracking-wider antialiased">About</h1> 
           </div>
           <div className="block text-center text-2xl p-4 font-semibold text-gray-600 antialiased tracking-wideer leading-8 mt-8 lg:mt-0">
            <p>
            I am a Javascript Developer with about 2 years of experience. My expertise is in frameworks like ReactJS, NextJS, TailwindCSS, etc. In my current role as a Developer at BlueCompute, I have developed websites and worked on different types of  SaaS applications. The projects I have worked on were mostly the type of applications that provided services of data accusations and data analysis. I did my Bachelors of Technology in Electrical Engineering from YMCA University of Science Technology (Faridabad), Haryana, India.

            </p>
            <br/>
            <p>
            I always keep a responsible attitude toward my work and take ownership of my tasks and follow through with them in a proper manner. I understand the importance of meeting deadlines and delivering high-quality work. I am a proactive person and am always looking for ways to improve my work. I am always open to receiving feedback and constructive criticism moreover also willing to admit when I have made a mistake and take the necessary steps to correct it. And that is why I have been regularly complimented about my passion and diligence in my work.
            </p>
           </div>
        </div>
    )
} 