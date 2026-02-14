import React from 'react';
import { Routes, Route } from 'react-router-dom';
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Products from './pages/Products';
import Training from './pages/Training';

function App() {
  return (
    <MainLayout>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/products" element={<Products />} />
        <Route path="/training" element={<Training />} />
        {/* <Route path="/checkout" element={<div className="py-24 text-center text-4xl font-bold">Checkout Page</div>} /> */}
      </Routes>
    </MainLayout>
  );
}

export default App;

