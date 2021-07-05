import React from 'react';
import HomeContainer from '../containers/Home';
import HomeWrapper from '../containers/HomeWrapper';
import HomeNav from '../components/HomeNav';
import HomeHero from '../components/HomeHero';
import HomeForm from '../components/HomeForm';
import HomeBackground from '../assets/img/homeBackground.jpg';

const Index = () => {
  return (
    <HomeContainer homeBackground={HomeBackground}>
      <HomeNav />

      <HomeWrapper>
        <HomeHero />
        <HomeForm />
      </HomeWrapper>
    </HomeContainer>
  );
}

export default Index;