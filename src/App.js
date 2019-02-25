import React, { Component } from "react";
import routes from "./routes";
import Header from "../src/components/Header/Header";
import { withRouter } from "react-router";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="outside-div">
        {this.props.location.pathname == "/" ? null : <Header />}

        <div className="background">
          <div
            className={`${
              this.props.location.pathname === "/" ? "auth_center" : "center"
            }`}
          >
            {routes}
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(App);

