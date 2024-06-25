import { Link } from "react-router-dom";
import "./App.css";
import { useState } from "react";

function App() {
  return (
    <div className="main-page">
      <div className="section-3">
        <div className="section-3-left">
          <h2 className="h2">Let me be your developer...</h2>
          <p className="p">
            Hi my name is Brandon Heisler. you want me to work for you so i can
            earn a paycheck from you. you dont care about all this corporate
            nonsense, you just think you do. thats what happens when youre
            brainwashed.
          </p>
        </div>
        <div className="section-3-right">
          <img className="portrait" src="src\assets\IMG_3002.jpg" />
          <div>text</div>
        </div>
      </div>
      <div className="section-2">
        <div className="section-2-left">
          <img className="packmule" src="src\assets\packmule1.jpg" />
          <img className="packmule" src="src\assets\packmule2.jpg" />
        </div>
        <div className="section-2-right">
          <h2 className="h2">Let me be your developer...</h2>
          <p className="p">
            Hi my name is Brandon Heisler. you want me to work for you so i can
            earn a paycheck from you. you dont care about all this corporate
            nonsense, you just think you do. thats what happens when youre
            brainwashed.
          </p>
        </div>
      </div>
      <div className="section-1">
        <div className="section-1-left">
          <img className="tile" src="src/assets/todo.png" />
          <img className="tile" src="src/assets/parlor.png" />
          <img className="tile" src="src/assets/tic.png" />
          <img className="tile" src="src/assets/rrr.png" />
        </div>
        <div className="section-1-right"></div>
      </div>
    </div>
  );
}

export default App;
