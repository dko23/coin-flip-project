import React from 'react'
import { useState } from 'react';
import Button from '@mui/material/Button';



export default function Rules() {


    const [showRules, setShowRules]=useState(false)
    const toggleRules = () => {
        setShowRules(!showRules);
    };

    return (
      <>
        <Button variant="outlined" onClick={toggleRules}>How to Play. CLick HERE!!!</Button>
    
        {showRules ? (
            <div>
              <p className="flat-black-button-content">
                Isn't obvious
              </p>
            </div>
          ) : null}
        </>
    )
}

