import React from 'react';
import { Container, Grid, Typography } from '@mui/material';
import useStyles from '../utils/style';
import { Box, styled } from '@mui/system';
import Image from 'next/image';
import LinearProgress, {
  linearProgressClasses,
} from '@mui/material/LinearProgress';

export default function FlashSale() {
  const classes = useStyles();

  const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
    height: 10,
    borderRadius: 5,
    [`&.${linearProgressClasses.colorPrimary}`]: {
      backgroundColor: '#F8F8F8',
    },
    [`& .${linearProgressClasses.bar}`]: {
      borderRadius: 5,
      backgroundColor: '#3187ED',
    },
  }));

  return (
    <div className={classes.flashSale}>
      <Container>
        <Grid container spacing={5} className={classes.flashSaleDiv}>
          <Grid item md={3}>
            <Typography variant="h4">Flash Sale</Typography>
            <Typography color="white">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore
            </Typography>
            <Typography variant="h4">05 : 42 : 19 : 54</Typography>
          </Grid>
          <Grid item md={4}>
            <Grid container direction="row" className={classes.fsPrdDiv}>
              <Grid item xs={3}>
                <Image
                  src="/img/flashSale/fs (2).png"
                  alt="flash sale"
                  height="100"
                  width="80"
                />
              </Grid>
              <Grid xs={8}>
                <Typography
                  className={classes.productName}
                  color="black"
                  marginLeft="10px"
                >
                  Casio G-Shock Ana-Digi Quartz World Time 200m Black
                </Typography>
                <Box sx={{ justifyContent: 'space-between', display: 'flex' }}>
                  <Typography className={classes.classifiedPrice}>
                    $33.3
                  </Typography>
                  <Typography className={classes.classifiedLoc}>
                    24 left
                  </Typography>
                </Box>
                <BorderLinearProgress
                  className={classes.stockProgress}
                  variant="determinate"
                  value={75}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={4}>
            <Grid container direction="row" className={classes.fsPrdDiv}>
              <Grid item xs={3}>
                <Image
                  src="/img/flashSale/fs (1).png"
                  alt="flash sale"
                  height="100"
                  width="80"
                />
              </Grid>
              <Grid item xs={8}>
                <Typography
                  className={classes.productName}
                  color="black"
                  marginLeft="10px"
                >
                  Casio G-Shock Ana-Digi Quartz World Time 200m Black
                </Typography>
                <Box sx={{ justifyContent: 'space-between', display: 'flex' }}>
                  <Typography className={classes.classifiedPrice}>
                    $33.3
                  </Typography>
                  <Typography className={classes.classifiedLoc}>
                    24 left
                  </Typography>
                </Box>
                <BorderLinearProgress
                  className={classes.stockProgress}
                  variant="determinate"
                  value={75}
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item md={1}></Grid>
          <Grid item xs={12} className={classes.fsviewmore}>
              <Typography>View More</Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
