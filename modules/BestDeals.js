import { Container, Grid, Rating, Typography } from '@mui/material';
import Image from 'next/image';
import React from 'react';
import useStyles from '../utils/style';

export default function BestDeals() {
  const classes = useStyles();
  return (
    <div>
      <Container>
        <Grid container spacing={2} className={classes.bestDealsHeadings}>
          <Grid item xs={6}>
            <Typography variant="h5">Best Deals</Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography>View all</Typography>
          </Grid>
        </Grid>
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
        >
          <Grid item md={2}>
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
                <Typography className={classes.productPrice}>$33.3</Typography>
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
          </Grid>
          <Grid item md={2}>
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
                <Typography className={classes.productPrice}>$33.3</Typography>
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
          </Grid>
          <Grid item md={2}>
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
                <Typography className={classes.productPrice}>$33.3</Typography>
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
          </Grid>
          <Grid item md={2}>
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
                <Typography className={classes.productPrice}>$33.3</Typography>
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
          </Grid>
          <Grid item md={2}>
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
                <Typography className={classes.productPrice}>$33.3</Typography>
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
          </Grid>
        </Grid>

        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="center"
          sx={{ mt: 5 }}
        >
          <Grid item md={2}>
            <Grid container>
              <Grid item xs={6}>
                <Image
                  src="/img/bestDeals/bd (5).png"
                  alt="best deals"
                  width="100"
                  height="120"
                />
              </Grid>
              <Grid item xs={6}>
                <Typography className={classes.productName}>
                  Ice White Airpods
                </Typography>
                <Typography className={classes.productPrice}>$33.3</Typography>
                <Grid container>
                  <Grid item xs={9}>
                    <Rating
                      className={classes.ratingStar}
                      defaultValue={0}
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
          </Grid>
          <Grid item md={2}>
            <Grid container>
              <Grid item xs={6}>
                <Image
                  src="/img/bestDeals/bd (6).png"
                  alt="best deals"
                  width="100"
                  height="120"
                />
              </Grid>
              <Grid item xs={6}>
                <Typography className={classes.productName}>
                  Hazor Mouse Gaming
                </Typography>
                <Typography className={classes.productPrice}>$33.3</Typography>
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
          </Grid>
          <Grid item md={2}>
            <Grid container>
              <Grid item xs={6}>
                <Image
                  src="/img/bestDeals/bd (7).png"
                  alt="best deals"
                  width="100"
                  height="120"
                />
              </Grid>
              <Grid item xs={6}>
                <Typography className={classes.productName}>
                  Super Boost Headphones
                </Typography>
                <Typography className={classes.productPrice}>$33.3</Typography>
                <Grid container>
                  <Grid item xs={9}>
                    <Rating
                      className={classes.ratingStar}
                      defaultValue={1}
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
          </Grid>
          <Grid item md={2}>
            <Grid container>
              <Grid item xs={6}>
                <Image
                  src="/img/bestDeals/bd (8).png"
                  alt="best deals"
                  width="100"
                  height="120"
                />
              </Grid>
              <Grid item xs={6}>
                <Typography className={classes.productName}>
                  Levi&lsquo;s Men&lsquo;s Printed T-Shirt
                </Typography>
                <Typography className={classes.productPrice}>$33.3</Typography>
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
          </Grid>
          <Grid item md={2}>
            <Grid container>
              <Grid item xs={6}>
                <Image
                  src="/img/bestDeals/bd (9).png"
                  alt="best deals"
                  width="100"
                  height="120"
                />
              </Grid>
              <Grid item xs={6}>
                <Typography className={classes.productName}>
                  AX1326 Automatic Analog
                </Typography>
                <Typography className={classes.productPrice}>$33.3</Typography>
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
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
