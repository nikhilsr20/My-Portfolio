import React, { useState, useEffect } from "react";
import img from '/hi.png';
import img2 from '/leet.png'
const Home = () => {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(0); 
  const text = "Hello, My Name is Nikhil Singh Rathore";

  useEffect(() => {
    const interval = setInterval(() => {
      if (index < text.length) {
        setDisplayText((prev) => prev + text[index]);
        setIndex(index + 1); 
      } else {
        clearInterval(interval);
        
      }
    }, 100);

    return () => clearInterval(interval);
  }, [index, text]);

  return (
    <>
    <div className="flex">
      <div>
      <h1 className="name">{displayText}</h1>
      <h1 className="yo">I am a Frontend Developer</h1>
      </div>
      <div>
      <img className="in" src={img} alt="Profile photo" />
      </div>
    </div>
    {/* <div className="hilo">
      <a  href="https://www.linkedin.com/in/nikhil-singh-rathore-983b8532b/"><i class="fa-brands fa-linkedin"></i></a>
      <a  href="https://github.com/nikhilsr20"><i class="fa-brands fa-github"></i></a>
      <a href="https://leetcode.com/u/nikhil_singh_rathore________/"><img  src={img2} /></a>
    </div> */}

    
    </>
  );
};

export default Home;
