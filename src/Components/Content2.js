import React from "react";
import { useState } from "react";
import { InView } from "react-intersection-observer";
import ProjectSpace from "./ProjectSpace";

const Content2 = () => {
    const projects = [
        {
            name: "Easypeasy",
            hidden: false,
            key: "1"
        }
    ]

    const projectsDisplay = projects.map(project => {

        return(
            <div className="h-56 bg-potentialBackground show-on-scroll" id={project.key}>{project.name}</div>
        )
    })

    // const targets = document.querySelectorAll("show-on-scroll");

    // const observer = new IntersectionObserver(callback);

    // targets.forEach(function(target) {
    //     target.classList.add("opacity-0")
    //     observer.observe(target);
    // })

    const callback = function(entries) {
        entries.forEach(entry => {
            if(entry.isIntersecting){
                entry.target.classlist.add("animate-fadeIn");
            } else {
                entry.target.classList.remove("animate-fadeIn");
            }
        });
    };

    const [inView, setInView] = useState(false);
    const [inView1, setInView1] = useState(false);
    const [inView2, setInView2] = useState(false);
    const [inView3, setInView3] = useState(false);

    const isShown = inView ? "animate-fadeIn" : "opacity-0";
    const isShown1 = inView1 ? "animate-fadeIn" : "opacity-0";
    const isShown2 = inView2 ? "animate-fadeIn" : "opacity-0";
    const isShown3 = inView3 ? "animate-fadeIn" : "opacity-0";


    return (
        <div className="min-h-screen bg-black">
            <InView id="#projects" className={`${isShown}`} onChange={setInView}>
                <h1 className="text-white text-center text-5xl lg:text-6xl xl:text-8xl">A few of my Experiences include</h1>
            </InView>
            <ProjectSpace />
            <div className="flex flex-col">
                <InView className={`${isShown1}`} onChange={setInView1}>
                    <div className="grid rid-cols-1 xlg:grid-cols-2 max-h-xl">
                        <img className="md:max-w-xl m-auto " src={require("./VSVS-logo.png")} alt="VSVS Org." />
                        <div className="text-white m-auto w-[90%] order-2 mt-32 xlg:mt-20">
                            <h1 className="text-6xl text-center mb-32">Vanderbilt Students Volunteers for Science</h1>
                            <p className="text-2xl text-center">I'm currently Head of Backend development and am reconfiguring our database so that we may
                                may be more efficient in assigning the schedule to our tutors so that they may go and
                                tutor and underfunded communities
                            </p>
                        </div>
                    </div>
                </InView>
                <ProjectSpace />
                <InView className={`${isShown2}`} onChange={setInView2}>
                    <div className="grid grid-cols-1 xlg:grid-cols-2 max-h-xl">
                        <div className="text-white m-auto w-[90%] order-2 xlg:order-1 mt-32 xlg:mt-20">
                            <h1 className="text-6xl text-center mb-32">Society of Hispanic Professional Engineers</h1>
                            <p className="text-2xl text-center">
                                I'm currently Recruitment Chair of SHPE, where I am responsible for answering any questions
                                any future member might have. Furthermore, I make sure to check in on everyone in the organization.
                            </p>
                        </div>
                        <img className="md:max-w-xl m-auto xlg:order-2 " src={require("./SHPE.jpeg")} alt="VSVS Org." />
                    </div>
                </InView>
                {/* <ProjectSpace />
                <div className="bg-black">
                    <InView className={`${isShown3}`} onChange={setInView3}>
                        <h1 className="text-6xl text-center pb-32 text-white">Lets make our dreams a reality</h1>
                    </InView>
                </div> */}
                
                

            </div>
            {/* {projectsDisplay} */}
        </div>
    )
}

export default Content2;