import React from "react";
import Head from 'next/head'
import NavBar from 'components/navBar/NavBar';
import { FaBars } from "react-icons/fa";
import SkillsSection from "components/sections/skills/Skills";
import WorkEx from "components/sections/workEx/WorkEx";
import About from "components/sections/about/About";
import {
  ResumePageTabsStateContext,
} from "context/resumeSectionStore.js"
export default function Resume (props) {
  const [showMenu, setshowMenu] = React.useState(false);
  const { activeTab } = React.useContext(ResumePageTabsStateContext);
  console.log(activeTab);

  const Sections = (activeTab) => {
     switch (activeTab) {
      case 0:
        return <WorkEx/>;
      case 1:
        return <SkillsSection/>;
      case 2:
        return <About/>
     }
  }

    return (
      <>
      <Head>
        <title>Resume</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="relative w-full h-screen m-auto">
        <div className="flex sm:flex-col lg:flex-row box-border sm:p-4 h-full">
          <NavBar page="resumePage" resumeBackdropClicked={() =>
            setshowMenu(!showMenu)
          } showMenu={showMenu}/>
          <div className="overflow-scroll">{Sections(activeTab)}</div>
          
        </div>
        <div className="absolute bottom-0 w-[100vw] flex lg:hidden justify-end items-center">
        <button 
               className={"flex p-6 mx-6 my-4 shadow-shadow-only rounded-full z-menuButton " + (showMenu ? "bg-concave" : "bg-convex")}
               onClick={() => {
                setshowMenu(!showMenu);
               }}>
          <FaBars/>
        </button>
        </div>
      </main>
      </>
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
   

/*

{iconsWanted.map((item) => {
              return (
              <div className={Classes.skillContainer}>
                <SkillFrame value={80}>
                  <SvgElements name={item}/> 
                </SkillFrame> 
              </div>
              )
            })}
*/