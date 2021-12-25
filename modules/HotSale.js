import {
  Button,
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

export default function HotSale() {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <Grid container>
          <Grid item xs={12}>
            <Typography variant="h5" className={classes.hotsale}>
              Hot Sale!
            </Typography>
          </Grid>
          <Grid item xs={12} className={classes.hotsalePrd}>
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
                    height="180"
                    image="/img/hotSale/hs (1).png"
                    alt="hot sale"
                    className={classes.hsCardMedia}
                  ></CardMedia>
                  <CardContent sx={{ paddingBottom: '0' }}>
                    <Typography className={classes.classifiedName}>
                    PVC Bean Bag Black 80x80x50centimeter
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
                  <Button variant="outlined" className={classes.hsAddtocart}>
                    Add to cart
                  </Button>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card className={classes.classifiedCard}>
                  <CardMedia
                    component="img"
                    height="180"
                    image="/img/hotSale/hs (2).png"
                    alt="hot sale"
                    className={classes.hsCardMedia}
                  ></CardMedia>
                  <CardContent sx={{ paddingBottom: '0' }}>
                    <Typography className={classes.classifiedName}>
                    U2520D 25-Inch UltraSharp QHD USB-C Monitor Black
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
                  <Button variant="outlined" className={classes.hsAddtocart}>
                    Add to cart
                  </Button>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card className={classes.classifiedCard}>
                  <CardMedia
                    component="img"
                    height="180"
                    image="/img/hotSale/hs (3).png"
                    alt="hot sale"
                    className={classes.hsCardMedia}
                  ></CardMedia>
                  <CardContent sx={{ paddingBottom: '0' }}>
                    <Typography className={classes.classifiedName}>
                    Flip 5 Waterproof Portable Bluetooth Speaker Black
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
                  <Button variant="outlined" className={classes.hsAddtocart}>
                    Add to cart
                  </Button>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card className={classes.classifiedCard}>
                  <CardMedia
                    component="img"
                    height="180"
                    image="/img/hotSale/hs (4).png"
                    alt="hot sale"
                    className={classes.hsCardMedia}
                  ></CardMedia>
                  <CardContent sx={{ paddingBottom: '0' }}>
                    <Typography className={classes.classifiedName}>
                      MacBook Pro With Touch Bar, 13.3-Inch Dis...
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
                  <Button variant="outlined" className={classes.hsAddtocart}>
                    Add to cart
                  </Button>
                </Card>
              </SwiperSlide>
              <SwiperSlide>
                <Card className={classes.classifiedCard}>
                  <CardMedia
                    component="img"
                    height="180"
                    image="/img/hotSale/hs (5).png"
                    alt="hot sale"
                    className={classes.hsCardMedia}
                  ></CardMedia>
                  <CardContent sx={{ paddingBottom: '0' }}>
                    <Typography className={classes.classifiedName}>
                    PlayStation 5 Console With Extra Contro...
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
                  <Button variant="outlined" className={classes.hsAddtocart}>
                    Add to cart
                  </Button>
                </Card>
              </SwiperSlide>
            </Swiper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
