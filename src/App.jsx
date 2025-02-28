import { Routes } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import {  Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';

function App() {
  

  return (
   <>
    <Navbar/>   

    <Routes>
      <Route path='/' element={<Home/>}></Route>
      <Route path='/about'  element={<About mt="Yes"/>}></Route>
      <Route path='/menu'  element={<Menu mt="Yes"/>}></Route>
    </Routes>

   </>
  )
}

export default App
