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
            My name is Brandon, I'm a recent graduate of Awesome Inc.'s full
            stack developer bootcamp. I enjoy developing projects in React and
            Django Rest Framework, I'm a Veteran and an experienced Manager and
            Project Developer. I am well versed in creative problem solving due
            to my experience and curiosity. ..
          </p>
        </div>
        <div className="section-3-right">
          <img className="portrait" src="./IMG_3002.jpg" />
          <div>text</div>
        </div>
      </div>
      <div className="section-2">
        <div className="section-2-left">
          <img className="packmule" src="./packmule1.jpg" />
          <img className="packmule" src="./packmule2.jpg" />
        </div>
        <div className="section-2-right">
          <h2 className="h2">User first, Mobile First.</h2>
          <p className="p">
            Everything should be designed with the end user in mind. In a world
            of portable and constantly emerging tech, apps and programs should
            be created to serve users in a simple and functional manner,
            limiting blockers and enhancing overall quality of life.
          </p>
        </div>
      </div>
      <div className="section-1">
        <h2 className="section-1-title">Projects</h2>
        <div className="project-tiles">
          <img className="tile" src="./todo.png" />
          <img className="tile" src="./parlor.png" />
          <img className="tile" src="./tic.png" />
          <img className="tile" src="./rrr.png" />
        </div>
      </div>
    </div>
  );
}

export default App;
