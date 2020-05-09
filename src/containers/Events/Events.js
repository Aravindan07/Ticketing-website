import React from "react";

import {
  Header,
  H1,
  Button,
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
import Login from "../../containers/Login/Login";
import fire from "../../config/fire";

class Events extends React.Component {
  state = {
    show: false,
    user: {},
  };

  componentDidMount() {
    this.authListener();
  }
  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
      } else {
        this.setState({ user: null });
      }
    });
  }
  logout() {
    fire.auth().signOut();
  }

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
    let output = <></>;

    if (this.state.user) {
      output = (
        <>
          <Header>
            <H1>Events page</H1>
            <Button onClick={this.logout}>Logout</Button>
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
                This event happens at our capital city and the motto of this
                event is to organise gamers from all over the place and ...
              </Content>
              <More onClick={this.clickHandler}>Click to learn more!</More>
              <BackDrop
                show={this.state.show}
                clicked={this.clickCancelHandler}
              />
              <Details
                show={this.state.show}
                clickedCancel={this.clickCancelHandler}
              />
            </Event>
            <Event>
              <H2>Event 2</H2>
              <CreatedDetails>
                Posted on <span>5 May 2020</span>
              </CreatedDetails>
              <Content>
                This event happens at our capital city and the motto of this
                event is to organise gamers from all over the place and ...
              </Content>
              <More onClick={this.clickHandler}>Click to learn more!</More>
              <BackDrop
                show={this.state.show}
                clicked={this.clickCancelHandler}
              />
              <Details
                show={this.state.show}
                clickedCancel={this.clickCancelHandler}
              />
            </Event>
            <Event>
              <H2>Event 3</H2>
              <CreatedDetails>
                Posted on <span>5 May 2020</span>
              </CreatedDetails>
              <Content>
                This event happens at our capital city and the motto of this
                event is to organise gamers from all over the place and ...
              </Content>
              <More onClick={this.clickHandler}>Click to learn more!</More>
              <BackDrop
                show={this.state.show}
                clicked={this.clickCancelHandler}
              />
              <Details
                show={this.state.show}
                clickedCancel={this.clickCancelHandler}
              />
            </Event>
            <Event>
              <H2>Event 4</H2>
              <CreatedDetails>
                Posted on <span>5 May 2020</span>
              </CreatedDetails>
              <Content>
                This event happens at our capital city and the motto of this
                event is to organise gamers from all over the place and ...
              </Content>
              <More onClick={this.clickHandler}>Click to learn more!</More>
              <BackDrop
                show={this.state.show}
                clicked={this.clickCancelHandler}
              />
              <Details
                show={this.state.show}
                clickedCancel={this.clickCancelHandler}
              />
            </Event>
            <Event>
              <H2>Event 5</H2>
              <CreatedDetails>
                Posted on <span>5 May 2020</span>
              </CreatedDetails>
              <Content>
                This event happens at our capital city and the motto of this
                event is to organise gamers from all over the place and ...
              </Content>
              <More onClick={this.clickHandler}>Click to learn more!</More>
              <BackDrop
                show={this.state.show}
                clicked={this.clickCancelHandler}
              />
              <Details
                show={this.state.show}
                clickedCancel={this.clickCancelHandler}
              />
            </Event>
          </EventsDetails>
        </>
      );
    } else {
      output = <Login />;
    }
    return output;
  }
}

export default Events;
