import React from 'react';
import letterC from "./C (2).png";

const Logo = (props) => {
    return (
        <div className="basis-1/2 flex flex-row justify-left">
            <div className="relative w-full h-full " href="#home" onClick={props.closeMenu}>
                <a className="absolute -top-[6.6rem] landscape:-top-[6.6rem] -left-24 landscape:-left-16 scale-[.15] landscape:scale-[.25] hover:translate-x-4 hover:-translate-y-2 hover:rotate-7 hover:cursor-pointer transition ease-in duration-500 z-10">
                                    <img src={letterC} alt="Letter C" />
                </a>
                <img className="scale-[.15] landscape:scale-[.25] -top-[6.6rem] landscape:-top-[6.6rem] -left-[4.75rem] landscape:-left-8  absolute " src={letterC} alt="Letter C" />
                <img className="scale-[.15] landscape:scale-[.25] -top-[6.6rem] landscape:-top-[6.6rem] -left-[4.4rem] landscape:-left-6 absolute rotate-180" src={letterC} alt="Letter C" />
            </div>
        </div>
    );
};

export default Logo;