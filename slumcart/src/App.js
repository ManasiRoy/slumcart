import React from 'react';
import './App.css';
import Homepage from './Pages/Homepage/homepage';
import Shop from './Components/Shop/Shop'
import { BrowserRouter as Switch, Route } from 'react-router-dom'

function App() {
  return (
    <div>
      <Switch>
        <Route path='/' exact component={Homepage} />
        <Route path='/shop' component={Shop} />
      </Switch>
    </div>
  );
}

export default App;
