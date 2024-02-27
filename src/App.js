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
import AnewHead from './components/AnewHead';
import AnewFooter from './components/AnewFooter';
import AnewAbout from './AnewAbout';
import AnewService from './AnewService';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function App() {
  return (
    <Router >
      <div>
      {/* <Navbar /> */}
      <AnewHead />
      
        <Routes>
          <Route path="/" exact element={<Home />} />
          <Route path="/About" exact element={<AnewAbout />} />
          <Route path="/Services" exact element={<AnewService />} />
          <Route path="/Projects" exact element={<MediaPage />} />
          <Route path="/Contact-us" exact element={<ContactUs />} />
          
        </Routes>
      {/* <Footer /> */}
      <AnewFooter />
      </div>
    </Router>
  );
}

export default App;
