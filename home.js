import React, { useState, useEffect } from "react";
import img from '/hi.png';
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
      <img src={img} alt="Profile photo" />
      </div>
    </div>
    
    </>
  );
};

export default Home;
