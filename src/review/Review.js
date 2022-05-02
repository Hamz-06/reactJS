import React, { useState } from "react";
import './Review.css';

function Review(props){

    const[isYellow, isRed] = useState(false);

    function changeColor(){
        isRed(!isYellow);
    }
    return(
        //change css class name allowing for style sheet to switch 
        <div className={isYellow ? "reviewRed" : "review"}>
            
            <h3>{props.name}</h3>
            <p>{props.info}</p>
            <p>Hit this button if you agree, this was changed by state</p>

            <button className="changeColorReview" onClick={changeColor}>
                Click me!!!
            </button>

        </div>
    );
}
export default Review;