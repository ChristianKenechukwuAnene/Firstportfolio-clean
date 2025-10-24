// src/components/Contact.tsx
import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { setField, resetForm } from "../features/contactSlice";
import "./Contact.css";

/*dispatch — sends instructions (actions) to Redux to update data.*/
/*name, email, message — pulls the current form data from the Redux contact slice.*/
/*success — a local state that controls whether to show the “Message sent!” message after submission*/


function Contact() {
  const dispatch = useAppDispatch();
  const { name, email, message } = useAppSelector((s) => s.contact);
  const [success, setSuccess] = useState(false);




/*This is a curried function — a fancy way of writing one function that returns another.
field is one of "name" | "email" | "message".
When an input changes, you call dispatch(setField({ field, value: e.target.value })).
This sends an action to Redux to update the relevant part of the contact form.*/


  const handleChange =
    (field: "name" | "email" | "message") =>
    (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      dispatch(setField({ field, value: e.target.value }));
    };


/*e.preventDefault() stops the form from refreshing the page.
It checks if any fields are empty — if yes, alerts the user.
Logs the submitted data to the console (you can replace this with an API call later).
Dispatches resetForm() to clear all fields in Redux.
Shows a “success” message for 2 seconds, then hides it again.*/



  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Simple validation
    if (!name.trim() || !email.trim() || !message.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    // For now: log the data (replace with API call later)
    console.log("Contact form submitted:", { name, email, message });

    // Reset Redux form state
    dispatch(resetForm());

    // Show a quick success message
    setSuccess(true);
    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <div className="contact-container">
      {/* Hero Section */}
      <header className="hero3">
        <h1>Contact Me</h1>
      </header>

      <div className="contact-page">
        <div className="contact-header">
          <h1>"From pixels to perfection </h1>
          <h1 className="subhead"> reach out today!"</h1>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label>Full name</label>
          <input
            type="text"
            placeholder="Your full name"
            value={name}
            onChange={handleChange("name")}
            aria-label="Full name"
          />

          <label>Email address</label>
          <input
            type="email"
            placeholder="Your email address"
            value={email}
            onChange={handleChange("email")}
            aria-label="Email address"
          />

          <label>Message</label>
          <textarea
            placeholder="Your message here..."
            value={message}
            onChange={handleChange("message")}
            aria-label="Message"
          />

          <button type="submit">Submit</button>

          {success && <div className="form-success">Message sent — thank you!</div>}
        </form>

        {/* Encourages collaboration (“Let’s work together…”).
              Uses new Date().getFullYear() to auto-update the copyright year.
              Good SEO + professional feel*/}

        {/* CTA Section */}
        <section className="cta">
          <div className="cta-text">
            <h2>Let’s work together on your next project</h2>
            <p className="italic-text">
              “Great projects start with a conversation. Let’s team up and turn your vision
              into reality.”
            </p>
            <h4>
              &copy; {new Date().getFullYear()} christian Anene.{" "}
              <span className="Rights">All Rights Reserved.</span>
            </h4>
          </div>
        </section>
      </div>
    </div>
  );
}

export default Contact;
