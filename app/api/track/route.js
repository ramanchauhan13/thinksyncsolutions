import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    // Get visitor IP
    const forwarded = req.headers.get("x-forwarded-for");

    const ip = forwarded
      ? forwarded.split(",")[0]
      : "Unknown";

    // Fetch location server-side
    const response = await fetch(
      `https://ipwho.is/${ip}`
    );

    const data = await response.json();

    return NextResponse.json({
      success: true,
      ip,
      country: data.country,
      city: data.city,
      region: data.region,
      isp: data.connection?.isp,
    });
  } catch (error) {
    return NextResponse.json({
      success: false,
      error: error.message,
    });
  }
}