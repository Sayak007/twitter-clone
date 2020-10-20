import React,{ Component } from "react";
import "./css/App.css";
import Home from './Home.js';
import Login from './Login.js';
import Landing from './Landing.js';
import TwitterIcon from "@material-ui/icons/Twitter";
import { Button } from "@material-ui/core";
import Fire from './firebase';

class App extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
    window.addEventListener('resize', this.resize);
  }
  componentWillUnmount() {
      window.removeEventListener('resize', this.resize);
  }

  resize = () => this.forceUpdate();

  authListener() {
    Fire.auth().onAuthStateChanged((user) => {
      console.log(user);
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
      }
    });
  }
  render() {
    return (
     <div>{this.state.user ?  ( <Home/>) : (<Landing />)}</div>
    );
  }
}

 export default App;
