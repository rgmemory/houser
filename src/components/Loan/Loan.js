import React, { Component } from "react";
import { Link } from "react-router-dom";
import { handleLoan, handleMortgage } from "../../Ducks/reducer";
import { connect } from "react-redux";
import "./loan.css";

class Loan extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="loan">
        <div className="top">
          <p>Add new listing</p>

          <Link to="/dashboard">
            <button className="cancel">Cancel</button>
          </Link>
        </div>

        <div className="inner_center">
          <div className="step">
            <p>Step 4</p>
          </div>

          <div className="progress">
            <div className="completed" />
            <div className="completed" />
            <div className="completed" />

            <div className="current">
              <div className="inner_current" />
            </div>
            <div className="pending" />
          </div>

          <div className="inputs">
            <p>Loan Amount</p>
            <input
              className="loan_input input_font"
              type="text"
              onChange={e => this.props.handleLoan(e.target.value)}
            />
            <p>Monthly Mortgage</p>
            <input
              className="mortgage_input input_font"
              type="text"
              onChange={e => this.props.handleMortgage(e.target.value)}
            />
          </div>

          <div className="bottom_buttons">
            <Link to="/image">
              <button className="previous_step">Previous Step</button>
            </Link>
            <Link to="/rent">
              <button className="next_step">Next Step</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  handleLoan,
  handleMortgage
};

export default connect(
  null,
  mapDispatchToProps
)(Loan);
