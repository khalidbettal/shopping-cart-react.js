

import React from 'react'
import './App.css';
import {BrowserRouter as Router , Routes, Route} from  'react-router-dom';
import NavbarDefaul from './components/NavBar';
import Home from './components/Home';
import Favorite from './components/Favorite';
import { FavContextProvider } from './context/FavContext';
import { Cart } from './components/Cart';








function App() {

  
  
  return (
<FavContextProvider>
    <Router>
      <NavbarDefaul/>
    <Routes>

      <Route path='/' element={<Home/>}/>
      <Route path='/favorite' element={<Favorite />}/>
      <Route path='/cart' element={<Cart />}/>
      
    </Routes>
    </Router>
    </FavContextProvider>
  );
}

export default App
