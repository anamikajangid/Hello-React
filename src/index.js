import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import Hello from "./App";

// const Hello = () => {
//   let batchName = "Unstopable F4-react";
//   let styleObj = {
//     color: "red",
//     textAlign: "center",
//   };
//   return (
//     <div className="section">
//       <h1 style={styleObj}> Hello Anamika</h1>
//       <p> Welcome to my Class - {batchName}</p>
//     </div>
//   );
// };

ReactDOM.render(<Hello />, document.getElementById("root"));
