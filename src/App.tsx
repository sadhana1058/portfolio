// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import { NavBar } from './components/NavBar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { Contact } from './components/Contact';
import { About} from './components/About';
import { Education } from './components/Education';
function App() {

  return (
    <>
      <div className="App">
        <NavBar></NavBar>
        {/* <h1>hi</h1> */}
        <Banner></Banner>
        <About></About>
        <Education></Education>
        <Skills></Skills>
        <Projects></Projects>
        <Contact></Contact>
      </div>
    </>
  )
}

export default App
