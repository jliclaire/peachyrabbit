import React from "react";

function Contact() {
  return (
    <div className="contact-container">
      <h1>Contanct Us</h1>
      <div id="contact-form">
        <h3>Get In Touch</h3>
        <form
          class="form"
          action="https://formspree.io/jingli.claire@gmail.com"
          method="POST"
        >
          <div class="name-content">
            <input
              type="text"
              class="name border"
              name="first-name"
              placeholder="First Name"
            />
            <input
              type="text"
              class="name border"
              name="last-name"
              placeholder="Last Name"
            />
          </div>
          <input
            type="email"
            class="email border"
            name="email"
            placeholder="Email"
          />
          <textarea
            class="message border"
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
