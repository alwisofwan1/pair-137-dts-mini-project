import React from 'react';

const Footer = () => {
  return (
    <footer class='text-center lg:text-left bg-black text-[#808080] max-w-6xl my-0 mx-auto'>
      <div class='mx-6 py-10 text-center md:text-left'>
        <div class='grid grid-1 md:grid-cols-2 lg:grid-cols-4 gap-8'>
          <div class=''>
            <p class='mb-4'>Audio</p>
            <p class='mb-4'>Media Center</p>
            <p class='mb-4'>Security</p>
            <p class='mb-6'>Contact Center</p>
            <button className='inline-block px-6 py-2 border-2 border-gray-800 '>
              Service Code
            </button>
          </div>
          <div class=''>
            <p class='mb-4'>Audio Description</p>
            <p class='mb-4'>Investor Relations</p>
            <p class='mb-4'>Legal Provision</p>
          </div>
          <div class=''>
            <p class='mb-4'>Help Center</p>
            <p class='mb-4'>Jobs</p>
            <p class='mb-4'>Cookies Preferences</p>
          </div>
          <div class=''>
            <p class='mb-4'>HGift Cards</p>
            <p class='mb-4'>Terms of Use</p>
            <p class='mb-4'>Corporate Information</p>
          </div>
        </div>
      </div>
      <div class='text-start p-6 bg-black'>
        <span>© 2022 Created by Alwi Sofwan - pair 137</span>
      </div>
    </footer>
  );
};

export default Footer;
