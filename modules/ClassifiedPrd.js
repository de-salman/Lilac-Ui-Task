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

import LocationOnIcon from '@mui/icons-material/LocationOn';
import ChevronRightOutlinedIcon from '@mui/icons-material/ChevronRightOutlined';


export default function ClassifiedPrd() {
  const classes = useStyles();

  return (
    <div className={classes.classifiedPrdDiv}>
      <Container>
        <Grid container spacing={2} justifyContent="center">
          <Grid item md={2} xs={12} alignSelf="center" textAlign="center" >
            <Typography variant="h5" className={classes.ClassifiedHeading}>
              Classified Products on the week
            </Typography>
            <Button variant="contained" className={classes.classifiedBtn}>Explore <IconButton
              size="small"
              edge="start"
              color="inherit"
              aria-label="phone"
            >
              <ChevronRightOutlinedIcon />
            </IconButton></Button>

          </Grid>
          <Grid item xs={10}>
            <Grid container spacing={2} justifyContent="center">
                <Grid item>
                  <Card className={classes.classifiedCard}>
                    <CardMedia
                      component="img"
                      height="200"
                      image="/img/classifiedPrd/cp (1).png"
                      alt="green iguana"
                    ></CardMedia>
                    <CardContent sx={{ paddingBottom: '0' }}>
                      <Typography className={classes.classifiedName}>
                        Holy Stone HS470
                        <br />
                        Foldable GPS RC Drone
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'space-between' }}>
                      <Typography className={classes.classifiedPrice}>
                        $303.3
                      </Typography>
                      <Typography className={classes.classifiedLoc}>
                        <IconButton
                          edge="end"
                          color="inherit"
                          aria-label="phone"
                          sx={{ mr: 2, paddingRight: '0', marginRight: '0' }}
                        >
                          <LocationOnIcon sx={{ fontSize: '15px' }} />
                        </IconButton>
                        Cape Hadstone
                      </Typography>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item>
                  <Card className={classes.classifiedCard}>
                    <CardMedia
                      component="img"
                      height="200"
                      image="/img/classifiedPrd/cp (2).png"
                      alt="green iguana"
                    ></CardMedia>
                    <CardContent sx={{ paddingBottom: '0' }}>
                      <Typography className={classes.classifiedName}>
                        Holy Stone HS470
                        <br />
                        Foldable GPS RC Drone
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'space-between' }}>
                      <Typography className={classes.classifiedPrice}>
                        $303.3
                      </Typography>
                      <Typography className={classes.classifiedLoc}>
                        <IconButton
                          edge="end"
                          color="inherit"
                          aria-label="phone"
                          sx={{ mr: 2, paddingRight: '0', marginRight: '0' }}
                        >
                          <LocationOnIcon sx={{ fontSize: '15px' }} />
                        </IconButton>
                        Cape Hadstone
                      </Typography>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item>
                  <Card className={classes.classifiedCard}>
                    <CardMedia
                      component="img"
                      height="200"
                      image="/img/classifiedPrd/cp (3).png"
                      alt="green iguana"
                    ></CardMedia>
                    <CardContent sx={{ paddingBottom: '0' }}>
                      <Typography className={classes.classifiedName}>
                        Holy Stone HS470
                        <br />
                        Foldable GPS RC Drone
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'space-between' }}>
                      <Typography className={classes.classifiedPrice}>
                        $303.3
                      </Typography>
                      <Typography className={classes.classifiedLoc}>
                        <IconButton
                          edge="end"
                          color="inherit"
                          aria-label="phone"
                          sx={{ mr: 2, paddingRight: '0', marginRight: '0' }}
                        >
                          <LocationOnIcon sx={{ fontSize: '15px' }} />
                        </IconButton>
                        Cape Hadstone
                      </Typography>
                    </CardActions>
                  </Card>
                </Grid>
                <Grid item>
                  <Card className={classes.classifiedCard}>
                    <CardMedia
                      component="img"
                      height="200"
                      image="/img/classifiedPrd/cp (4).png"
                      alt="green iguana"
                    ></CardMedia>
                    <CardContent sx={{ paddingBottom: '0' }}>
                      <Typography className={classes.classifiedName}>
                        Holy Stone HS470
                        <br />
                        Foldable GPS RC Drone
                      </Typography>
                    </CardContent>
                    <CardActions sx={{ justifyContent: 'space-between' }}>
                      <Typography className={classes.classifiedPrice}>
                        $303.3
                      </Typography>
                      <Typography className={classes.classifiedLoc}>
                        <IconButton
                          edge="end"
                          color="inherit"
                          aria-label="phone"
                          sx={{ mr: 2, paddingRight: '0', marginRight: '0' }}
                        >
                          <LocationOnIcon sx={{ fontSize: '15px' }} />
                        </IconButton>
                        Cape Hadstone
                      </Typography>
                    </CardActions>
                  </Card>
                </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
