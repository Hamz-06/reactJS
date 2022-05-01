//This is a component and needs to be a capital letter when calling
import './User.css';
import Userinfo from'./Userinfo.js';
import React, {useState} from 'react';

function User(){
    const style = 'pink';
       
      

    const listOfNames = ["Click","The", "Last", "BOX"]
    //initiate circles to circle1 using state 
    //left hand side is default. We can use update circle to update the state
    const [circles, updateInfo] = useState(()=>{
        //creating a function inside use state only runs once
        return [];
    });
 
    //add circles called by button
    function addInfoBox(){
        //this keeps all other circles and adds sample to it. 
        
        if(circles.length!=4){

            updateInfo([...circles,listOfNames[circles.length]]);
          
         
        }

    }
 
    return (
        <>
        
            
            <button className="mainButton" onClick={addInfoBox} >
                <div>Click Me</div>
            </button>
            

            {circles.map((items)=>(
                
                <Userinfo text = {items}/>
            ))}
            

        </>

    );
}
export default User;