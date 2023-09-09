'use client'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import {Button, Select, TextField} from "@mui/material";
import {useEffect, useState} from "react";
import slugify from "slugify";
import Link from "next/link";

export default function NewGame() {

    const [roomName, setRoomName] = useState<string>("");
    const [nameError, setNameError] = useState<string>("");
    const [roomID, setRoomID] = useState<string>();
    const [votingSystem, setVotingSystem] = useState<string>("fibonacci");

    useEffect(() => {

        setRoomID(slugify(roomName != "" ? roomName : "Planning Poker Game", {
            lower: true, remove: /[*+~.()'"!:@#^]/g, strict: true}) +
            '-' + Math.random().toString().slice(2, 10));
    }, [roomName])

    const roomNameMax = 50;

    return (
        <div className={"flex align-middle justify-center"}>
            <div className={"w-2/3 h-2/3 flex flex-col gap-5"}>
                <TextField id={"name"} label={"Session name"} variant={"outlined"}
                           error={!!nameError} inputProps={{maxLength: roomNameMax}}
                           helperText={nameError || `${roomName.length}/${roomNameMax}`} onChange={(event) => {
                    const regex = /^[0-9a-zA-Z!@#.' ]*$/;
                    if (event.target.value === "" || regex.test(event.target.value)) {
                        setNameError("");
                        setRoomName(event.target.value as string);
                    } else
                        setNameError("Forbidden character.")

                }}></TextField>
                {roomID}
                <FormControl fullWidth>
                    <InputLabel id="voting-system-select-label">Voting system</InputLabel>
                    <Select
                        labelId="voting-system-select-label"
                        id="voting-system-select"
                        value={votingSystem}
                        label="Voting system"
                        onChange={(event) => {
                            setVotingSystem(event.target.value as string);
                        }}
                    >
                        <MenuItem value={"fibonacci"}>Fibonacci (0, 1, 3, 5, 8, 13, 21, 34, 55, 89, ?, ☕)</MenuItem>
                        <MenuItem value={"fibonacci-modified"}>
                            Modified Fibonacci (0, ½, 1, 3, 5, 8, 13, 20, 40, 100, ?, ☕)</MenuItem>
                        <MenuItem value={"t-shirts"}>T-shirts (xxs, xs, s, m, l, xl, xxl, ?, ☕)</MenuItem>
                        <MenuItem value={"2powers"}>Powers of 2 (0, 1, 2, 4, 8, 16, 32, 64, ?, ☕)</MenuItem>
                        <MenuItem value={"custom"} className={"text-bold text-indigo-500"} disabled={true}>
                            Create custom deck... (coming soon)</MenuItem>
                    </Select>
                </FormControl>
                <Link href={{
                    pathname: `/poker/${roomID}`,

                }}>
                    <Button variant={"contained"} className={"w-full"} disabled={!!nameError}>Create game</Button>
                </Link>
            </div>
        </div>
    )
}