import React from "react";
import {NavLink} from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      value: ""
    };
  }

  render() {
    return (
      <div className="top-bar">
        <div className="top-bar-left">
          <h1>App name</h1>
        </div>
        <div className="top-bar-right">
          <ul className="nav">
            <li><NavLink to="/" activeClassName="is-active" exact>App</NavLink></li>
            <li><NavLink to="/Add" activeClassName="is-active">Add</NavLink></li>
          </ul>
        </div>
      </div>

    );
  }
}

export default Header;
