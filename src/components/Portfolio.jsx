import React, { useEffect, useState } from "react";
import Backendportfoliocards from "../ui/BackEndPortfolioCards";
import Frontendportfoliocards from "../ui/FrontEndPortfolioCards";
import Fullstackportfoliocards from "../ui/FullStackPortfolioCards";
import Dataanalyticsportfoliocards from "../ui/DataAnalyticsPortfolioCards";

const Portfolio = () => {
  const [language, setlanguage] = useState("frontend");
  var itemnumber = 0
  

  function carousel(direction) {
 
   
    
    document.querySelectorAll(".carousel").forEach((carousel) => {
      const items = carousel.querySelectorAll(".carousel__item");
      const buttons = carousel.querySelectorAll(".carousel__button");
      items[itemnumber].classList.add("carousel__item--selected");
     

          items.forEach((item) =>
            (item.classList.remove("carousel__item--selected"), item.style.animation = "")
          );

          buttons.forEach((bruh) =>
          (bruh.classList.remove("unselect")))

         
          
          if(direction == "forward"){
            itemnumber++
            items[itemnumber].style.animation = "left 800ms"
          }
          if(direction == "backward"){
            itemnumber--
            items[itemnumber].style.animation = "right 800ms"
          }

       if(itemnumber == 0){
            buttons[0].classList.add("unselect");
          }
          if(itemnumber == items.length - 1 ){
            buttons[1].classList.add("unselect");
          }
         
          items[itemnumber].classList.add("carousel__item--selected");
         
       
        })
  }
      
     
     
   
  

  useEffect(() => {
    carousel();
    
  }, [language]);

  function getporftoliocard(code) {

    (document.querySelectorAll(".portfolio__nav--button").forEach((navbutton) => {
      (navbutton.style.animation= "")
    }))

    document.getElementById(code).style.animation ="selected 1.2s infinite alternate 500ms"

    setlanguage(code)

  }

  function renderSwitch(language){
    switch(language){
      case("dataanalytics"):
      return <Dataanalyticsportfoliocards  />
      break;
      
      case("fullstack"):
      return <Fullstackportfoliocards />
      break;

      case("frontend"):
      return <Frontendportfoliocards />
      break;

      case("backend"):
      return <Backendportfoliocards />
      break;
      
      default:
      }
      
  }
  

  return (
    <section id="projects">
      <div className="carousel">
        <div className="carousel__item--wrapper">
          <div>
            <h1 className="carousel__title">My Projects</h1>
            <p>Here is a compilation of all my projects for each language, feel free to explore by switching between languages</p>
          </div>
          <div className="portfolio__nav">
            <button className="portfolio__nav--button clickable" id="frontend" onClick={() => getporftoliocard("frontend")}>
              Front End
            </button>
            <button className="portfolio__nav--button clickable" id="backend"  onClick={() => getporftoliocard("backend")}>Back End</button>
            <button className="portfolio__nav--button clickable" id="fullstack" onClick={() => getporftoliocard("fullstack")}>Full Stack</button>
            <button className="portfolio__nav--button clickable" id="dataanalytics" onClick={() => getporftoliocard("dataanalytics")}>Data Analytics</button>
            
          
          </div>



          {renderSwitch(language)}
        
        </div>

        <div className="carousel__nav">
          <span className="carousel__button clickable" onClick={() => carousel("backward")}> &lt;</span>

          <span className="carousel__button clickable" onClick={() =>carousel("forward")} >/&gt;</span>
          <p>(Cick the arrows to switch between projects)</p>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
