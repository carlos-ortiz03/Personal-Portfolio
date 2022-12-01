import React from 'react';
import { useState } from 'react';

import Logo from "./Logo.js"
import { FaBars, FaTimes } from 'react-icons/fa'


const Header = () => {
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMenu = () => setClick(false);


    return (
        <div>
            <div className="fixed w-screen top-0 z-10">
                <div className="flex flex-row justify-between min-h-[2.5rem] bg-gradient-to-b from-navColor to-black">
                    <Logo closeMenu={closeMenu} />
                    <div className="basis-1/2 text-white m-auto text-center">
                        <ul className="opacity-0 md:opacity-100 hidden md:grid md:grid-cols-3">
                            <li><a href="#projects">Projects</a></li>
                            <li><a href="#skills">Skills</a></li>
                            <li><a href="#contact">Contact</a></li>
                        </ul>
                        <div className="flex justify-end mr-4 text-white m-auto md:hidden">
                            {click ? <FaTimes onClick={handleClick} /> : <FaBars onClick={handleClick} />}
                        </div>
                    </div>
                </div>
            </div>
            <ul className={click ? "flex flex-col justify-start items-center animate-navbarTransition fixed w-full h-[calc(100%+2rem)] mt-[2.5rem] transition-all ease-in duration-500 z-10 bg-opacity-80 bg-[#a4a4a4]"
                : "lex flex-col justify-start absolute left-[100%] items-center w-full h-[100vh] transition-all ease-in duration-500 z-10 hidden opacity-80 bg-[#a4a4a4]"}>
                <li className="text-xl mt-20 mb-20"><a className="hover:text-white" href="#projects" onClick={closeMenu}>Projects</a></li>
                <li className="text-xl mt-20 mb-20"><a className="hover:text-white" href="#skills" onClick={closeMenu}>Skills</a></li>
                <li className="text-xl mt-20 mb-20"><a className="hover:text-white" href="#contact" onClick={closeMenu}>Contact</a></li>
            </ul>
        </div>

    );
};

export default Header;