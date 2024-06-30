import React from 'react';
import Sidebar from './sidebar';
import MainContent from './MainContent';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <MainContent />
    </div>
  );
};

export default App;
