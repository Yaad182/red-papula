import React, { Component } from 'react'
import styled, { css } from "styled-components";
import Hoger from "../assets/hoger-1.jpg"

const Root = styled.div`
    display: flex;
    height: 100%;
    width: 100%;
    background-image: url(${Hoger});
    background-position: center;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

const TextContainer = styled.div`
    display: flex;
    width: 80%;
`

const Text = styled.p`
    margin: 0;
`


export default class About extends Component {
    render() {
        return (
            <Root>
                <TextContainer>
                    <Text>Red Papula is a young independent Record Label, Publishing Company and Artists Management founded in 2018.</Text>
                    <Text>Together in partnership with Sony / ATV Music Publishing, we support and develop songwriters and producers. This is where things behind the music happen. Our goal is to write and produce your next favorite song performed by your favorite artists.</Text>
                </TextContainer>
            </Root>
        )
    }
}
