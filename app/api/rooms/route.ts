import { kv } from '@vercel/kv';
import {NextResponse} from 'next/server';

export async function GET() {
    const nextResponse = await kv.keys("*");
    return NextResponse.json(nextResponse);
}