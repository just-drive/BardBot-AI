import axios, { post } from "axios";
import React, { useState, useRef } from "react";
import LeftSideMenu from "../LeftSideMenu/LeftSideMenu";
import { Div3, ClusterWrapper } from "./ClusterSubmitStyles";

class ClusterSubmit extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // files: [],
      // showSubmit: false,
    };
  }

  render() {
    return (
      <ClusterWrapper>
        <form onSubmit={this.props.onFormSubmit}>
          <h1>Upload Your Tunes</h1>
          {/* This is for song name */}
          {/* This is for file  */}
          <h4>Clustering</h4>
          <input
            type="file"
            name="file"
            accept="audio/*,.wav,.midi"
            onChange={(e) => this.props.handleFileChange(e)}
          />
          {/* This is submit button */}
          <button
            type="submit"
            value="Submit"
            onClick={this.props.onClusterClick}
          >
            Submit
          </button>
        </form>
      </ClusterWrapper>
    );
  }
}

export default ClusterSubmit;
