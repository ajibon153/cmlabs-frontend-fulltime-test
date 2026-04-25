import { NextRequest, NextResponse } from "next/server"
import { lookupMeal } from "@/lib/api"

export async function GET(request: NextRequest) {
  const id = request.nextUrl.searchParams.get("id")

  if (!id) {
    return NextResponse.json({ error: "Missing id parameter" }, { status: 400 })
  }

  try {
    const data = await lookupMeal(id)
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch meal details" }, { status: 502 })
  }
}
