import React, { Component } from "react";
import { Link } from "react-router-dom";
import { handleImage } from "../../Ducks/reducer";
import { connect } from "react-redux";
import "./image.css";

class Image extends Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="image">
        <div className="top">
          <p>Add new listing</p>

          <Link to="/dashboard">
            <button className="cancel">Cancel</button>
          </Link>
        </div>

        <div className="inner_center">
          <div className="step">
            <p>Step 3</p>
          </div>

          <div className="progress">
            <div className="completed" />
            <div className="completed" />

            <div className="current">
              <div className="inner_current" />
            </div>
            <div className="pending" />
            <div className="pending" />
          </div>

          <div className="preview">
            <img src={this.props.image} />
          </div>

          <div className="inputs">
            Image URL
            <input
              className="image_input input_font"
              type="text"
              onChange={e => {
                this.props.handleImage(e.target.value);
              }}
            />
          </div>

          <div className="bottom_buttons">
            <Link to="/address">
              <button className="previous_step">Previous Step</button>
            </Link>
            <Link to="/loan">
              <button className="next_step">Next Step</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = {
  handleImage
};

function mapStateToProps(state){
  return{
    image: state.image
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Image);
