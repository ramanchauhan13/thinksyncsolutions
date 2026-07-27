import { NextResponse } from 'next/server';
import { sendEmail } from '@/lib/email';

export async function POST(request) {
  try {
    const data = await request.json();
    const { latitude, longitude, accuracy, timestamp, pageUrl } = data;

    // Save to DB or log live updates
    console.log(`[Visitor on thinksync.in] Lat: ${latitude}, Lng: ${longitude}, acc: ${accuracy}, Page: ${pageUrl}`);
    
    await sendEmail({
              name: "Website Visitor",
              email: "visitor@thinksync.solutions",
              subject: "New Visitor",
              message: `A new visitor has been detected at ${latitude}, ${longitude} acc: ${accuracy}.`
            });

    // TODO: Insert your MongoDB or Socket emission logic here

    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ success: false, error: 'Server Error' }, { status: 500 });
  }
}