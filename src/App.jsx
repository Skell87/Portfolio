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
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit
            veritatis quibusdam, odio ipsum dolorem enim, adipisci velit
            reprehenderit dignissimos, blanditiis omnis. Consequatur soluta
            ipsam voluptates libero delectus ullam odit suscipit?
          </p>
        </div>
        <div className="section-3-right">
          <img className="portrait" src="./src/assets/IMG_3002.jpg" />
          <div>text</div>
        </div>
      </div>
      <div className="section-2">
        <div className="section-2-left">
          <img className="packmule" src="./src/assets/packmule1.jpg" />
          <img className="packmule" src="./src/assets/packmule2.jpg" />
        </div>
        <div className="section-2-right">
          <h2 className="h2">Let me be your developer...</h2>
          <p className="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            mollitia dolore ipsum necessitatibus suscipit eaque recusandae
            corporis sed blanditiis pariatur maxime, odio hic, non veniam
            nesciunt saepe iure ratione quo?
          </p>
        </div>
      </div>
      <div className="section-1">
        <div className="section-1-left">
          <img className="tile" src="./src/assets/todo.png" />
          <img className="tile" src="./src/assets/parlor.png" />
          <img className="tile" src="./src/assets/tic.png" />
          <img className="tile" src="./src/assets/rrr.png" />
        </div>
        <div className="section-1-right">
          <h2 className="h2-section-right">Let me be your developer...</h2>
          <p className="p">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti
            mollitia dolore ipsum necessitatibus suscipit eaque recusandae
            corporis sed blanditiis pariatur maxime, odio hic, non veniam
            nesciunt saepe iure ratione quo?
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
