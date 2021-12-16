import React from 'react';
import LogoBlock from "../logoBlock/LogoBlock";
import Container from "@mui/material/Container";
import Intro from "../intro/Intro";

const HomePage = () => {
    return (
        <div>
            <Container maxWidth="lg" p={155}>
                <LogoBlock />
                <Intro />
            </Container>
        </div>
    )
}

export default HomePage;
