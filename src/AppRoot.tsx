import React from 'react';
import './App.scss';
import Routes from './Routes';
import Header from './components/Header/Header';
import { BrowserRouter } from 'react-router-dom';
import { Layout } from 'antd';

function AppRoot() {
  return (
    <BrowserRouter>
      <Layout className='App'>
        <Header />
        <Routes auth={{ isSignedIn: false }} />
      </Layout>
    </BrowserRouter>
  );
}

export default AppRoot;
