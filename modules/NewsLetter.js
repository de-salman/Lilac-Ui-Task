import React from 'react';
import {
  Button,
  Container,
  Grid,
  IconButton,
  InputBase,
  Paper,
  Typography,
} from '@mui/material';
import useStyles from '../utils/style';
import Image from 'next/image';

import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
export default function NewsLetter() {

  const backToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  }
  const classes = useStyles();
  return (
    <div>
      <Grid container className={classes.backToTop} onClick={backToTop} >
        <Grid item xs={12}>
          <Typography>
            Back to Top
            <IconButton
              edge="end"
              color="primary"
              aria-label="phone"
              sx={{ mr: 2, paddingRight: '0', marginRight: '0' }}
            >
              <KeyboardArrowUpIcon sx={{ fontSize: '15px' }} />
            </IconButton>
          </Typography>
        </Grid>
      </Grid>
      <div className={classes.newsLetter}>
        <Container>
          <Grid container spacing={5}>
            <Grid item md={2}>
              <Image
                src="/img/newsletter.png"
                alt="news letter"
                height="100"
                width="100"
              />
            </Grid>
            <Grid item md={4} className={classes.nlHeading}>
              <Typography variant="h5">Sign Up for Newsletter</Typography>
              <Typography color="white">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore
              </Typography>
            </Grid>
            <Grid item md={1}></Grid>
            <Grid item md={5}>
              <Paper
                component="form"
                sx={{
                  p: '2px 4px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'end',
                  width: "100",
                }}
              >
                <InputBase
                  sx={{ ml: 1, flex: 1 }}
                  placeholder="Enter your email here"
                  inputProps={{ 'aria-label': 'Enter your email here' }}
                />
                
                <Button variant="contained" className={classes.nlBtn}>
                  SUBSCRIBE
                </Button>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
}
