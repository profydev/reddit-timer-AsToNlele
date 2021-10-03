import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Hero from './components/Hero';
import Info from './components/Info';

function App() {
  return (
    <Router>
      <Header />
      <Hero />
      <Info />
      <Footer />
      <Switch>
        <Route path="/search" />
        <Route path="/" />
      </Switch>
    </Router>
  );
}

export default App;
