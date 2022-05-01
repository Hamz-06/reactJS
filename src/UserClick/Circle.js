import React from 'react';
import './Circle.css';
function Circle(props){
    
    const leftCord = {left:'10px'};

    return(
        <>  
        <div className='mainDivCircles'>
        
           
            <h1 className = 'mainDivText'>{props.text}</h1>
            <p1>{props.userInfo}</p1>

        </div>
        </>
    );
}
export default Circle;