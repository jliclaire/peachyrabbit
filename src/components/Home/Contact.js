import React from "react";
import "./Contact.scss";

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
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
