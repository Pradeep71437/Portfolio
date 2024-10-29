import { BrowserRouter } from "react-router-dom"
import {About, Contact, Experience,  Hero, Navbar, Tech, Works, StarsCanvas}  from './components'

const App = () => {
  return (
  <BrowserRouter>
  <div className="relative z-0 bg-primary">
    <div className=" bg-cover bg-no-repeat bg-center">
    {/* <div> */}
      <Navbar/>
      <Hero />
      <About />
      <Experience />
      <Tech />
      <Works />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  </div>
  </BrowserRouter>
  )
}

export default App