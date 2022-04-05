import React from "react";
import React, { useState, useEffect, useRef } from 'react'
const Box=()=>{
    const [height,setHeight]=useState(0)
    const [width,setWidth]=useState(0)
    const ref=useRef(null);
    useEffect(()=>{
        setHeight(ref.current.clientHeight)
        setWidth(ref.current.clientWidth)
    })
    return(
        <Container>    
            <div style={{border: `2px solid black`}} ref={ref}>

            </div>
        </Container>
    
    )
       
}
export default Box;