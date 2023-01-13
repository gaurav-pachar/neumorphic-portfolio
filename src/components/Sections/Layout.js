import React from "react";
import Classes from "./layout.module.css";

export default function SectionLayout (props) {
    return (
        <div className="w-full h-screen">
          <div className="flex w-full h-full">
             <div className={Classes.Navbar}>
                 NavBar
             </div>
             <div className={Classes.DisplayBoard}>
                  {props.children}
             </div>
          </div>
        </div>
    )
}