import { Link } from "react-router-dom"
import './App.css'
import { useState } from "react"
import About from "./About"
import Blog from "./Blog"
import Portfolio from "./Portfolio"
import Contact from "./Contact"
// keep this here just in case you need to alter the way title is displayed. 
// its currently in the header.
// const Title = () => {
//   return (
//     // <h1 className="name">
//     //   Brandon Heisler
//     // </h1>
//   )
// }



function App() {

  const [view, setView] = useState('')

  function displaySelector(){
    switch(view){
      case 'About':
        return <About />
        break;
      case 'Blog':
        return <Blog />
        break;
      case 'Portfolio':
        return <Portfolio />
        break;
      case 'Contact':
        return <Contact />
        break;
      
    }
  }

  const display = displaySelector();
 
  return (
    <div className="pageLayout">
      <div>
        {/* <Title /> */}
        <button className="button" onClick={(() => setView("About"))}>About</button>
        <br></br>
        <button className="button" onClick={(() => setView("Blog"))}>//CodeComments Blog</button>
        <br></br>
        <button className="button" onClick={(() => setView("Portfolio"))}>Portfolio</button>
        <br></br>
        <button className="button" onClick={(() => setView("Contact"))}>Contact</button>
      </div>
      <div className="updatePlate">
        {display}
      </div>
    </div>
    
  )
}


export default App
