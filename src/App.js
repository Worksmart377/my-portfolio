import './App.css';
import About from './components/About';
import Skills from './components/Skills';
import MyNavbar from './components/Navbar';
import WorkProgramming from './components/WorkProgramming';
import WorkDesign from './components/WorkDesign';
import Contact from './components/Contact';

import "bootswatch/dist/lux/bootstrap.min.css";




function App() {
  return (
    <div className="App">
    <MyNavbar />
    <About />
    <Skills />
    <WorkProgramming />
    <WorkDesign />
    <Contact />
    </div>
  );
}

export default App;
