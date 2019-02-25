import React, { Component } from "react";
import "./header.css";
import { Link } from "react-router-dom";
import axios from "axios";

export default class Header extends Component {
  constructor() {
    super();

    this.logout = this.logout.bind(this);
  }

  logout() {
    axios.post("/api/auth/logout").then(res => {});
  }

  render() {
    return (
      <div className="header">
        <div className="inner-header">
          <div className="header_links">
            <Link to="/">
              <button className="header_houser">Houser</button>
            </Link>
            <Link to="/dashboard">
              <button className="header_dashboard">Dashboard</button>
            </Link>
          </div>

          <Link to="/">
            <button onClick={this.logout}>Logout</button>
          </Link>
        </div>
      </div>
    );
  }
}
