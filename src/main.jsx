import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About'
import Rentals from './pages/Rentals';
import Error from './pages/Error';
import Header from './components/Header';
import Footer from './components/Footer';
import "./style/style.css"
import { DataProvider } from './utils/context';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <DataProvider>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/rentals/:id' element={<Rentals />} />
          <Route path='*' element={<Error />} />
        </Routes>
        <Footer />
      </DataProvider>
    </Router>
    </React.StrictMode>
);
