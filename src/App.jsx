import React from 'react'
import Product from './Pages/Product'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ProductProvider } from './Context/ProductContext'
import Cart from './Pages/Cart';
import Checkout from './Pages/Checkout';







const App = () => {
  return (
    <ProductProvider>
    <Router>
      <div className="relative">
      <main className="pt-16">
      <Routes>
      <Route path="/" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/checkout" element={<Checkout />} /> {/* Add Checkout route */}
        
      </Routes>
      </main>
      </div>
    </Router>
    </ProductProvider>

  

  )
}

export default App