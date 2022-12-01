import React from "react";

const Contact = () => {
    return (
        <div id="contact">
            <div className="relative h-projectSpacing bg-black text-white">
                <h1 className="absolute inset-y-1/2 inset-x-0 text-center text-4xl md:text-6xl">Lets make Dreams a Reality</h1>
            </div>
            <div className="h-fit bg-black text-white pb-4">
                <form className="flex flex-col w-[90%] md:w-1/2 m-auto" action="https://formsubmit.co/carlos.a.ortiz03@gmail.com" method="POST">
                    <div className="grid grid-cols-1 xlg:grid-cols-2">
                        <input className="m-3.5 h-40 border-2 border-navColor bg-black text-center text-3xl basis-1/2" type="email" name="email" placeholder="Email" required />
                        <input className="m-3.5 h-40 border-2 border-navColor bg-black text-center text-3xl basis-1/2" type="text" name="text" placeholder="Message" required />
                    </div>
                    <button className="mt-3.5 ml-3.5 mr-3.5 pb-3.5 h-40 border-2 border-navColor bg-black text-center text-3xl transition ease-in duration-200 hover:bg-borderColor hover:border-borderColor" type="submit">Send</button>
                </form>
            </div>
        </div>

    );
};

export default Contact;