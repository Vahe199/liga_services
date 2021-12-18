import * as React from "react";
import Grid from "@mui/material/Grid";
import {Container, Typography} from "@mui/material";
import Box from "@mui/material/Box";
import logo from "../../../../assets/image/logoSmall.png";
import FooterIconsBar from "./FooterIconsBar";


const Footer = () => {
  return (
      <Box style={{backgroundColor: '#EBEBEB'}}>
        <Container maxWidth="lg">
          <Grid container spacing={9}>
            <Grid item xs={12} md={6} lg={3}>
              <Typography mb={'20px'} style={{fontSize: '32px', fontWeight: '500'}}>Lorem ipsum</Typography>
              <Typography style={{fontSize: '24px'}}>dolor sit amet
                consectetur adipiscing
                Suspendisse quis
                fermentum lectus
                Curabitur vehicula tellus
                in enim temporat
                congue dui temporenatis
                variusollicitudin sem
                iaculis iaculis.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Typography mb={'20px'} style={{fontSize: '32px', fontWeight: '500'}}>Lorem ipsum</Typography>
              <Typography style={{fontSize: '24px'}}>dolor sit amet
                consectetur adipiscing
                Suspendisse quis
                fermentum lectus
                Curabitur vehicula tellus
                in enim temporat
                congue dui temporenatis
                variusollicitudin sem
                iaculis iaculis.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Typography mb={'20px'} style={{fontSize: '32px', fontWeight: '500'}}>Lorem ipsum</Typography>
              <Typography style={{fontSize: '24px'}}>dolor sit amet
                consectetur adipiscing
                Suspendisse quis
                fermentum lectus
                Curabitur vehicula tellus
                in enim temporat
                congue dui temporenatis
                variusollicitudin sem
                iaculis iaculis.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6} lg={3}>
              <Box>
                <img src={logo} alt="" />
              </Box>
              <FooterIconsBar/>
              <Typography style={{fontSize: '24px'}}>dolor sit amet
                consectetur adipiscing
                Suspendisse quis
                fermentum lectus
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
  );
};
export default Footer;
