import React from "react";

export default function AboutSection ({props}) {
    return (
        <div className="p-4 h-full lg:flex lg:items-center">
           <div className="fixed lg:hidden top-0 left-0 bg-primary shadow-shadow-only rounded-br-3xl w-fit p-2">
              <h1 className="m-auto font-bold text-3xl text-gray-500 tracking-wider antialiased">About</h1> 
           </div>
           <div className="block text-center text-2xl p-4 font-semibold text-gray-600 antialiased tracking-wideer leading-8 mt-8 lg:mt-0">
            <p>
            I am a Software Developer with over 3 years of experience specializing in frontend development using technologies like JavaScript, React.js, Next.js, and Tailwind CSS. In my current role as a Frontend Engineer at OptiPhoenix, I have developed more than 50 A/B tests for enterprise-level clients across industries such as hospitality and e-commerce. I hold a Bachelor of Technology in Electrical Engineering from YMCA University of Science and Technology, Haryana, India.

            </p>
            <br/>
            <p>
            I approach my work with responsibility and a strong sense of ownership, ensuring tasks are completed with attention to detail and within deadlines. I am proactive in seeking opportunities to improve both my work and processes, and I value feedback as an opportunity for growth. I am always willing to acknowledge mistakes and take the necessary steps to correct them, which has earned me recognition for my dedication and passion.
            </p>
           </div>
        </div>
    )
}