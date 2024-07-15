import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <>
      <div className="navbar">
        <button className="get-started" type="button">
          Login
        </button>
        <button className="get-started" type="button">
          signup
        </button>
      </div>

      <div className="home">
        <h1>Your Vocabulary, Your Way!</h1>
        <p>
          We empower you to effortlessly add, edit, and organize your
          vocabulary. Securely log in to manage your words and descriptions,
          which are automatically arranged alphabetically for quick and
          intuitive access to your personalized dictionary.
        </p>
        <button className="get-started" type="button">
          Get started
        </button>
      </div>
    </>
  );
};

export default Home;
