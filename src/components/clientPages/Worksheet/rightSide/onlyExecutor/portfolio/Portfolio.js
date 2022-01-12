import React from 'react';
import PortfolioEdit from "./PortfolioEdit";
import PortfolioData from "./PortfolioData";

const Portfolio = ({editPortfolio, setEditPortfolio}) => {
    return (
        <>
            {editPortfolio ? <PortfolioEdit setEditPortfolio={setEditPortfolio}/>
                : <PortfolioData setEditPortfolio={setEditPortfolio}/>}
        </>
    )
}

export default Portfolio;