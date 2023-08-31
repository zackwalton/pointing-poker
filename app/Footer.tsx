'use client'

import React from 'react';

const Footer = () => {
  return (
      <footer className={"absolute bottom-0 w-full h-8 flex justify-center items-center text-sm"}>
        <p>&copy; {new Date().getFullYear()} Pointing Poker App</p>
      </footer>
  );
};

export default Footer;