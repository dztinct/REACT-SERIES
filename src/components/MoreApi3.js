import React, { useState, useEffect } from 'react'
// import './apiStyle.css'

function MoreApi() {
    const [count, setCount] = useState(0);
      
    useEffect(() => {
      document.title = `You clicked ${count} times`;
    });
  }
     

export default MoreApi