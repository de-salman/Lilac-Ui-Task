import { Container, Grid, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import useStyles from '../utils/style';

export default function Footer() {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <Grid container paddingTop="70px" paddingBottom="60px">
          <Grid item md={3}>
            <Image src="/img/logo.png" alt="logo" width="180" height="100" />
            <Typography color="#8D8D8D" fontSize="13px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore{' '}
            </Typography>
          </Grid>
          <Grid item md={2} sm={6}>
            <Typography variant="h6" fontSize="16px" fontWeight="600">
              QUICK LINKS
            </Typography>
            <br />
            <Typography color="#8D8D8D" fontSize="13px" marginBottom="10px">
              Products
            </Typography>
            <Typography color="#8D8D8D" fontSize="13px" marginBottom="10px">
              Classifieds
            </Typography>
            <Typography color="#8D8D8D" fontSize="13px" marginBottom="10px">
              Contact Us
            </Typography>
            <Typography color="#8D8D8D" fontSize="13px" marginBottom="10px">
              Login
            </Typography>
            <Typography color="#8D8D8D" fontSize="13px">
              Sign
            </Typography>
          </Grid>
          <Grid item md={2} sm={6}>
            <Typography variant="h6" fontSize="16px" fontWeight="600">
              CUSTOMER AREA
            </Typography>
            <br />
            <Typography color="#8D8D8D" fontSize="13px" marginBottom="10px">
              My Account
            </Typography>
            <Typography color="#8D8D8D" fontSize="13px" marginBottom="10px">
              Orders
            </Typography>
            <Typography color="#8D8D8D" fontSize="13px" marginBottom="10px">
              Tracking List
            </Typography>
            <Typography color="#8D8D8D" fontSize="13px" marginBottom="10px">
              Terms
            </Typography>
            <Typography color="#8D8D8D" fontSize="13px" marginBottom="10px">
              Privacy Policy
            </Typography>
            <Typography color="#8D8D8D" fontSize="13px" marginBottom="10px">
              Return policy
            </Typography>
            <Typography color="#8D8D8D" fontSize="13px">
              My Cart
            </Typography>
          </Grid>
          <Grid item md={2}>
            <Typography variant="h6" fontSize="16px" fontWeight="600">
              VENDOR AREA
            </Typography>
            <br />
            <Typography color="#8D8D8D" fontSize="13px" marginBottom="10px">
              Partner with us
            </Typography>
            <Typography color="#8D8D8D" fontSize="13px" marginBottom="10px">
              Training
            </Typography>
            <Typography color="#8D8D8D" fontSize="13px" marginBottom="10px">
              Procedures
            </Typography>
            <Typography color="#8D8D8D" fontSize="13px" marginBottom="10px">
              Terms
            </Typography>
            <Typography color="#8D8D8D" fontSize="13px">
              Privacy Policy
            </Typography>
          </Grid>
          <Grid item md={3}>
            <Typography variant="h6" fontSize="16px" fontWeight="600">
              VENDOR AREA
            </Typography>
            <Typography color="#8D8D8D" fontSize="13px" marginTop="20px">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor
            </Typography>
            <Grid container spacing={2} marginTop="10px">
              <Grid item md={6}>
                <Image
                  src="/img/appStore.png"
                  alt="logo"
                  width="200"
                  height="70"
                />
              </Grid>
              <Grid item md={6}>
                <Image
                  src="/img/googlePlay.png"
                  alt="logo"
                  width="200"
                  height="70"
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
