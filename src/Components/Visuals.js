import React from 'react';
import Carlos from "./Carlos-image.png"
import Projects from "./Projects.png"

const Visuals = () => {
    return (
        <div className="h-[introBodySpacing] bg-potentialBackground ">
            <img className="mt-20 bg-potentialBackground bg-md:mt-52 m-auto w-25% md:w-[50%] h-auto max-h-[60%] md:max-h-[80%] block object-fit" src={Carlos} alt="Picture of Carlos Ortiz" />
            {/* <div src={Projects} className="rounded-full bg-backgroundImageColor scale-50">
                <img className="scale-50" src={Projects} alt="Picture of Blueprint" />
            </div> */}
        </div>
    );
};

export default Visuals;