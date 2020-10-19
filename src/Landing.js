import React,{Component} from "react";
import "./css/Landing.css";
import Home from './Home.js';
import Login from './Login.js';
import TwitterIcon from "@material-ui/icons/Twitter";
import { Button } from "@material-ui/core";
import Fire from "./firebase";

class Landing extends Component {
  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.signup = this.signup.bind(this);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  login(e) {
    e.preventDefault();
    Fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).catch((error) => {
        console.log(error);
      });
  }

  signup(e){
    e.preventDefault();
    Fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{
    }).then((u)=>{console.log(u)})
    .catch((error) => {
        console.log(error);
      })
  }
  render(){
  return (
    // BEM
    <div className="landing">
      <TwitterIcon className="sidebar__twitterIcon" />
      <h2>See what’s happening in the world right now</h2>
      <br/>
      <br/>
      <h4>Join Twitter today.</h4>
      <br/>
      <form>
        <input onChange={e => this.setState({ email: e.target.value })} type="text" placeholder="Username" className="inp"/>
        <br/>
        <input onChange={e => this.setState({ password: e.target.value })} type="password" placeholder="Password"  className="inp"/>
        <Button onClick={this.login} variant="outlined" className="sidebar__tweet" fullWidth>
          Log In
        </Button>
      </form>
        <Button variant="outlined" className="sidebar__tweet" fullWidth>
          Sign Up
        </Button>
    </div>
  );
  }
}

export default Landing;
