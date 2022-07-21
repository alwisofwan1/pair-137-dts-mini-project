import axios from 'axios';
import React, { useEffect, useState } from 'react';
import requests from '../Request';
import PopularMovies from './PopularMovies';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

const Main = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  // const movie = movies[Math.floor(Math.random() * movies.length)];

  useEffect(() => {
    setLoading(true);
    axios.get(requests.requestNowPlaying).then((response) => {
      setMovies(response.data.results);
      setLoading(false);
    });
  }, []);

  console.log('loading', loading);

  // const truncateString = (str, num) => {
  //   if (str?.length > num) {
  //     return str.slice(0, num) + "...";
  //   } else {
  //     return str;
  //   }
  // };

  const popular = movies.slice(0, 5);
  // const listItems = popular.map((movie) => <li key={movie.id}>{movie.title}</li>);
  const listItems = popular.map((data) => {
    return (
      <SwiperSlide key={data.id}>
        <PopularMovies
          image={data.backdrop_path}
          title={data.title}
          language={data.original_language}
          genre={data.genre_ids}
          released={data.release_date}
          overview={data.overview}
        />
      </SwiperSlide>
    );
  });

  return (
    <>
      <Swiper
        pagination={{
          type: 'fraction',
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
      >
        {listItems}
      </Swiper>
    </>
  );
};

export default Main;