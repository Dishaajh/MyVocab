import React from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
      <nav>
        <ul className="nav-list">
          <div className="navbar">
            <li>
              <Link to="/login">
                {" "}
                <button className="get-started" type="button">
                  Login
                </button>
              </Link>
            </li>
            <li>
              <Link to="/signup">
                <button className="get-started" type="button">
                  Signup
                </button>
              </Link>
            </li>
          </div>
        </ul>
      </nav>
      <div className="home">
        <h1>Your Vocabulary, Your Way!</h1>
        <p>
          <span>
            We empower you to effortlessly add, edit, and organize your
            vocabulary.
          </span>
          <br></br>
          <span>
            {" "}
            Securely log in to manage your words and descriptions, which are
            automatically arranged alphabetically for quick and intuitive access
            to your personalized dictionary.
          </span>
        </p>
        <Link to="/signup">
          <button className="get-started" type="button">
            Get started
          </button>
        </Link>
      </div>
    </>
  );
};

export default Home;
