import React from 'react';
import Header from './pages/Header';
import MainPage from './pages/MainPage';
import Footer from './pages/Footer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <MainPage />
        <Footer />
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
