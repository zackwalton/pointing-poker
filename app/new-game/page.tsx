'use client'
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import {Button, Select, TextField} from "@mui/material";
import {useCallback, useState} from "react";
import slugify from "slugify";
import {usePathname, useRouter, useSearchParams} from "next/navigation";

export default function NewGame() {
    const router = useRouter()

    const [roomName, setRoomName] = useState<string>("");
    const [nameError, setNameError] = useState<string>("");
    const [votingSystem, setVotingSystem] = useState<string>("fibonacci");

    const roomNameMax = 50;

    function roomRedirect(formData: FormData) {
        let name= formData.get('name') as string|null;
        if (name == '') name = null;
        const votingSystem = formData.get('voting-system') as string|null;
        const id = slugify(name ?? 'poker', {lower: true, remove: /[*+~.()'"!:@#^]/g, strict: true}) +
                '-' + Math.random().toString().slice(2, 10)
        router.push(`/poker/${id}?name=${name ?? 'Planning poker game'}&voting-system=${votingSystem}`)
    }

    return (
        <div className={"flex align-middle justify-center"}>
            <div className={"w-2/3 h-2/3 flex flex-col gap-5"}>
                <form className={"flex flex-col gap-4"} onSubmit={(event) => {
                        event.preventDefault();
                        const formData = new FormData(event.target as HTMLFormElement);
                        roomRedirect(formData);
                    }}>
                    <TextField id={"text-field-name"} name={"name"} label={"Session name"} variant={"outlined"}
                               error={!!nameError} inputProps={{maxLength: roomNameMax}}
                               helperText={nameError || `${roomName.length}/${roomNameMax}`} onChange={(event) => {
                        const regex = /^[0-9a-zA-Z!@#.' ]*$/;
                        if (event.target.value === "" || regex.test(event.target.value)) {
                            setNameError("");
                            setRoomName(event.target.value as string);
                        } else
                            setNameError("Forbidden character.")

                    }}></TextField>
                    <InputLabel id="label-select-voting-system">Voting system</InputLabel>
                    <Select
                        labelId="label-select-voting-system"
                        id="select-voting-system"
                        name="voting-system"
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
                        {/*<MenuItem value={"custom"} className={"text-bold text-indigo-500"} disabled={true}>*/}
                        {/*    Create custom deck... (coming soon)</MenuItem>*/}
                    </Select>
                    <Button type={"submit"} variant={"contained"} disabled={!!nameError}>Create game</Button>
                </form>
            </div>
        </div>
    )
}