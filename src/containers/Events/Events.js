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
// import Login from "../../containers/Login/Login";
// import fire from "../../config/fire";

class Events extends React.Component {
  state = {
    show: false,
    // user: {},
    isLoaded: false,
    events: [],
    content: `Lorem ipsum dolor sit amet,
     consectetur adipiscing elit, sed do
      eiusmod tempor incididunt ut labore ...`,
  };

  // authListener() {
  //   fire.auth().onAuthStateChanged((user) => {
  //     if (user) {
  //       this.setState({ user });
  //     } else {
  //       this.setState({ user: null });
  //     }
  //   });
  // }
  componentDidMount() {
    //this.authListener();

    //Fetching Data from the api
    fetch(
      "https://app.ticketmaster.com/discovery/v2/events.json?postalCode=33607&apikey=6GKXnfwUZAFaOaGMQbNbAJLAtD19ECS6"
    )
      .then((res) => res.json())
      .then((json) => {
        this.setState({
          isLoaded: true,
          events: json,
        });
        console.log(this.state.events);
        console.log(json);
      });
  }
  // logout() {
  //   fire.auth().signOut();
  // }

  //When click the more link
  clickHandler = () => {
    this.setState({
      show: true,
    });
    console.log("Set to true!");
  };

  //When clicking the backdrop and Cancel Button
  clickCancelHandler = () => {
    this.setState({
      show: false,
    });
    console.log("Set to false!");
  };

  render() {
    var isLoaded = this.state.isLoaded;
    var events = this.state.events;
    if (!isLoaded) {
      return <h2>Loading ...</h2>;
    } else {
      return (
        <>
          <Header>
            <H1>Events page</H1>
            <Button onClick={this.logout}>Logout</Button>
          </Header>
          <Search>
            <label htmlFor="search">Search :</label>
            <Input type="text" />
          </Search>
          {events._embedded.events.map((event) => (
            <EventsDetails key={event.id}>
              <Event>
                <H2>{event.name}</H2>
                <CreatedDetails>
                  Start Date <span>{event.dates.start.localDate}</span>
                </CreatedDetails>
                <Content>{this.state.content}</Content>
                <More onClick={this.clickHandler}>Click to learn more!</More>
                <BackDrop
                  show={this.state.show}
                  clicked={this.clickCancelHandler}
                />
                <Details
                  heading={event.name}
                  show={this.state.show}
                  clickedCancel={this.clickCancelHandler}
                />
              </Event>
            </EventsDetails>
          ))}
        </>
      );
    }
  }
}

export default Events;
