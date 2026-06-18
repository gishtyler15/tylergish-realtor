import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { type, name, email, phone, area, priceRange, address } = body;

    if (!name || !email || !phone) {
      return NextResponse.json({ error: "Missing required fields" }, { status: 400 });
    }

    // Log the lead — replace this with your preferred notification method later
    console.log("New lead:", { type, name, email, phone, area, priceRange, address });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Lead submission error:", err);
    return NextResponse.json({ error: "Internal error" }, { status: 500 });
  }
}
