import React from 'react'

export default function StateCount() {
    const [count,setCount]=React.useState(0)
    function isminus(){
        setCount(count-1);
    }
    function isplus(){
        setCount(count+1);
    }
  return (
    <div>
        <button onClick={isminus}>-</button>
        <h1>{count}</h1>
        <button onClick={isplus}>+</button>
    </div>
  )
}
