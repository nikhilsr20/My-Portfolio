import React, { useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import {useState}  from 'react';


const Nav=()=>{
    
    function click(e){
        const elements = document.getElementsByClassName("bar");
        for (const element of elements) {
            element.setAttribute('data', true);
            element.style.color="white"
            element.style.border="none"
            element.style.backgroundColor="rgb(36, 54, 54)";
            element.style.padding="5px"

    
        }
       
        
        e.target.setAttribute('data', false);
        let a=e.target.innerHTML;
        let i=0;
        console.log(a)
        
         e.target.innerHTML=""
          e.target.style.width="fit-content";
          e.target.style.border="2px solid white";
            e.target.style.color="peachpuff"
            e.target.style.backgroundColor="black"
            e.target.style.borderRadius="10px"
            e.target.style.padding="5px"
            setInterval(()=>{
                if(i<a.length){
                
                e.target.innerHTML+=a[i];
                i++;
            }
            else{
                clearInterval();
            }
            },150)
            
    
    }
    

    
    
    return (
        <div className='navbar'>
            <h1 className='heading'>MY PORTFOLIO</h1>
           <ul className='list'>
            <h1 className='bar'  onClick={click}>HOME</h1>
            <h1 className='bar' onClick={click}>ABOUT</h1>
            <h1 className='bar' onClick={click}>SKILLS</h1>
            <h1 className='bar' onClick={click}>RESUME</h1>
            <h1 className='bar' onClick={click}>PROJECT</h1>
            <h1 className='bar' onClick={click}>CONTACT</h1>
           </ul>

        </div>
    )
}
const root=ReactDOM.createRoot(document.getElementById('body'));
root.render(<Nav/>)