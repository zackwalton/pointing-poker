'use client'

import React from 'react';
import Link from "next/link";

const Footer = () => {
  return (
      <footer className={"absolute bottom-0 w-full h-[50px] flex justify-center items-center text-sm"}>
        <p>&copy; {new Date().getFullYear()} Pointing Poker App - I'm a student <Link href={"#"} className={"underline"}>Hire me</Link></p>
      </footer>
  );
};

export default Footer;