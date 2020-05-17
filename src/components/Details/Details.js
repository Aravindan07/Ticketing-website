import React from "react";
import { withRouter } from "react-router-dom";
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
    <Wrapper>
      <H1>{props.heading}</H1>
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
        <CancelButton type="submit" onClick={props.clickedCancel}>
          CANCEL
        </CancelButton>
        <ContinueButton
          type="submit"
          onClick={() => props.history.push("/contact-data")}
        >
          BOOK NOW
        </ContinueButton>
      </Buttons>
    </Wrapper>
  ) : null;
}
export default withRouter(Details);
