import React, { useRef } from "react";
import LogoBlock from "./blocks/logoBlock/LogoBlock";
import Container from "@mui/material/Container";
import Intro from "./blocks/intro/Intro";
import PresentHistory from "./blocks/presentHistory/PresentHistory";
import CategoriesBlock from "./blocks/CategoriesBlock/CategoriesBlock";
import TrustedExperts from "./blocks/trustedExperts/TrustedExperts";
import Reviews from "./blocks/reviews/Reviews";
import Footer from "../UI/common/footer/Footer";
import PersonalData from "../executor/PersonalData";
import DistrictsAndAddresses from "../executor/DistrictsAndAddresses";
import Portfolio from "../executor/Portfolio";
import EducationAndCertifications from "../executor/EducationAndCertifications";
import AboutOrder from "../executor/AboutOrder";
import AdditionalFiles from "../executor/AdditionalFiles";
import Filtr from "../executor/Filtr";
import ResponseAmount from "../executor/ResponseAmount";
import CustomerReviews from "../executor/CustomerReviews";

const HomePage = () => {
  const categoriesRef = useRef();
  return (
    <div>
      <Container maxWidth="lg">
                <LogoBlock />
                <Intro categoriesRef={categoriesRef} />
            </Container>
                <PresentHistory />
                <CategoriesBlock categoriesRef={categoriesRef} />
            <Container maxWidth="lg">
                <TrustedExperts />
                <Reviews />
            </Container>
             <Footer />
      {/*<AboutOrder/>*/}
      {/* <AdditionalFiles/> 
      <Filtr/>
      <ResponseAmount/> 
      <PersonalData/>   
      <DistrictsAndAddresses/> 
      <Portfolio/>
      <EducationAndCertifications />
      <CustomerReviews/> */}
    </div>
  );
};

export default HomePage;
