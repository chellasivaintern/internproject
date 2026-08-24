import React from "react"
import Home from "./components/Home"
import About from "./components/About"
import Education from "./components/Education"
import Experience from "./components/Experience"
import Technology from "./components/Technology"
import Projects from "./components/Projects"
import Nav from "./components/Nav"

function App() {

  return (
    <>
    <div className="bg-gray-200 h-[100%]">
      <Nav/>
      <Home />
      <hr></hr>
      <About />
      <Technology />
      <Experience />
      <Education />
      <Projects/>
      </div>

    </>
  )
}

export default App
