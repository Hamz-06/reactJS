//This is a component and needs to be a capital letter when calling
import './User.css';
import Circle from'./Circle.js';
import React, {useState} from 'react';

function User(){
    const name = ["jake", "drake", "Lake", "sake"];
    

    //initiate circles to circle1 using state 
    //left hand side is default. We can use update circle to update the state
    const [circles, updateCircle] = useState(()=>{
        //creating a function inside use state only runs once
        return [];
    });

    //add circles called by button
    function addCircles(){
        //this keeps all other circles and adds sample to it. 
        
        if(circles.length!=4){
                
            updateCircle([...circles, name[circles.length]]);
           
        }

        //you can also have it so it updates the circle
        //updateCircle(["Sample"])
    }

    

    
    return (
        <>
            
            <button className="mainButton" onClick={addCircles} >
                <div>Click Me</div>
            </button>
            

            {circles.map((items)=>(
                
                <Circle userInfo ="mac" text = {items}/>
            ))}
            

        </>

    );
}
export default User;