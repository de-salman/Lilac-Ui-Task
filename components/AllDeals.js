import React from 'react';
import BestDeals from '../modules/BestDeals';
import ClassifiedPrd from '../modules/ClassifiedPrd';
import ColorBnr from '../modules/colorBnr';
import FlashSale from '../modules/FlashSale';
import HotSale from '../modules/hotsale';
import RecentPrd from '../modules/RecentPrd';
import RecommendedPrd from '../modules/RecommendedPrd';

export default function AllDeals() {
  return (
    <div>
      <BestDeals />
      <ClassifiedPrd />
      <RecommendedPrd />
      <FlashSale />
      <HotSale />
      <ColorBnr />
      <RecentPrd />
    </div>
  );
}
