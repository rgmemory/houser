import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { handleName, handleDescription } from "../../Ducks/reducer";
import "./name.css";

export class Name extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="name">
        <div className="top">
          <p>Add new listing</p>

          <Link to="/dashboard">
            <button className="cancel">Cancel</button>
          </Link>
        </div>

        <div className="inner_center">
          <div className="step">
            <p>Step 1</p>
          </div>

          <div className="progress">
            <div className="current">
              <div className="inner_current" />
            </div>
            <div className="pending" />
            <div className="pending" />
            <div className="pending" />
            <div className="pending" />
          </div>

          <div className="inputs">
            <p>Property Description</p>
            <input
              className="description_input input_font"
              type="text"
              onChange={e => this.props.handleDescription(e.target.value)}
            />
          </div>

          <div className="name_bottom_buttons">
            <Link to="/address">
              <button className="next_step">Next Step</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  handleName,
  handleDescription
};

export default connect(
  null,
  mapDispatchToProps
)(Name);
