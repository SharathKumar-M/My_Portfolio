import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import CursorPoint from"./pages/CursorPoint";
import Project from "./pages/Project";
import SkillsSection from "./pages/Skillas";
import ContactSection from "./pages/Contact";


const App = () => {

  return (
    <>
      <CursorPoint/>
      <Navbar/>
      <Home/>
      <Project/>
      <SkillsSection/>
      <ContactSection/>
    </>
  )
}

export default App;