import './ApiReview.css';
import React, { Component, useState } from 'react';

//using axios to make api request 
import axios from 'axios';

class ApiReview extends Component {

    constructor(props) {
        super(props);
        this.fetchBtcPrice = 'https://api.coinbase.com/v2/prices/spot?currency=USD';
        //this is a object 
        this.state={
            price:null
        }
        this.fetchBtc()
    }

    //by default it is null
    //get btc price 

    fetchBtc = async () => {
        try {
            const response = await axios.get(this.fetchBtcPrice);
            console.log(response.data);
            this.setState({
                price:response.data
            })
        } catch (error) {
            console.error(error);
        }
    }

    //price will first start of with null so it would call the other return 
    render() {
        if (this.state.price) {
            return(
            <>
                <div className='review'>
                    <h1>BTC-USD Price </h1>
                    <h1>{this.state.price.data.amount}</h1>
                    <i class="fas fa-band-aid"></i>
                    <p>This is the current bitcoin price it was fetched using coinbases api and uses axios library to fetch the request.</p>
                    <p>Refresh the page to update the price. Im working on changing the color.</p>
                </div>
            </>);
        //just in case data cant be fetched 
        } else{
            return(
            <>
                <div className='review'>
                    <h1>API Request error</h1>
                    <p>If you are reading this most likely I have reached the limit of my API requests or my code failed</p>
                </div>
            </>
            );
        }

    }
    //this is returned first - update function is called 


}

export default ApiReview
