import { NextRequest, NextResponse } from "next/server"
import { searchMeals } from "@/lib/api"

export async function GET(request: NextRequest) {
  const query = request.nextUrl.searchParams.get("query")

  if (!query) {
    return NextResponse.json({ error: "Missing query parameter" }, { status: 400 })
  }

  try {
    const data = await searchMeals(query)
    return NextResponse.json(data)
  } catch (error) {
    return NextResponse.json({ error: "Failed to fetch search results" }, { status: 502 })
  }
}
