import React, { useState } from 'react';
// import fs from 'fs';
// import generateRss from '@/lib/generate-rss';
// import { query, sanityClient, urlFor } from 'sanity';
// import { PortableTextEditor } from '@/components/PortableTextEditor';
// import Link from 'next/link';
// import IcPlay from 'public/static/icons/ic-play';
// import IcShare from 'public/static/icons/ic-share';
// import ModalShare from '@/components/modals/ModalShare';
// import Router from 'next/router';

// export async function getStaticPaths() {
//   const posts = await sanityClient.fetch(query.multimediaSlug);

//   const paths = posts.map((post) => ({
//     params: { slug: post.slug.current },
//   }));

//   return {
//     paths,
//     fallback: 'blocking',
//   };
// }

// export async function getStaticProps({ params }) {
//   const result = await sanityClient.fetch(query.multimediaDetail, {
//     slug: params?.slug,
//   });

//   // rss
//   if (result?.length > 0) {
//     const rss = generateRss(result);
//     fs.writeFileSync('./public/feed.xml', rss);
//   }

//   return { props: { result }, revalidate: 60 };
// }

const VideoDetail = () => {
  //   const { slug } = result;

  const [isOpen, setIsOpen] = useState(false);
  console.log('isOpen', isOpen);

  function openModal() {
    setIsOpen(true);
  }

  const handleLink = () => {
    // Router.push(`/video/watch/${slug?.current}`);
    console.log('object');
  };

  return (
    <div>
      <div>
        <div className='wrapper grid text-white antialiased'>
          <div>
            <div className='relative overflow-hidden'>
              <img
                src={
                  '	https://image.tmdb.org/t/p/w500//4sBbVik86fOuyRY4kFGbn2sooQk.jpg'
                }
                alt=' random imgee'
                className='h-36 w-full rounded-lg bg-white/80 object-center shadow-none filter-none md:blur-3xl'
              />
            </div>
            <div className='flex gap-6 max-w-6xl my-0 mx-auto'>
              <div
                className='relative -mt-8 hidden px-4 md:block'
                style={{
                  maxWidth: '15rem',
                  minHeight: '15rem',
                }}
              >
                <div
                  className='rounded-lg bg-cover bg-no-repeat shadow-lg dark:bg-gray-800'
                  style={{
                    backgroundImage: `url(	https://image.tmdb.org/t/p/w500//4sBbVik86fOuyRY4kFGbn2sooQk.jpg)`,
                  }}
                >
                  <img
                    src={
                      '	https://image.tmdb.org/t/p/w500//4sBbVik86fOuyRY4kFGbn2sooQk.jpg'
                    }
                    alt=' random imgee'
                    className='w-full rounded-lg object-contain shadow-md backdrop-blur-3xl'
                    style={{ minHeight: '13rem', backgroundSize: 'cover' }}
                  />
                </div>
              </div>

              <div className='mt-7 dark:text-white'>
                <h1 className='text-xl font-bold dark:text-primary-600'>
                  {/* {result?.media_title} */}
                  LightYear
                </h1>
                <div className='leading-9 hover:text-primary-600 hover:underline dark:hover:text-cyan-400'>
                  <a
                    href={
                      '	https://image.tmdb.org/t/p/w500//4sBbVik86fOuyRY4kFGbn2sooQk.jpg'
                    }
                  >
                    2022-06-01
                  </a>
                </div>

                <div className='prose mt-3 dark:prose-dark'>
                  <div className='mt-8 flex'>
                    <button
                      type='button'
                      onClick={handleLink}
                      className='mr-2 mb-2 flex items-center gap-2 rounded-full bg-gradient-to-br from-red-600 to-red-500 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-gradient-to-bl focus:outline-none focus:ring-2 focus:ring-pink-200 dark:ring-0 '
                    >
                      Tonton Sekarang
                    </button>

                    <button
                      type='button'
                      onClick={openModal}
                      className='mr-2 mb-2 flex items-center gap-2 rounded-full border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:border-gray-600 dark:bg-gray-800 dark:text-white dark:hover:border-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-700'
                    >
                      Bagikan
                    </button>
                  </div>

                  <div className='prose mt-6 max-w-none pb-8 dark:prose-dark'>
                    {/* <PortableTextEditor
                      portableTextContent={result?.media_description}
                    /> */}
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Inventore natus voluptatum aspernatur, unde voluptatibus
                    recusandae nulla et doloremque, possimus quam, minus
                    exercitationem earum. Tenetur mollitia quia repellat quam ea
                    distinctio.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Components */}
      {/* <ModalShare
        showModal={isOpen}
        setShowModal={setIsOpen}
        data={result}
        urlFrom='video'
      /> */}
      {/* End Components */}
    </div>
  );
};

export default VideoDetail;
