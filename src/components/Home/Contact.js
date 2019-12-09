import React from "react";
import "./Contact.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faPhone } from "@fortawesome/free-solid-svg-icons";

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
        veniam, Lorem ipsum dolor sit amet, consectetur adipiscing elit
      </p>
      <div>
        <FontAwesomeIcon icon={faPhone} />
        <div>0433 645 534</div>
        <div>0430 786 020</div>
      </div>
      <div>
        <FontAwesomeIcon icon={faEnvelope} />
        <div>peachyrabbitstudio@gmail.com</div>
      </div>
      <div id="contact-form">
        <h3>Get In Touch</h3>
        <form
          className="form"
          action="https://formspree.io/jingli.claire@gmail.com"
          method="POST"
        >
          <div className="name-content">
            <input
              type="text"
              className="name border"
              name="first-name"
              placeholder="First Name"
            />
            <input
              type="text"
              className="name border"
              name="last-name"
              placeholder="Last Name"
            />
          </div>
          <input
            type="email"
            className="email border"
            name="email"
            placeholder="Email"
          />
          <textarea
            className="message border"
            name="message"
            placeholder="Message"
          ></textarea>
          <div id="submit">
            <input id="submit-button" type="submit" value="Send" />
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;
