import React, { Component } from "react";
import emailjs from "emailjs-com";

import styled from "styled-components";
import Hoger from "../assets/contact.jpg";

import { Dots } from "react-activity";
import "react-activity/dist/react-activity.css";

const Root = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  background-image: url(${Hoger});
  background-position: center;
  background-size: cover;
`;

const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin-top: 100px;
  /* background-color: #ba102d; */
  padding: 20px 40px;
  border-radius: 10px;

  @media only screen and (max-width: 768px) {
    width: 90%;
  }
`;

const Text = styled.h1`
  color: black;
  width: 100%;
  text-align: center;
`;

const Input = styled.input`
  border: 0px;
  border-bottom: #ba102d 4px solid;
  background-color: rgb(0, 0, 0, 0.3);
  padding: 10px 7px;
  margin-bottom: 15px;
  font-size: 1rem;
  color: #ba102d;
  outline: 0;
  transition: all 0.3s ease-in-out;

  &:focus {
    border-color: black;
  }

  &::placeholder {
    color: #ba102d;
    font-weight: bold;
  }
`;

const Error = styled.p`
  text-align: center;
  color: #ba102d;
  font-weight: bold;
`;

const TextArea = styled.textarea`
  font-family: inherit;
  border: 0px;
  border-bottom: #ba102d 4px solid;
  background-color: rgb(0, 0, 0, 0.3);
  padding: 10px 7px;
  margin-bottom: 15px;
  font-size: 1rem;
  color: #ba102d;
  outline: 0;
  transition: all 0.3s ease-in-out;

  &:focus {
    border-color: black;
  }

  &::placeholder {
    color: #ba102d;
    font-weight: bold;
  }
`;

const Button = styled.button`
  background-color: rgb(0, 0, 0, 0.3);
  border: none;
  color: #ba102d;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 16px;
  font-weight: bold;
  width: 200px;
  align-self: center;
  border-radius: 5px;
  /* border: white 2px solid; */
  transition: all 0.3s ease-in-out;
  outline: 0;

  &:hover {
    background-color: black;
    color: #ba102d;
    border-color: #ba102d;
    cursor: pointer;
  }
`;

const formValid = (state) => {
  if (
    state.name.length > 0 &&
    state.email.length > 0 &&
    state.subject.length > 0 &&
    state.message.length > 0
  ) {
    return true;
  } else {
    return false;
  }
};

export default class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "",
      email: "",
      subject: "",
      message: "",
      loading: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.resetForm = this.resetForm.bind(this);
  }

  handleChange = (e) => {
    e.preventDefault();
    const { name, value } = e.target;
    this.setState({ [name]: value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState({ loading: true });

    if (formValid(this.state)) {
      // Handle form validation success
      const { name, email, subject, message } = this.state;

      // Set template params
      let templateParams = {
        name: name,
        email: email,
        subject: subject,
        message: message,
      };
      emailjs
        .send(
          "service_hsnqxnc",
          "template_l13ad4j",
          templateParams,
          "user_RcLlYh5jUhsYr3cySJHNl"
        )
        .then(() => {
          this.setState({ loading: false, error: false });
        });

      console.log(`
        --SUBMITTING--
        Name: ${name}
        Email: ${email}
        Subject: ${subject}
        Message: ${message}
      `);

      this.resetForm();
    } else {
      // Handle form validation failure
      this.setState({ error: true, loading: false });
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  resetForm() {
    this.setState({
      name: "",
      email: "",
      subject: "",
      message: "",
    });
  }

  render() {
    return (
      <Root>
        <FormContainer noValidate onSubmit={this.handleSubmit}>
          <Text>CONTACT US</Text>
          <Input
            type="text"
            name="name"
            value={this.state.name}
            onChange={this.handleChange}
            placeholder="Name"
            noValidate
          ></Input>
          <Input
            type="email"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
            placeholder="Email"
            noValidate
          ></Input>
          <Input
            type="subject"
            name="subject"
            value={this.state.subject}
            onChange={this.handleChange}
            placeholder="Subject"
            noValidate
          ></Input>
          <TextArea
            type="message"
            name="message"
            value={this.state.message}
            onChange={this.handleChange}
            placeholder="Message"
            noValidate
          ></TextArea>
          {this.state.error && (
            <Error>ERROR: Make sure to fill in all the fields!</Error>
          )}
          <Button type="submit">
            {this.state.loading ? <Dots /> : "Submit"}
          </Button>
        </FormContainer>
      </Root>
    );
  }
}
