import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import './App.css'
import { NavBar } from './components/Navbar';
import { Banner } from './components/Banner';
function App() {

  return (
    <>
      <div className="App">
        <NavBar></NavBar>
        {/* <h1>hi</h1> */}
        <Banner></Banner>
      </div>
    </>
  )
}

export default App
