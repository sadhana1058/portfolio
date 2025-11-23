// import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import { NavBar } from './components/Navbar';
import { Banner } from './components/Banner';
import { Skills } from './components/Skills';
function App() {

  return (
    <>
      <div className="App">
        <NavBar></NavBar>
        {/* <h1>hi</h1> */}
        <Banner></Banner>
        <Skills></Skills>
      </div>
    </>
  )
}

export default App
