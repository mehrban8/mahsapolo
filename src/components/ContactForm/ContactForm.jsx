import React, { useState } from "react";
import "./ContactForm.scss";

const ContactForm = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");

  const handleEmailChange = (e) => setEmail(e.target.value);
  const handleMessageChange = (e) => setMessage(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email && message) {
      setStatus("Thank you for your message!");
      setEmail("");
      setMessage("");
    } else {
      setStatus("Please fill out all fields.");
    }
  };

  return (
    <div className="form">
      {!status && (
        <>
          <h2>Contact Form</h2>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Email:</label>
              <input
                type="email"
                value={email}
                onChange={handleEmailChange}
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label>Message:</label>
              <textarea
                value={message}
                onChange={handleMessageChange}
                placeholder="Your Message"
                required
              />
            </div>
            <button type="submit">Send</button>
          </form>
        </>
      )}

      {status && <p>{status}</p>}
    </div>
  );
};

export default ContactForm;
