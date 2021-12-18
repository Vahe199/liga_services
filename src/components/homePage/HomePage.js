import React from 'react';
import LogoBlock from "./blocks/logoBlock/LogoBlock";
import Container from "@mui/material/Container";
import Intro from "./blocks/intro/Intro";
import PresentHistory from "./blocks/presentHistory/PresentHistory";
import CategoriesBlock from "./blocks/CategoriesBlock/CategoriesBlock";
import TrustedExperts from "./blocks/trustedExperts/TrustedExperts";

const HomePage = () => {
    return (
        <div>
            <Container maxWidth="lg">
                <LogoBlock />
                <Intro />
            </Container>
                <PresentHistory />
                <CategoriesBlock />
            <Container maxWidth="lg">
                <TrustedExperts />
            </Container>

        </div>
    )
}

export default HomePage;
