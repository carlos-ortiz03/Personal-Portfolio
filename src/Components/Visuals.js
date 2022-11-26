import React from 'react';
import Carlos from "./Carlos-image.png"
import Projects from "./Projects.png"

const Visuals = () => {
    return(
        <div className="h-introBodySpacing bg-potentialBackground">
            <div className="animate-fadeIn">
                <img className="mt-32 md:mt-52 m-auto " src={Carlos} alt="Picture of Carlos Ortiz" />
            </div>
            {/* <div src={Projects} className="rounded-full bg-backgroundImageColor scale-50">
                <img className="scale-50" src={Projects} alt="Picture of Blueprint" />
            </div> */}
        </div>
    );
};

export default Visuals;