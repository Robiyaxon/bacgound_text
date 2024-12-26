// import React from 'react'
// import { useRef } from 'react'
// const AboutUS = () => {
//   let ism = useRef('')
//   function take() {

//     console.log(current.ism.value);
//   }
  
//   return (
//     <>
//     <input ref={input} type="text" />  
//     <button onClick={take}>Click</button>
    
    
//     </>
//   )
// }

// export default AboutUS


import Input from 'antd/es/input/Input';
import { Button } from 'antd/es/radio';
import React, { useState } from 'react'
import { useRef } from 'react';
const AboutUS = () => {
   
  return (
    <>
    <Input/>
    <Button>Click</Button>
    </>
  )
}

export default AboutUS