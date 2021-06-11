import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Home from './routes/Home';
import './App.css';
import Test from './routes/Test';

function App() {
  return (
    <HashRouter>
      <Route exact={true} path="/" component={Home} />
      <Route path="/test" component={Test} />
    </HashRouter>
  );
}

export default App;
