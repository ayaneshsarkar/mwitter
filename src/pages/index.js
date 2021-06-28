import React from 'react';
import HomeContainer from '../containers/Home';
import HomeNav from '../components/HomeNav';
import HomeBackground from '../assets/img/homeBackground.jpg';

const Index = () => {
  return (
    <HomeContainer homeBackground={HomeBackground}>
      <HomeNav />
    </HomeContainer>
  );
}

export default Index;