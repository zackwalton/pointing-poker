'use client'

import React from 'react';
import Link from 'next/link';
import {Link as MLink} from '@mui/material';
import Image from "next/image";
import logo from "@/public/casino-chip.png";
import {Button} from "@mui/material";

const Navbar = () => {
  return (
      <nav className={"flex justify-between h-14 fixed top-0 w-full "}>
        <div className={"flex h-full items-center gap-3 pl-4"}>
          <Image className={"w-[2.0625rem] overflow-hidden md:w-auto h-1/2 text-indigo-500"} src={logo} alt="logo" height={512}/>
          <p className={"text-2xl font-bold text-center"}>Pointing Poker</p>
        </div>
        <div className={"flex gap-4 justify-center items-center pr-4"}>
            <Link href="/new-game/" className={"text-indigo-500 font-bold hover:text-indigo-400 uppercase"}>New Game</Link>
            <Link href="#" >Guest</Link>
        </div>
      </nav>
  );
};

export default Navbar;