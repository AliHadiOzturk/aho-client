import React from 'react';
import './App.css';
import { Header } from './modules/common/Header';
import { Home } from './modules/home/Home';

function App() {
  return (
    <div className="App h-screen">
      <Header />
      <Home />
    </div>
  );
}

export default App;
