import React, {useState} from "react";
import style from "basic/style/counter.module.css";

export default function Counter() {
  const [count, setCount] = useState(0)
  return (<><h1>카운터</h1>
    <button onClick={() => setCount(count+1)}> 더하기 </button>
    <button onClick={() => setCount(count-1)}> 빼기 </button>
    <div>{count}</div>
    </>
  )
}


