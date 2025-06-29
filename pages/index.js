import React from 'react';
import Header from '@/components/moleculus/Header';
import Banner from '@/components/moleculus/Banner';
import Maternity from '@/components/moleculus/Maternity';
import Services from '@/components/moleculus/Services';
import Choose from '@/components/moleculus/Choose';
import Testinomials from '@/components/moleculus/Testinomials';
import  Healthy from '@/components/moleculus/Healthy'
import Testinimials2 from '@/components/moleculus/Testinimials2';
import Footer from '@/components/moleculus/Footer';
const Home = () => {
  return (
    <>
      <Header />
      <Banner />
      <Maternity />
      <Services />
      <Choose />
      <Testinomials />
      <Healthy />
      <Testinimials2 />
      <Footer />
    </>
  );
};

export default Home;
