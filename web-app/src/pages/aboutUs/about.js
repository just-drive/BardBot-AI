import React from "react";

const About = (props) => {
  return (<div>
    <h1>About Us</h1>

    Project: <b>Bard-Bot AI</b>
    Timeline: <i>Spring 2022 -- Summer 2022</i>
    <br />
    Team Name: <b>Bard-Bot Team</b>
    <ul>
      <li>Dorsey Roten</li>
      <li>David K Nguyen</li>
      <li>Jacob Valdez</li>
      <li>Foram Khatiwala</li>
      <li>Richard Robertson</li>
    </ul>

    <h2>Abstract</h2>
    <p>
      Bard-Bot is a web application that supercharges creative users with machine learning models to synthesize, modify, and analyze music. Users are not required to create an account, waive content ownership rights, or pay royalties to use this application
    </p>

    <h2>Background</h2>
    <p>
      People such as content creators, small businesses, conference organizations, and private individuals consistently need different types of music, such as intro/outro music, filler music, and background, or ambient music in order to fill their presentations or media with interesting sounds and keep attention with their audience. Certain music also has been shown in studies to improve mood and memory. On top of this, many people in this world spend a monthly subscription fee in order to access their music libraries, or struggle over licensing/copyright issues which cause massive amounts of effort and money to be spent making sure all parties involved are properly compensated. Us on the Bard-Bot Team wish to cut everyone out of this loop, and offer nothing but music to the end-user, for whichever purposes they desire, for free.
    </p>

    <h2>Project Requirements</h2>
    <ol>
      <li>The Bard-Bot application shall have features: Semantic clustering of songs, MIDI to waveform conversion, Waveform to MIDI conversion, Title recommendation, Lyric generation, Motif generation</li>
      <li>The "look and feel" of the Bard-Bot application and what each potential end-user should expect the product to do and/or not do. The user must be able to read and follow on-screen directions</li>
      <li>The Bard-Bot web application shall be distributed via the Internet. Users will navigate to bardbot.com, bard-bot.com, or perhaps bardbot.ai to receive the application</li>
      <li>The Bard-Bot application sub-components shall be containerized into individual containers, with the web-app, each machine learning model, and the machine learning networking program being contained separately</li>
      <li>The Bard-Bot program should actually help a user increase his or her creative output</li>
      <li>JavaScript must be enabled in the browser. The browser must offer a reasonable amount of memory</li>
      <li>The web server should comply with RFC 2616 as it must communicate using the Hypertext Transfer Protocol version 1.1</li>
      <li>General website functions like clicking to different pages (outside of rendering page(s) should operate at a quick speed ( &lt; 0.3 sec)</li>
      <li>The website should be responsive to all desktop and laptop devices</li>
      <li>A version control tool is required to keep a record of all updates and progress in the product.</li>
    </ol>

    <h2>System Overview</h2>
    <p>
      The Bard-Bot core architecture is a harmonious composition of machine learning models that aim to replicate the patterns a musician ordinarily creates. Architecturally, these models conform to the same black-box interface as traditional music production processes do - except that they require little or no user input to operate. We adopt a hybrid of the thin- and fat-client models integrated under a three-tier architecture. Client weight varies by ML service employed with lightweight models running on the client (for fat-client pages) and heavier models orchestrated remotely on our kubernetes sub-system (for thin-client pages). Following is an overview of the current planned ML models grouped by application domain
    </p>

    <h2>Results</h2>
    <p>
      Results text and demo videos will be placed here
    </p>

    <h2>Future Work</h2>
    <p>
      We want to extend and enhance the BardBot website in the future, with the goal of making it a tool for amusement as well as free music for everyone.
    </p>

    <h2>Project Files</h2>
    <ul>
      <li>Project Charter (https://drive.google.com/file/d/1n1RfAlExuaKVgouvH_RYo53LdZoUfOax/view?usp=sharing)</li>
      <li>System Requirements Specification (https://drive.google.com/file/d/13lCh88pCcbV8ZlJSJQGlOw6fYM7D15vG/view?usp=sharing)</li>
      <li>Architectural Design Specification (https://drive.google.com/file/d/1yY9z7A3ecIERwE9qhVoqPvJd0wCSfB-E/view?usp=sharing)</li>
      <li>Detailed Design Specification (https://drive.google.com/file/d/1CsxLfsXETKsxHfYGuX2pcaOMoNUJgEJE/view?usp=sharing)</li>
      <li>Poster (https://drive.google.com/file/d/1voBvqTK73BZMwdYNte5wyJqdvvY765t5/view?usp=sharing)</li>
      <li>Code (just-drive/BardBot-AI: A Machine Learning webapp which generates music based on input parameters (github.com)</li>
    </ul>

    <h2>References</h2>
    <ol>
      <li>S. Jorda, “New musical interfaces and new music-making paradigms,” Oct 2020.</li>
      <li>P. Thompson and B. Lashua, “Producing music, producing myth? creativity in recording studios,” IASPM@Journal, vol. 6, no. 2, pp. 70-90, 2016.</li>
      <li>P. Morville, “User experience design,” Oct 2016.</li>
      <li>E. Toonen, “Learn about the three core web vitals: Lcp, fid, and cls,” Apr 2021.</li>
      <li>E. LEMONNE, “Ethics guidelines for trustworthy ai,” Mar 2021.</li>
      <li>MTU, “Backup and recovery standards,” Sept 2016.</li>
      <li>M. Mitchell, “Why ai is harder than we think,” 2021.</li>
      <li>C.-Z. A. Huang, A. Vaswani, J. Uszkoreit, N. Shazeer, C. Hawthorne, A. M. Dai, M. D. Hoff-man, and D. Eck, “Music transformer: Generating music with long-term structure,” arXiv preprintarXiv:1809.04281, 2018.</li>
      <li>A. Vaswani, N. Shazeer, N. Parmar, J. Uszkoreit, L. Jones, A. N. Gomez, L. Kaiser, and I. Polosukhin, “Attention is all you need,” 2017.</li>
      <li>J. Devlin, M.-W. Chang, K. Lee, and K. Toutanova, “Bert: Pre-training of deep bidirectional trans-formers for language understanding,” ArXiv, vol. abs/1810.04805, 2019.</li>
    </ol>
  </div>);
};

export default About;
