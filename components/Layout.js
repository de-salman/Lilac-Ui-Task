import React from 'react';
import Head from 'next/head';
import Navbar from './Navbar';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Footer from './Footer';

export default function Layout({ children }) {
  return (
    <div>
      <Head>
        <title>Lilac Tech</title>
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
}
