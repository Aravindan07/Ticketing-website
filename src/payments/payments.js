import React from "react";
import { ReactSVG } from "react-svg";
import PaymentIcon from "../images/icons/payment.svg";
import { Wrapper, Icon, DetailsCard, Details, H2, Button } from "./styles";
class Payment extends React.Component {
  state = {
    isLoadable: false,
    events: [],
  };

  render() {
    return (
      <Wrapper>
        <Icon>
          <ReactSVG src={PaymentIcon} />
        </Icon>
        <DetailsCard>
          <Details>
            <H2>Event ID : G001</H2>
            <H2>Event Name : GamerConnect</H2>
            <H2>Event Date : 07/09/2020</H2>
            <H2>Total Price : $20</H2>
            <Button type="submit" onClick={() => this.props.history.push("/")}>
              PAY NOW
            </Button>
          </Details>
        </DetailsCard>
      </Wrapper>
    );
  }
}

export default Payment;
