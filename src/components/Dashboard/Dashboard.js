import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import "./dashboard.css";

export default class Dashboard extends Component {
  constructor() {
    super();

    this.state = {
      properties: [],
      filterInput: ""
    };

    this.delete = this.delete.bind(this);
    this.filterInput = this.filterInput.bind(this);
    this.submitFilter = this.submitFilter.bind(this);
    this.reset = this.reset.bind(this);
  }

  componentDidMount() {
    axios
      .get("/api/getproperties")
      .then(res => {
        console.log("compoennt did moutn on the front ened", res.data);
        this.setState({
          properties: res.data
        });
      })
      .catch(e => {
        console.log(e);
      });
  }

  delete(value) {
    console.log("delete clicked");
    axios.delete("/api/delete/" + value).then(res => {
      axios.get("api/getproperties").then(res =>
        this.setState({
          properties: res.data
        })
      );
    });
  }

  filterInput(value) {
    this.setState({
      filterInput: value
    });
  }

  submitFilter() {
    axios.get(`/api/getproperties?filter=${this.state.filterInput}`).then(res =>
      this.setState({
        properties: res.data
      })
    );
  }

  reset() {
    axios
      .get("/api/getproperties")
      .then(res => {
        this.setState({
          properties: res.data
        });
      })
      .catch(e => {
        console.log(e);
      });

    this.setState({
      filterInput: 0
    });
  }

  render() {
    var formattedProperties = this.state.properties.map((current, index) => {
      console.log(current.img);
      return (
        <div className="dashboard_properties" key={current + index}>
          <div className="right-top">
            <div className="right-top-inner">
              <button
                className="x-button"
                onClick={() => {
                  this.delete(current.property_id);
                }}
              >
                X
              </button>
            </div>
          </div>

          <div className="right-bottom">
            <div className="dashboard_properties_left">
              <img src={current.img} alt="" />
            </div>

            <div className="dashboard_properties_center">
              <div className="left-column">
                <div className="dashboard_description">
                  <div className="item-title">Description:</div>
                  <div className="item-info">{current.description}</div>
                </div>

                <div className="dashboard_description">
                  <div className="item-title">Address:</div>
                  <div className="item-info">{current.address}</div>
                </div>

                <div className="dashboard_description">
                  <div className="item-title">City:</div>
                  <div className="item-info">{current.city}</div>
                </div>
              </div>

              <div className="right-column">
                <div className="dashboard_description">
                  <div className="item-title">Loan Amount: </div>
                  <div className="item-info">${current.loan}</div>
                </div>

                <div className="dashboard_description">
                  <div className="item-title">Monthly Mortgage: </div>
                  <div className="item-info">${current.mortgage}</div>
                </div>

                <div className="dashboard_description">
                  <div className="item-title">Recommended Rent: </div>
                  <div className="item-info">${current.mortgage * 1.25}</div>
                </div>

                <div className="dashboard_description">
                  <div className="item-title">Desired Rent: </div>
                  <div className="item-info">${current.rent}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });

    return (
      <div className="dashboard">
        <div className="new_property">
          <Link to="/name">
            <button className="dashboard_add_new">Add new property</button>{" "}
          </Link>
        </div>

        <div className="dashboard_filter">
          <p>List properties with 'desired rent' greater than: $</p>
          <input
            value={this.state.filterInput}
            onChange={e => {
              this.filterInput(e.target.value);
            }}
          />
          <button className="filter_button" onClick={this.submitFilter}>
            Filter
          </button>
          <button className="reset_button" onClick={this.reset}>
            Reset
          </button>
        </div>

        <div className="listings">
          <div className="properties-display"> {formattedProperties}</div>
        </div>
      </div>
    );
  }
}
