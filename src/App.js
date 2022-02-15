import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import About from './components/About';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

export class App extends Component{

  render() {
    return (
      <div className='App'>
       
        <BrowserRouter>
          <Title />
          <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path='/About' element= {< About />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
      
    )
  }
}

export default App;
