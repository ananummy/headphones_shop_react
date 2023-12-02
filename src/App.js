import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './pages/Header';
import MainPage from './pages/MainPage';
import CartPage from './pages/CartPage';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path={'/'} element={<MainPage />} />
            <Route path={'/cart'} element={<CartPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;
