import {Parallax, ParallaxLayer} from "react-spring"
import React from "react"; 

const Information = () => {


    return (
        <div className="h-fit mt-20 md:mt-0 mb-20 md:mb-0 md:ml-20 md:mr-20 text-center md:text-left md:h-introBodySpacing bg-white order-2">
                <h1 className="font-Secular text-5xl md:mt-48 md:text-4xl lg:text-5xl">{<span className="animate-fadeIn opacity-0">Hey!</span>}{<span className="animate-fadeIn animation-delay-2000 opacity-0"> I'm Carlos Ortiz</span>}</h1>
                <p className="font-Secular mt-20 lg:text-xl xlg:text-2xl animate-fadeIn animation-delay-4000 opacity-0">
                    I'm a UI/UX designer commited to bringing my best quality work to my customers. I am also currently pursuing a Computer Science degree
                    degree at Vanderbilt University along with a minor in Electrical/Computer Engineering.{<br/>}{<br/>}{<br/>}Keep Scrolling to learn more
                </p>

            
            {/* <p className="text justify font-Secular ml-20 mt-10 text-2xl">Click any of the icons to the right to learn more </p> */}
        </div>
    )
}

export default Information;