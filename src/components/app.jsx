import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      value: ""
    };
  }

  render() {
    return (
      <div id="anime">
        <h1>hello</h1>
      </div>
    );
  }
}

export default App;
