import { Container, Grid, IconButton, Typography } from '@mui/material';
import React from 'react';
import Image from 'next/image';
import useStyles from '../utils/style';

import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';

export default function ColorBnr() {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <Grid container spacing={4} marginTop="10px">
          <Grid item md={6} className={classes.colorBnrContainer}>
            <Image
              src="/img/colorBnr (3).png"
              alt="color Banner"
              height="412"
              width="778"
            />
            <Typography variant="h4" className={classes.colorBnrH4}>Explore <br/> <b>Classifieds</b></Typography>
            <Typography variant="h6" className={classes.colorBnrH6}>Over 5000 + Products</Typography>
            <IconButton
              size="small"
              edge="start"
              color="inherit"
              aria-label="phone"
              className={classes.colorBnrArrow}
            >
              <ChevronRightOutlinedIcon />
            </IconButton>
            
          </Grid>
          <Grid item md={6} className={classes.colorBnrContainer}>
            <Image
              src="/img/colorBnr (4).png"
              alt="color Banner"
              height="412"
              width="778"
            />
            <Typography variant="h4" className={classes.colorBnrH4}>Add <br/> <b>Classifieds</b></Typography>
            <Typography variant="h6" className={classes.colorBnrH6}>ads, event ads <br/>service requests etc</Typography>
            <IconButton
              size="small"
              edge="start"
              color="inherit"
              aria-label="phone"
              className={classes.colorBnrArrow}
            >
              <ChevronRightOutlinedIcon />
            </IconButton>
            
          </Grid>
          <Grid item md={6} className={classes.colorBnrContainer}>
            <Image
              src="/img/colorBnr (2).png"
              alt="color Banner"
              height="412"
              width="778"
            />
            <Typography variant="h4" className={classes.colorBnrH4}>Explore <br/> <b>Products</b></Typography>
            <Typography variant="h6" className={classes.colorBnrH6}>Over 25000 + Products</Typography>
            <IconButton
              size="small"
              edge="start"
              color="inherit"
              aria-label="phone"
              className={classes.colorBnrArrow}
            >
              <ChevronRightOutlinedIcon />
            </IconButton>
            
          </Grid>
          <Grid item md={6} className={classes.colorBnrContainer}>
            <Image
              src="/img/colorBnr (1).png"
              alt="color Banner"
              height="412"
              width="778"
            />
            <Typography variant="h4" className={classes.colorBnrH4}>Partner <br/> <b>With Us</b></Typography>
            <Typography variant="h6" className={classes.colorBnrH6}>Sell your products</Typography>
            <IconButton
              size="small"
              edge="start"
              color="inherit"
              aria-label="phone"
              className={classes.colorBnrArrow}
            >
              <ChevronRightOutlinedIcon />
            </IconButton>
            
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
