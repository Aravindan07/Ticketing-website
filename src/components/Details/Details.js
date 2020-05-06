import React from "react";
import {
  Wrapper,
  H1,
  Para,
  Buttons,
  CancelButton,
  ContinueButton,
} from "./styles";

function Details(props) {
  return props.show ? (
    <Wrapper
      style={{
        transform: props.show ? "translateY(0)" : "translateY(-100vh)",
        opacity: props.show ? "1" : "0",
      }}
    >
      <H1>Event 1</H1>
      <Para>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
        velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
        occaecat cupidatat non proident, sunt in culpa qui officia deserunt
        mollit anim id est laborum.
      </Para>
      <Para>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
        commodo consequat.
      </Para>
      <Buttons>
        <CancelButton type="submit" onClick={props.clicked}>
          CANCEL
        </CancelButton>
        <ContinueButton type="submit">BOOK NOW</ContinueButton>
      </Buttons>
    </Wrapper>
  ) : null;
}

export default Details;
