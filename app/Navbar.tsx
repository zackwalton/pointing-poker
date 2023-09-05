'use client'

import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import casinoChip from "@/public/casino-chip.png";

const Navbar = () => {
  return (
      <nav className={"flex justify-between border-b-2 border-blue-700 h-14 p-1"}>
        <div>
          <Image src={casinoChip} alt="Casino Chip" width={25}/>
          <p className={"text-2xl font-bold bg-indigo-500 p-2 rounded-lg text-gray-300"}>Pointing Poker</p>
        </div>
        <ul className={"flex gap-2 list-none justify-end align-middle"}>
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