import React, { Component } from "react";

import "./styles.css";

var pages = {
  q1: {
    content: (getData, setData) => (
      <p>
        What is your name?
        <br />
        <br />
        <input
          type="text"
          value={getData("name")}
          onChange={event => setData("name", event.target.value)}
        />
        <br />
        <br />
        How old are you?
        <br />
        <br />
        <input
          type="text"
          value={getData("age")}
          onChange={event => setData("age", event.target.value)}
        />
        <br />
        <br />
        Casually say an adjective
        <br />
        <br />
        <input
          type="text"
          value={getData("adj")}
          onChange={event => setData("adj", event.target.value)}
        />
      </p>
    ),
    buttons: [{ label: "Continue", page: "q2" }]
  },
  q2: {
    content: (getData, setData) => (
      <p>
        What do you like to do the most?
        <br />
        <br />
        <input
          type="text"
          value={getData("act")}
          onChange={event => setData("act", event.target.value)}
        />
        <br />
        <br />
        How do you feel today?
        <br />
        <br />
        <input
          type="text"
          value={getData("mood")}
          onChange={event => setData("mood", event.target.value)}
        />
        <br />
        <br />
        Casually say an verb
        <br />
        <br />
        <input
          type="text"
          value={getData("verb")}
          onChange={event => setData("verb", event.target.value)}
        />
      </p>
    ),
    buttons: [{ label: "Continue", page: "q3" }]
  },
  q3: {
    content: (getData, setData) => (
      <p>
        Where do you want to go most?
        <br />
        <br />
        <input
          type="text"
          value={getData("place")}
          onChange={event => setData("place", event.target.value)}
        />
        <br />
        <br />
        Who do you love the most?
        <br />
        <br />
        <input
          type="text"
          value={getData("lover")}
          onChange={event => setData("lover", event.target.value)}
        />
      </p>
    ),
    buttons: [{ label: "Continue", page: "end" }]
  },
  end: {
    content: (getData, setData) => (
      <p>
        {getData("name")} asks {getData("lover")} if they could {getData("act")}{" "}
        together. {getData("lover")} rejects {getData("name")}'s proposal, and{" "}
        says,"Since your {getData("age")}th birthday is coming, why don't we go
        to {getData("place")} and {getData("verb")} there." {getData("lover")}{" "}
        says,"I feel {getData("mood")}"
      </p>
    ),
    buttons: [{ label: "Play Again", page: "q1" }]
  }
};

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      page: "q1",
      name: ""
    };
  }

  goToPage(pageName) {
    this.setState({
      page: pageName
    });
  }

  setData(dataName, dataValue) {
    var newState = {};
    newState[dataName] = dataValue;
    this.setState(newState);
  }

  render() {
    var pageData = pages[this.state.page];

    return (
      <div className="App">
        {pageData.content(
          dataName => this.state[dataName] || "",
          (name, value) => this.setData(name, value)
        )}
        {pageData.buttons.map(buttonInfo => (
          <button onClick={() => this.goToPage(buttonInfo.page)}>
            {buttonInfo.label}
          </button>
        ))}
      </div>
    );
  }
}

export default App;