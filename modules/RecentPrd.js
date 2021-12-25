import { Container, Grid, Rating, Typography } from '@mui/material';
import React from 'react';
import useStyles from '../utils/style';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

export default function RecentPrd() {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <Grid container  marginBottom="30px">
          <Grid item xs={12}>
            <Typography variant="h5" className={classes.hotsale}>
              Recently viewed
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.hotsalePrd} >
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={50}
              navigation
              loop="true"
              autoplay={{ delay: 2000 }}
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
                <Grid container>
                  <Grid item xs={6}>
                    <Image
                      src="/img/bestDeals/bd (0).png"
                      alt="best deals"
                      width="100"
                      height="120"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography className={classes.productName}>
                      Fitness and activity Tracker
                    </Typography>
                    <Typography className={classes.productPrice}>
                      $33.3
                    </Typography>
                    <Grid container>
                      <Grid item xs={9}>
                        <Rating
                          className={classes.ratingStar}
                          defaultValue={4}
                          max={4}
                          size="small"
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <Typography className={classes.reviewCount}>
                          (12)
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </SwiperSlide>
              <SwiperSlide>
                <Grid container>
                  <Grid item xs={6}>
                    <Image
                      src="/img/bestDeals/bd (1).png"
                      alt="best deals"
                      width="100"
                      height="120"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography className={classes.productName}>
                      Xbox White Joystick
                    </Typography>
                    <Typography className={classes.productPrice}>
                      $33.3
                    </Typography>
                    <Grid container>
                      <Grid item xs={9}>
                        <Rating
                          className={classes.ratingStar}
                          defaultValue={3}
                          max={4}
                          size="small"
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <Typography className={classes.reviewCount}>
                          (12)
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </SwiperSlide>
              <SwiperSlide>
                <Grid container>
                  <Grid item xs={6}>
                    <Image
                      src="/img/bestDeals/bd (2).png"
                      alt="best deals"
                      width="100"
                      height="120"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography className={classes.productName}>
                      LG 260 L 3 Star Frost
                    </Typography>
                    <Typography className={classes.productPrice}>
                      $33.3
                    </Typography>
                    <Grid container>
                      <Grid item xs={9}>
                        <Rating
                          className={classes.ratingStar}
                          defaultValue={3}
                          max={4}
                          size="small"
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <Typography className={classes.reviewCount}>
                          (12)
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </SwiperSlide>
              <SwiperSlide>
                <Grid container>
                  <Grid item xs={6}>
                    <Image
                      src="/img/bestDeals/bd (3).png"
                      alt="best deals"
                      width="100"
                      height="120"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography className={classes.productName}>
                      X-Ray 2 Square PACK
                    </Typography>
                    <Typography className={classes.productPrice}>
                      $33.3
                    </Typography>
                    <Grid container>
                      <Grid item xs={9}>
                        <Rating
                          className={classes.ratingStar}
                          defaultValue={2}
                          max={4}
                          size="small"
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <Typography className={classes.reviewCount}>
                          (12)
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </SwiperSlide>
              <SwiperSlide>
                <Grid container>
                  <Grid item xs={6}>
                    <Image
                      src="/img/bestDeals/bd (4).png"
                      alt="best deals"
                      width="100"
                      height="120"
                    />
                  </Grid>
                  <Grid item xs={6}>
                    <Typography className={classes.productName}>
                      SONY PLAYSTATION 5
                    </Typography>
                    <Typography className={classes.productPrice}>
                      $33.3
                    </Typography>
                    <Grid container>
                      <Grid item xs={9}>
                        <Rating
                          className={classes.ratingStar}
                          defaultValue={4}
                          max={4}
                          size="small"
                        />
                      </Grid>
                      <Grid item xs={3}>
                        <Typography className={classes.reviewCount}>
                          (12)
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </SwiperSlide>
            </Swiper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
