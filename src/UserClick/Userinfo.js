import React from 'react';
import './Userinfo.css';

function Infobox(props){
    
    const leftCord = {left:'10px'};



    return(
        <>  
        <div className='mainDivInfoboxs'>
           

            <h1 className = 'mainDivText'>{props.text}</h1>
            <h2>{props.style}</h2>
            


        </div>
        </>
    );
}
export default Infobox;  