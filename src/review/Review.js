import React, { useState } from "react";
import './Review.css';

function Review(props){

    const[color, updateColor] = useState("review");
    
    function buttonClicked(){
        //review is created to change color else it doesnt 
        if(props.changeColor==="red"){
            
            updateColor("reviewRed");
    
            return;
        }
        //check to see if input field is false
        //this will be used to enter
        else if(props.changeColor==="blue"){
            updateColor("reviewBlue")
        }
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
        <div className={color}>
            
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