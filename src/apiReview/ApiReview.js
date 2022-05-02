import './ApiReview.css';
import React, {useState } from 'react';

//using axios to make api request 
import axios from 'axios';

function ApiReview(){

    
    const fetchBtcPrice ='https://api.coinbase.com/v2/prices/spot?currency=USD'
    //by default it is null
    //get btc price 
    const [price, updatePrice] = useState(null)

    
        
    async function fetchprice() {
        try {
          const response = await axios.get(fetchBtcPrice);
          console.log(response.data);
          updatePrice(response.data);
        } catch (error) {
          console.error(error);
        }
        

      }
      

    //CALL Bitcoin function 
    function updateBtc(){
        fetchprice();
    }
    //price will first start of with null so it would call the other return 
    if(price){
        return (
            <>
                <div className='review'>
                <h1>BTC-USD Price </h1>
                    <h1>{price.data.amount}</h1>
                    <i class="fas fa-band-aid"></i>
                    <p>This is the current bitcoin price it was fetched using coinbases api and uses axios library to fetch the request.</p>
                    <p>Refresh the page to update the price. Im working on changing the color.</p>
                </div>
        
    
            </>
        );
    }
    //this is returned first - update function is called 
    return(
        <>
            <div className='review'>
                <h1>API Request error</h1>
                <p>If you are reading this most likely I have reached the limit of my API requests or my code failed</p>
            
                {updateBtc()}
                
            </div>
        </>
    );
        
}

export default ApiReview
