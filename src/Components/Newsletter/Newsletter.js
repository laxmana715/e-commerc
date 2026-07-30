import { useState } from "react";
import "./Newsletter.css";

function Newsletter() {

  const [email, setEmail] = useState("");

  const [message, setMessage] = useState("");

  function handleSubmit(e) {

    e.preventDefault();

    if (email.trim() === "") {

      setMessage("Please enter your email.");

      return;
    }

    setMessage("🎉 Thank you for subscribing!");

    setEmail("");
  }

  return (

    <section className="newsletter">

      <h2>Subscribe to Our Newsletter</h2>

      <p>
        Get the latest saree collections and exclusive offers.
      </p>

      <form onSubmit={handleSubmit}>

        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button type="submit">
          Subscribe
        </button>

      </form>

      {message && (
        <p className="message">
          {message}
        </p>
      )}

    </section>

  );
}

export default Newsletter;