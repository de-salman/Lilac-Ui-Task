import Layout from '../components/Layout';
import { Box } from '@mui/system';
import BannerSlider from '../components/BannerSlider';
import useStyles from '../utils/style';
import AllDeals from '../components/allDeals';
import ClassifiedPrd from '../modules/ClassifiedPrd';
import RecommendedPrd from '../modules/RecommendedPrd';
import FlashSale from '../modules/FlashSale';
import NewsLetter from '../modules/NewsLetter';

export default function Home() {
  const classes = useStyles();
  return (
    <Layout>
      <>
        <Box className={classes.slickSlider}>
          <BannerSlider />
        </Box>

        <AllDeals />
        <NewsLetter />
      </>
    </Layout>
  );
}
