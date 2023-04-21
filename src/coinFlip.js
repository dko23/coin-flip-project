

//////////////////////////////////////////////////////////////////////////ORIGINAL CODE
import React from "react";
import { useState } from "react";
import head from "./Image/head.png"
import tails from "./Image/tails.png"
import Button from '@mui/material/Button';



export function Flip() {
  const [randomNum, setRandomNum] = useState(Math.floor(Math.random() * 2) + 0);
  const [frontCoin, setFrontCoin] = useState(0);


    const handleClick = () => {
      setRandomNum(Math.floor(Math.random() * 2) + 0);
      setFrontCoin(frontCoin+1)
     
    };

    return (
      <div>
        <h1>Head or Tails??? : </h1> 

        <div>
        { 
randomNum==1?(
  <img src={head} className="coin"/>
    ) : (
      <img src={tails} className="coin"/>
    )}
</div>


<Button variant="contained" color="success" onClick={handleClick}>
  Flip the Coin!
        </Button>
        <div>
          <p>flips: {frontCoin}</p>
        </div>
      </div>
    );
  }
   