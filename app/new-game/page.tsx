'use client'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select, {SelectChangeEvent} from '@mui/material/Select';
import {Button, TextField} from "@mui/material";
import {useState} from "react";
import Link from "next/link";

export default function NewGame() {

    const [votingSystem, setVotingSystem] = useState<string>("fibonacci")
    const [revealPermissions, setRevealPermissions] = useState<string>("all-players")
    const [issuePermissions, setIssuePermissions] = useState<string>("all-players")
    const [showAdvancedSettings, setShowAdvancedSettings] = useState<boolean>(false);

    return (
        <div className={"flex align-middle justify-center"}>
            <div className={"w-2/3 h-2/3 flex flex-col gap-5"}>
                <TextField id={"name"} label={"Session name"} variant={"outlined"}></TextField>
                <FormControl fullWidth>
                    <InputLabel id="voting-system-select-label">Voting system</InputLabel>
                    <Select
                        labelId="voting-system-select-label"
                        id="voting-system-select"
                        value={votingSystem}
                        label="Voting system"
                        onChange={(event: SelectChangeEvent) => {
                            setVotingSystem(event.target.value as string);
                        }}
                    >
                        <MenuItem value={"fibonacci"}>Fibonacci (0, 1, 3, 5, 6, 13, 21, 34, 55, 89, ?, ☕)</MenuItem>
                        <MenuItem value={"fibonacci-modified"}>Modified Fibonacci (0, ½, 1, 3, 5, 8, 13, 20, 40, 100, ?,
                            ☕)</MenuItem>
                        <MenuItem value={"t-shirts"}>T-shirts (xxs, xs, s, m, l, xl, xxl, ?, ☕)</MenuItem>
                        <MenuItem value={"2powers"}>Powers of 2 (0, 1, 2, 4, 8, 16, 32, 64, ?, ☕)</MenuItem>
                        <MenuItem value={"custom"} className={"text-bold text-indigo-500"} disabled={true}>Create custom
                            deck... (coming soon)</MenuItem>
                    </Select>
                </FormControl>
                <Button variant={"contained"}>Create game</Button>
            {/* todo : https://mui.com/material-ui/guides/interoperability/#tailwind-css*/}
            </div>
        </div>
    )
}