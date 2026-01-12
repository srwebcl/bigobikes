import { NextResponse } from 'next/server';

export async function GET(request: Request) {
    // Handle redirect callback from Payment Gateway
    // Verify token/status with Getnet

    return NextResponse.redirect(new URL('/?status=success', request.url));
}

export async function POST(request: Request) {
    // Handle Server-to-Server notification (Webhook)
    return NextResponse.json({ received: true });
}
