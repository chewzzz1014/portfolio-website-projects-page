import './App.css';
import React from 'react'

// for scroll top icon 


// react components
import Logo from './components/logo';
import Nav from './components/Nav';
import Footer from './components/Footer';
import { dataElements } from './components/Main';

function App() {
  return (
    <div className='App'>
      <div>
        <Nav />
        <Logo />
        {dataElements}
      </div>
      <Footer />
    </div>
  );

}

export default App 