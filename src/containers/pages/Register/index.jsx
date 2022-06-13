import React, { Component } from "react";
import "./Register.scss";
import firebase from '../../../config/firebase'
class Register extends Component {
  state = {
    email: '',
    password: ''
  }

  handleChangeText = (e) => {
    this.setState({
      [e.target.id]: e.target.value,
    })
  }

  handleRegisterSubmit = () => {
    console.log('email:', this.state.email);
    console.log('password:', this.state.password);
    const {email, password} = this.state
    firebase.auth().signInWithEmailAndPassword(email, password)
  .then((res) => {
    // Signed in
    console.log('success :', res);
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(errorCode, errorMessage);
  });
  }
  render() {
    return (
      <div className="auth-container">
        <div className="auth-card">
          <p className="auth-title">Register Page</p>
          <input className="input" placeholder="Email" type="text" id="email" onChange={this.handleChangeText} />
          <input className="input" placeholder="password" type="password" id="password" onChange={this.handleChangeText } />
          <button onClick={this.handleRegisterSubmit} className="btn">Register</button>
        </div>
      </div>
    );
  }
}

export default Register;
