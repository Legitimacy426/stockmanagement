import { useState } from 'react'
import { BrowserRouter as Router ,Route,Routes } from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashbord'
import Cat from './components/Cat'
import Minus from './components/Minus'
import Add from './components/Add'
import Edit from './components/Edit'


function App() {


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Login />}  />
        <Route path='dashboard' element={<Dashboard />}  />
        <Route path='cat' element={<Cat />}  />
        <Route path='add/:cat/:id/:q' element={<Add />}  />
        <Route path='minus/:cat/:id/:q' element={<Minus />}  />
        <Route path='edit/:cat/:id/:q' element={<Edit />}  />
      </Routes>
   </Router>
  )
}

export default App
