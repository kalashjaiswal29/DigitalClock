import { useEffect, useState } from "react";

function Time() {
 const [time,setTime] = useState(new Date())
useEffect(()=>{
  const setIntervalID = setInterval(()=>{
    setTime(new Date())
  },1000)

  return()=>{
    clearInterval(setIntervalID)
  }
},[]
)
  

  return (
    <p className="lead">This is the current time: {time.toLocaleDateString()} - {time.toLocaleTimeString()} AM </p>
  )
}



export default Time