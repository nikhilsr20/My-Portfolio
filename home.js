import React, { useState, useEffect } from "react";

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
    <div>
      <h1 className="name">{displayText}</h1>
      <h1 ></h1>
    </div>
  );
};

export default Home;
