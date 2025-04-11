import React, { useState } from 'react'

import Display from './Display'
import ButtonComp from './ButtonComp'

const CalculatorApp = () => {
    let [input,setinput]=useState('')
    let handleClick=(value)=>{
        if(value ==='='){
            try{
            setinput(eval(input))
            }catch(error){
               setinput("error")
            }
        }else{
        setinput(input+value)
    }
    }
    let handleClear=()=>{
        setinput('')
    }
  return (
    <div>
        <h1>Calculator</h1>
        <Display input={input}/>
        <ButtonComp handleClick={handleClick} handleClear={handleClear}/>
    </div>
    
  )
}

export default CalculatorApp