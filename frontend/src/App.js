import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Login from './Components/Login';
import PrivateRoute from './Components/PrivateRoute';
import Home from './Pages/Home';

const App = () => {
  return (
    <Routes>
      <Route path="login" element={<Login />} />
      <Route path="/" element={<PrivateRoute />}>
        <Route path="/" element={<Home />} />
      </Route>
    </Routes>
  )
}

export default App