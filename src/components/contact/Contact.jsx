import React from "react";
import { BsMessenger } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
import "./Contact.scss";

const Contact = () => (
  <div className="contact-container" id="Contact">
    <div className="contact-details">
      <h2 className="heading">Contact Me</h2>
      <div className="contact-options">
        <h3>Get in Touch</h3>
        <div className="contact-option">
          <h4>
            <AiTwotoneMail />
          </h4>
          <h4 className="title">sediqullah.badakhsh@gmail.com</h4>
          <a
            href="mailto:something@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="shadow_effect"
          >
            Send a Message
          </a>
        </div>
        <div className="contact-option">
          <h4>
            <BsMessenger />
          </h4>
          <h4 className="title">Sediqullah Badakhsh</h4>
          <a
            href="https://m.me/sediqullah.badakhsh.5"
            target="_blank"
            rel="noreferrer"
            className="shadow_effect"
          >
            Send a Message
          </a>
        </div>
      </div>
    </div>
    <div className="contact-form">
      <h3>Leave a Message</h3>
      <form action="https://formspree.io/f/moqrjalz" method="POST">
        <input type="text" name="name" placeholder="Your Full Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <input type="text" name="_gotcha" style={{ display: "none" }} />
        <input type="hidden" name="_next" value="./ThankYou.jsx" />
        <textarea name="message" rows="7" placeholder="Your Message" required />
        <button type="submit" className="shadow_effect">
          Send Message
        </button>
      </form>
    </div>
  </div>
);

export default Contact;
