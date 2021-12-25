import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Container,
  Grid,
  IconButton,
  Typography,
} from '@mui/material';
import React from 'react';
import useStyles from '../utils/style';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';

import StarIcon from '@mui/icons-material/Star';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

export default function RecommendedPrd() {
  const classes = useStyles();
  return (
    <div>
      <Container className={classes.recPrdContainer}>
        <Grid container spacing={2} className={classes.bestDealsHeadings}>
          <Grid item xs={6}>
            <Typography variant="h5">Recommended</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>View all</Typography>
          </Grid>
        </Grid>
        <Swiper
          modules={[Navigation,Autoplay]}
          spaceBetween={50}
          navigation
          loop="true"
          autoplay={{delay:2000}}
          breakpoints={{
            300: {
              slidesPerView: 2,
            },
            640: {
              slidesPerView: 3,
            },
            768: {
              slidesPerView: 5,
            },
          }}
        >
          <SwiperSlide>
            <Card className={classes.classifiedCard}>
              <CardMedia
                component="img"
                height="175"
                image="/img/recommendedPrd/rp (4).png"
                alt="green iguana"
              ></CardMedia>
              <CardContent sx={{ paddingBottom: '0' }}>
                <Typography className={classes.classifiedName}>
                  iPhone 12 With Facetime 128GB Blue 5G Specs
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'space-between' }}>
                <Grid container direction="column">
                  <Grid item>
                    <Typography className={classes.classifiedPrice}>
                      $1,245.33
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography className={classes.recOldPrice}>
                      $1,300
                    </Typography>
                  </Grid>
                </Grid>
                <Typography className={classes.recStar}>
                  4.5
                  <IconButton
                    edge="end"
                    color="primary"
                    aria-label="phone"
                    sx={{ mr: 2, paddingRight: '0', marginRight: '0' }}
                  >
                    <StarIcon sx={{ fontSize: '15px' }} />
                  </IconButton>
                </Typography>
              </CardActions>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className={classes.classifiedCard}>
              <CardMedia
                component="img"
                height="175"
                image="/img/recommendedPrd/rp (1).png"
                alt="green iguana"
              ></CardMedia>
              <CardContent sx={{ paddingBottom: '0' }}>
                <Typography className={classes.classifiedName}>
                  EOS M200 Mirrorless Came ra With EF-M...
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'space-between' }}>
                <Grid container direction="column">
                  <Grid item>
                    <Typography className={classes.classifiedPrice}>
                      $1,245.33
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography className={classes.recOldPrice}>
                      $1,300
                    </Typography>
                  </Grid>
                </Grid>
                <Typography className={classes.recStar}>
                  4.5
                  <IconButton
                    edge="end"
                    color="primary"
                    aria-label="phone"
                    sx={{ mr: 2, paddingRight: '0', marginRight: '0' }}
                  >
                    <StarIcon sx={{ fontSize: '15px' }} />
                  </IconButton>
                </Typography>
              </CardActions>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className={classes.classifiedCard}>
              <CardMedia
                component="img"
                height="175"
                image="/img/recommendedPrd/rp (5).png"
                alt="green iguana"
              ></CardMedia>
              <CardContent sx={{ paddingBottom: '0' }}>
                <Typography className={classes.classifiedName}>
                  Ultra Book Thin <br />
                  Laptop XL-01
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'space-between' }}>
                <Grid container direction="column">
                  <Grid item>
                    <Typography className={classes.classifiedPrice}>
                      $1,245.33
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography className={classes.recOldPrice}>
                      $1,300
                    </Typography>
                  </Grid>
                </Grid>
                <Typography className={classes.recStar}>
                  4.5
                  <IconButton
                    edge="end"
                    color="primary"
                    aria-label="phone"
                    sx={{ mr: 2, paddingRight: '0', marginRight: '0' }}
                  >
                    <StarIcon sx={{ fontSize: '15px' }} />
                  </IconButton>
                </Typography>
              </CardActions>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className={classes.classifiedCard}>
              <CardMedia
                component="img"
                height="175"
                image="/img/recommendedPrd/rp (3).png"
                alt="green iguana"
              ></CardMedia>
              <CardContent sx={{ paddingBottom: '0' }}>
                <Typography className={classes.classifiedName}>
                  Magic <br />
                  Perfume
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'space-between' }}>
                <Grid container direction="column">
                  <Grid item>
                    <Typography className={classes.classifiedPrice}>
                      $1,245.33
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography className={classes.recOldPrice}>
                      $1,300
                    </Typography>
                  </Grid>
                </Grid>
                <Typography className={classes.recStar}>
                  4.5
                  <IconButton
                    edge="end"
                    color="primary"
                    aria-label="phone"
                    sx={{ mr: 2, paddingRight: '0', marginRight: '0' }}
                  >
                    <StarIcon sx={{ fontSize: '15px' }} />
                  </IconButton>
                </Typography>
              </CardActions>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className={classes.classifiedCard}>
              <CardMedia
                component="img"
                height="175"
                image="/img/recommendedPrd/rp (2).png"
                alt="green iguana"
              ></CardMedia>
              <CardContent sx={{ paddingBottom: '0' }}>
                <Typography className={classes.classifiedName}>
                  Convers <br />
                  Gray
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'space-between' }}>
                <Grid container direction="column">
                  <Grid item>
                    <Typography className={classes.classifiedPrice}>
                      $1,245.33
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography className={classes.recOldPrice}>
                      $1,300
                    </Typography>
                  </Grid>
                </Grid>
                <Typography className={classes.recStar}>
                  4.5
                  <IconButton
                    edge="end"
                    color="primary"
                    aria-label="phone"
                    sx={{ mr: 2, paddingRight: '0', marginRight: '0' }}
                  >
                    <StarIcon sx={{ fontSize: '15px' }} />
                  </IconButton>
                </Typography>
              </CardActions>
            </Card>
          </SwiperSlide>
          <SwiperSlide>
            <Card className={classes.classifiedCard}>
              <CardMedia
                component="img"
                height="175"
                image="/img/recommendedPrd/rp (6).png"
                alt="green iguana"
              ></CardMedia>
              <CardContent sx={{ paddingBottom: '0' }}>
                <Typography className={classes.classifiedName}>
                  Marshel
                  <br />
                  Speaker
                </Typography>
              </CardContent>
              <CardActions sx={{ justifyContent: 'space-between' }}>
                <Grid container direction="column">
                  <Grid item>
                    <Typography className={classes.classifiedPrice}>
                      $1,245.33
                    </Typography>
                  </Grid>
                  <Grid item>
                    <Typography className={classes.recOldPrice}>
                      $1,300
                    </Typography>
                  </Grid>
                </Grid>
                <Typography className={classes.recStar}>
                  4.5
                  <IconButton
                    edge="end"
                    color="primary"
                    aria-label="phone"
                    sx={{ mr: 2, paddingRight: '0', marginRight: '0' }}
                  >
                    <StarIcon sx={{ fontSize: '15px' }} />
                  </IconButton>
                </Typography>
              </CardActions>
            </Card>
          </SwiperSlide>
        </Swiper>
      </Container>
    </div>
  );
}
