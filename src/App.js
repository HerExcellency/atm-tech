import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import About from './About';
import MediaPage from './MediaPage';
import ContactUs from './ContactUs';

function App() {
  return (
    <Router >
      <div>
      <Navbar />
      
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/about" exact element={<About />} />
          <Route path="/projects" exact element={<MediaPage />} />
          <Route path="/contact-us" exact element={<ContactUs />} />
        </Routes>
      <Footer />
      </div>
    </Router>
  );
}

export default App;
