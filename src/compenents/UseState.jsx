import React from 'react'
import { use } from 'react';
import { useState } from 'react';

const UseState = () => {
  const [count, seCount] = useState(0);
  console.log("This is UseState", count);

  return (
    <div>
      <span>This is React UseState: {count}</span><br />
      <button onClick={() => {seCount(count + 1)}}>increment +</button>
      <button onClick={()=> {seCount(count ? count - 1 : 0)}}>decreament -</button>
    </div>
  )
}

export default UseState;