import React, {useEffect, useRef} from "react";
import Container from "@mui/material/Container";
import Intro from "./blocks/intro/Intro";
import PresentHistory from "./blocks/presentHistory/PresentHistory";
import CategoriesBlock from "./blocks/CategoriesBlock/CategoriesBlock";
import TrustedExperts from "./blocks/trustedExperts/TrustedExperts";
import Reviews from "./blocks/reviews/Reviews";
import {useDispatch, useSelector} from "react-redux";
import {getHeaderData} from "../../store/actions/HeaderActions";


const HomePage = () => {
  const categoriesRef = useRef();
  const {auth} = useSelector(state => state.auth);
  const {header,successWork} = useSelector(state => state.header);
  const {category, our_checked_specialists, review} = header;
  const dispatch = useDispatch()
  useEffect(()=>{
      if(!successWork) {
          dispatch(getHeaderData())
      }
  },[])
  return (
    <div style={{marginTop: auth ? '90px': '0'}}>
      <Container maxWidth="lg">
            <Intro categoriesRef={categoriesRef} />
            </Container>
                <PresentHistory />
                <CategoriesBlock category={category} categoriesRef={categoriesRef} />
            <Container maxWidth="lg">
                <TrustedExperts our_checked_specialists={our_checked_specialists} />
                <Reviews review={review} />
            </Container>
    </div>
  );
};

export default HomePage;
