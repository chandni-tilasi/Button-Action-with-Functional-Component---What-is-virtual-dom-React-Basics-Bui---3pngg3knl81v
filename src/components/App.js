import React, {Component, useState} from "react";
import "./../styles/App.css";

function App() {
  const [render, setRender] = useState(0);
  const [result,setResult] = useState([]);
  function clickHandle(){
    setRender(render+1);
    return (<p id="para">
    Hello, I've learnt to use the full-stack evaluation tool. This makes me
    so happy
  </p>)
  }

  function clickSubmit(){
    setResult([...result,clickHandle()]);
  }

  return (
    <div id="main">
      // Do not alter the main div
      <button id="click" onClick={clickSubmit}>click</button>
      {result.map((element)=>element)}
    </div>
  );
}


export default App;

