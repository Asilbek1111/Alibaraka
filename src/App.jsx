import './App.css';
import React from 'react';
// import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home/Home'
import Category from './Components/Category/Category';
import {Routes, Route} from 'react-router-dom'
import ProductAbout from './Components/ProductAbout/ProductAbout';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categoryId=:id" element={<Category />} />
        <Route
          path="/productId=:productId"
          element={<ProductAbout />}
        />
      </Routes>
    </div>
  );
}

export default App;
