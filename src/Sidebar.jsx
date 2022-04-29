import React from "react";

const Sidebar = (props) => {
  return (
    <div style={{backgroundColor:"red"}}>
      <h1>Sidebar</h1>
      <button onClick={()=>{
        props.setCount(0)
      }}>Sıfırla</button>

      {props.sayiListesi.map((value,i) => (
        <button key={i} onClick={() => props.artırParams(value.value)}>{value.text}</button>
      ))}
      <br/>
      {props.sayiListesi.map((value,i) => (
        <button key={i} onClick={() => props.artırParams(-value.value)}>{value.text}</button>
      ))}
    </div>
  );
};

export default Sidebar;

