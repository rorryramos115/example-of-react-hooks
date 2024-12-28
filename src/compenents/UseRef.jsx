import React from 'react'
import { useRef, useState} from 'react';

const UseRef = () => {
  const [count, setCount] = useState(0)
  const countRef = useRef(0);

  const increamentCount = () => {
    countRef.current += 1;
    console.log(`Count: ${countRef.current}`);
  }

  return (
    <div>
      <span>Render Count: {count}</span><br />
      <button onClick={()=> setCount((prev)=> prev + 1)}>Re-render</button><br />
      <button onClick={increamentCount}>Increment Count</button>
    </div>
  )
}

export default UseRef;