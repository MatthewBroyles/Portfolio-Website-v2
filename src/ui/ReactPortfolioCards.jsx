import React from "react";
import Portfoliocard from "./PortfolioCard";
import stats from '../assets/portfolio.PNG';


const Reactportfoliocards = () => {
  return (
    <div>
      <Portfoliocard link="" title="Placeholder" text="Placeholder text" features="It Works :" image={stats}/>
    </div>
  );
};

export default Reactportfoliocards;
