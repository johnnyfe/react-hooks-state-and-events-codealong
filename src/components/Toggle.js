import React, {useState} from "react";



function Toggle() {
  let [isOn,setIsOn]=useState(false);
  function handleClick (){
  return (
    setIsOn(()=> isOn=!isOn)
  )
 }
  const color= isOn ? "red": "white"
  const bgcolor= isOn ? "white": "red"
  return <button style={{color:color, background:bgcolor}} onClick={handleClick}>{isOn ? "OFF" : "ON"}</button>;
}

export default Toggle;
