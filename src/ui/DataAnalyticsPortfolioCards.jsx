import React from "react";
import Portfoliocard from "./PortfolioCard";
import sealevel from '../assets/DataAnalytics/SeaLevel.PNG';
import pageviews from '../assets/DataAnalytics/PageViews.PNG';
import medicaldata from '../assets/DataAnalytics/MedicalData.png';
import airbnb from '../assets/DataAnalytics/AirBnBTableau.png';

const Dataanalyticsportfoliocards = () => {
  return (
    <div>
      <div>
        <Portfoliocard link="https://public.tableau.com/shared/XBWMRCC69?:display_count=n&:origin=viz_share_link" title="AirBnB Tableau Dashboard" text="My first tableau dashboard that shows Airbnb listings in washington." features="Tableau" image={airbnb}/>
      <Portfoliocard link="" title="Sea Level Visualization" text="Python Data Visualization of current and predicted sea levels given a data set" features="Numpy, Matplotlib, Pandas" image={sealevel}/>
        <Portfoliocard link="" title="Three Visualizations of Page Views on FreeCodeCamp" text="Python Data Visualization of page views on FreeCodeCamp" features="Numpy, Matplotlib, Pandas" image={pageviews}/>
        <Portfoliocard link="" title="Medical Data Visualization" text="Python Data Visualization of medical data" features="Numpy, Matplotlib, Pandas" image={medicaldata}/>
    </div>

     
    </div>
  );
};

export default Dataanalyticsportfoliocards;
