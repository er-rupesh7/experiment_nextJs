import { NextResponse } from "next/server"
import { bio_data } from "./data"

export  function GET() {
  return NextResponse.json(bio_data,{status:200})
}
