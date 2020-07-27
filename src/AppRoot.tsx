import React from 'react';
import './App.css';
import Routes from './Routes';
import Header from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom';

function AppRoot() {
  return (
    <BrowserRouter>
      <div className='App'>
        <Header />
        <Routes auth={{ isSignedIn: false }} />
      </div>
    </BrowserRouter>
  );
}

export default AppRoot;
