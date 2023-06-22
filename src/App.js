import './App.css';
import About from './components/About';
import Skills from './components/Skills';
import MyNavbar from './components/Navbar';
import 'bootstrap/dist/css/bootstrap.css';



function App() {
  return (
    <div className="App">
    <MyNavbar />
    <About />
    <Skills />
    </div>
  );
}

export default App;
