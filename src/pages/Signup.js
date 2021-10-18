import React, { Component } from "react";
import { Link } from "react-router-dom";
import { signup, signInWithGoogle, signInWithGitHub } from "../helpers/auth";

export default class SignUp extends Component {
  constructor() {
    super();
    this.state = {
      error: null,
      email: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.googleSignIn = this.googleSignIn.bind(this);
    this.githubSignIn = this.githubSignIn.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
    });
  }

  async handleSubmit(event) {
    event.preventDefault();
    this.setState({ error: "" });
    try {
      await signup(this.state.email, this.state.password);
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  async googleSignIn() {
    try {
      await signInWithGoogle();
    } catch (error) {
      this.setState({ error: error.message });
    }
  }

  async githubSignIn() {
    try {
      await signInWithGitHub();
    } catch (error) {
      console.log(error);
      this.setState({ error: error.message });
    }
  }

  render() {
    return (
      <div className="wrapper fadeInDown">
        <div id="formContent">
          <div className="fadeIn first">
            <img
              src="https://lh3.googleusercontent.com/-_N0MoBQtRVw/YWz7O4-exNI/AAAAAAAAGbg/MsXuRkbK8KoO1QmElt2Pc5_llUJt6AKJQCLcBGAsYHQ/s16000/A%25C3%25B1adir%2Bun%2Bt%25C3%25ADtulo%2B%25282%2529.png"
              id="icon"
              alt="User Icon"
            />
          </div>

          <form className="mt-5 py-5 px-5" onSubmit={this.handleSubmit}>
            <h1>
              Sign Up
            </h1>
            <p className="lead">It's free ;)</p>
            <div className="form-group">
              <input
                className="form-control"
                placeholder="Email"
                name="email"
                type="email"
                onChange={this.handleChange}
                value={this.state.email}
              ></input>
            </div>
            <div className="form-group">
              <input
                className="form-control"
                placeholder="Password"
                name="password"
                onChange={this.handleChange}
                value={this.state.password}
                type="password"
              ></input>
            </div>
            <div className="form-group">
              {this.state.error ? (
                <p className="text-danger">{this.state.error}</p>
              ) : null}
              <button className="btn btn-success px-5 mt-3 mb-3" type="submit">
                Sign up
              </button>
            </div>
            <p>You can also sign up with any of these services</p>
            <button
              className="btn btn-primary mr-2"
              type="button"
              onClick={this.googleSignIn}
            >
              Sign up with Google
            </button>
            <button
              className="btn btn-secondary"
              type="button"
              onClick={this.githubSignIn}
            >
              Sign up with GitHub
            </button>
            <hr></hr>
            <p>
              Already have an account? <Link to="/login">Login</Link>
            </p>
          </form>
        </div>
      </div>
    );
  }
}
