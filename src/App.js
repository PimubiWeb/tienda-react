import React, { Component } from 'react';
import './App.css';
import Title from './components/Title';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import About from './components/About';
import POPOSDetails from './components/ProductDetails';


import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

export class App extends Component{

  constructor(){
    super();

    if(localStorage.getItem('carrito')){
      this.state = {
        data: [], carrito: JSON.parse(localStorage.getItem('carrito'))
      }
    }else{
      this.state = {
        data: [], carrito: []
      }
    }
  }

  render() {
    return (
      <div className='App'>
       
        <BrowserRouter>
          <Title />
          <Routes>
          <Route exact path="/" element={<ProductList />} />
          <Route path='/About' element= {< About />} />
          <Route path="/detail/:id" element={< POPOSDetails list={this.state.data} />} />
          </Routes>
          <Footer/>
        </BrowserRouter>
      </div>
      
    )
  }
}

export default App;
