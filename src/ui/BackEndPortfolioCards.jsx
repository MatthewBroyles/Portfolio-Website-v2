import React from 'react';
import Portfoliocard from './PortfolioCard';
import stats from '../assets/portfolio.PNG';
import ExerciseTracker from '../assets/BackEnd/exerciseTracker.png';
import HeaderParser from '../assets/BackEnd/headerParser.png';
import MetaData from '../assets/BackEnd/metaData.png';
import SudokuSolver from '../assets/BackEnd/sudokuSolver.png';
import URLShortener from '../assets/BackEnd/urlShortener.png';
import TimeStamp from '../assets/BackEnd/timestamp.png';


const Backendportfoliocards = () => {
    return (
        <div>
          <Portfoliocard link="https://github.com/MatthewBroyles/exerciseTracker" title="Exercise Tracker" text="Exercise Tracker that takes http requests to store and return a log of exercises" features="Node.js, Express, MongoDB" image={ExerciseTracker}/>
          <Portfoliocard link="https://github.com/MatthewBroyles/urlShortener" title="urlShortener" text="Simple url shortener" features="Node.js, Express" image={URLShortener}/>
          <Portfoliocard link="https://github.com/MatthewBroyles/timeStamp" title="Time Stamp" text="TimeStampApi that return utc and unix when given a timestamp" features="Node.js, Express" image={TimeStamp}/>
          <Portfoliocard link="https://github.com/MatthewBroyles/headerparser" title="Head Parser" text="Back end that returns the ipaddress, language, and software from sender" features="Node.js" image={HeaderParser}/>
          <Portfoliocard link="https://github.com/MatthewBroyles/fileMetaData" title="FileMetaData" text="Pulls meta data from a file" features="Node.js" image={MetaData}/>
          <Portfoliocard link="https://github.com/MatthewBroyles/SudokuSolverInNodeJs" title="SudokuSolver" text="Solves sudoku puzzles" features="Node.js" image={SudokuSolver}/>
        </div>
    );
}

export default Backendportfoliocards;
