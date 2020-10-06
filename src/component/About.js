import React, { Component } from "react";
import styled from "styled-components";

import Hoger from "../assets/hoger2.jpg";

const Root = styled.div`
  display: flex;
  background-color: black;
  height: 100vh;
  /* align-items: center; */
  flex-direction: column;
  position: relative;
`;

const Image = styled.img`
  position: absolute;
  bottom: 0;
  /* width: 70%; */
  height: 100%;
  align-self: flex-end;
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 100%, 0 100%);
  clip-path: polygon(100% 0, 100% 0, 100% 100%, 0 100%);
`;

const Container = styled.div`
  width: 50%;
  margin-left: 10%;
  /* background-color: white; */
`;

const Title = styled.p`
  color: white;
  font-weight: bold;
  font-size: 2rem;
  text-align: center;
`;

const Paragraph = styled.p`
  color: white;
  font-size: 1.2rem;
  text-align: center;
`;

export default class About extends Component {
  render() {
    return (
      <Root>
        <Container>
          <Title>ABOUT</Title>
          <Paragraph>
            Red Papula is a young independent Record Label, Publishing Company
            and Artists Management founded in 2018.
          </Paragraph>

          {/* <Title>PUBLISHING</Title> */}
          <Paragraph>
            Together in partnership with Sony / ATV Music Publishing, we support
            and develop songwriters and producers. This is where things behind
            the music happen. Our goal is to write and produce your next
            favorite song performed by your favorite artists.
          </Paragraph>

          {/* <Title>RECORD LABEL</Title> */}
          <Paragraph>
            Together in partnership with Warner Music / ADA, we support,
            develop, distribute and promote artists.This is where we focus on
            the music of tomorrow. It's important to distinguish yourself from
            others and we believe that we do so by treating everybody as family
            and focus on fairness. At Red Papula everybody get's paid. Even
            songwriters (subtle wink to the rest of the music industry) ;).
          </Paragraph>

          <Paragraph>
            Papula comes from the Kurdisch language, which means "butterfly".
            It's an ode to Hoger's father whom uses that specific word to call
            his loved ones. Therefore Red Papula is a company where the main
            importance is for people to feel at home and create as a family.
          </Paragraph>
        </Container>
        <Image src={Hoger} />
      </Root>
    );
  }
}
