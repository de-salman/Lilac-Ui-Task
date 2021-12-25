import { Box, fontSize } from '@mui/system';
import React, { Component } from 'react';
import Slider from 'react-slick';
import Image from 'next/image';
import { withStyles } from '@mui/styles';
import { Grid, Typography } from '@mui/material';

const styles = (theme) => ({
  sliderDiv: {
      '& .slick-slide': {
          marginTop:"20px"
      },
      '& .slick-active': {
          marginTop:"0px",
          '& .MuiGrid-container': {
            padding:"20px 0 20px 0"
          }
      },
  },
  sliderBox: {
    backgroundColor: '#01D895',
    borderRadius:"50px",
  },
  sliderBox2: {
    backgroundColor: '#D3D5DF',
    borderRadius:"50px",
  },
  sliderBox3: {
    backgroundColor: '#EFC147',
    borderRadius:"50px",
  },
  sliderHeading : {
    fontSize: '35px',
    fontFamily:'Poppins',
    fontWeight: '300',
    color: '#fff',
    '& h4': {
        fontWeight:"600"
    },
    alignSelf: 'center',
    ['@media (max-width:780px)']: { // eslint-disable-line no-useless-computed-key
      fontSize: '20px',
      padding:'20px',
      '& h4': {
        fontWeight:"600",
        fontSize:'22px'
    }
    }
  }
});

class BannerSlider extends Component {
  render() {
    const settings = {
      className: 'center',
      centerMode: true,
      infinite: true,
      centerPadding: '70px',
      slidesToShow: 1,
      speed: 500,
      dots:true,
    };
    const { classes } = this.props;
    return (
      <div className={classes.sliderDiv}>
        <Slider {...settings}>
        <Box  className={classes.sliderBox}>
          <Grid container spacing={2}>
            <Grid item md={6} xs={12}>
            <Image
              src="/img/slide1.png"
              alt="slider1"
              width="100%" height="65" layout="responsive" objectFit="contain"
            />
            </Grid>
            <Grid item md={6} xs={12} display="flex">
                <Typography className={classes.sliderHeading}>
                From students to senior citizens <br/> this web portal of <br/> <Typography variant="h4">&quot;Products and
                Classifieds”</Typography> provides it all
                </Typography>
            </Grid>
          </Grid>
          </Box>
          <Box  className={classes.sliderBox2}>
          <Grid container spacing={2}>
            <Grid item md={6} xs={12}>
            <Image
              src="/img/slide1.png"
              alt="slider1"
              width="100%" height="65" layout="responsive" objectFit="contain"
            />
            </Grid>
            <Grid item md={6} xs={12} display="flex">
                <Typography className={classes.sliderHeading}>
                From students to senior citizens <br/> this web portal of <br/> <Typography variant="h4">&quot;Products and
                Classifieds”</Typography> provides it all
                </Typography>
            </Grid>
          </Grid>
          </Box>
          <Box  className={classes.sliderBox3}>
          <Grid container spacing={2}>
            <Grid item md={6} xs={12}>
            <Image
              src="/img/slide1.png"
              alt="slider1"
              width="100%" height="65" layout="responsive" objectFit="contain"
            />
            </Grid>
            <Grid item md={6} xs={12} display="flex">
                <Typography className={classes.sliderHeading}>
                From students to senior citizens <br/> this web portal of <br/> <Typography variant="h4">&quot;Products and
                Classifieds”</Typography> provides it all
                </Typography>
            </Grid>
          </Grid>
          </Box>
        </Slider>
      </div>
    );
  }
}

export default withStyles(styles, { withTheme: true })(BannerSlider);
