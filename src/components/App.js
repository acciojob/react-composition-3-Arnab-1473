
import React from "react";
import './../styles/App.css';
import Tooltip from "./Tooltip";

const App = () => {
  return (
    <div>
        <Tooltip text={"This is a tooltip"}/>
        <span className="tooltip">Hover over me</span>
    </div>
  )
}

export default App
