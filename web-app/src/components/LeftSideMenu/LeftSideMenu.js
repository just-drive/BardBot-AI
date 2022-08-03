import React from "react";
import axios from "axios";
import { AiFillGithub } from "react-icons/ai";
import { DiCssdeck } from "react-icons/di";
import bbai from "../../images/smaller.png";
import SubmitComponent from "../Submit/SubmitComponent";
import ClusterSubmit from "../ClusterSubmit/ClusterSubmit";
import MotifGenerator from "../MotifGenerator/MotifGenerator";
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
      showTitle: false,
      showLyric: false,
      showMotif: false,
      // If true, shows the related component
      //from cluster sumbit
      files: [],
      showSubmit: false,
      //lyric generator
      // genre: "",
      // pace: "",
      // theme: "",
      // title: "",
      // file: [],

      //motif generation
      //midi2mav & wav 2 midi
      title: "",
      description: "",
    };
    this.onButtonClick = this.onButtonClick.bind(this);
    this.onClusterClick = this.onClusterClick.bind(this);
    this.onTitleGeneratorClick = this.onTitleGeneratorClick.bind(this);
    this.onMotifGeneratorClick = this.onMotifGeneratorClick.bind(this);
    this.onLyricGeneratorClick = this.onLyricGeneratorClick.bind(this);
    this.handleFileChange = this.handleFileChange.bind(this);
  }

  //Cluster submit functions
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

  //for midi and wav
  handleSongNameChange = (event) => {
    this.setState({
      title: event.target.value,
    });
  };
  handleDescriptionChange = (event) => {
    this.setState({
      description: event.target.value,
    });
  };

  // handleFileChange = (event) => {
  //   let files = event.target.files;
  //   this.setState(
  //     {
  //       files: files[0],
  //     },
  //     () => {
  //       console.log(this.state.files);
  //     }
  //   );
  //   console.log(files[0]);
  // };

  // onFormSubmit = (event) => {
  //   alert("All data entered");
  //   event.preventDefault();
  // };

  // Set all other components to false to only show 1 at a time
  onButtonClick = () => {
    if (this.state.showComponent) {
      this.setState({
        showComponent: false,
        showCluster: false,
        showTitle: false,
        showLyric: false,
        showMotif: false,
      });
    } else {
      this.setState({
        showComponent: true,
        showCluster: false,
        showTitle: false,
        showLyric: false,
        showMotif: false,
      });
    }
  };

  onClusterClick = () => {
    if (this.state.showCluster) {
      this.setState({
        showCluster: false,
        showComponent: false,
        showTitle: false,
        showLyric: false,
        showMotif: false,
      });
    } else {
      this.setState({
        showCluster: true,
        showComponent: false,
        showTitle: false,
        showLyric: false,
        showMotif: false,
      });
    }
  };
  onTitleGeneratorClick = () => {
    if (this.state.showTitle) {
      this.setState({
        showCluster: false,
        showComponent: false,
        showTitle: false,
        showLyric: false,
        showMotif: false,
      });
    } else {
      this.setState({
        showTitle: true,
        showComponent: false,
        showCluster: false,
        showLyric: false,
        showMotif: false,
      });
    }
  };
  onLyricGeneratorClick = () => {
    if (this.state.showLyric) {
      this.setState({
        showCluster: false,
        showComponent: false,
        showTitle: false,
        showLyric: false,
        showMotif: false,
      });
    } else {
      this.setState({
        showTitle: false,
        showComponent: false,
        showCluster: false,
        showLyric: true,
        showMotif: false,
      });
    }
  };
  onMotifGeneratorClick = () => {
    if (this.state.showMotif) {
      this.setState({
        showCluster: false,
        showComponent: false,
        showTitle: false,
        showLyric: false,
        showMotif: false,
      });
    } else {
      this.setState({
        showTitle: false,
        showComponent: false,
        showCluster: false,
        showLyric: false,
        showMotif: true,
      });
    }
  };
  // For practice to see if buttons work
  clickMe() {
    alert("You clickMe");
  }

  render() {
    console.log(this.state);
    return (
      <MenuDiv>
        <Div1>
          <ServicesLabel>Services Available</ServicesLabel>
          <SectionLabel>Utilities:</SectionLabel>

          <div>
            <Button onClick={this.onClusterClick}>Clustering</Button>
            {this.state.showCluster ? (
              <ClusterSubmit
                files={this.state.files}
                handleFileChange={this.handleFileChange}
                showCluster={this.state.showCluster}
                onClusterClick={this.onClusterClick}
              />
            ) : null}
            {/* Tracks if you are suppossed to show component */}
          </div>

          <div>
            <Button onClick={this.onButtonClick}>midi2wav</Button>
            {this.state.showComponent ? (
              <SubmitComponent
                files={this.state.files}
                handleFileChange={this.handleFileChange}
                title={this.state.title}
                handleSongNameChange={this.handleSongNameChange}
                description={this.state.description}
                handleDescriptionChange={this.handleDescriptionChange}
                showSubmit={this.state.showSubmit}
                onButtonClick={this.onButtonClick}
              />
            ) : null}
          </div>
          <div>
            <Button onClick={this.onButtonClick}>wav2midi</Button>
            {this.state.showComponent ? (
              <SubmitComponent
                files={this.state.files}
                handleFileChange={this.handleFileChange}
                title={this.state.title}
                handleSongNameChange={this.handleSongNameChange}
                description={this.state.description}
                handleDescriptionChange={this.handleDescriptionChange}
                showSubmit={this.state.showSubmit}
                onButtonClick={this.onButtonClick}
              />
            ) : null}
          </div>
        </Div1>
        <Div2>
          <SectionLabel>Songwriter Tools:</SectionLabel>
          <h3></h3>
          <div>
            <Button onClick={this.onTitleGeneratorClick}>
              Title Generator
            </Button>
            {this.state.showTitle ? <TitleGenerator /> : null}
          </div>
          <div>
            <Button onClick={this.onLyricGeneratorClick}>
              Lyric Generator
            </Button>
            {this.state.showLyric ? <LyricGenerator /> : null}
          </div>
          <div>
            <Button onClick={this.onMotifGeneratorClick}>
              Motif Generator
            </Button>
            {this.state.showMotif ? <MotifGenerator /> : null}
          </div>
        </Div2>
      </MenuDiv>
    );
  }
}

export default LeftSideMenu;
