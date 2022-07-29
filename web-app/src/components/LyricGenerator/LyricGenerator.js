import axios, { post } from "axios";
import React, { useState, useRef } from "react";
import LeftSideMenu from "../LeftSideMenu/LeftSideMenu";
import { davinciCompletion } from "../../secrets";

class LyricGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: "",
      pace: "",
      theme: "",
      title: "",
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
  handleSubmit = async (event) => {
    event.preventDefault();
    const prompt =
      this.state.title != "" ? `Title: \n${this.state.title}\n` : '' +
      this.state.genre != "" ? `Genre: ${this.state.genre}\n` : "" +
      this.state.theme != "" ? `Theme: ${this.state.theme}\n` : '' +
      `Lyrics:\n`;
    davinciCompletion(prompt, 
      (completion) => {
        console.log(completion);
        alert(completion);
      }
    );
  }

  render() {
    console.log(this.state);
    return (
      <div>
        <div>
          <input id="genre_input" onChange={this.handleGenreChange} 
            placeholder="Genre" />
        </div>
        <div>
          <input id="pace_input" onChange={this.handlePaceChange} 
            placeholder="Pace (bpm)" />
        </div>
        <div>
          <input id="theme_input" onChange={this.handleThemeChange}
            placeholder="Theme" />
        </div>
        <div>
          <input id="title_input" onChange={this.handleTitleChange}
           placeholder="Title" />
        </div>
        <button type="submit" value="Submit" onClick={this.handleSubmit}>
          Submit
        </button>
      </div>
    );
  }
}
//Need place to display the title or titles
export default LyricGenerator;
