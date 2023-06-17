import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './components/account/Login'
import Home from './components/Home';
import Forum from './components/forum/Forum';
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/accounts' element={<Login />} />
      <Route path='/blog' element={<Forum />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
