import { headers } from "next/headers";
import { NextResponse } from "next/server";

export async function POST() {
  const headersList = await headers();

  let ip =
    headersList.get("x-forwarded-for");

  let country =
    headersList.get("x-vercel-ip-country");

  let city =
    headersList.get("x-vercel-ip-city");

  let region =
    headersList.get(
      "x-vercel-ip-country-region"
    );

  // Localhost fallback
  if (!ip) {
    ip = "127.0.0.1";
    country = "Local";
    city = "Development";
    region = "Localhost";
  }

  return NextResponse.json({
    success: true,
    ip: ip.split(",")[0],
    country,
    city,
    region,
  });
}