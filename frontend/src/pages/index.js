import React from 'react';
import { connect } from 'react-redux';
import history from '../config/history';
import Head from '../containers/Head';
import HomeContainer from '../containers/Home';
import HomeWrapper from '../containers/HomeWrapper';
import HomeNav from '../components/HomeNav';
import HomeHero from '../components/HomeHero';
import HomeForm from '../components/HomeForm';
import HomeBackground from '../assets/img/homeBackground.jpg';

const Index = ({ user, status }) => {
  if(status) {
    history.push('/posts');
    return <></>;
  } else {
    return (
      <>
        <Head title="Mwitter / Home" 
        description="This is Mwitter, social media of All Individuals." />

        <HomeContainer homeBackground={HomeBackground}>
          <HomeNav status={status} user={user} />
    
          <HomeWrapper>
            <HomeHero />
            <HomeForm />
          </HomeWrapper>
        </HomeContainer>
      </>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.auth.user,
    status: state.auth.loggedIn
  }
}

export default connect(mapStateToProps, null)(Index);