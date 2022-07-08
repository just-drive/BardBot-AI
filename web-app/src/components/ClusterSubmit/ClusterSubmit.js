import axios, { post } from "axios";
import React, { useState, useRef } from "react";
import LeftSideMenu from "../LeftSideMenu/LeftSideMenu";
import { Div3 } from "./ClusterSubmitStyles";

class ClusterSubmit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      files: [],
      showSubmit: false,
    };
  }

  handleFileChange = (event) => {
    let files = event.target.files;
    this.setState(
      {
        files: files[0],
      },
      () => {
        console.log(this.state.files);
      }
    );
    console.log(files[0]);
  };

  onFormSubmit = (event) => {
    alert("All data entered");
    event.preventDefault();
  };

  render() {
    console.log(this.state);
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <h1>Upload Your Tunes</h1>
          {/* This is for song name */}
          {/* This is for file  */}
          <h4>Clustering</h4>
          <input
            type="file"
            name="file"
            accept="audio/*,.wav,.midi"
            onChange={(e) => this.handleFileChange(e)}
          />
          {/* This is submit button */}
          <button type="submit" value="Submit">
            Submit
          </button>
        </form>
      </div>
    );
  }
}

export default ClusterSubmit;
