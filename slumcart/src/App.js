import React, { Component } from 'react';
import './App.css';
import Homepage from './Pages/Homepage/homepage';
import Shop from './Components/Shop/Shop'
import { Switch, Route } from 'react-router-dom'
import Header from './Components/Header/Header';
import SigninSignUp from './Pages/Sign-Signup/SigninSignUp';
import { auth } from './firebase/firebase.utils'

class App extends Component {
  state = {
    currentUser: null
  }
  unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      this.setState({
        currentUser: user
      })
      console.log(user)
    })
  }
  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path='/' component={Homepage} />
          <Route path='/shop' component={Shop} />
          <Route path='/signin' component={SigninSignUp} />

        </Switch>
      </div>
    );
  }
}

export default App;
