import React from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import {
  AppBar,
  Button,
  Container,
  IconButton,
  InputBase,
  InputLabel,
  MenuItem,
  NativeSelect,
  Select,
  Toolbar,
  Typography,
  Link,
} from '@mui/material';
import { alpha, Box } from '@mui/system';
import useStyles from '../utils/style';
import { useTheme, styled } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useScrollTrigger } from '@mui/material';
import { Slide } from '@mui/material';

import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import FormControl from '@mui/material/FormControl';
import SearchIcon from '@mui/icons-material/Search';

function HideOnScroll({ children }) {
  const trigger = useScrollTrigger();
  return (
    <Slide appear={false} direction={'down'} in={!trigger}>
      {children}
    </Slide>
  );
}

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha('#F8F8F8', 1),
  '&:hover': {
    backgroundColor: alpha('#F8F8F8', 1),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  right: 0,
  color: '#3187ED',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: '#4D4D4D',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(0)})`,
    [theme.breakpoints.down('sm')]: {
      paddingLeft: `calc(1em + ${theme.spacing(0)})`,
    },
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '40ch',
    },
  },
}));

export default function Navbar() {
  const classes = useStyles();
  const theme = useTheme();
  const smQ = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <HideOnScroll>
      <AppBar className={classes.appbar}>
        <Container maxWidth="xl">
          <Toolbar className={classes.navWidget}>
            <IconButton
              size="small"
              edge="start"
              color="inherit"
              aria-label="phone"
            >
              <PhoneIcon />
            </IconButton>
            <Typography
              variant="p"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' }, mr: 5 }}
            >
              +221 33 66 22
            </Typography>
            <IconButton
              size="small"
              edge="start"
              color="inherit"
              aria-label="phone"
            >
              <EmailIcon />
            </IconButton>
            <Typography
              variant="p"
              noWrap
              component="div"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              support@elextra.io
            </Typography>
            <Box sx={{ flexGrow: 1 }} />
            <IconButton
              size="small"
              edge="start"
              color="inherit"
              aria-label="phone"
              sx={{ mr: 2 }}
            >
              <LocationOnIcon />
            </IconButton>
            <Typography
              variant="p"
              noWrap
              component="div"
              sx={{
                display: { xs: 'none', sm: 'block' },
                pr: 4,
                mr: 4,
                borderRight: { xs: 'none', sm: '2px solid #fff' },
              }}
            >
              Locations
            </Typography>

            <FormControl sx={{ mr: 2 }}>
              <NativeSelect
                defaultValue="US"
                inputProps={{
                  name: 'currency',
                  id: 'uncontrolled-native',
                }}
                className={classes.navCurrency}
              >
                <option value="INR">{smQ ? 'INR' : '₹ Rupees (INR)'}</option>
                <option value="US">{smQ ? 'USD' : '$ Dollar (USD)'}</option>
                <option value="EURO">{smQ ? 'EUR' : '€ Dollar (EUR)'}</option>
              </NativeSelect>
            </FormControl>
            <FormControl>
              <NativeSelect
                defaultValue="EN"
                inputProps={{
                  name: 'lang',
                  id: 'uncontrolled-native',
                }}
                className={classes.navCurrency}
              >
                <option value="EN">EN</option>
                <option value="ML">ML</option>
                <option value="AR">AR</option>
              </NativeSelect>
            </FormControl>
          </Toolbar>
        </Container>

        <Container maxWidth="xl" className={classes.navbar}>
          <Toolbar className={classes.navbar}>
            <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
              <Image src="/img/logo.png" alt="logo" width="180" height="100" />
            </Box>
            <FormControl
              variant="standard"
              sx={{
                ml: 10,
                minWidth: 130,
                mb: 2,
                display: { xs: 'none', sm: 'flex' },
              }}
            >
              <InputLabel id="demo-simple-select-standard-label">
                All Categories
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                className={classes.navSelect}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={'Books'}>Books</MenuItem>
                <MenuItem value={'Electronics'}>Electronics</MenuItem>
                <MenuItem value={'Cars-bikes'}>Cars-bikes</MenuItem>
              </Select>
            </FormControl>
            <Search>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search hear…"
                inputProps={{ 'aria-label': 'search' }}
              />
            </Search>
            <Box sx={{ flexGrow: 1 }} />
            <Box
              className={classes.navIcon}
              sx={{ display: { xs: 'none', sm: 'flex' } }}
            >
              <div>
                <Image
                  src="/img/wishlist.png"
                  alt="wishlist"
                  width="20"
                  height="20"
                />
              </div>
              <div>
                <Image
                  src="/img/basket.png"
                  alt="basket"
                  width="20"
                  height="20"
                />
              </div>
              <div>
                <Image src="/img/user.png" alt="user" width="20" height="20" />
              </div>
            </Box>
            <Button variant="contained" className={classes.navBtn}>
              Classifieds
            </Button>
          </Toolbar>
          <Toolbar>
            <FormControl
              variant="standard"
              sx={{ mr: 10, minWidth: 130, mb: 2 }}
            >
              <InputLabel id="demo-simple-select-standard-label">
                All Categories
              </InputLabel>
              <Select
                labelId="demo-simple-select-standard-label"
                id="demo-simple-select-standard"
                className={classes.navSelect}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={'Books'}>Books</MenuItem>
                <MenuItem value={'Electronics'}>Electronics</MenuItem>
                <MenuItem value={'Cars-bikes'}>Cars-bikes</MenuItem>
              </Select>
            </FormControl>
            <Box
              sx={{ display: { xs: 'none', md: 'flex' }, mr: 5 }}
              className={classes.navCategories}
            >
              <NextLink href="/" passHref>
                <Link style={{ textDecoration: 'none !important' }}>
                  <Typography>Books</Typography>
                </Link>
              </NextLink>
              <NextLink href="/" passHref>
                <Link style={{ textDecoration: 'none !important' }}>
                  <Typography>Electronics</Typography>
                </Link>
              </NextLink>
              <NextLink href="/" passHref>
                <Link style={{ textDecoration: 'none !important' }}>
                  <Typography>real estate</Typography>
                </Link>
              </NextLink>
              <NextLink href="/" passHref>
                <Link style={{ textDecoration: 'none !important' }}>
                  <Typography>Cars-bikes</Typography>
                </Link>
              </NextLink>
              <NextLink href="/" passHref>
                <Link style={{ textDecoration: 'none !important' }}>
                  <Typography>Dorm-furniture</Typography>
                </Link>
              </NextLink>
              <NextLink href="/" passHref>
                <Link style={{ textDecoration: 'none !important' }}>
                  <Typography>Men</Typography>
                </Link>
              </NextLink>
              <NextLink href="/" passHref>
                <Link style={{ textDecoration: 'none !important' }}>
                  <Typography>Women</Typography>
                </Link>
              </NextLink>
              <NextLink href="/" passHref>
                <Link style={{ textDecoration: 'none !important' }}>
                  <Typography>Music</Typography>
                </Link>
              </NextLink>
              <NextLink href="/" passHref>
                <Link style={{ textDecoration: 'none !important' }}>
                  <Typography>hobbies Games</Typography>
                </Link>
              </NextLink>
              <NextLink href="/" passHref>
                <Link style={{ textDecoration: 'none !important' }}>
                  <Typography>toys</Typography>
                </Link>
              </NextLink>
              <NextLink href="/" passHref>
                <Link style={{ textDecoration: 'none !important' }}>
                  <Typography>Kids</Typography>
                </Link>
              </NextLink>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </HideOnScroll>
  );
}
