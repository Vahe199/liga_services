import React, {useRef} from 'react';
import LogoBlock from "./blocks/logoBlock/LogoBlock";
import Container from "@mui/material/Container";
import Intro from "./blocks/intro/Intro";
import PresentHistory from "./blocks/presentHistory/PresentHistory";
import CategoriesBlock from "./blocks/CategoriesBlock/CategoriesBlock";
import TrustedExperts from "./blocks/trustedExperts/TrustedExperts";
import Reviews from "./blocks/reviews/Reviews";
import Footer from "../UI/common/footer/Footer";
import AboutOrder from '../executor/AboutOrder';
import AdditionalFiles from '../executor/AdditionalFiles';
import ResponseAmount from '../executor/ResponseAmount';
import Filtr from '../executor/Filtr';

const HomePage = () => {
    const categoriesRef = useRef();
    return (
        <div>
            <Container maxWidth="lg">
                <LogoBlock />
                <AboutOrder />
                <AdditionalFiles/>
                <ResponseAmount/> 
                <Filtr/>
                {/* <Intro categoriesRef={categoriesRef} />
            </Container>
                <PresentHistory />
                <CategoriesBlock categoriesRef={categoriesRef} />
            <Container maxWidth="lg">
                <TrustedExperts />
                <Reviews /> */}
            </Container>
            {/* <Footer /> */}
        </div>
    )
}

export default HomePage;
