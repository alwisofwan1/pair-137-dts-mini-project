import MoviesSlide from 'components/MoviesSlide';
import React from 'react';
import Hero from '../components/Hero';
import Footer from 'components/Footer';
import requests from 'Request';

const Home = () => {
  return (
    <>
      <Hero />
      <MoviesSlide
        title={`What's Popular`}
        fetchUrl={requests.requestPopular}
      />
      <br />
      <br />
      <MoviesSlide title='Upcoming' fetchUrl={requests.requestUpcoming} />
      <br />
      <br />
      <MoviesSlide title='Trending' fetchUrl={requests.requestTrending} />
      <br />
      <br />
      <MoviesSlide title='Top Rated' fetchUrl={requests.requestTopRated} />
      <br />
      <br />
      <br />
      <Footer />
    </>
  );
};

export default Home;
