import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    return NextResponse.json({ test: "Hello World!" });
  } catch (error) {
    return NextResponse.json({
      error: "An error occurred while fetching data",
      details: error,
    });
  }
}
