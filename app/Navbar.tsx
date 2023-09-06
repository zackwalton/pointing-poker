'use client'

import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import casinoChip from "@/public/casino-chip.png";

const Navbar = () => {
  return (
      <nav className={"flex justify-between h-14 p-1"}>
        <div className={"flex"}>
          <Image className={"w-[2.0625rem] overflow-hidden md:w-auto"} src={casinoChip} alt="Casino Chip" height={25}/>
          <p className={"text-2xl font-bold p-2 rounded-lg text-gray-300"}>Pointing Poker</p>
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