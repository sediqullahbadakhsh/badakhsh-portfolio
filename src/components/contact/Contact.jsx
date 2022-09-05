import React from "react";
import "./Contact.scss";

const Contact = () => (
  <div className="contact-container" id="contact">
    <h5>get in touch</h5>
    <h2>Contact Me</h2>
    <div className="contact-details">
      <div className="contact-options">
        <article className="contact-option">
          <h4>Email</h4>
          <h4>sediqullah.badakhsh@gmail.com</h4>
          <a href="mailto:something@gmail.com" target="_blank" rel="noreferrer">
            sedn a Message
          </a>
        </article>
        <article className="contact-option">
          <h4>Messener</h4>
          <h4>Sediqullah Badakhsh</h4>
          <a
            href="https://m.me/sediqullah.badakhsh.5"
            target="_blank"
            rel="noreferrer"
          >
            send a Message
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
