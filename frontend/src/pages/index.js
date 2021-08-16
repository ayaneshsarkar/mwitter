import React from 'react';
import { connect } from 'react-redux';
import HomeContainer from '../containers/Home';
import HomeWrapper from '../containers/HomeWrapper';
import HomeNav from '../components/HomeNav';
import HomeHero from '../components/HomeHero';
import HomeForm from '../components/HomeForm';
import HomeBackground from '../assets/img/homeBackground.jpg';

const Index = ({ user, status }) => {
  return (
    <HomeContainer homeBackground={HomeBackground}>
      <HomeNav status={status} user={user} />

      <HomeWrapper>
        <HomeHero />
        <HomeForm />
      </HomeWrapper>
    </HomeContainer>
  );
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    status: state.auth.loggedIn
  }
}

export default connect(null, null)(Index);