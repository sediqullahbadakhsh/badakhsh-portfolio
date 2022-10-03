import React from "react";
import { BsMessenger } from "react-icons/bs";
import { AiTwotoneMail } from "react-icons/ai";
import "./Contact.scss";

const Contact = () => (
  <div className="contact-container" id="Contact">
    <h2>Contact Me</h2>
    <div className="contact-details">
      <div className="contact-options">
        <article className="contact-option">
          <h4>
            <AiTwotoneMail />
          </h4>
          <h4 className="title">sediqullah.badakhsh@gmail.com</h4>
          <a href="mailto:something@gmail.com" target="_blank" rel="noreferrer">
            Send a Message
          </a>
        </article>
        <article className="contact-option">
          <h4>
            <BsMessenger />
          </h4>
          <h4 className="title">Sediqullah Badakhsh</h4>
          <a
            href="https://m.me/sediqullah.badakhsh.5"
            target="_blank"
            rel="noreferrer"
          >
            Send a Message
          </a>
        </article>
      </div>
      <form action="https://formspree.io/f/moqrjalz" method="POST">
        <input type="text" name="name" placeholder="Your Full Name" required />
        <input type="email" name="email" placeholder="Your Email" required />
        <input type="text" name="_gotcha" style={{ display: "none" }} />
        <input type="hidden" name="_next" value="./ThankYou.jsx" />
        <textarea name="message" rows="7" placeholder="Your Message" required />
        <button type="submit" className="btn">
          Send Message
        </button>
      </form>
    </div>
  </div>
);

export default Contact;
