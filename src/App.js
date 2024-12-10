// App.js
import React from 'react';
import { Route, BrowserRouter as Router, Routes, useLocation } from 'react-router-dom';
import './App.css';
import { CartProvider } from './CartContext'; // Import CartProvider
import Cart from './components/Cart'; // Import Cart component
import Footer from './components/Footer';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import ProductList from './components/ProductList';
import SearchResults from './components/SearchResults'; // Import the SearchResults component
import Signup from './components/Signup'; // Import Signup component
import Testimonials from './components/Testimonials';
import AboutUs from './pages/AboutUs';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import ProductDetail from './pages/ProductDetail';
import ShopAll from './pages/ShopAll';
import SignIn from './pages/SignIn'; // Corrected Import

function MainContent() {
  const location = useLocation();

  return (
    <>
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/shop-all" element={<ShopAll />} />
        <Route path="/product/:id" element={<ProductDetail />} />

        <Route path="/blog" element={<Blog />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/signin" element={<SignIn />} /> {/* Add SignIn Route */}
        <Route path="/signup" element={<Signup />} /> {/* Add Signup Route */}
        <Route path="/search" element={<SearchResults />} /> {/* Add SearchResults Route */}
        <Route path="/cart" element={<Cart />} /> {/* Add Cart Route */}
      </Routes>

      {/* Display ProductList and Testimonials only on the home page */}
      {location.pathname === "/" && <ProductList />}
      {location.pathname === "/" && <Testimonials />}
      <Footer />
    </>
  );
}

function App() {
  return (
    <Router>
      <CartProvider> {/* Wrap App with CartProvider */}
        <Header /> {/* Ensure Header is rendered */}
        <MainContent />
      </CartProvider>
    </Router>
  );
}

export default App;
