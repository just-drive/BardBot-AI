import React from "react";
import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import bbai from "../../images/smaller.png";
import SubmitComponent from "../Submit/SubmitComponent";
import ClusterSubmit from "../ClusterSubmit/ClusterSubmit";
import MusicGenerator from "../MusicGenerator/MusicGenerator";
import LyricGenerator from "../LyricGenerator/LyricGenerator";
import TitleGenerator from "../TitleGenerator/TitleGenerator";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// This requires the other 6 components on the menu ^^
import {
  Button,
  Div1,
  Div2,
  MenuDiv,
  SectionLabel,
  ServicesLabel,
} from "./LeftSideMenuStyles";

function clickMe() {
  alert("You clickMe");
}

class LeftSideMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // Show component is for midi2wav and wav2midi
      showComponent: false,
      showCluster: false,
      showTitleGen: false,
      showLyricGen: false,
      showMusicGen: false,
      // If true, shows the related component
    };
    this.onButtonClick = this.onButtonClick.bind(this);
    this.onClusterClick = this.onClusterClick.bind(this);
    this.onTitleGeneratorClick = this.onTitleGeneratorClick.bind(this);
    this.onMusicGeneratorClick = this.onMusicGeneratorClick.bind(this);
    this.onLyricGeneratorClick = this.onLyricGeneratorClick.bind(this);
  }
  // Set all other components to false to only show 1 at a time
  onButtonClick = () => {
    if (this.state.showComponent) {
      this.setState({
        showComponent: false,
        showCluster: false,
        showTitleGen: false,
        showLyricGen: false,
        showMusicGen: false,
      });
    } else {
      this.setState({
        showComponent: true,
        showCluster: false,
        showTitleGen: false,
        showLyricGen: false,
        showMusicGen: false,
      });
    }
  };

  onClusterClick = () => {
    if (this.state.showCluster) {
      this.setState({
        showCluster: false,
        showComponent: false,
        showTitleGen: false,
        showLyricGen: false,
        showMusicGen: false,
      });
    } else {
      this.setState({
        showCluster: true,
        showComponent: false,
        showTitleGen: false,
        showLyricGen: false,
        showMusicGen: false,
      });
    }
  };
  onTitleGeneratorClick = () => {
    if (this.state.showTitleGen) {
      this.setState({
        showCluster: false,
        showComponent: false,
        showTitleGen: false,
        showLyricGen: false,
        showMusicGen: false,
      });
    } else {
      this.setState({
        showTitleGen: true,
        showComponent: false,
        showTitleGen: false,
        showLyricGen: false,
        showMusicGen: false,
      });
    }
  };
  onLyricGeneratorClick = () => {
    if (this.state.showLyricGen) {
      this.setState({
        showCluster: false,
        showComponent: false,
        showTitleGen: false,
        showLyricGen: false,
        showMusicGen: false,
      });
    } else {
      this.setState({
        showTitleGen: false,
        showComponent: false,
        showTitleGen: false,
        showLyricGen: true,
        showMusicGen: false,
      });
    }
  };
  onMusicGeneratorClick = () => {
    if (this.state.showMusicGen) {
      this.setState({
        showCluster: false,
        showComponent: false,
        showTitleGen: false,
        showLyricGen: false,
        showMusicGen: false,
      });
    } else {
      this.setState({
        showTitleGen: false,
        showComponent: false,
        showTitleGen: false,
        showLyricGen: false,
        showMusicGen: true,
      });
    }
  };
  // For practice to see if buttons work
  clickMe() {
    alert("You clickMe");
  }

  render() {
    return (
      <MenuDiv>
        <Div1>
          <h1>Services Available</h1>
          <h3>Utilities:</h3>
          <div>
            <Button onClick={this.onClusterClick}>Clustering</Button>
            {this.state.showCluster ? <ClusterSubmit /> : null}
            {/* Tracks if you are suppossed to show component */}
          </div>

          <div>
            <Button onClick={this.onButtonClick}>midi2wav</Button>
            {this.state.showComponent ? <SubmitComponent /> : null}
          </div>
          <div>
            <Button onClick={this.onButtonClick}>wav2midi</Button>
            {this.state.showComponent ? <SubmitComponent /> : null}
          </div>
        </Div1>
        <Div2>
          <h1>Songwriter Tools:</h1>
          <h3></h3>
          <div>
            <Button onClick={this.onTitleGeneratorClick}>
              Title Generator
            </Button>
            {this.state.showTitleGen ? <TitleGenerator /> : null}
          </div>
          <div>
            <Button onClick={this.onLyricGeneratorClick}>
              Lyric Generator
            </Button>
            {this.state.showLyricGen ? <LyricGenerator /> : null}
          </div>
          <div>
            <Button onClick={this.onMusicGeneratorClick}>
              Music Generator
            </Button>
            {this.state.showMusicGen ? <MusicGenerator /> : null}
          </div>
        </Div2>
      </MenuDiv>
    );
  }
}

export default LeftSideMenu;
