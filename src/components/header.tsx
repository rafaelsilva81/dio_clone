import React from 'react';
import logo from '../assets/logo_dio.svg';
import Image from 'next/image';

const Header = () => {
  return (
    <div className='flex w-full items-center justify-between bg-black p-5 px-14'>
      {/* Logo */}
      <div className='flex items-center'>
        <Image
          src={logo}
          alt='Logo'
        />
      </div>

      {/* Buttons */}
      <div className='flex flex-row gap-4 items-center'>
        <button className='text-white font-xl hover:text-primary'>Home</button>
        <button className='bg-gray-500 text-white px-6 rounded-full hover:bg-primary'>
          Entrar
        </button>
        <button className='bg-gray-500 text-white px-6 rounded-full hover:bg-primary'>
          Cadastrar
        </button>
      </div>
    </div>
  );
};

export default Header;
