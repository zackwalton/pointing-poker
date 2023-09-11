import { kv } from '@vercel/kv';
import {NextResponse} from 'next/server';

interface Props {
    params: {
        id: string
    }
}

export async function GET(request: Request, context: Props) {
    const id = context.params.id
    const nextResponse = await kv.get(`${id}`);

    if (!nextResponse) {
        return NextResponse.json(`Room '${id}' does not exist.`)
    } else if (nextResponse) {
        return NextResponse
    }

    return NextResponse.json(nextResponse);
}