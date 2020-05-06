import React from "react";
import { Wrapper } from "./styles";

const BackDrop = (props) =>
  props.show ? <Wrapper onClick={props.clicked} /> : null;

export default BackDrop;
