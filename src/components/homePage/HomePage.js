import React from 'react';
import LogoBlock from "../logoBlock/LogoBlock";
import Container from "@mui/material/Container";
import Intro from "../intro/Intro";
import PresentHistory from "../presentHistory/PresentHistory";
import CategoriesBlock from "../CategoriesBlock/CategoriesBlock";

const HomePage = () => {
    return (
        <div>
            <Container maxWidth="lg" >
                <LogoBlock />
                <Intro />
            </Container>
                <PresentHistory />
                <CategoriesBlock />
        </div>
    )
}

export default HomePage;
