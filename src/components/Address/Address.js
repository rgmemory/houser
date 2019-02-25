import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  handleAddress,
  handleCity,
  handleState,
  handleZip
} from "../../Ducks/reducer";
import "./address.css";

class Address extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="address">
        <div className="top">
          <p>Add new listing</p>

          <Link to="/dashboard">
            <button className="cancel">Cancel</button>
          </Link>
        </div>

        <div className="inner_center">
          <div className="step">
            <p>Step 2</p>
          </div>

          <div className="progress">
            <div className="completed" />

            <div className="current">
              <div className="inner_current" />
            </div>
            <div className="pending" />
            <div className="pending" />
            <div className="pending" />
          </div>

          <div className="inputs">
            <div className="address_input">
              <p>Address</p>
              <input
                className="input_font"
                type="text"
                onChange={e => {
                  this.props.handleAddress(e.target.value);
                }}
              />
            </div>

            <div className="second_row">
              <div className="city_input">
                <p>City</p>
                <input
                  className="input_font"
                  type="text"
                  onChange={e => {
                    this.props.handleCity(e.target.value);
                  }}
                />
              </div>

              <div className="state_input">
                <p>State</p>
                <input
                  className="input_font"
                  type="text_input"
                  onChange={e => {
                    this.props.handleState(e.target.value);
                  }}
                />
              </div>
            </div>

            <div className="zip_input">
              <p>Zip</p>
              <input
                className="input_font"
                type="text_input"
                onChange={e => {
                  this.props.handleZip(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="bottom_buttons">
            <Link to="/name">
              <button className="previous_step">Previous Step</button>
            </Link>
            <Link to="/image">
              <button className="next_step">Next Step</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  handleAddress,
  handleCity,
  handleState,
  handleZip
};

export default connect(
  null,
  mapDispatchToProps
)(Address);
