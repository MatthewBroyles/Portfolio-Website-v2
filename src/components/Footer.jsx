import React from "react";

const Footer = (props) => {
  return (
    <footer>
      <img src={props.logo}></img>
      <ul>
        <a href='https://www.linkedin.com/in/matthewmbroyles/'>
          <li>LinkedIn</li>
        </a>
        <a href='https://github.com/MatthewBroyles' >
          <li>Github</li>
        </a>
      </ul>
    </footer>
  );
};

export default Footer;
