import { getToken } from "next-auth/jwt"
import { NextResponse, NextRequest } from "next/server"

export async function GET(req: NextRequest) {
  const token = await getToken({ req })

  if (!token) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 })
  }

  return NextResponse.json({
    message: "Data aman",
    user: token
  })
}