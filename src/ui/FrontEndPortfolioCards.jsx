import React from 'react';

import BreakTimer from '../assets/FrontEnd/BreakTimer.png';
import Calculator from '../assets/FrontEnd/Calculator.png';
import DrumMachine from '../assets/FrontEnd/DrumMachine.png';
import HouseTracker from '../assets/FrontEnd/HouseTracker.png';
import Meditation from '../assets/FrontEnd/Meditation.png';
import RandomQuoteMachine from '../assets/FrontEnd/RandomQuoteMachine.png';
import Websitev1 from '../assets/FrontEnd/Websitev1.png';
import portfolio from '../assets/portfolio.PNG';
import Portfoliocard from './PortfolioCard';


const Frontendportfoliocards = () => {
    return (
        <div>
          <Portfoliocard link="https://github.com/MatthewBroyles/RandomQuoteMachine" title="Random Quote Machine" text="Random Quote Machine build for freecodecamp certification" features="HTML, CSS, JS, React" image={RandomQuoteMachine}/>
          <Portfoliocard link="https://github.com/MatthewBroyles/DrumMachine" title="Drum Machine" text="Drum Machine web application that plays sounds when you click on drums" features="HTML, CSS, JS, React" image={DrumMachine}/>
          <Portfoliocard link="https://github.com/MatthewBroyles/Calculator" title="Calculator" text="Calculator web application" features="HTML, CSS, JS, React" image={Calculator}/>
          <Portfoliocard link="https://github.com/MatthewBroyles/BreakTimer" title="Break Timer" text="Pomodoro clock that splits time between works and breaks" features="HTML, CSS, JS, React" image={BreakTimer}/>
          <Portfoliocard link="https://github.com/MatthewBroyles/House-Cup-Quest-Tracker" title="Quest Tracker" text="Todo List tracker I made to keep track of Techelevator House Cup points" features="HTML, CSS, JS" image={HouseTracker}/>
          <Portfoliocard link="https://github.com/MatthewBroyles/Portfolio-Website-v1" title="Portfolio Website v1" text="First attempt at Portfolio Website" features="HTML, CSS, JS" image={Websitev1}/>
          <Portfoliocard link="https://github.com/MatthewBroyles/Portfolio-Website-v2" title="Portfolio Website v3" text="Current Portfolio website using react" features="HTML, CSS, JS, React" image={portfolio}/>
          <Portfoliocard link="https://github.com/MatthewBroyles/LandingPage" title="Meditation Landing Page" text="Meditation Web Application to help me find peace whenever I'm stressed" features="HTML, CSS, JS" image={Meditation}/>
          <Portfoliocard link="https://github.com/MatthewBroyles/LandingPage" title="Meditation Landing Page" text="Meditation Web Application to help me find peace whenever I'm stressed" features="HTML, CSS, JS" image={Meditation}/>
          <Portfoliocard link="https://github.com/MatthewBroyles/LandingPage" title="Meditation Landing Page" text="Meditation Web Application to help me find peace whenever I'm stressed" features="HTML, CSS, JS" image={Meditation}/>
        </div>
    );
}

export default Frontendportfoliocards;
