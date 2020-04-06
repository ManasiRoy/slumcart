import React from 'react';
import './App.css';
import Homepage from './Pages/Homepage/homepage';
import Shop from './Components/Shop/Shop'
import { Switch, Route } from 'react-router-dom'
import Header from './Components/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={Homepage} />
        <Route path='/shop' component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
