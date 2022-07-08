import axios, { post } from "axios";
import React, { useState, useRef } from "react";
import LeftSideMenu from "../LeftSideMenu/LeftSideMenu";

class LyricGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: "",
      pace: "",
      theme: "",
      title: "",
      file: [],
    };
  }

  handleGenreChange = (event) => {
    this.setState(
      {
        genre: event.target.value,
      },
      () => {
        console.log(this.state.genre);
      }
    );
  };
  handleThemeChange = (event) => {
    this.setState(
      {
        pace: event.target.value,
      },
      () => {
        console.log(this.state.pace);
      }
    );
  };
  handlePaceChange = (event) => {
    this.setState(
      {
        theme: event.target.value,
      },
      () => {
        console.log(this.state.theme);
      }
    );
  };

  handleTitleChange = (event) => {
    this.setState(
      {
        title: event.target.value,
      },
      () => {
        console.log(this.state.t);
      }
    );
  };
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

  render() {
    console.log(this.state);
    return (
      <div>
        <div>
          <select id="opts" onChange={this.handleGenreChange}>
            <option value="Genre1">Genre1</option>
            <option value="Genre2">Genre2</option>
            <option value="Genre3">Genre3</option>
          </select>
        </div>
        <div>
          <select id="opts" onChange={this.handleGenreChange}>
            <option value="Pace1">Pace1</option>
            <option value="Pace2">Pace2</option>
            <option value="Pace3">Pace3</option>
          </select>
        </div>
        <div>
          <select id="opts" onChange={this.handleGenreChange}>
            <option value="Theme1">Theme1</option>
            <option value="Theme2">Theme2</option>
            <option value="Theme3">Theme3</option>
          </select>
        </div>
        <div>
          <input
            type="text"
            name="title"
            placeholder="Your song title"
            onChange={this.handleTitleChange}
          />
        </div>
        <div>
          {/* This is just in case we need the song to add lyrics */}
          <input
            type="file"
            name="file"
            accept="audio/*,.wav,.midi"
            onChange={(e) => this.handleFileChange(e)}
          />
        </div>
      </div>
    );
  }
}
//Need place to display the title or titles
export default LyricGenerator;
