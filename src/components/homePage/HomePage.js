import React, {useRef} from "react";
import Container from "@mui/material/Container";
import Intro from "./blocks/intro/Intro";
import PresentHistory from "./blocks/presentHistory/PresentHistory";
import CategoriesBlock from "./blocks/CategoriesBlock/CategoriesBlock";
import TrustedExperts from "./blocks/trustedExperts/TrustedExperts";
import Reviews from "./blocks/reviews/Reviews";
import {useSelector} from "react-redux";


const HomePage = () => {
  const categoriesRef = useRef();
  const {auth} = useSelector(state => state.auth);
  return (
    <div style={{marginTop: auth ? '90px': '0'}}>
      <Container maxWidth="lg">
            <Intro categoriesRef={categoriesRef} />
            </Container>
                <PresentHistory />
                <CategoriesBlock categoriesRef={categoriesRef} />
            <Container maxWidth="lg">
                <TrustedExperts />
                <Reviews />
            </Container>
    </div>
  );
};

export default HomePage;
