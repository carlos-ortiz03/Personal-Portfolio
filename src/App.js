import React from "react"
import { useState } from "react";

import Header from "./Components/Header.js"
import Content from "./Components/Content.js"
import BlankSpace from "./Components/BlankSpace.js";
import Content2 from "./Components/Content2.js"
import SkillsWall from "./Components/SkillsWall.js"
import Contact from "./Components/Contact.js"

function App() {
  

  return (
    <div className="">
      <Header />
      <Content />
      <BlankSpace />
      <Content2 />
      {/* <BlankSpace /> */}
      {/* <BlankSpace /> */}
      <SkillsWall />
      <Contact />

    </div>
  );
}

export default App;
