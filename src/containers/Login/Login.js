import React from "react";
import { ReactSVG } from "react-svg";
import fire from "../../config/fire";
import { Wrapper, AvatarIcon, Form, Input, Buttons, Button } from "./styles";
import Avatar from "../../images/icons/avatar.svg";

class Login extends React.Component {
  state = {
    email: "",
    password: "",
  };
  login = (event) => {
    event.preventDefault();
    fire
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        console.log(err.message);
      });
  };

  signup = (event) => {
    event.preventDefault();
    fire
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((user) => {
        console.log(user);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  render() {
    return (
      <Wrapper>
        <AvatarIcon>
          <ReactSVG src={Avatar} />
        </AvatarIcon>
        <h2>Sign In to your Account</h2>
        <Form>
          <Input
            type="email"
            name="email"
            placeholder="Enter your Email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />

          <Input
            type="password"
            name="password"
            placeholder="Enter your Password"
            value={this.state.password}
            onChange={this.handleChange}
            required
          />
          <Buttons>
            <Button type="submit" onClick={this.login}>
              LOGIN
            </Button>
            <h3>OR</h3>
            <Button type="submit" onClick={this.signup}>
              SIGNUP
            </Button>
          </Buttons>
        </Form>
      </Wrapper>
    );
  }
}

export default Login;
