import "./intro.scss";
// import { init } from 'ityped';
// import { useState } from "react";
// import React, { useEffect ,useRef} from 'react';
import {useTypewriter } from 'react-simple-typewriter';


export default function Intro() {
  
  const [typewriter]=useTypewriter({
    words: [" Developer !"," Designer !" ," Tester !"],
    loop:{},
    typeSpeed:100,
    deleteSpeed:40,
  })

  return (
    <div className='intro' id='intro'>
        <div className="left">
          <div className="imagecontainer">
            <img src="assets/Ankurimg.png" alt="" />
          </div>
        </div>
        <div className="right">
          <div className="wrapper">
            <h2>Hi There , I'm</h2>
            <h1>Ankur Sharma</h1>
            <h3>Software <span>{typewriter}</span></h3>
          </div>
          <a href="#portfolio">
            <img src="assets/down.png" alt="" />
          </a>
        </div>
    </div>
  )
}
