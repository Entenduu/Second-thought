import {  Route, Routes } from "react-router-dom";
import './App.css';
import NavBar from "./NavBar";
import Home from "./Home";

function App() {
  return (
    <div className="App">
      <NavBar/>
      <Routes>
        <Route path='/' element={ <Home/>}/>
      </Routes>
    </div>
  );
}

export default App;
