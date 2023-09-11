"use server"

import kv from "@vercel/kv"
import slugify from "slugify";
import {redirect} from "next/navigation";

export async function createRoom(formData: FormData) {
    const name = formData.get('name') as string ?? 'Planning poker game';
    const votingSystem = formData.get('voting-system-select')
    const id = slugify(name, {lower: true, remove: /[*+~.()'"!:@#^]/g, strict: true}) +
            '-' + await kv.dbsize()
    const newRoom = await kv.set(`room:${id}`, {name: name, votingSystem: votingSystem})
    console.log(newRoom, id);
    redirect(`/poker/${id}`)
}