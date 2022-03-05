import React from "react";
import profilepic from "../assets/Headshot.jpg";
import resume from "../assets/MatthewBroylesResume.pdf"

const Aboutme = () => {
  return (
    <section id="aboutme">
      <div className="aboutme__profileimage">
        <img className="aboutme__profileimage--jpg" src={profilepic}></img>
      </div>
      <div className="aboutme__info">
      <div className="aboutme__info--wrapper">

      
        <div>
          <h1 className="aboutme__info--title">About Me</h1>
          <p>
            I'm currently studying full stack development, I also have great interest in data analytics.
          </p>
        </div>
        <div>
          <ul className="aboutme__info--details">
            <li className="aboutme__info--li"><b>Name:</b> Matthew Broyles</li>
            <li className="aboutme__info--li"><b>Location:</b> Houston, Texas</li>
            <li className="aboutme__info--li"><b>Remote?:</b> Open to working remote AND in person!</li>
            <li className="aboutme__info--li"><b>Availability:</b> Interested In Any Junior Developer Position AND Associate Data Analyst Positions</li>
          </ul>
          <a download href={resume}>
          <button  className="portfolio__cardtext--button learn-more">
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text" >Download My Resume!</span>
        </button></a>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Aboutme;
