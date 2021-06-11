import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import './App.css';

function App() {
  return (
    <HashRouter>
      <Route exact={true} path="/" component={Home} />
    </HashRouter>
  );
}

export default App;
