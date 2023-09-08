'use client'

import React from 'react';
import Link from 'next/link';
import Image from "next/image";
import logo from "@/public/casino-chip.png";

const Navbar = () => {
  return (
      <nav className={"flex justify-between h-14 fixed top-0 w-full "}>
          <Link href={"/"} className={"text-black hover:filter-none"}>
                <div className={"flex h-full items-center gap-3 pl-4"}>
                    <Image className={"w-[2.0625rem] overflow-hidden md:w-auto h-1/2 text-indigo-500"} src={logo}
                           alt="logo" height={512}/>
                    <p className={"text-2xl font-bold text-center"}>Pointing Poker</p>
                </div>
          </Link>
        <div className={"flex gap-4 justify-center items-center pr-4"}>
            <Link href="/new-game/" className={"font-bold uppercase hover:border-2 hover:border-indigo-500 m-2"}>New Game</Link>
            <Link href="#" >Guest</Link>
        </div>
      </nav>
  );
};

export default Navbar;