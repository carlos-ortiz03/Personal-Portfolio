import React from 'react';
import Information from './Information.js'
import Visuals from './Visuals.js';

const Content = () => {

    
    return (
        <div id="home" className="grid grid-cols-1 md:grid-cols-2">
            <Information />
            <Visuals />
            {/* <div className="h-96  bg-gradient-to-b from-navColor to-white">hello</div> */}
        </div>
    );
};

export default Content;