import React, { useState, useEffect } from 'react';
// import Movie from "./Movie";

import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Navigation } from 'swiper';

const MoviesSlide = ({ title, fetchUrl }) => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    fetch(fetchUrl)
      .then((res) => res.json())
      .then((data) => {
        setMovies(data.results);
      });
  }, [fetchUrl]);

  const moviesData = movies.slice(0, 10);
  return (
    <>
      <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between mb-4 home-section__head'>
          <h1 className='font-semibold text-white home-section__title'>
            <a className='js-ahoy' href='/categories/177-vidio-originals'>
              {title}
            </a>
          </h1>
          <div className='text-white home-section__title-link'>
            <a
              className='home-section__view_more'
              href='/categories/177-vidio-originals'
            >
              Show more
            </a>
          </div>
        </div>
        <div className='flex'>
          <Swiper
            spaceBetween={24}
            slidesPerView={6}
            navigation={true}
            modules={[Pagination, Navigation]}
          >
            {moviesData.map((item, id) => (
              <SwiperSlide key={id}>
                <div className='relative bg-black'>
                  <a href='/detail/1'>
                    <img
                      className='w-full h-full object-cover rounded-lg '
                      loading='lazy'
                      src={`https://image.tmdb.org/t/p/w500/${item?.poster_path}`}
                      alt={item.title}
                    />
                    <div className='absolute inset-0 flex flex-col gap-y-2 justify-center w-full h-full hover:bg-black/80 opacity-0 hover:opacity-100 text-white cursor-pointer'>
                      <p className='text-sm md:text-base text-center text-white mx-auto'>
                        {item?.title}
                      </p>
                      <div className='flex-shrink'>
                        <button className='inline-flex items-center px-4 py-2 border border-gray-500 shadow-sm text-base font-medium rounded-md text-white bg-transparent hover:bg-gray-600/50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'>
                          Watch
                          <svg
                            xmlns='http://www.w3.org/2000/svg'
                            className='h-6 w-6 ml-2'
                            fill='none'
                            viewBox='0 0 24 24'
                            stroke='currentColor'
                            stroke-width='2'
                          >
                            <path
                              stroke-linecap='round'
                              stroke-linejoin='round'
                              d='M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z'
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </>
  );
};

export default MoviesSlide;
