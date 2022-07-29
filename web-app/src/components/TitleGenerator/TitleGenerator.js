import axios, { post } from "axios";
import React, { useState, useRef } from "react";
import LeftSideMenu from "../LeftSideMenu/LeftSideMenu";
import { davinciCompletion } from "../../secrets";

class TitleGenerator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      genre: "",
      pace: "",
      theme: "",
      lyrics: "",
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
  handleLyricsChange = (event) => {
    this.setState(
      {
        lyrics: event.target.value,
      },
      () => {
        console.log(this.state.lyrics);
      }
    );
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    const prompt =
      this.state.genre != "" ? `Genre: ${this.state.genre}\n` : "" +
      this.state.theme != "" ? `Theme: ${this.state.theme}\n` : '' +
      this.state.lyrics != "" ? `Lyrics: \n${this.state.lyrics}\n` : '' +
      `Title:`;
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
          <textarea id="lyrics_textarea" onChange={this.handleLyricsChange}
           placeholder="Lyrics" />
        </div>
        <button type="submit" value="Submit" onClick={this.handleSubmit}>
          Submit
        </button>
      </div>
    );
  }
}
//Need place to display the title or titles
export default TitleGenerator;
