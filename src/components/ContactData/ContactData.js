import React from "react";
import axios from "axios";
import { Wrapper, H1, Form, Input, Submit } from "./styles";

class ContactData extends React.Component {
  state = {
    name: "",
    email: "",
    city: "",
    pinCode: "",
    mobile: "",
  };

  clickHandler = () => {
    let details = {
      name: this.state.name,
      email: this.state.email,
      city: this.state.city,
      pinCode: this.state.pinCode,
      mobile: this.state.mobile,
    };
    axios
      .post("https://online-ticketing-app.firebaseio.com/details.json", details)
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
    this.props.history.push("/payments");
  };

  changeHandler = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <Wrapper>
        <H1>Enter Details</H1>
        <Form>
          <Input
            type="text"
            id="name"
            name="name"
            value={this.state.name}
            placeholder="Name"
            onChange={this.changeHandler}
          />
          <Input
            type="email"
            name="email"
            id="email"
            value={this.state.email}
            onChange={this.changeHandler}
            placeholder="Email"
          />
          <Input
            type="text"
            name="city"
            id="city"
            value={this.state.city}
            onChange={this.changeHandler}
            placeholder="City Name"
          />
          <Input
            type="text"
            name="pinCode"
            id="pinCode"
            value={this.state.pinCode}
            onChange={this.changeHandler}
            placeholder="Pin Code"
          />
          <Input
            type="text"
            name="mobile"
            id="mobile"
            value={this.state.mobile}
            onChange={this.changeHandler}
            placeholder="Mobile"
          />
          <Submit type="submit" onClick={this.clickHandler}>
            SUBMIT
          </Submit>
        </Form>
      </Wrapper>
    );
  }
}

export default ContactData;
