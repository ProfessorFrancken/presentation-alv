// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  interwebs: require("../assets/interwebs.jpg"),
  activity: require("../assets/activity.png")
};

preloader(images);

const theme = createTheme({
  /* #31255E*/
  /* primary: "#a598d6"*/
  primary: "#ff4081",
  secondary: "#000000"
});

const hrStyle = {
  borderColor: "#ff4081",
  margin: "0",
};

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500} progress="pacman">
          <Slide transition={["zoom"]} bgImage={images.interwebs.replace("/", "")} bgDarken={0.55}>
            <Heading size={1} fit caps lineHeight={1} textColor="primary">
              Werkgroep Website
            </Heading>
            <Heading size={2} caps margin="3em 0 0 0" textSize="3rem" textColor="primary">
              O-ALV 6 juni 2016
            </Heading>
          </Slide>
          <Slide  bgColor="secondary">
            <Heading size={2}  fit textColor="primary" textFont="primary">
              Why a new website?
            </Heading>
            <List textColor="primary">
              <Appear><ListItem textColor="primary">Wordpress</ListItem></Appear>
              <Appear><ListItem textColor="primary">Mobile</ListItem></Appear>
              <Appear><ListItem textColor="primary">Security (wordpress)</ListItem></Appear>
              <Appear><ListItem textColor="primary">Maintainable</ListItem></Appear>
              <Appear><ListItem textColor="primary">Functional</ListItem></Appear>
              <Appear><ListItem textColor="primary">Wordpress</ListItem></Appear>
            </List>
          </Slide>
          <Slide bgColor="secondary">
            <Heading size={2} textColor="primary">
              Goals
            </Heading>
            <List>
              <Appear><ListItem textColor="primary">A mobile first responsive layout *</ListItem></Appear>
              <Appear><ListItem textColor="primary">VIP access (login using your personal Francken account)</ListItem></Appear>
              <Appear><ListItem textColor="primary">
                Integrate with external & internal systems
                <List margin="auto 1em">
                  <ListItem textSize="0.75em">agenda</ListItem>
                  <ListItem textSize="0.75em">ledenlijst beheer</ListItem>
                  <ListItem textSize="0.75em">streepsysteem</ListItem>
                  <ListItem textSize="0.75em">Kathinka-bot</ListItem>
                </List>
              </ListItem></Appear>
            </List>
          </Slide>
          <Slide bgColor="secondary" textColor="primary">

            <Heading size={2}
              bgColor="tertiary" textColor="secondary" padding="10px" margin="0 0 20px"
              >
              {/* textColor="primary" textFont="primary"> */}
              The plan
            </Heading>
            <Layout>
              <Fill>
                <Heading size={4} textColor="primary" textAlign="left" textSize="2.5rem">
                  Social
                </Heading>
                <hr style={hrStyle}/>
                <List>
                  <ListItem textSize="0.75em">Members</ListItem>
                  <ListItem textSize="0.75em">Committees</ListItem>
                  <ListItem textSize="0.75em">Activities</ListItem>
                  <ListItem textSize="0.75em">Photo albums</ListItem>
                  <ListItem textSize="0.75em">Account</ListItem>
                </List>
              </Fill>
              <Fill>
                <Heading size={4} textColor="primary" textAlign="left" textSize="2.5rem">
                  Study
                </Heading>
                <hr style={hrStyle}/>
                <List>
                  <ListItem textSize="0.75em">Questions &amp; Answers</ListItem>
                  <ListItem textSize="0.75em">Books</ListItem>
                  <ListItem textSize="0.75em">Summaries</ListItem>
                  <ListItem textSize="0.75em">Internships</ListItem>
                  <ListItem textSize="0.75em">Research groups</ListItem>
                </List>
              </Fill>
              <Fill>
                <Heading size={4} textColor="primary" textAlign="left" textSize="2.5rem">
                  Carreer
                </Heading>
                <hr style={hrStyle}/>
                <List>
                  <ListItem textSize="0.75em">Internships, Jobs</ListItem>
                  <ListItem textSize="0.75em">Sponsors</ListItem>
                  <ListItem textSize="0.75em">Companies
                    <List margin="auto 1em">
                      <ListItem textSize="0.75em">Company profile</ListItem>
                      <ListItem textSize="0.75em">Vacancies</ListItem>
                    </List>
                  </ListItem>
                </List>
              </Fill>
            </Layout>
          </Slide>
          <Slide bgColor="secondary" textColor="primary">
            <Heading size={2} textColor="primary">
              Current focus
            </Heading>
            <List>
              <ListItem>Member registration and administration</ListItem>
              <ListItem>Committees</ListItem>
              <ListItem>Activities</ListItem>
              <ListItem>News &amp; blog posts</ListItem>
              <ListItem>Books</ListItem>
              <ListItem>Layout</ListItem>
            </List>
          </Slide>
          <Slide bgColor="secondary" textColor="primary">
            <Heading size={2} textColor="primary">
              Thereafter
            </Heading>
            <List>
              <ListItem>Member profiles &amp; authentication</ListItem>
              <ListItem>Study platform</ListItem>
              <ListItem>Carreer platform</ListItem>
              <ListItem>Integration with other systems</ListItem>
            </List>
          </Slide>
          <Slide bgColor="tertiary" textColor="primary">
            <Heading size={2} textColor="primary">
              Current Status
            </Heading>
            <Image src={images.activity.replace("/", "")} width="100%" height="293px"/>
            <List>
              <ListItem>Member profiles &amp; authentication</ListItem>
              <ListItem>Books</ListItem>
              <ListItem>Activities</ListItem>
              <ListItem>Posts</ListItem>
            </List>
          </Slide>
          <Slide bgColor="secondary" textColor="primary">
            <Heading fit size={1} textColor="primary">
              Questions?
            </Heading>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}
