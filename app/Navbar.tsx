'use client'

import React from 'react';
import Link from 'next/link';

const Navbar = () => {
  return (
      <nav>
        <ul className={"flex list-none justify-items-end"}>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about/">About</Link>
          </li>
          <li>
            <Link href="/contact/">Contact</Link>
          </li>
        </ul>
      </nav>
  );
};

export default Navbar;