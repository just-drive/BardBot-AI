import React from "react";
import MusicGeneratorPanel from "./MusicGenerator";
import LyricGeneratorPanel from "./LyricGenerator";
import TitleGeneratorPanel from "./TitleGenerator";

// This requires the other 6 components on the menu ^^
import {
  Button,
  ServiceGroupDiv,
  ServiceDiv,
  MenuDiv,
  SectionLabel,
  ServicesLabel,
} from "./LeftSideMenuStyles";

const [CATEGORY_UTILITY, CATEGORY_CREATIVE] = ["Utilities", "Songwriter Tools"];
const CATEGORIES = [CATEGORY_UTILITY, CATEGORY_CREATIVE];
const EMPTY_DIV = <div></div>;

class LeftSideMenu extends React.Component {

  constructor(props) {
    super(props);
    const mainContentView = props.mainContentView;
    this.services = [
      /*{ TODO: implement
        name: "midi2wav",
        visibilityKey: "midi2wavPanelVisibility",
        panel: <Midi2WavPanel mainContentView={mainContentView} />,
        category: CATEGORY_UTILITY
      },
      {
        name: "wav2midi",
        visibilityKey: "wav2midiPanelVisibility",
        panel: <Wav2MidiPanel mainContentView={mainContentView} />,
        category: CATEGORY_UTILITY
      },*/
      {
        name: "Music Generator",
        visibilityKey: "musicGeneratorPanelVisibility",
        panel: <MusicGeneratorPanel />,
        category: CATEGORY_CREATIVE
      },
      {
        name: "Lyrics Generator",
        visibilityKey: "lyricGeneratorPanelVisibility",
        panel: <LyricGeneratorPanel mainContentView={mainContentView} />,
        category: CATEGORY_CREATIVE
      },
      {
        name: "Title Generator",
        visibilityKey: "titleGeneratorPanelVisibility",
        panel: <TitleGeneratorPanel mainContentView={mainContentView} />,
        category: CATEGORY_CREATIVE
      },
    ];
    this.allServicePanelsHidden = this.services.map(s => ({ [s.visibilityKey]: false }));
    this.state = {
      ...this.services.map(service => ({ [service.visibilityKey]: false })),
    };
  }
  toggleVisibilityDialogue = (service) => {
    console.log("toggleVisibilityDialogue", service);

    const allHidden = { ...this.allServicePanelsHidden };
    allHidden[service.visibilityKey] = !this.state[service.visibilityKey];
    this.setState(allHidden);

    this.setState({
      mainContent: EMPTY_DIV, // clear the stage anytime any service panel is toggled
    });
  };

  render() {
    return (
      <MenuDiv>
        <ServiceGroupDiv>
          <ServicesLabel>Services Available</ServicesLabel>
          {CATEGORIES.map(category => ( // for each category
            <div key={category}>
              <SectionLabel key={category}>{category}:</SectionLabel>
              {this.services // map through each service in the category
                .filter(service => service.category === category)
                .map(service => (
                  <ServiceDiv key={service.name}>
                    <Button key={service.name} onClick={() => this.toggleVisibilityDialogue(service)}>
                      {service.name}
                    </Button>
                    {this.state[service.visibilityKey] ? service.panel : EMPTY_DIV}
                  </ServiceDiv>
                ))}
            </div>
          ))}
        </ServiceGroupDiv>
      </MenuDiv>
    );
  }
}

export default LeftSideMenu;
