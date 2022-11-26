import React from "react";
import { useState } from "react";
import { InView } from "react-intersection-observer";


const SkillsWall = () => {
    const [visible, setVisible] = useState(false)


    const isShown = visible ? "animate-fadeIn" : "opacity-0";
    const isShown2 = visible ? "animate-fadeIn2" : "opacity-100";

    // make sure to put a minimum height on each of the InView's 

    return (
        // <div className="flex justify-center items-center bg-gradient-to-b from-black via-navColor to-black h-[100vh] lg:h-skillsWallSpacing">
        //     <div className="relative w-1/2 h-1/2 m-auto bg-black">
        //         <InView onChange={setVisible} className="">
        //         <div className="xxxsm:text-[.15em] xxsm:text-[.2em] xsm:text-[.3em] sm:text-[.35em] md:text-[.5em] lg:text-[.6em] xlg:text-[.75em] xxlg:text-[.9em] xxxl:text-[1em]">
        //             <div className="absolute top-1/4 -left-1/4  text-white -rotate-90">
        //                 <h1 className={`${isShown} text-[12em]`}>Teamwork</h1>
        //             </div>
        //             <div className="absolute top-[54em] left-[25em] text-white">
        //                 <h1 className={`${isShown} text-[12em] animation-delay-2000 opacity-0`}>Optimistic</h1>
        //             </div>
        //             <div className="absolute top-[15em] left-[25em] text-white">
        //                 <h1 className={`${isShown} text-[8em] animation-delay-500 opacity-0`}>React JS</h1>
        //             </div>
        //             <div className="absolute top-[23em] left-[25.25em] text-white">
        //                 <h1 className={`${isShown} text-[4em] opacity-0`}>HTML</h1>
        //             </div>
        //             <div className="absolute top-[27em] left-[25.25em] text-white">
        //                 <h1 className={`${isShown} text-[4em] animation-delay-1000 opacity-0`}>Tailwind</h1>
        //             </div>
        //             <div className="absolute top-[36em] left-[20em] text-white -rotate-90">
        //                 <h1 className={`${isShown} text-[7em] animation-delay-1200 opacity-0`}>Figma</h1>
        //             </div>
        //             <div className="absolute top-[25em] left-[37em] text-white -rotate-90">
        //                 <h1 className={`${isShown} text-[1.5em] animation-delay-1200 opacity-0`}>CSS</h1>
        //             </div>
        //             <div className="absolute top-[31.5em] left-[33em] text-white">
        //                 <h1 className={`${isShown} text-[11em] animation-delay-3000 opacity-0`}>Designer</h1>
        //             </div>
        //             <div className="absolute top-[31em] left-[33.5em] text-white">
        //                 <h1 className={`${isShown} text-[4em] animation-delay-2500 opacity-0`}>C#</h1>
        //             </div>
        //             <div className="absolute top-[48em] left-[66em] text-white -rotate-90">
        //                 <h1 className={`${isShown} text-[6em] animation-delay-2000 opacity-0`}>Unity</h1>
        //             </div>
        //             <div className="absolute top-[46em] left-[26em] text-white ">
        //                 <h1 className={`${isShown} text-[10em] animation-delay-1700 opacity-0`}>Javascript</h1>
        //             </div>
        //             <div className="absolute top-[43em] left-[33.5em] text-white ">
        //                 <h1 className={`${isShown} text-[6em] animation-delay-1500 opacity-0`}>Firebase</h1>
        //             </div>
        //             <div className="absolute top-[43em] left-[58em] text-white ">
        //                 <h1 className={`${isShown} text-[6em] animation-delay-1000 opacity-0`}>Java</h1>
        //             </div>
        //             <div className="absolute top-[26em] left-[37em] text-white -rotate-90">
        //                 <h1 className={`${isShown} text-[6em] animation-delay-1500 opacity-0`}>C++</h1>
        //             </div>
        //             <div className="absolute top-[24em] left-[46em] text-white ">
        //                 <h1 className={`${isShown} text-[7em] animation-delay-400 opacity-0`}>Git</h1>
        //             </div>
        //             <div className="absolute top-[24em] left-[48em] text-white -rotate-90">
        //                 <h1 className={`${isShown} text-[4em] animation-delay-2000 opacity-0`}>Typescript</h1>
        //             </div>
        //             <div className="absolute top-[16em] left-[60em] text-white">
        //                 <h1 className={`${isShown} text-[6em] animation-delay-1200 opacity-0`}>React</h1>
        //             </div>
        //             <div className="absolute top-[21em] left-[60em] text-white">
        //                 <h1 className={`${isShown} text-[6em] animation-delay-1200 opacity-0`}>Native</h1>
        //             </div>
        //             <div className="absolute top-[32em] left-[46em] text-white ">
        //                 <h1 className={`${isShown} text-[3em] animation-delay-1900 opacity-0`}>Redux</h1>
        //             </div>
        //             <div className="absolute top-[32em] left-[46em] text-white ">
        //                 <h1 className={`${isShown} text-[3em] animation-delay-1700 opacity-0`}>Redux</h1>
        //             </div>
        //             <div className="absolute top-[31em] left-[56.1em] text-white -rotate-90">
        //                 <h1 className={`${isShown} text-[3em] animation-delay-1500 opacity-0`}>Express</h1>
        //             </div>
        //             <div className="absolute top-[29em] left-[64em] text-white ">
        //                 <h1 className={`${isShown} text-[3em] animation-delay-800 opacity-0`}>Task</h1>
        //             </div>
        //             <div className="absolute top-[32em] left-[64em] text-white ">
        //                 <h1 className={`${isShown} text-[3em] animation-delay-800 opacity-0`}>Oriented</h1>
        //             </div>
        //         </div>
        //     </InView>
        //     </div>
            
        // </div>
        <div id="skills" className="bg-gradient-to-b from-black via-navColor to-black">
            
            <InView onChange={setVisible} className="h-[100vh] lg:h-skillsWallSpacing xxxsm:pt-[18rem] xxsm:pt-60 xsm:pt-40 sm:pt-0 lg:pt-36 xlg:pt-12">
                {/* .75 fits on my laptop screen */}
                <div className="w-3/4 h-3/4 m-auto relative xxxsm:text-[.15em] xxsm:text-[.2em] xsm:text-[.3em] sm:text-[.35em] md:text-[.5em] lg:text-[.6em] xlg:text-[.75em] xxlg:text-[.9em] xxxl:text-[1em]">
                    <div className="absolute top-[35em] -left-[7.5em] text-white -rotate-90">
                        <h1 className={`${isShown} text-[12em]`}>Teamwork</h1>
                    </div>
                    <div className="absolute top-[54em] left-[25em] text-white">
                        <h1 className={`${isShown} text-[12em] animation-delay-2000 opacity-0`}>Optimistic</h1>
                    </div>
                    <div className="absolute top-[15em] left-[25em] text-white">
                        <h1 className={`${isShown} text-[8em] animation-delay-500 opacity-0`}>React JS</h1>
                    </div>
                    <div className="absolute top-[23em] left-[25.25em] text-white">
                        <h1 className={`${isShown} text-[4em] opacity-0`}>HTML</h1>
                    </div>
                    <div className="absolute top-[27em] left-[25.25em] text-white">
                        <h1 className={`${isShown} text-[4em] animation-delay-1000 opacity-0`}>Tailwind</h1>
                    </div>
                    <div className="absolute top-[36em] left-[20em] text-white -rotate-90">
                        <h1 className={`${isShown} text-[7em] animation-delay-1200 opacity-0`}>Figma</h1>
                    </div>
                    <div className="absolute top-[25em] left-[37em] text-white -rotate-90">
                        <h1 className={`${isShown} text-[1.5em] animation-delay-1200 opacity-0`}>CSS</h1>
                    </div>
                    <div className="absolute top-[31.5em] left-[33em] text-white">
                        <h1 className={`${isShown} text-[11em] animation-delay-3000 opacity-0`}>Designer</h1>
                    </div>
                    <div className="absolute top-[31em] left-[33.5em] text-white">
                        <h1 className={`${isShown} text-[4em] animation-delay-2500 opacity-0`}>C#</h1>
                    </div>
                    <div className="absolute top-[48em] left-[66em] text-white -rotate-90">
                        <h1 className={`${isShown} text-[6em] animation-delay-2000 opacity-0`}>Unity</h1>
                    </div>
                    <div className="absolute top-[46em] left-[26em] text-white ">
                        <h1 className={`${isShown} text-[10em] animation-delay-1700 opacity-0`}>Javascript</h1>
                    </div>
                    <div className="absolute top-[43em] left-[33.5em] text-white ">
                        <h1 className={`${isShown} text-[6em] animation-delay-1500 opacity-0`}>Firebase</h1>
                    </div>
                    <div className="absolute top-[43em] left-[58em] text-white ">
                        <h1 className={`${isShown} text-[6em] animation-delay-1000 opacity-0`}>Java</h1>
                    </div>
                    <div className="absolute top-[26em] left-[37em] text-white -rotate-90">
                        <h1 className={`${isShown} text-[6em] animation-delay-1500 opacity-0`}>C++</h1>
                    </div>
                    <div className="absolute top-[24em] left-[46em] text-white ">
                        <h1 className={`${isShown} text-[7em] animation-delay-400 opacity-0`}>Git</h1>
                    </div>
                    <div className="absolute top-[24em] left-[48em] text-white -rotate-90">
                        <h1 className={`${isShown} text-[4em] animation-delay-2000 opacity-0`}>Typescript</h1>
                    </div>
                    <div className="absolute top-[16em] left-[60em] text-white">
                        <h1 className={`${isShown} text-[6em] animation-delay-1200 opacity-0`}>React</h1>
                    </div>
                    <div className="absolute top-[21em] left-[60em] text-white">
                        <h1 className={`${isShown} text-[6em] animation-delay-1200 opacity-0`}>Native</h1>
                    </div>
                    <div className="absolute top-[32em] left-[46em] text-white ">
                        <h1 className={`${isShown} text-[3em] animation-delay-1900 opacity-0`}>Redux</h1>
                    </div>
                    <div className="absolute top-[32em] left-[46em] text-white ">
                        <h1 className={`${isShown} text-[3em] animation-delay-1700 opacity-0`}>Redux</h1>
                    </div>
                    <div className="absolute top-[31em] left-[56.1em] text-white -rotate-90">
                        <h1 className={`${isShown} text-[3em] animation-delay-1500 opacity-0`}>Express</h1>
                    </div>
                    <div className="absolute top-[29em] left-[64em] text-white ">
                        <h1 className={`${isShown} text-[3em] animation-delay-800 opacity-0`}>Task</h1>
                    </div>
                    <div className="absolute top-[32em] left-[64em] text-white ">
                        <h1 className={`${isShown} text-[3em] animation-delay-800 opacity-0`}>Oriented</h1>
                    </div>
                </div>
            </InView>
        </div>
    )
}

export default SkillsWall;