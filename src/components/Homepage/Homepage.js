import React from "react";
import { Link } from "react-router-dom";
import {
  Wrapper,
  Header,
  H3,
  Navigation,
  Anchor,
  H1,
  Para,
  Content,
  Button,
} from "./styles";

function Homepage(props) {
  return (
    <Wrapper>
      <Header>
        <H3>GB</H3>
        <Navigation>
          <Anchor as={Link} to="/events">
            Events
          </Anchor>
          <Anchor as={Link} to="/signin">
            SignIn
          </Anchor>
        </Navigation>
      </Header>
      <Content>
        <H1>Welcome to GamersBack</H1>
        <Para>
          A platform for all the gamers to collaborate and making competitions.
        </Para>
        <Button type="submit" onClick={() => props.history.push("/events")}>
          EVENTS
        </Button>
      </Content>
    </Wrapper>
  );
}

export default Homepage;
