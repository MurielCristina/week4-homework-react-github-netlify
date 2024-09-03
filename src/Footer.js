import React from "react";

export default function Footer() {
  return (
    <div className="Footer">
      <p>
        This project was coded in React by{" "}
        <a
          href="https://muri-portfolio.netlify.app/"
          target="_blank"
          rel="noreferrer"
        >
          Muri
        </a>{" "}
        an is{" "}
        <a
          href="https://github.com/MurielCristina/week4-homework-react-github-netlify"
          target="_blank"
          rel="noreferrer"
        >
          open-sourced on GitHib
        </a>{" "}
        and{" "}
        <a
          href="https://imaginative-valkyrie-a77462.netlify.app"
          target="_blank"
          rel="noreferrer"
        >
          hosted on Netlify.
        </a>
      </p>
    </div>
  );
}
