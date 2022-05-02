import React, { useState } from "react";
import './Review.css';

function Review(props){

    const[isYellow, isRed] = useState(false);
    
    function buttonClicked(){
        //review is created to change color else it doesnt 
        if(props.changeColor==="true"){
            //can be used as a toggle
            isRed(!isYellow);
            return;
        }
        //check to see if input field is false
        //this will be used to enter
    }
    function checkInputField(inputField){
        if (inputField==="true"){
            return true;
        }else{
            return false;
        }
        
    }
    return(
        //change css class name allowing for style sheet to switch 
        <div className={isYellow ? "reviewRed" : "review"}>
            
            <h1>{props.name}</h1>
            <p>{props.info}</p>
            <p className="info">This is the same container</p>

            <input className={checkInputField(props.inputField) ? "showInput" : "dontShow"} name="fname"></input>

            <button className="changeColorReview" onClick={buttonClicked}>
                Click me!!!
            </button>


        </div>
    );
}
export default Review;