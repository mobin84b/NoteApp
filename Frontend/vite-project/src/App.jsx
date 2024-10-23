import React from 'react'
import Home from './Pages/Home/Home';
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
 
const routes= (
  <Router>
    <Routes>
      <Route path="/main" exact element={<Home/>} />
      <Route path="/login" exact element={<Login/>} />
      <Route path="/register" exact element={<Register/>} />
    </Routes>
  </Router>
);

export default function App() {
  return (
    <div>
      {routes}
    </div>
  )
}
