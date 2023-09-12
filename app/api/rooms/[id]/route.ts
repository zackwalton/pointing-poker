import { kv } from '@vercel/kv';
import { NextResponse } from 'next/server';

interface Props {
    params: {
        id: string
    }
}

export async function GET(request: Request, context: Props) {
    const room = await kv.get(`room:${context.params.id}`)
    if (!room) {
        return NextResponse.json(null, { status: 500 })
    }
    return NextResponse.json(room);
}