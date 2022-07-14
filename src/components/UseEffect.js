import React, { useEffect, useState } from 'react'


function UseEffect() {
    const [count, setCount] = useState(0)
    
    useEffect(() => {
       let timer = setTimeout(() => {
            setCount(count + 1)
        },1000);
        return () => clearTimeout(timer)
}, [])
  return (
    <div>
        I have rendered {count} times!
    </div>
  )
}

export default UseEffect