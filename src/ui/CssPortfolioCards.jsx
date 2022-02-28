import React from 'react';

import stats from '../assets/portfolio.PNG';
import Portfoliocard from './PortfolioCard';

const Cssportfoliocards = () => {
    return (
        <div>
             <Portfoliocard link="" title="Placeholder" text="Placeholder text" features="It Works :" image={stats}/>
             <Portfoliocard link="" title="Placeholder" text="Placeholder text" features="It Works :" image={stats}/>
        </div>
    );
}

export default Cssportfoliocards;
