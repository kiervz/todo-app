import React from 'react';
import { FaClipboardList } from 'react-icons/fa';

const Navbar = () => {
  return (
    <div className='flex justify-center m-4'>
      <p className='text-teal-600 font-bold text-2xl'>
        TODO LIST
      </p>
      <p className='text-teal-600 text-3xl ml-2'>
        <FaClipboardList />
      </p>
    </div>
  );
};

export default Navbar;
