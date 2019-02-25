import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { handleRent } from "../../Ducks/reducer";
import axios from "axios";
import "./rent.css";

class Rent extends Component {
  constructor() {
    super();
    this.complete = this.complete.bind(this);
  }

  complete() {
    console.log("complete clicked");
    let {
      name,
      description,
      address,
      city,
      state,
      zip,
      image,
      loan,
      mortgage,
      rent
    } = this.props;
    axios
      .post("/api/properties", {
        name,
        description,
        address,
        city,
        state,
        zip,
        image,
        loan,
        mortgage,
        rent
      })
      .then(res => {
        console.log("complete works on the front end", res);
        this.props.history.push("/dashboard");
      });
  }

  render() {
    let {
      name,
      description,
      address,
      city,
      state,
      zip,
      image,
      loan,
      mortgage,
      rent
    } = this.props;
    console.log(
      name,
      description,
      address,
      city,
      state,
      zip,
      image,
      loan,
      mortgage,
      rent
    );
    return (
      <div className="rent">
        <div className="top">
          <p>Add new listing</p>

          <Link to="/dashboard">
            <button className="cancel">Cancel</button>
          </Link>
        </div>

        <div className="inner_center">
          <div className="step">
            <p>Step 5</p>
          </div>

          <div className="progress">
            <div className="completed" />
            <div className="completed" />
            <div className="completed" />
            <div className="completed" />

            <div className="current">
              <div className="inner_current" />
            </div>
          </div>

          <div className="recommended_rent">
            <p>Recommended Rent: ${this.props.mortgage * 1.25}</p>
          </div>

          <div className="inputs">
            <p>Desired Rent</p>
            <div className="rent_input">
              <input
                className="input_font"
                type="text"
                onChange={e => {
                  this.props.handleRent(e.target.value);
                }}
              />
            </div>
          </div>

          <div className="bottom_buttons">
            <Link to="/loan">
              <button className="previous_step">Previous Step</button>
            </Link>

            <div className="complete">
              <button onClick={this.complete}>Complete</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  handleRent
};

function mapStateToProps(statel) {
  let {
    name,
    description,
    address,
    city,
    state,
    zip,
    image,
    loan,
    mortgage,
    rent
  } = statel;
  return {
    name,
    description,
    address,
    city,
    state,
    zip,
    image,
    loan,
    mortgage,
    rent
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Rent);
