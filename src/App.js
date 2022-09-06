import './App.scss';
import React, { useState, useEffect } from "react";
import { Switch, Route } from "react-router-dom";
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
    </div>
  );
}

export default App;
