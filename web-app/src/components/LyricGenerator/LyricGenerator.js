import React from "react";
import { query } from "../../ai/openai";

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
    this.setState({ genre: event.target.value });
  };
  handleThemeChange = (event) => {
    this.setState({ pace: event.target.value });
  };
  handlePaceChange = (event) => {
    this.setState({ theme: event.target.value });
  };
  handleTitleChange = (event) => {
    this.setState({ title: event.target.value });
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    const prompt =
      (this.state.title.trim().length != 0 ? `Title: \n${this.state.title}\n` : '') +
      (this.state.genre.trim().length != 0 ? `Genre: ${this.state.genre}\n` : '') +
      (this.state.theme.trim().length != 0 ? `Theme: ${this.state.theme}\n` : '') +
      `Lyrics:\n`;
    const completion = await query({ prompt: prompt });
    alert(completion);
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
