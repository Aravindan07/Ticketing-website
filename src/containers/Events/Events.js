import React from "react";

import {
  Header,
  Search,
  Input,
  EventsDetails,
  Event,
  CreatedDetails,
  H2,
  Content,
  More,
} from "./styles";
import BackDrop from "../../components/BackDrop/BackDrop";
import Details from "../../components/Details/Details";

class Events extends React.Component {
  state = {
    show: false,
  };

  clickHandler = () => {
    this.setState({
      show: true,
    });
    console.log("Set to true!");
  };

  clickCancelHandler = () => {
    this.setState({
      show: false,
    });
    console.log("Set to false!");
  };

  render() {
    return (
      <>
        <Header>
          <h1>Events page</h1>
        </Header>
        <Search>
          <label htmlFor="search">Search :</label>
          <Input type="text" />
        </Search>
        <EventsDetails>
          <Event>
            <H2>Event 1</H2>
            <CreatedDetails>
              Posted on <span>5 May 2020</span>
            </CreatedDetails>
            <Content>
              This event happens at our capital city and the motto of this event
              is to organise gamers from all over the place and ...
            </Content>
            <More onClick={this.clickHandler}>Click to learn more!</More>
            <BackDrop
              show={this.state.show}
              clicked={this.clickCancelHandler}
            />
            <Details show={this.state.show} clicked={this.clickCancelHandler} />
          </Event>
          <Event>
            <H2>Event 2</H2>
            <CreatedDetails>
              Posted on <span>5 May 2020</span>
            </CreatedDetails>
            <Content>
              This event happens at our capital city and the motto of this event
              is to organise gamers from all over the place and ...
            </Content>
            <More onClick={this.clickHandler}>Click to learn more!</More>
            <BackDrop
              show={this.state.show}
              clicked={this.clickCancelHandler}
            />
            <Details show={this.state.show} />
          </Event>
          <Event>
            <H2>Event 3</H2>
            <CreatedDetails>
              Posted on <span>5 May 2020</span>
            </CreatedDetails>
            <Content>
              This event happens at our capital city and the motto of this event
              is to organise gamers from all over the place and ...
            </Content>
            <More onClick={this.clickHandler}>Click to learn more!</More>
            <BackDrop
              show={this.state.show}
              clicked={this.clickCancelHandler}
            />
            <Details show={this.state.show} />
          </Event>
          <Event>
            <H2>Event 4</H2>
            <CreatedDetails>
              Posted on <span>5 May 2020</span>
            </CreatedDetails>
            <Content>
              This event happens at our capital city and the motto of this event
              is to organise gamers from all over the place and ...
            </Content>
            <More onClick={this.clickHandler}>Click to learn more!</More>
            <BackDrop
              show={this.state.show}
              clicked={this.clickCancelHandler}
            />
            <Details show={this.state.show} />
          </Event>
          <Event>
            <H2>Event 5</H2>
            <CreatedDetails>
              Posted on <span>5 May 2020</span>
            </CreatedDetails>
            <Content>
              This event happens at our capital city and the motto of this event
              is to organise gamers from all over the place and ...
            </Content>
            <More onClick={this.clickHandler}>Click to learn more!</More>
            <BackDrop
              show={this.state.show}
              clicked={this.clickCancelHandler}
            />
            <Details show={this.state.show} />
          </Event>
        </EventsDetails>
      </>
    );
  }
}

export default Events;
